import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, Image } from 'react-native';
import DalejButton from "../../ui/DalejButton";
import PowrotButton from "../../ui/PowrotButton";
import ButtonContainer from "../../ui/ButtonContainer";
import Karuzela from "../../ui/Karuzela";
import Tytul from "../../ui/Tytul";

export default function StanPojazdu({navigation}) {
    const [images] = useState([
        require('./Leon.png'),
        require('./Leon.png'),
        require('./Leon.png'),
    ]);

    const dalej = () => {
        navigation.navigate("Naprawy", {screen: "Naprawa"});
        navigation.reset({index: 0,
        routes: [{name: "Nadchodzące wizyty"}]});
    }

    const anuluj = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <Tytul text={"Stan pojazdu"}/>

            <Karuzela images={images}/>

            <TextInput style={styles.textInput} placeholder="Opisz stan techniczny pojazdu" />

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
