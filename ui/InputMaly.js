import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { LightSensor } from "expo-sensors";

export default function InputMaly({label = "", onChange = null, placeholder = "", secureTextEntry = false}) {
    if (onChange == null){
        onChange = () => {
            console.log("empty onchange");
        }
    }

    const [illuminance, setIlluminance] = useState(26);

    useEffect(() => {
        const subscription = LightSensor.addListener(data => {
            setIlluminance(data.illuminance);
        });

        return () => {
            subscription.remove();
        };
    }, []);

    const aktywnyStyl = illuminance > 25 ? styles : Darkstyles;

    return (
        <View style={aktywnyStyl.container}>
            <Text style={aktywnyStyl.textinputlabel}>{label}</Text>
            <TextInput
                style={aktywnyStyl.textinput}
                onChangeText={newText => onChange(newText)}
                placeholder={placeholder}
                placeholderTextColor={aktywnyStyl.placeholderColor}
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
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
    placeholderColor: '#49454F',
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
    placeholderColor: '#c9c9c9',
});
