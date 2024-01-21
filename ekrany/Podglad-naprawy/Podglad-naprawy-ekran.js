import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import KontenerNaprawy from "./Kontener-naprawy";
import Tytul from "../../ui/Tytul";
import ButtonContainer from "../../ui/ButtonContainer";
import DalejButton from "../../ui/DalejButton";
import Naprawa from "../nadchodzoace-naprawy/nadchodzace-naprawy-wizyta";
import React, {useEffect, useState} from "react";
import {LightSensor} from "expo-sensors";

export default function PodgladNaprawyEkran({route, navigation}) {
    const {item} = route.params
    const id = item.id;
    const zakaczNaprawe = () => {
        navigation.reset({
            index: 1,
            routes: [{name: "Nadchodzące naprawy"}]
        });
    }

    const renderItem = ({item}) => <KontenerNaprawy navigation={navigation} item={item} id={id}/>;
    const [illuminance, setilluminance] = useState(0);
    const aktywnystyl = illuminance > 25 ? styles : Darkstyles;
    LightSensor.addListener(data => {setilluminance(data.illuminance)})
    return (
        <View style={aktywnystyl.container}>
            <Tytul text={item.tablica}/>
            <FlatList data={item.naprawy} renderItem={renderItem}/>
            <ButtonContainer>
                <DalejButton text={"Ok"} action={zakaczNaprawe}/>
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