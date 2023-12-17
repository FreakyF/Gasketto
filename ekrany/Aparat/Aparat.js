import {StyleSheet, Text, TouchableOpacity, View, Image, Dimensions} from 'react-native';

export default function Aparat() {
    return (
        <View style={styles.container}>

            <Image
                source={require('./Leon.png')}
                style={{width: 350, height: 616, marginTop: 30}}
            />

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonCancel} activeOpacity={0.7}>
                    <Text>Anuluj</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <View style={styles.buttonInner}>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonAdd} activeOpacity={0.7}>
                    <Text style={styles.buttonAddText}>Dodaj</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        height: height,
        width: width,
        backgroundColor: '#1D1B20',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 20,
        marginTop: 10,
        width: 350
    },
    buttonCancel: {
        backgroundColor: '#EC928E',
        paddingVertical: 10,
        paddingHorizontal: 24,
        borderRadius: 25,
        textAlign: 'left',
        flex: 0,
    },
    buttonAdd: {
        backgroundColor: '#6750a4',
        paddingVertical: 10,
        paddingHorizontal: 24,
        borderRadius: 25,
        textAlign: 'left',
        flex: 0,
    },
    buttonAddText: {
        color: 'white',
    },
    buttonInner: {
        width: 54,
        height: 54,
        borderRadius: 27,
        borderWidth: 6,
        borderColor: 'black',
        overflow: 'hidden',
    },
});
