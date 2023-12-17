import {StyleSheet, Text, View} from "react-native";

export default function Linia({text = ""}) {
    return (
        <>
            <View style={styles.hr}/>
            <Text style={styles.hrlabel}>{text}</Text>
        </>
    )
}

const styles = StyleSheet.create({
    hr: {
        backgroundColor: '#aaa',
        minWidth: '75%',
        height: 1,
    },
    hrlabel: {
        minWidth: '75%',
        fontSize: 10,
        paddingHorizontal: 10,
        paddingVertical: 2,
        color: '#000',
    },
});