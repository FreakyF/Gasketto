import Tytul from "./Tytul";
import {StyleSheet, Text, TextInput, View} from "react-native";
import React, {useEffect, useState} from "react";
import {LightSensor} from "expo-sensors";

export default function InputMaly({label = "", onChange = null, placeholder = ""}) {
    if (onChange == null){
        onChange = () => {
            console.log("empty onchange");
        }
    }
    const [illuminance, setilluminance] = useState(26);
    const aktywnystyl = illuminance > 25 ? styles : Darkstyles ;
    LightSensor.addListener(data => { setilluminance(data.illuminance)})
    return (
        <View style={aktywnystyl.container}>
            <Text style={aktywnystyl.textinputlabel}>{label}</Text>
            <TextInput style={aktywnystyl.textinput} onChangeText={newText => onChange(newText)} placeholder={placeholder}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    textinputlabel: {
        minWidth: '50%',
        fontSize: 10,
        paddingHorizontal: 10,
        paddingVertical: 2,
        color: '#49454F',
    },
    textinput: {
        minWidth: '50%',
        fontSize: 16,
        lineHeight: 24,
        color: '#49454F',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ccc',
        padding: 10,
    },
});

const Darkstyles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    textinputlabel: {
        minWidth: '50%',
        fontSize: 10,
        paddingHorizontal: 10,
        paddingVertical: 2,
        color: '#c9c9c9',
    },
    textinput: {
        minWidth: '50%',
        fontSize: 16,
        lineHeight: 24,
        color: '#8c8c8b',
        backgroundColor: '#30302f',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ccc',
        padding: 10,
    },
});