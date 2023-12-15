import React from "react";
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";

function LogowanieEkran() {
    return (
        <View style={styles.container}>
            <Text style={styles.titletext}>Logowanie</Text>
            <Text style={styles.textinputlabel}>Login</Text>
            <TextInput style={styles.textinput}></TextInput>
            <Text style={styles.textinputlabel}>Hasło</Text>
            <TextInput style={styles.textinput}></TextInput>
            <TouchableOpacity style={styles.logowaniebutton} activeOpacity={0.7}>
                    <Text style={styles.logowanietext}>Zaloguj</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LogowanieEkran;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textinputlabel: {
        minWidth: '50%',
        fontSize: 10,
        paddingHorizontal: 10,
        paddingVertical: 2,
        color: '#000',
    },
    textinput: {
        borderWidth: 1,
        borderColor: '#000',
        marginBottom: 10,
        minWidth: '50%',
        padding: 10,
        borderRadius: 10,
    },
    logowaniebutton: {
        margin: 10,
        backgroundColor: '#6750a4',
        paddingVertical: 10,
        paddingHorizontal: 24,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
    },
    logowanietext: {
        color: '#fff'
    }
});