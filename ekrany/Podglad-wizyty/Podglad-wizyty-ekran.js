import React from "react";

import {StyleSheet, Text, TextArea, TouchableOpacity, View} from "react-native";


function PodgladWizytyEkran(){
    return(
        <View style={styles.container}>
            <h1>10 - 12</h1>
            <View style={styles.hr}/>
            <Text style={style.titletext}> Dane Klienta</Text>
            <Text style={style.textstyle}> Dane Klienta</Text>
            <Text style={style.textstyle}> Dane Klienta</Text>
            <Text style={style.textstyle}> Dane Klienta</Text>
            <Text style={style.titletext}> Opis wizyty</Text>
            <TextArea style={style.container}>
                Ciągły tekst który ma ciągłość

            </TextArea>
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