import React, {useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import DalejButton from "../../ui/DalejButton";
import Tytul from "../../ui/Tytul";
import InputMaly from "../../ui/InputMaly";

function LogowanieEkran({navigation}) {
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    const [warning, setWarning] = useState();

    const validateLogin = (login, password) => {
        if (login === password) {
            setWarning(false);
            navigation.navigate("Home");
        } else {
            setWarning(true);
        }
    }

    return (
        <View style={styles.container}>
            <Tytul text="Logowanie"/>
            <InputMaly label="Login" onChange={setLogin}/>
            <InputMaly label="Hasło" onChange={setPassword}/>
            <DalejButton action={() => validateLogin(login, password)} text={"Zaloguj"}/>
            {warning ? <Text>Nie poprawny login lub hasło</Text> : null}
        </View>
    )
}

export default LogowanieEkran;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
const Darkstyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center',
    },

});