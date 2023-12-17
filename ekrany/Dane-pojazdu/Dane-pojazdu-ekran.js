import {StyleSheet, Switch, Text, TextInput, TouchableOpacity, View} from 'react-native';
import PowrotButton from "../../ui/PowrotButton";
import DalejButton from "../../ui/DalejButton";
import ButtonContainer from "../../ui/ButtonContainer";
import Tytul from "../../ui/Tytul";
import InputMaly from "../../ui/InputMaly";

export default function DanePojazduEkran({navigation}) {
    const dalej = () => {
        navigation.navigate("Stan pojazdu");
    }

    const anuluj = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <Tytul text="Dane pojazdu"/>
            <InputMaly label={"Marka"} placeholder={"Podaj markę"}/>
            <InputMaly label={"Model"} placeholder={"Podaj model"}/>
            <InputMaly label={"Silnik"} placeholder={"Podaj silnik"}/>

            <View style={styles.switchContainer}>
                <Text style={styles.switchLabel}>Silnik w gazie</Text>
                <Switch/>
            </View>


            <InputMaly label={"VIN"} placeholder={"Podaj VIN"}/>
            <InputMaly label={"Rok produkcji"} placeholder={"Podaj rok produkcji"}/>

            <ButtonContainer>
                <PowrotButton action={anuluj}/>
                <DalejButton action={dalej}/>
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
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 204
    },
    switchLabel: {
        fontFamily: 'Roboto',
        fontSize: 16,
        lineHeight: 52,
        marginRight: "auto"
    },
});
