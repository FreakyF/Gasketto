import React from "react";
import {StyleSheet, Text, View} from "react-native";

function Wizyta() {
    return (
        <View style={styles.container}>
            <Text style={[styles.text, styles.bold]}>Jan Kowalski</Text>
            <Text style={styles.text}>8:00 - 10:00</Text>
        </View>
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