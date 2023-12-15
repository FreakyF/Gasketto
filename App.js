import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import LogowanieEkran from "./ekrany/Logowanie/Logowanie-ekran";
import nadchodzaceWyzityEkran from "./ekrany/nadchodzoace-wizyty/nadchodzace-wyzity-ekran";
import PodgladWizytyEkran from "./ekrany/Podglad-wizyty/Podglad-wizyty-ekran";

export default function App() {
    const Stack = createNativeStackNavigator();

    return (
        <View style={styles.container}>
            <PodgladWizytyEkran/>
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
});
