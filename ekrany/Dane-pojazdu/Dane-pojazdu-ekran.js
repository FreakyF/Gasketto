import {StyleSheet, Switch, Text, TextInput, TouchableOpacity, View} from 'react-native';
import PowrotButton from "../../ui/PowrotButton";
import DalejButton from "../../ui/DalejButton";
import ButtonContainer from "../../ui/ButtonContainer";
import Tytul from "../../ui/Tytul";
import InputMaly from "../../ui/InputMaly";
import {useState} from "react";
import {LightSensor} from "expo-sensors";

export default function DanePojazduEkran({route, navigation}) {
    const {item} = route.params;

    const dalej = () => {
        const testjson = {
            "id": item.id,
            "Marka": marka,
            "Model": model,
            "Tablica": tablica,
            "Silnik": silnik,
            "Gaz": gaz,
            "VIN": vin,
            "Rok": rok,
            "Stan": "",
        };
        navigation.navigate("Stan pojazdu",{item: testjson});
    }

    const anuluj = () => {
        navigation.goBack();
    }

    const [marka, setMarka] = useState("");
    const [model, setModel] = useState("");
    const [tablica, setTablica] = useState("");
    const [silnik, setSilnik] = useState("nie");
    const [gaz, setGaz] = useState("");
    const [vin, setVin] = useState("");
    const [rok, setRok] = useState("");

    const [illuminance, setilluminance] = useState(0);
    const aktywnystyl = illuminance > 25 ? styles : Darkstyles ;
    LightSensor.addListener(data => { setilluminance(data.illuminance)})

    return (
        <View style={aktywnystyl.container}>
            <Tytul text="Dane pojazdu"/>
            <InputMaly label={"Marka"} placeholder={"Podaj markę"} onChange={setMarka}/>
            <InputMaly label={"Model"} placeholder={"Podaj model"} onChange={setModel}/>
            <InputMaly label={"Tablica rejestracyjna"} placeholder={"Podaj nr. tablicy"} onChange={setTablica}/>
            <InputMaly label={"Silnik"} placeholder={"Podaj silnik"} onChange={setSilnik}/>

            <View style={aktywnystyl.switchContainer}>
                <Text style={aktywnystyl.switchLabel}>Silnik w gazie</Text>
                <Switch
                    trackColor={{false: '#6f59ab', true: '#8154f7'}}
                    thumbColor={'#6750a4'}
                />
            </View>

            <InputMaly label={"VIN"} placeholder={"Podaj VIN"} onChange={setVin}/>
            <InputMaly label={"Rok produkcji"} placeholder={"Podaj rok produkcji"} onChange={setRok}/>

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
const Darkstyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
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
        color: '#e4e4e4',
        marginRight: "auto"
    },
});