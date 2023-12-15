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
    buttonDelete: {
        backgroundColor: '#EC928E',
        paddingVertical: 10,
        paddingHorizontal: 24,
        borderRadius: 25,
        textAlign: 'left',
        flex: 0,
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
    button: {
        padding: 10,
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 3,
        borderColor: 'white',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonInner: {
        width: 54, // Adjust the inner width by subtracting the borderWidth
        height: 54, // Adjust the inner height by subtracting the borderWidth
        borderRadius: 27, // Adjust the inner borderRadius by subtracting half of the borderWidth
        borderWidth: 6, // Set the inner borderWidth to the desired border width
        borderColor: 'black',
        overflow: 'hidden', // Add this line to ensure the inner border is clipped
    },
});
