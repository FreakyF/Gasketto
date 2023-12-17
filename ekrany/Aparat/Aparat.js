import {StyleSheet, Text, TouchableOpacity, View, Image, Dimensions} from 'react-native';
import ButtonContainer from "../../ui/ButtonContainer";
import PowrotButton from "../../ui/PowrotButton";
import DalejButton from "../../ui/DalejButton";

export default function Aparat({navigation}) {
    const dalej = () => {
        navigation.goBack();
    }

    const anuluj = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <Image
                source={require('./Leon.png')}
                style={{width: 350, height: 616, marginTop: 30}}
            />

            <ButtonContainer>
                <PowrotButton text={"Anuluj"} action={anuluj}/>
                <TouchableOpacity style={styles.button}>
                    <View style={styles.buttonInner}>
                    </View>
                </TouchableOpacity>
                <DalejButton text={"Dodaj"} action={dalej}/>
            </ButtonContainer>
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
