import Tytul from "./Tytul";
import {StyleSheet, Text, TextInput, View} from "react-native";

export default function InputMaly({label = "", onChange = null, placeholder = ""}) {
    return (
        <View style={styles.container}>
            <Text style={styles.textinputlabel}>{label}</Text>
            <TextInput style={styles.textinput} onChangeText={newText => onChange(newText)} placeholder={placeholder}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    textinputlabel: {
        minWidth: '50%',
        fontSize: 10,
        paddingHorizontal: 10,
        paddingVertical: 2,
        color: '#49454F',
    },
    textinput: {
        minWidth: '50%',
        fontSize: 16,
        lineHeight: 24,
        color: '#49454F',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ccc',
        padding: 10,
    },
});