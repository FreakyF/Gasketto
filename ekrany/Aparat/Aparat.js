import {Button, StyleSheet, Text, TouchableOpacity, View, Dimensions} from 'react-native';
import {useRef} from "react";
import {Camera, CameraType} from 'expo-camera';
import * as MediaLibrary from "expo-media-library";
import ButtonContainer from "../../ui/ButtonContainer";
import PowrotButton from "../../ui/PowrotButton";
import DalejButton from "../../ui/DalejButton";


function PermissionMessage({requestCameraPermission, requestMediaPermission}) {
    return (
        <View style={styles.container}>
            <Text style={{textAlign: 'center'}}>
                We need your permission to use the camera and save media
            </Text>
            <Button onPress={requestCameraPermission} title="Grant Camera Permission"/>
            <Button onPress={requestMediaPermission} title="Grant Media Library Permission"/>
        </View>
    );
}

function CameraButton({onPress}) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <View style={styles.outerCircle}>
                <View style={styles.innerCircle}/>
            </View>
        </TouchableOpacity>
    );
}

export default function Aparat({navigation}) {
    const [permission, requestPermission] = Camera.requestCameraPermissionsAsync();
    const [mediaPermission, requestMediaPermission] = MediaLibrary.usePermissions();
    const cameraRef = useRef(null);

    if (!permission || !mediaPermission) {
        return <View/>;
    }

    if (!permission.granted || !mediaPermission.granted) {
        return (
            <PermissionMessage
                requestCameraPermission={requestPermission}
                requestMediaPermission={requestMediaPermission}
            />
        );
    }

    async function zrobZdjecie() {
        if (cameraRef.current) {
            const photo = await cameraRef.current.takePictureAsync();
            if (photo) {
                await MediaLibrary.saveToLibraryAsync(photo.uri);
            }
        }
    }

    const dalej = () => {
        navigation.goBack();
    }

    const anuluj = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <Camera style={styles.camera} type={CameraType.back} ref={cameraRef}/>
            <ButtonContainer>
                <PowrotButton text={"Anuluj"} action={anuluj}/>
                <CameraButton onPress={zrobZdjecie}/>
                <DalejButton text={"Dodaj"} action={dalej}/>
            </ButtonContainer>
        </View>
    );
}

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: height,
        width: width,
        backgroundColor: '#1D1B20',
        alignItems: 'center',
        justifyContent: 'center',
    },
    camera: {
        aspectRatio: 3 / 4,
        width: width,
        marginTop: height * 0.1,
        alignSelf: 'center',
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
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: 'transparent',
    },
    outerCircle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 64,
        height: 64,
        borderRadius: 32,
        borderWidth: 2,
        borderColor: 'white',
        backgroundColor: 'black',
    },
    innerCircle: {
        width: 52,
        height: 52,
        borderRadius: 26,
        backgroundColor: 'white',
    }
});
