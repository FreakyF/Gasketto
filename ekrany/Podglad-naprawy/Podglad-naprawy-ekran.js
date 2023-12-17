import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import KontenerNaprawy from "./Kontener-naprawy";

export default function PodgladNaprawyEkran({navigation}) {
    const zakaczNaprawe = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <Text style={styles.screenTitle}>SCI 6174E</Text>
            <View style={styles.spacingContainer}>
                <KontenerNaprawy navigation={navigation}/>
            </View>
            <View style={styles.spacingContainer}>
                <KontenerNaprawy navigation={navigation}/>
            </View>
            <View style={styles.spacingContainer}>
                <KontenerNaprawy navigation={navigation}/>
            </View>
            <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={() => zakaczNaprawe()}>
                <Text style={styles.buttonText}>Zakończ naprawę</Text>
            </TouchableOpacity>
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
    screenTitle: {
        fontFamily: 'Roboto',
        fontSize: 45,
        lineHeight: 52,
        marginBottom: 56,
    },
    spacingContainer: {
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#6750a4',
        paddingVertical: 10,
        paddingHorizontal: 24,
        borderRadius: 25,
        textAlign: 'right',
        alignSelf: 'flex-end',
        flex: 0,
    },
    buttonText: {
        color: 'white',
    }
});
