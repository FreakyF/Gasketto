import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function KontenerNaprawy({navigation}) {
    const goToUwaginaprawa = () => {
        navigation.navigate("Uwagi naprawa");
    }
    
    return (
        <View style={styles.repairContainer}>
            <Text style={styles.listItem}>List item</Text>
            <Text style={styles.description}>Supporting line text lorem ipsum dolor sit amet, consectetur.</Text>
            <Text style={styles.doneText}>Czy wykonano:</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonLeft} activeOpacity={0.7} onPress={() => goToUwaginaprawa()}>
                    <Text style={styles.buttonLeftText}>Uwagi</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonMid} activeOpacity={0.7}>
                    <Text style={styles.buttonMidText}>Nie</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRight} activeOpacity={0.7}>
                    <Text style={styles.buttonRightText}>Tak</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    listItem: {
        fontFamily: "Roboto",
        fontSize: 16,
        lineHeight: 24,
        paddingTop: 10,
        paddingLeft: 20
    },
    description: {
        fontFamily: "Roboto",
        fontSize: 14,
        lineHeight: 20,
        paddingLeft: 20
    },
    doneText: {
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: 14,
        lineHeight: 20,
        paddingLeft: 20
    },
    repairContainer: {
        borderRadius: 10,
        backgroundColor: "#FEF7FF",
        width: 360,
        height: 159
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        width: 360
    },
    buttonLeft: {
        backgroundColor: '#E8DEF8',
        paddingVertical: 10,
        paddingHorizontal: 24,
        borderRadius: 25,
        textAlign: 'left',
        flex: 0,
    },
    buttonMid: {
        backgroundColor: '#EC928E',
        paddingVertical: 10,
        paddingHorizontal: 24,
        borderRadius: 25,
        textAlign: 'left',
        flex: 0,
    },
    buttonRight: {
        backgroundColor: '#6750a4',
        paddingVertical: 10,
        paddingHorizontal: 24,
        borderRadius: 25,
        textAlign: 'left',
        flex: 0,
    },
    buttonLeftText: {
        fontWeight: "bold"
    },
    buttonMidText: {
        fontWeight: "bold"
    },
    buttonRightText: {
        color: 'white',
        fontWeight: "bold"
    }
});
