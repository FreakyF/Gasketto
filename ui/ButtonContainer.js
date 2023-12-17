import {StyleSheet, View} from "react-native";

export default function ButtonContainer(props) {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 15,
            width: 321
        },
});