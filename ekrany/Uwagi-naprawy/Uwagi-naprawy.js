import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, Image} from 'react-native';
import Tytul from "../../ui/Tytul";
import ButtonContainer from "../../ui/ButtonContainer";
import PowrotButton from "../../ui/PowrotButton";
import DalejButton from "../../ui/DalejButton";

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

    return (
        <View style={styles.container}>
            <Tytul text={"Uwagi"}/>

            <ScrollView horizontal style={styles.imageSlider} showsHorizontalScrollIndicator={false}>
                {images.map((image, index) => (
                    <Image key={index} source={image} style={styles.image}/>
                ))}
            </ScrollView>

            <TextInput style={styles.textInput} placeholder="Opisz stan techniczny pojazdu"/>

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
    input: {
        height: 40,
        padding: 10,
        color: "#000",
    },
});
