import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';

export default function PodgladZdjecia() {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View>
                    <Text>10-9-2022</Text>
                    <Text>8:35</Text>
                </View>
                <TouchableOpacity style={styles.buttonDelete} activeOpacity={0.7}>
                    <Text>Usuń</Text>
                </TouchableOpacity>
            </View>

            <Image
                source={require('./Leon.png')}
                style={{ width: 376, height: 616 }}
            />

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonNext} activeOpacity={0.7}>
                    <Text style={styles.buttonNextText}>Poprzednie</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonPrevious} activeOpacity={0.7}>
                    <Text style={styles.buttonPreviousText}>Następne</Text>
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
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 321,
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        paddingHorizontal: 30,
        width: 321
    },
    buttonDelete: {
        backgroundColor: '#EC928E',
        paddingVertical: 10,
        paddingHorizontal: 24,
        borderRadius: 25,
        textAlign: 'left',
        flex: 0,
    },
    buttonNext: {
        backgroundColor: '#6750a4',
        paddingVertical: 10,
        paddingHorizontal: 24,
        borderRadius: 25,
        textAlign: 'left',
        flex: 0,
    },
    buttonNextText: {
        color: 'white',
    },
    buttonPrevious: {
        backgroundColor: '#6750a4',
        paddingVertical: 10,
        paddingHorizontal: 24,
        borderRadius: 25,
        textAlign: 'left',
        flex: 0,
    },
    buttonPreviousText: {
        color: 'white',
    }
});
