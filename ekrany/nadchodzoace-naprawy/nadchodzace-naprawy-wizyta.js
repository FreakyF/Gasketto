import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

function Naprawa({navigation}) {
    const goToNaprawa = () => {
        navigation.navigate("Naprawa");
    }

    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={() => goToNaprawa()}>
            <Text style={[styles.text, styles.bold]}>Jan Kowalski</Text>
            <Text style={styles.text}>8:00 - 10:00</Text>
        </TouchableOpacity>
    )
}

export default Naprawa;

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