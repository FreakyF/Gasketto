import React, {useEffect, useState} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {LightSensor} from "expo-sensors";

function Naprawa({navigation}) {
    const goToNaprawa = () => {
        navigation.navigate("Naprawa");
    }
    const [illuminance, setilluminance] = useState(0);
    const aktywnystyl = illuminance > 25 ? styles : Darkstyles ;
    LightSensor.addListener(data => { setilluminance(data.illuminance)})
    return (
        <TouchableOpacity style={aktywnystyl.container} activeOpacity={0.7} onPress={() => goToNaprawa()}>
            <Text style={[aktywnystyl.text, aktywnystyl.bold]}>Jan Kowalski</Text>
            <Text style={aktywnystyl.text}>8:00 - 10:00</Text>
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