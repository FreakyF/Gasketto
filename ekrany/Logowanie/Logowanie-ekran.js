import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import DalejButton from "../../ui/DalejButton";
import Tytul from "../../ui/Tytul";
import InputMaly from "../../ui/InputMaly";
import { LightSensor } from 'expo-sensors';

import AsyncStorage from "@react-native-async-storage/async-storage";
import Wizyta from "../nadchodzoace-wizyty/nadchodzace-wizyty-wizyta";

function LogowanieEkran({navigation}) {
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    const [warning, setWarning] = useState();

    const storeData = async (key) => {
        const testjson = {
            "id": 0,
            "Imie": "test",
            "Nazwisko": "TEST",
            "NrTele": 123456789,
            "Adres1": "Kiełce",
            "Adres2": "25-001",
            "Opis": "Lorem ipsum dolor sit amet, consecteur adipiscing elit.",
            "Godzina": "8:00 - 10:00",
        };

        const testjson2 = {
            "id": 1,
            "Imie": "tes4t",
            "Nazwisko": "TEST",
            "NrTele": 123456789,
            "Adres1": "Kiełce",
            "Adres2": "25-001",
            "Opis": "Lorem ipsum dolor sit amet, consecteur adipiscing elit.",
            "Godzina": "10:00 - 11:00",
        };

        const testjson3 = {
            "id": 3,
            "Imie": "test2",
            "Nazwisko": "TEST",
            "NrTele": 123456789,
            "Adres1": "Kiełce",
            "Adres2": "25-001",
            "Opis": "Lorem ipsum dolor sit amet, consecteur adipiscing elit.",
            "Godzina": "11:00 - 13:00",
        };

        try {
            AsyncStorage.removeItem("wizyty");
            AsyncStorage.removeItem("Stan pojazdu");
            AsyncStorage.removeItem("naprawy");
            let currentData = await AsyncStorage.getItem("wizyty");
            if (currentData == null) {
                currentData = [];
            } else {
                currentData = JSON.parse(currentData);
            }
            currentData.push(testjson);
            currentData.push(testjson2);
            currentData.push(testjson3);
            const jsonValue = JSON.stringify(currentData);
            await AsyncStorage.setItem(key, jsonValue);
        } catch (e) {
            console.log(e);
        }
    }

    // storeData("wizyty");

    const validateLogin = (login, password) => {
        if (login === password) {
            setWarning(false);
            navigation.navigate("Home");
        } else {
            setWarning(true);
        }
    }
    const renderItem = ({item}) => <Wizyta navigation={navigation} item={item}/>;
    const [illuminance, setilluminance] = useState(26 );
    const aktywnystyl = illuminance > 25 ? styles : Darkstyles;
    LightSensor.addListener(data => {setilluminance(data.illuminance)})
    return (
        <View style={aktywnystyl.container}>
            <Tytul text="Logowanie"/>
            <InputMaly label="Login" onChange={setLogin}/>
            <InputMaly label="Hasło" onChange={setPassword}/>
            <DalejButton action={() => validateLogin(login, password)} text={"Zaloguj"}/>
            {warning ? <Text style = {aktywnystyl.tekst}>Nie poprawny login lub hasło</Text> : null}
        </View>
    )
}

export default LogowanieEkran;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
const Darkstyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tekst: {
        color: '#e4e4e4'
    }

});