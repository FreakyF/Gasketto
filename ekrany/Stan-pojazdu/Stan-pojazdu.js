import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, Image } from 'react-native';

export default function DanePojazduEkran() {
    const [images] = useState([
        require('./Leon.png'),
        require('./Leon.png'),
        require('./Leon.png'),
    ]);

    return (
        <View style={styles.container}>
            <Text style={styles.screenTitle}>Stan pojazdu</Text>

            <ScrollView horizontal style={styles.imageSlider} showsHorizontalScrollIndicator={false}>
                {images.map((image, index) => (
                    <Image key={index} source={image} style={styles.image} />
                ))}
            </ScrollView>

            <TextInput style={styles.textInput} placeholder="Opisz stan techniczny pojazdu" />

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonLeft} activeOpacity={0.7}>
                    <Text>Anuluj wizytę</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonRight} activeOpacity={0.7}>
                    <Text style={styles.buttonRightText}>Przejdź dalej</Text>
                </TouchableOpacity>
            </View>
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
    screenTitle: {
        fontFamily: 'Roboto',
        fontSize: 45,
        lineHeight: 52,
        marginTop: 40,
        marginBottom: 50,
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
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        width: 204,
    },
    switchLabel: {
        fontFamily: 'Roboto',
        fontSize: 16,
        lineHeight: 52,
        marginBottom: 10,
        marginRight: "auto"
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30,
        paddingHorizontal: 10,
        width: 321,
        marginBottom: 30
    },
    buttonLeft: {
        backgroundColor: '#EC928E',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 25,
        textAlign: 'right',
        flex: 0,
    },
    buttonRight: {
        backgroundColor: '#6750a4',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 25,
        textAlign: 'left',
        flex: 0,
    },
    buttonRightText: {
        color: 'white',
    },
    input: {
        height: 40,
        padding: 10,
        color: "#000",
    },
});
