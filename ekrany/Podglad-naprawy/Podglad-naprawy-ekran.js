import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import KontenerNaprawy from "./Kontener-naprawy";
import Tytul from "../../ui/Tytul";
import ButtonContainer from "../../ui/ButtonContainer";
import DalejButton from "../../ui/DalejButton";

export default function PodgladNaprawyEkran({navigation}) {
    const zakaczNaprawe = () => {
        navigation.reset({
            index: 1,
            routes: [{name: "nadchodzące naprawy"}]
        });
    }

    return (
        <View style={styles.container}>
            <Tytul text={"SCI 6174E"}/>
            <View style={styles.spacingContainer}>
                <KontenerNaprawy navigation={navigation}/>
            </View>
            <View style={styles.spacingContainer}>
                <KontenerNaprawy navigation={navigation}/>
            </View>
            <View style={styles.spacingContainer}>
                <KontenerNaprawy navigation={navigation}/>
            </View>
            <ButtonContainer>
                <DalejButton text={"Zakończ naprawę"} action={zakaczNaprawe}/>
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
