import React from "react";
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import Wizyta from "./nadchodzace-wizyty-wizyta";

function NadchodzaceWyzityEkran({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.titletext}>Nadchodzące wizyty</Text>
            <View style={styles.hr}/>
            <Text style={styles.hrlabel}>Dzisiaj</Text>
            <Wizyta navigation={navigation}/>
            <Wizyta navigation={navigation}/>
            <Wizyta navigation={navigation}/>
            <Wizyta navigation={navigation}/>
            <Wizyta navigation={navigation}/>
        </View>
    )
}

export default NadchodzaceWyzityEkran;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titletext: {
        fontSize: 45,
        textAlign: "center",
        margin: 20,
    },
    hrlabel: {
        minWidth: '75%',
        fontSize: 10,
        paddingHorizontal: 10,
        paddingVertical: 2,
        color: '#000',
    },
    hr: {
        backgroundColor: '#aaa',
        minWidth: '75%',
        height: 1,
    }
});