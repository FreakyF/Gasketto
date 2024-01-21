import React, { useState} from "react";
import {FlatList, StyleSheet, View} from "react-native";
import Wizyta from "./nadchodzace-wizyty-wizyta";
import Tytul from "../../ui/Tytul";
import Linia from "../../ui/Linia";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {LightSensor} from "expo-sensors";

function NadchodzaceWyzityEkran({navigation}) {
    const readData = async (key) => {
        try {
            const jsonValue = await AsyncStorage.getItem(key);
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            console.log(e);
        }
    }

    const [data, setData] = useState();


    const fetchData = async () => {
        const result = await readData("wizyty");
        setData(result);
    };

    fetchData();

    const renderItem = ({item}) => <Wizyta navigation={navigation} item={item}/>;
    const [illuminance, setilluminance] = useState(0);
    const aktywnystyl = illuminance > 25 ? styles : Darkstyles ;
    LightSensor.addListener(data => { setilluminance(data.illuminance)})
    return (
        <View style={aktywnystyl.container}>
            <Tytul text="Nadchodzące wizyty"/>
            <Linia text="Dzisiaj"/>
            <FlatList data={data} renderItem={renderItem}/>
            {/*<Text>{JSON.stringify(data)}</Text>*/}
        </View>
    )
}

export default NadchodzaceWyzityEkran;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


const Darkstyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center',
    },
});