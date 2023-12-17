import 'react-native-gesture-handler'
import {createDrawerNavigator} from "@react-navigation/drawer";
import Nadchodzace_wizyty_stack from "./nadchodzoace-wizyty/nadchodzace-wizyty-stack";
import Nadchodzace_naprawy_stack from "./nadchodzoace-naprawy/nadchodzace-naprawy-stack";

function Home() {
    const Drawer = createDrawerNavigator();

    return (
            <Drawer.Navigator initialRouteName="Nadchodzace wizyty" screenOptions={{swipeEdgeWidth: 40}}>
                <Drawer.Screen name="Wizyty" component={Nadchodzace_wizyty_stack}/>
                <Drawer.Screen name="Naprawy" component={Nadchodzace_naprawy_stack}/>
            </Drawer.Navigator>
    )
}

export default Home;