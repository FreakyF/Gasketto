import {StyleSheet, Switch, Text, TextInput, TouchableOpacity, View} from 'react-native';

export default function DanePojazduEkran() {
    return (
        <View style={styles.container}>
            <Text style={styles.screenTitle}>Dane pojazdu</Text>
            <TextInput style={styles.textInput} placeholder="Podaj markę"/>
            <TextInput style={styles.textInput} placeholder="Podaj model"/>
            <TextInput style={styles.textInput} placeholder="Podaj silnik"/>

            <View style={styles.switchContainer}>
                <Text style={styles.switchLabel}>Silnik w gazie</Text>
                <Switch

                />
            </View>

            <TextInput style={styles.textInput} placeholder="Podaj VIN"/>
            <TextInput style={styles.textInput} placeholder="Podaj rok produkcji"/>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonLeft} activeOpacity={0.7}>
                    <Text>Anuluj wizytę</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonRight} activeOpacity={0.7}>
                    <Text style={styles.buttonRightText}>Przejdź dalej</Text>
                </TouchableOpacity>
            </View>
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
    textInput: {
        fontSize: 16,
        lineHeight: 24,
        color: '#49454F',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 20,
        width: 210,
        height: 56,
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        width: 204
    },
    switchLabel: {
        fontFamily: 'Roboto',
        fontSize: 16,
        lineHeight: 52,
        marginBottom: 10,
        marginRight: "auto"
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30,
        width: 321
    },
    buttonLeft: {
        backgroundColor: '#EC928E',
        paddingVertical: 10,
        paddingHorizontal: 24,
        borderRadius: 25,
        textAlign: 'right',
        flex: 0,
    },
    buttonRight: {
        backgroundColor: '#6750a4',
        paddingVertical: 10,
        paddingHorizontal: 24,
        borderRadius: 25,
        textAlign: 'left',
        flex: 0,
    },
    buttonRightText: {
        color: 'white',
    }
});
