import React from "react";

import {StyleSheet, Text, TextArea, TextInput, View} from "react-native";


function PodgladWizytyEkran(){
    return(
        <View style={styles.container}>
            <Text>10 - 12</Text>
            <View style={styles.hr}/>
            <Text style={styles.titletext}>Dane Klienta</Text>
            <Text style={styles.textstyle}>Dane Klienta</Text>
            <Text style={styles.textstyle}>Dane Klienta</Text>
            <Text style={styles.textstyle}>Dane Klienta</Text>
            <Text style={styles.titletext}>Opis wizyty</Text>
            <TextInput style={styles.container}>
                Ciągły tekst który ma ciągłość
            </TextInput>
        </View>
    )
}

export default PodgladWizytyEkran;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    hr: {
        backgroundColor: '#aaa',
        minWidth: '75%',
        height: 1,
    },
    textstyle: {
        fontsize: 20,
        color: '#010',
    },
    titletext: {
        fontSize: 45,
        marginBottom: 120,
    },
})