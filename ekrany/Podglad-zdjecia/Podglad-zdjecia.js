import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import ButtonContainer from "../../ui/ButtonContainer";
import PowrotButton from "../../ui/PowrotButton";
import DalejButton from "../../ui/DalejButton";
import React, {useEffect, useState} from "react";
import {LightSensor} from "expo-sensors";

export default function PodgladZdjecia({navigation}) {
    const powrot = () => {
        navigation.goBack();
    }

    const usun = () => {
        navigation.goBack();
    }
    const [illuminance, setilluminance] = useState(0);
    const aktywnystyl = illuminance > 25 ? styles : Darkstyles ;
    LightSensor.addListener(data => { setilluminance(data.illuminance)})

    return (
        <View style={aktywnystyl.container}>
            <View style={aktywnystyl.headerContainer}>
                <View>
                    <Text style={aktywnystyl.texts}>10-9-2022</Text>
                    <Text style={aktywnystyl.texts}>8:35</Text>
                </View>
                <PowrotButton text={"Usuń"} action={usun}/>
            </View>

            <Image
                source={require('./Leon.png')}
                style={{ width: 376, height: 616 }}
            />

            <ButtonContainer>
                <DalejButton action={powrot} text={"Powrót"}/>
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
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 321,
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        paddingHorizontal: 30,
        width: 321
    },
    buttonDelete: {
        backgroundColor: '#EC928E',
        paddingVertical: 10,
        paddingHorizontal: 24,
        borderRadius: 25,
        textAlign: 'left',
        flex: 0,
    },
    buttonNext: {
        backgroundColor: '#6750a4',
        paddingVertical: 10,
        paddingHorizontal: 24,
        borderRadius: 25,
        textAlign: 'left',
        flex: 0,
    },
    buttonNextText: {
        color: 'white',
    },
    buttonPrevious: {
        backgroundColor: '#6750a4',
        paddingVertical: 10,
        paddingHorizontal: 24,
        borderRadius: 25,
        textAlign: 'left',
        flex: 0,
    },
    buttonPreviousText: {
        color: 'white',
    }
});

const Darkstyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 321,
        marginBottom: 10,
    },
    texts: {
      color: '#e4e4e4'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        paddingHorizontal: 30,
        width: 321
    },
    buttonDelete: {
        backgroundColor: '#EC928E',
        paddingVertical: 10,
        paddingHorizontal: 24,
        borderRadius: 25,
        textAlign: 'left',
        flex: 0,
    },
    buttonNext: {
        backgroundColor: '#6750a4',
        paddingVertical: 10,
        paddingHorizontal: 24,
        borderRadius: 25,
        textAlign: 'left',
        flex: 0,
    },
    buttonNextText: {
        color: 'white',
    },
    buttonPrevious: {
        backgroundColor: '#6750a4',
        paddingVertical: 10,
        paddingHorizontal: 24,
        borderRadius: 25,
        textAlign: 'left',
        flex: 0,
    },
    buttonPreviousText: {
        color: 'white',
    }
});