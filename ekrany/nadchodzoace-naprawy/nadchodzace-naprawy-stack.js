import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import LogowanieEkran from "../Logowanie/Logowanie-ekran";
import Home from "../Home";
import NadchodzaceNaprawyEkran from "./nadchodzace-naprawy-ekran";
import PodgladNaprawyEkran from "../Podglad-naprawy/Podglad-naprawy-ekran";
import UwagiNaprawy from "../Uwagi-naprawy/Uwagi-naprawy";

export default function Nadchodzace_naprawy_stack() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Nadchodzące naprawy" component={NadchodzaceNaprawyEkran} options={{headerShown: false}}/>
            <Stack.Screen name="Naprawa" component={PodgladNaprawyEkran} options={{headerShown: false}}/>
            <Stack.Screen name="Uwagi naprawa" component={UwagiNaprawy} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}