import React, {useState} from 'react';
import {StyleSheet, TextInput, View, ScrollView, Image} from 'react-native';
import Tytul from "../../ui/Tytul";
import ButtonContainer from "../../ui/ButtonContainer";
import PowrotButton from "../../ui/PowrotButton";
import DalejButton from "../../ui/DalejButton";
import Karuzela from "../../ui/Karuzela";
import {LightSensor} from "expo-sensors";

export default function UwagiNaprawy({navigation}) {
    const zapisz = () => {
        navigation.goBack();
    }
    const usun = () => {
        navigation.goBack();
    }
    const [images] = useState([
        require('./Leon.png'),
        require('./Leon.png'),
        require('./Leon.png'),
    ]);
    const [illuminance, setilluminance] = useState(26);
    const aktywnystyl = illuminance > 25 ? styles : Darkstyles ;
    LightSensor.addListener(data => { setilluminance(data.illuminance)})

    return (
        <View style={aktywnystyl.container}>
            <Tytul text={"Uwagi"}/>

            <Karuzela images={images} navigation={navigation}/>

            <TextInput style={aktywnystyl.textInput} placeholder="Opisz stan techniczny pojazdu"/>

            <ButtonContainer>
                <PowrotButton text={"Usuń"} action={usun}/>
                <DalejButton text={"Zapisz"} action={zapisz}/>
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
    imageSlider: {
        marginTop: 20,
        marginBottom: 20,
    },
    image: {
        width: 200,
        height: 200,
        marginRight: 10,
        borderRadius: 10,
    },
    textInput: {
        textAlignVertical: 'top',
        fontSize: 16,
        lineHeight: 24,
        color: '#49454F',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 20,
        width: 350,
        height: 250,
    },
});
const Darkstyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageSlider: {
        marginTop: 20,
        marginBottom: 20,
    },
    image: {
        width: 200,
        height: 200,
        marginRight: 10,
        borderRadius: 10,
    },
    textInput: {
        textAlignVertical: 'top',
        backgroundColor: '#30302f',
        fontSize: 16,
        lineHeight: 24,
        color: '#e4e4e4',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 20,
        width: 350,
        height: 250,
    },
});
