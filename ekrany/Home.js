import 'react-native-gesture-handler'
import {createDrawerNavigator} from "@react-navigation/drawer";
import Nadchodzace_wizyty_stack from "./nadchodzoace-wizyty/nadchodzace-wizyty-stack";
import Nadchodzace_naprawy_stack from "./nadchodzoace-naprawy/nadchodzace-naprawy-stack";
import {StyleSheet} from "react-native";

function Home() {
    const Drawer = createDrawerNavigator();

    return (
            <Drawer.Navigator  initialRouteName="Wizyty" screenOptions={{swipeEdgeWidth: 50,drawerStyle: {backgroundColor: '#000'}}}>
                <Drawer.Screen name="Wizyty" component={Nadchodzace_wizyty_stack} options={{headerShown: false}}/>
                <Drawer.Screen name="Naprawy" component={Nadchodzace_naprawy_stack} options={{headerShown: false}}/>
            </Drawer.Navigator>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    }})