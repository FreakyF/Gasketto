import {StyleSheet, Text, TouchableOpacity} from "react-native";

export default function PowrotButton({action,text="Powrót"}) {
    return (
        <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={() => action()}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#EC928E',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 25,
        textAlign: 'center',
        // flex: 0,
    },
    text: {
        color: 'black',
    }
});