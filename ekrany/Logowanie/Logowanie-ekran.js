import React, {useState} from "react";
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";

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
            <Text style={styles.titletext}>Logowanie</Text>
            <Text style={styles.textinputlabel}>Login</Text>
            <TextInput style={styles.textinput} onChangeText={newText => setLogin(newText)}/>
            <Text style={styles.textinputlabel}>Hasło</Text>
            <TextInput style={styles.textinput} onChangeText={newText => setPassword(newText)}/>
            <TouchableOpacity style={styles.logowaniebutton} activeOpacity={0.7} onPress={()=>validateLogin(login, password)}>
                <Text style={styles.logowanietext}>Zaloguj</Text>
            </TouchableOpacity>
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
    titletext: {
        fontSize: 45,
        marginBottom: 120,
    },
    textinputlabel: {
        minWidth: '50%',
        fontSize: 10,
        paddingHorizontal: 10,
        paddingVertical: 2,
        color: '#000',
    },
    textinput: {
        borderWidth: 1,
        borderColor: '#000',
        marginBottom: 10,
        minWidth: '50%',
        padding: 10,
        borderRadius: 10,
    },
    logowaniebutton: {
        margin: 10,
        backgroundColor: '#6750a4',
        paddingVertical: 10,
        paddingHorizontal: 24,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
    },
    logowanietext: {
        color: '#fff'
    }
});