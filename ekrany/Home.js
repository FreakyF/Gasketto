import 'react-native-gesture-handler'
import {createDrawerNavigator} from "@react-navigation/drawer";
import Nadchodzace_wizyty_stack from "./nadchodzoace-wizyty/nadchodzace-wizyty-stack";
import Nadchodzace_naprawy_stack from "./nadchodzoace-naprawy/nadchodzace-naprawy-stack";
import {StyleSheet} from "react-native";
import React, {useEffect, useState} from "react";
import {LightSensor} from "expo-sensors";

function Home() {
    const Drawer = createDrawerNavigator();
    const [illuminance, setilluminance] = useState(26);
    const zmianatla = illuminance > 25 ? '#fff' : '#000';
    LightSensor.addListener(data => {setilluminance(data.illuminance)})
    return (
            <Drawer.Navigator  initialRouteName="Wizyty" screenOptions={{swipeEdgeWidth: 50, drawerStyle: {backgroundColor: zmianatla}}}>
                <Drawer.Screen name="Wizyty" component={Nadchodzace_wizyty_stack} options={{headerShown: false}}/>
                <Drawer.Screen name="Naprawy" component={Nadchodzace_naprawy_stack} options={{headerShown: false}}/>
            </Drawer.Navigator>
    )
}

export default Home;

const styles = StyleSheet.create({
    drawerStyle: {
        backgroundColor: '#fff',
    }})
const Darkstyles = StyleSheet.create({
    drawerStyle: {
        backgroundColor: '#000',
    }})