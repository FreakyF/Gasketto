import React, {useState} from "react";
import {FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import Naprawa from "./nadchodzace-naprawy-wizyta";
import Linia from "../../ui/Linia";
import Tytul from "../../ui/Tytul";
import Wizyta from "../nadchodzoace-wizyty/nadchodzace-wizyty-wizyta";
import AsyncStorage from "@react-native-async-storage/async-storage";

function NadchodzaceNaprawyEkran({navigation}) {
    const [data, setData] = useState();

    const fetchData = async () => {
        try {
            let jsonValue = await AsyncStorage.getItem("naprawy");
            jsonValue = jsonValue != null ? JSON.parse(jsonValue) : null;
            setData(jsonValue);
        } catch (e) {
            console.log(e);
        }
    };

    fetchData();

    const renderItem = ({item}) => <Naprawa navigation={navigation} item={item}/>;

    return (
        <View style={styles.container}>
            <Tytul text={"Nadchodzące naprawy"}/>
            <Linia text="Dzisiaj"/>
            <FlatList data={data} renderItem={renderItem}/>
        </View>
    )
}

export default NadchodzaceNaprawyEkran;

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