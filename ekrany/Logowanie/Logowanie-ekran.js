import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import DalejButton from "../../ui/DalejButton";
import Tytul from "../../ui/Tytul";
import InputMaly from "../../ui/InputMaly";
import {LightSensor} from 'expo-sensors';

import AsyncStorage from "@react-native-async-storage/async-storage";
import Wizyta from "../nadchodzoace-wizyty/nadchodzace-wizyty-wizyta";

import axios from "axios";

function LogowanieEkran({navigation}) {
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    const [warning, setWarning] = useState();

    const storeData = async (key) => {
        const testjson = {
            "id": 0,
            "Imie": "Kamil",
            "Nazwisko": "Fudala",
            "NrTele": 123456789,
            "Adres1": "Kielce",
            "Adres2": "25-001",
            "Opis": "Problem z opadającą szybą",
            "Godzina": "8:00 - 10:00",
        };

        const testjson2 = {
            "id": 1,
            "Imie": "Jan",
            "Nazwisko": "Chojny",
            "NrTele": 123456789,
            "Adres1": "Małogoszcz",
            "Adres2": "28-366",
            "Opis": "Pęknięta sprężyna w zawieszeniu",
            "Godzina": "10:00 - 11:00",
        };

        const testjson3 = {
            "id": 3,
            "Imie": "Karolina",
            "Nazwisko": "Dryło",
            "NrTele": 123456789,
            "Adres1": "Busko-Zdrój",
            "Adres2": "28-100",
            "Opis": "Niskie ciśnienie w układzie hamulcowym",
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

    storeData("wizyty");

    const validateLogin = (login, password) => {
        axios.get("http://192.168.137.1:3004/logowanie").then(res => {
            res.data.forEach(dane => {
                if (login === dane.login && password === dane.haslo) {
                    setWarning(false);
                    navigation.navigate("Home");
                }
            })
        }).catch(e => console.log(e));
        setWarning(true);
    }
    const renderItem = ({item}) => <Wizyta navigation={navigation} item={item}/>;
    const [illuminance, setilluminance] = useState(26);
    const aktywnystyl = illuminance > 25 ? styles : Darkstyles;
    LightSensor.addListener(data => {
        setilluminance(data.illuminance)
    })
    return (
        <View style={aktywnystyl.container}>
            <Tytul text="Logowanie"/>
            <InputMaly label="Login" onChange={setLogin}/>
            <InputMaly label="Hasło" onChange={setPassword} secureTextEntry={true}/>
            <DalejButton action={() => validateLogin(login, password)} text={"Zaloguj"}/>
            {warning ? <Text style={aktywnystyl.tekst}>Niepoprawny login lub hasło</Text> : null}
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