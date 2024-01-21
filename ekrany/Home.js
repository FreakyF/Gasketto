import 'react-native-gesture-handler';
import { createDrawerNavigator } from "@react-navigation/drawer";
import Nadchodzace_wizyty_stack from "./nadchodzoace-wizyty/nadchodzace-wizyty-stack";
import Nadchodzace_naprawy_stack from "./nadchodzoace-naprawy/nadchodzace-naprawy-stack";
import React, { useEffect, useState } from "react";
import { LightSensor } from "expo-sensors";

function Home() {
    const Drawer = createDrawerNavigator();
    const [illuminance, setIlluminance] = useState(0);
    const zmianatla = illuminance > 25 ? '#fff' : '#000';  // Kolor tła
    const tekstKolor = illuminance > 25 ? '#000' : '#fff';  // Kolor tekstu

    useEffect(() => {
        const subscription = LightSensor.addListener(data => {
            setIlluminance(data.illuminance);
        });

        return () => {
            subscription.remove();
        };
    }, []);

    return (
        <Drawer.Navigator
            initialRouteName="Wizyty"
            screenOptions={{
                swipeEdgeWidth: 50,
                drawerStyle: { backgroundColor: zmianatla },
                drawerLabelStyle: { color: tekstKolor }, // Dodane
            }}>
            <Drawer.Screen name="Wizyty" component={Nadchodzace_wizyty_stack} options={{headerShown: false}}/>
            <Drawer.Screen name="Naprawy" component={Nadchodzace_naprawy_stack} options={{headerShown: false}}/>
        </Drawer.Navigator>
    );
}

export default Home;
