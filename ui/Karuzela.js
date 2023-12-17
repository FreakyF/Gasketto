import {Image, ScrollView, StyleSheet, TouchableOpacity, View} from "react-native";

export default function Karuzela({images, navigation}) {
    const goToCamera = () => {
        navigation.navigate("Aparat");
    }

    return (
        <ScrollView horizontal style={styles.imageSlider}>
            {images.map((image, index) => (
                <Image key={index} source={image} style={styles.image}/>
            ))}
            <TouchableOpacity style={styles.cameraButton} activeOpacity={0.7} onPress={() => goToCamera()}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    imageSlider: {
        marginVertical: 20,
    },
    image: {
        width: 200,
        height: 200,
        marginRight: 10,
        borderRadius: 10,
        resizeMode: "contain",
    },
    cameraButton: {
        width: 200,
        height: 200,
        marginRight: 10,
        borderRadius: 10,
        backgroundColor: 'black',
    }
});