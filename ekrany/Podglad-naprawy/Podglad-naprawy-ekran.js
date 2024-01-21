import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from "react";
import KontenerNaprawy from "./Kontener-naprawy";
import Tytul from "../../ui/Tytul";
import ButtonContainer from "../../ui/ButtonContainer";
import DalejButton from "../../ui/DalejButton";
import {LightSensor} from "expo-sensors";

export default function PodgladNaprawyEkran({navigation}) {
    const zakaczNaprawe = () => {
        navigation.reset({
            index: 1,
            routes: [{name: "nadchodzące naprawy"}]
        });
    }
    const [illuminance, setilluminance] = useState(0);
    const aktywnystyl = illuminance > 25 ? styles : Darkstyles ;
    LightSensor.addListener(data => { setilluminance(data.illuminance)})
    return (
        <View style={aktywnystyl.container}>
            <Tytul text={"SCI 6174E"}/>
            <View style={aktywnystyl.spacingContainer}>
                <KontenerNaprawy navigation={navigation}/>
            </View>
            <View style={aktywnystyl.spacingContainer}>
                <KontenerNaprawy navigation={navigation}/>
            </View>
            <View style={aktywnystyl.spacingContainer}>
                <KontenerNaprawy navigation={navigation}/>
            </View>
            <ButtonContainer>
                <DalejButton text={"Zakończ naprawę"} action={zakaczNaprawe}/>
            </ButtonContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    spacingContainer: {
        marginBottom: 20,
    },
});
const Darkstyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center',
    },
    spacingContainer: {
        marginBottom: 20,
    },
});