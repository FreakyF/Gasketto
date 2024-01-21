import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import KontenerNaprawy from "./Kontener-naprawy";
import Tytul from "../../ui/Tytul";
import ButtonContainer from "../../ui/ButtonContainer";
import DalejButton from "../../ui/DalejButton";
import Naprawa from "../nadchodzoace-naprawy/nadchodzace-naprawy-wizyta";

export default function PodgladNaprawyEkran({route, navigation}) {
    const {item} = route.params;
    const zakaczNaprawe = () => {
        navigation.reset({
            index: 1,
            routes: [{name: "Nadchodzące naprawy"}]
        });
    }

    const renderItem = ({item}) => <KontenerNaprawy navigation={navigation} item={item}/>;

    return (
        <View style={styles.container}>
            <Tytul text={item.tablica}/>
            <FlatList data={item.naprawy} renderItem={renderItem}/>
            <ButtonContainer>
                <DalejButton text={"Ok"} action={zakaczNaprawe}/>
            </ButtonContainer>
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
    spacingContainer: {
        marginBottom: 20,
    },
});
const Darkstyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center',
    },
    spacingContainer: {
        marginBottom: 20,
    },
});