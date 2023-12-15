import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import LogowanieEkran from "./ekrany/Logowanie/Logowanie-ekran";
import nadchodzaceWyzityEkran from "./ekrany/nadchodzoace-wizyty/nadchodzace-wyzity-ekran";

export default function App() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LogowanieEkran}/>
                <Stack.Screen name="Wizyty" component={nadchodzaceWyzityEkran}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
