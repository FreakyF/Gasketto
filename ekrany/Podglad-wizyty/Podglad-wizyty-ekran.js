import React from "react";

import {StyleSheet, Text, View} from "react-native";
import DalejButton from "../../ui/DalejButton";
import PowrotButton from "../../ui/PowrotButton";
import ButtonContainer from "../../ui/ButtonContainer";
import Tytul from "../../ui/Tytul";
import Linia from "../../ui/Linia";
import AsyncStorage from "@react-native-async-storage/async-storage";


function PodgladWizytyEkran({route, navigation}) {
    const {item} = route.params;
    const rozpocznij = () => {
        navigation.navigate("Dane pojazdu", {item: item,});
    }

    const deleteId = async () => {
        try {
            let currentData = await AsyncStorage.getItem("wizyty");
            currentData = JSON.parse(currentData);
            currentData = currentData.filter(currentData => currentData.id !== item.id);
            const jsonValue = JSON.stringify(currentData);
            await AsyncStorage.setItem("wizyty", jsonValue);
        } catch (e) {
            console.log(e);
        }
    }

    const anuluj = () => {
        deleteId();
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <Tytul text={item.Godzina}/>
            <Linia text="Dane Klienta"/>
            <Text style={styles.textstyle}>{item.Imie} {item.Nazwisko}</Text>
            <Text style={styles.textstyle}>{item.NrTele}</Text>
            <Text style={styles.textstyle}>{item.Adres1}</Text>
            <Text style={styles.textstyle}>{item.Adres2}</Text>
            <Linia text="Opis wizyty"/>
            <View style={styles.textview}>
                <Text style={styles.textcontainer}>
                    {item.Opis}
                </Text>
            </View>
            <ButtonContainer>
                <PowrotButton action={anuluj} text={"Anuluj wizytę"}/>
                <DalejButton action={rozpocznij}/>
            </ButtonContainer>
        </View>
    )
}

export default PodgladWizytyEkran;

const darkStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
    },
    hr: {
        backgroundColor: '#aaa',
        minWidth: '75%',
        height: 1,
    },
    textstyle: {
        // fontsize: 20, //TODO znaleźć przyczyne błędu
        color: '#e4e4e4',
    },
    textview: {
        maxWidth: '75%',
    },
    textcontainer: {
        color: '#e4e4e4',
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
    },
    hr: {
        backgroundColor: '#aaa',
        minWidth: '75%',
        height: 1,
    },
    textstyle: {
        // fontsize: 20, //TODO znaleźć przyczyne błędu
        color: '#000',
    },
    textview: {
        maxWidth: '75%',
    }
})