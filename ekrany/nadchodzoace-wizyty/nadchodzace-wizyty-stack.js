import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import LogowanieEkran from "../Logowanie/Logowanie-ekran";
import Home from "../Home";
import NadchodzaceWyzityEkran from "./nadchodzace-wyzity-ekran";
import podgladWizytyEkran from "../Podglad-wizyty/Podglad-wizyty-ekran";
import DanePojazduEkran from "../Dane-pojazdu/Dane-pojazdu-ekran";
import StanPojazdu from "../Stan-pojazdu/Stan-pojazdu";

export default function Nadchodzace_wizyty_stack() {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Nadchodzące wizyty" component={NadchodzaceWyzityEkran} options={{headerShown: false}}/>
            <Stack.Screen name="Wizyta" component={podgladWizytyEkran} options={{headerShown: false}}/>
            <Stack.Screen name="Dane pojazdu" component={DanePojazduEkran} options={{headerShown: false}}/>
            <Stack.Screen name="Stan pojazdu" component={StanPojazdu} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}