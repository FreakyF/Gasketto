import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

function Wizyta({navigation, item}) {
    const goToWizyta = () => {
        navigation.navigate("Wizyta", {item: item,});
    }

    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={() => goToWizyta()}>
            <Text style={[styles.text, styles.bold]}>{item.Imie} {item.Nazwisko}</Text>
            <Text style={styles.text}>{item.Godzina}</Text>
        </TouchableOpacity>
    )
}

export default Wizyta;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fef7ff',
        borderColor: '#cac4d0',
        borderWidth: 1,
        minWidth: '85%',
        borderRadius: 10,
        margin: 10,
        padding: 7,
    },
    text: {
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    bold: {
        fontWeight: "bold",
    }
});

const Darkstyles = StyleSheet.create({
    container: {
        backgroundColor: '#30302f',
        borderColor: '#bdbab3',
        borderWidth: 1,
        minWidth: '85%',
        borderRadius: 10,
        margin: 10,
        padding: 7,
    },
    text: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        color: '#cfcecc',
    },
    bold: {
        fontWeight: "bold",
    }
});