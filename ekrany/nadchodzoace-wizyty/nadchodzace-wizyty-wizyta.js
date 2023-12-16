import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

function Wizyta({navigation}) {
    const goToWizyta = () => {
        navigation.navigate("Wizyta");
    }

    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={() => goToWizyta()}>
            <Text style={[styles.text, styles.bold]}>Jan Kowalski</Text>
            <Text style={styles.text}>8:00 - 10:00</Text>
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