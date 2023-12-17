import {StyleSheet, Text} from "react-native";

export default function Tytul({text = "", size = 45}) {
    return (
        <>
            <Text style={{...styles.titletext, fontSize: size}}>{text}</Text>
        </>
    )
}

const styles = StyleSheet.create({
    titletext: {
        textAlign: "center",
        margin: 20,
    },
});
