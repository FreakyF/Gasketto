import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import ButtonContainer from "../../ui/ButtonContainer";
import PowrotButton from "../../ui/PowrotButton";
import DalejButton from "../../ui/DalejButton";

export default function PodgladZdjecia({navigation}) {
    const powrot = () => {
        navigation.goBack();
    }

    const usun = () => {
        navigation.goBack();
    }


    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View>
                    <Text>10-9-2022</Text>
                    <Text>8:35</Text>
                </View>
                <PowrotButton text={"Usuń"} action={usun}/>
            </View>

            <Image
                source={require('./Leon.png')}
                style={{ width: 376, height: 616 }}
            />

            <ButtonContainer>
                <DalejButton action={powrot} text={"Powrót"}/>
            </ButtonContainer>
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
