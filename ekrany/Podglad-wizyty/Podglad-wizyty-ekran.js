import React from "react";

import {StyleSheet, Text, TextArea, TextInput, TouchableOpacity, View} from "react-native";


function PodgladWizytyEkran() {
    return (
        <View style={styles.container}>
            <Text style={styles.titletext}>08:00 - 10:00</Text>
            <View style={styles.hr}/>
            <Text style={styles.minititletext}>Dane Klienta</Text>
            <Text style={styles.textstyle}>Imię i nazwisko</Text>
            <Text style={styles.textstyle}>Numer telefonu</Text>
            <Text style={styles.textstyle}>Adres1</Text>
            <Text style={styles.textstyle}>Adres2</Text>
            <View style={styles.hr}/>
            <Text style={styles.minititletext}>Opis wizyty</Text>
            <Text style={styles.textcontainer}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum at mi eu semper. Sed odio
                nulla, molestie eu accumsan a, dictum eu nibh. Vivamus commodo dolor nec lectus euismod, ac egestas eros
                tempus. Duis bibendum aliquet commodo. Fusce suscipit porta elementum. Donec ac rutrum mi. Proin
                facilisis mattis nulla, ut eleifend lacus mattis ac. Pellentesque sed neque tortor. Pellentesque luctus
                vulputate nisl. Vestibulum eget ligula a justo ullamcorper consequat et vestibulum lectus.
            </Text>
            <TouchableOpacity style={styles.edycjabutton} activeOpacity={0.7}>
                <Text style={styles.textstyle}>Edytuj wizytę</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.usuwaniebutton} activeOpacity={0.7}>
                <Text style={styles.textstyle}>Anuluj wizytę</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rozpocznijbutton} activeOpacity={0.7}>
                <Text style={styles.textstyle}>Rozpocznij wizytę</Text>
            </TouchableOpacity>

        </View>
    )
}

export default PodgladWizytyEkran;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
    },
    textcontainer: {
        paddingTop: 20,
        flexWrap: 'wrap',
        textAlign: "center",
    },
    hr: {
        backgroundColor: '#aaa',
        minWidth: '75%',
        height: 1,
    },
    textstyle: {
        fontsize: 20,
        color: '#000',
    },
    titletext: {
        fontSize: 40,
        marginBottom: 120,
        textAlign: "left",
    },
    minititletext: {
        fontSize: 15,
        color: '#515761',
    },
    edycjabutton: {
        margin: 10,
        backgroundColor: '#E8DEF8',
        paddingVertical: 10,
        paddingHorizontal: 24,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
    },
    usuwaniebutton: {
        margin: 10,
        backgroundColor: '#EC928E',
        paddingVertical: 10,
        paddingHorizontal: 24,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
    },
    rozpocznijbutton: {
        margin: 10,
        backgroundColor: '#6750A4',
        paddingVertical: 10,
        paddingHorizontal: 24,
        borderRadius: 25,
        alignItems: "left",
        justifyContent: "left",
    },
})