import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, Image} from 'react-native';
import DalejButton from "../../ui/DalejButton";
import PowrotButton from "../../ui/PowrotButton";
import ButtonContainer from "../../ui/ButtonContainer";
import Karuzela from "../../ui/Karuzela";
import Tytul from "../../ui/Tytul";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function StanPojazdu({route, navigation}) {
    const {item} = route.props;

    const [images] = useState([
        require('./Leon.png'),
        require('./Leon.png'),
        require('./Leon.png'),
    ]);

    const dalej = async () => {
        item.Stan = stan;
        try {
            let currentData = await AsyncStorage.getItem("stan_pojazdu");
            if (currentData == null) {
                currentData = [];
            } else {
                currentData = JSON.parse(currentData);
            }
            currentData.push(item);
            const jsonValue = JSON.stringify(currentData);
            await AsyncStorage.setItem("stan_pojazdu", jsonValue);
        } catch (e) {
            console.log(e);
        }

        const naprawa = {
            id: item.id,
            naprawy: [{
                1: "test",
                2: "test1",
                3: "test2",
                4: "test3",
            }]
        }

        try {
            let currentData = await AsyncStorage.getItem("naprawy");
            if (currentData == null) {
                currentData = [];
            } else {
                currentData = JSON.parse(currentData);
            }
            currentData.push(naprawa);
            const jsonValue = JSON.stringify(currentData);
            await AsyncStorage.setItem("naprawy", jsonValue);
        } catch (e) {
            console.log(e);
        }

        navigation.navigate("Naprawy", {screen: "Naprawa"});
        navigation.reset({
            index: 0,
            routes: [{name: "Nadchodzące wizyty"}]
        });
    }

    const anuluj = () => {
        navigation.goBack();
    }

    const [stan, setStan] = useState("");

    return (
        <View style={styles.container}>
            <Tytul text={"Stan pojazdu"}/>

            <Karuzela images={images} navigation={navigation}/>

            <TextInput style={styles.textInput} placeholder="Opisz stan techniczny pojazdu" onChange={setStan}/>

            <ButtonContainer>
                <PowrotButton action={anuluj}/>
                <DalejButton action={dalej} text={"Zapisz i zakończ"}/>
            </ButtonContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        textAlignVertical: 'top',
        fontSize: 16,
        lineHeight: 24,
        color: '#49454F',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 20,
        width: 350,
        height: 250,
    },
});

const Darkstyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        textAlignVertical: 'top',
        backgroundColor: '#30302f',
        fontSize: 16,
        lineHeight: 24,
        color: '#e4e4e4',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 20,
        width: 350,
        height: 250,
    },
});

