import React from "react";
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import Naprawa from "./nadchodzace-naprawy-wizyta";
import Linia from "../../ui/Linia";
import Tytul from "../../ui/Tytul";

function NadchodzaceNaprawyEkran({navigation}) {
    return (
        <View style={styles.container}>
            <Tytul text={"Nadchodzące naprawy"}/>
            <Linia text="Dzisiaj"/>
            <Naprawa navigation={navigation}/>
            <Naprawa navigation={navigation}/>
            <Naprawa navigation={navigation}/>
            <Naprawa navigation={navigation}/>
            <Naprawa navigation={navigation}/>
        </View>
    )
}

export default NadchodzaceNaprawyEkran;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});