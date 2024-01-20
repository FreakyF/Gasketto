import React from "react";
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import Wizyta from "./nadchodzace-wizyty-wizyta";
import Tytul from "../../ui/Tytul";
import Linia from "../../ui/Linia";

function NadchodzaceWyzityEkran({navigation}) {
    return (
        <View style={styles.container}>
            <Tytul text="Nadchodzące wizyty"/>
            <Linia text="Dzisiaj"/>
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
});


const Darkstyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center',
    },
});