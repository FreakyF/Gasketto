import {createDrawerNavigator} from "@react-navigation/drawer";
import NadchodzaceWyzityEkran from "./nadchodzoace-wizyty/nadchodzace-wyzity-ekran";
import {NavigationContainer} from "@react-navigation/native";
import Nadchodzace_wizyty_stack from "./nadchodzoace-wizyty/nadchodzace-wizyty-stack";

function Home() {
    const Drawer = createDrawerNavigator();

    return (
            <Drawer.Navigator initialRouteName="Nadchodzace wizyty">
                <Drawer.Screen name="Nadchodzace wizyty" component={Nadchodzace_wizyty_stack}/>
                <Drawer.Screen name="Nadchodzace naprawy" component={Nadchodzace_wizyty_stack}/>
            </Drawer.Navigator>
    )
}

export default Home;