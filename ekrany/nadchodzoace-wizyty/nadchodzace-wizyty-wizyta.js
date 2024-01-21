import React, {useEffect, useState} from "react";
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import {LightSensor} from "expo-sensors";

function Wizyta({navigation, item}) {
    const [illuminance, setIlluminance] = useState(26);

    useEffect(() => {
        const subscription = LightSensor.addListener(data => {
            setIlluminance(data.illuminance);
        });

        LightSensor.setUpdateInterval(2000);

        return () => {
            subscription.remove();
        };
    }, []);

    const aktywnyStyl = illuminance > 25 ? styles : Darkstyles;

    const goToWizyta = () => {
        navigation.navigate("Wizyta", {item});
    };

    return (
        <TouchableOpacity style={aktywnyStyl.container} activeOpacity={0.7} onPress={goToWizyta}>
            <Text style={[aktywnyStyl.text, aktywnyStyl.bold]}>{item.Imie} {item.Nazwisko}</Text>
            <Text style={aktywnyStyl.text}>{item.Godzina}</Text>
        </TouchableOpacity>
    );
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