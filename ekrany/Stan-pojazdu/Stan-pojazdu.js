import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, Image} from 'react-native';
import DalejButton from "../../ui/DalejButton";
import PowrotButton from "../../ui/PowrotButton";
import ButtonContainer from "../../ui/ButtonContainer";
import Karuzela from "../../ui/Karuzela";
import Tytul from "../../ui/Tytul";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {LightSensor} from "expo-sensors";

export default function StanPojazdu({route, navigation}) {
    const {item} = route.params;

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
            tablica: item.Tablica,
            godzina: "8:00 - 10:00",
            naprawy: [{id: 0, nazwa: "naprawa okna", opis: "naprawa linki od okna"},]
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

        try {
            let currentData = await AsyncStorage.getItem("wizyty");
            currentData = JSON.parse(currentData);
            currentData = currentData.filter(currentData => currentData.id !== item.id);
            const jsonValue = JSON.stringify(currentData);
            await AsyncStorage.setItem("wizyty", jsonValue);
        } catch (e) {
            console.log(e);
        }

        navigation.reset({
            index: 0,
            routes: [{name: "Nadchodzące wizyty"}]
        });
        navigation.navigate("Naprawy", {screen: "Naprawa", params: {item: naprawa}});
    }

    const anuluj = () => {
        navigation.goBack();
    }

    const [stan, setStan] = useState("");
    const [illuminance, setilluminance] = useState(26);
    const aktywnystyl = illuminance > 25 ? styles : Darkstyles;
    LightSensor.addListener(data => {
        setilluminance(data.illuminance)
    })
    return (
        <View style={aktywnystyl.container}>
            <Tytul text={"Stan pojazdu"}/>

            <Karuzela navigation={navigation} item={item}/>

            <TextInput
                style={aktywnystyl.textInput}
                placeholder="Opisz stan techniczny pojazdu"
                onChangeText={(text) => setStan(text)}
                placeholderTextColor={aktywnystyl.placeholderColor} // Dodane
            />

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
    placeholderColor: '#49454F',
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
    placeholderColor: '#e4e4e4',
});

