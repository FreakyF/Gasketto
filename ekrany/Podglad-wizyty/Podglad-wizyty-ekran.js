import React from "react";

import {StyleSheet, Text, View} from "react-native";
import DalejButton from "../../ui/DalejButton";
import PowrotButton from "../../ui/PowrotButton";
import ButtonContainer from "../../ui/ButtonContainer";
import Tytul from "../../ui/Tytul";
import Linia from "../../ui/Linia";


function PodgladWizytyEkran({navigation}) {
    const rozpocznij = () => {
        navigation.navigate("Dane pojazdu");
    }

    const anuluj = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <Tytul text="08:00 - 10:00"/>
            <Linia text="Dane Klienta"/>
            <Text style={styles.textstyle}>Imię i nazwisko</Text>
            <Text style={styles.textstyle}>Numer telefonu</Text>
            <Text style={styles.textstyle}>Adres1</Text>
            <Text style={styles.textstyle}>Adres2</Text>
            <Linia text="Opis wizyty"/>
            <View style={styles.textview}>
                <Text style={styles.textcontainer}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum at mi eu semper. Sed
                    odio
                    nulla, molestie eu accumsan a, dictum eu nibh. Vivamus commodo dolor nec lectus euismod, ac egestas
                    eros
                    tempus. Duis bibendum aliquet commodo. Fusce suscipit porta elementum. Donec ac rutrum mi. Proin
                    facilisis mattis nulla, ut eleifend lacus mattis ac. Pellentesque sed neque tortor. Pellentesque
                    luctus
                    vulputate nisl. Vestibulum eget ligula a justo ullamcorper consequat et vestibulum lectus.
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#353635',
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