import {Image, ScrollView, StyleSheet, TouchableOpacity, View} from "react-native";

export default function Karuzela({images, navigation}) {
    const goToCamera = () => {
        navigation.navigate("Aparat");
    }

    const goToZdjecie = () => {
        navigation.navigate("Zdjecie");
    }

    return (
        <View style={styles.imageSlider}>
            <ScrollView horizontal>
                {images.map((image, index) => (
                    <TouchableOpacity activeOpacity={0.7} onPress={() => goToZdjecie()}>
                    <Image key={index} source={image} style={styles.image}/>
                    </TouchableOpacity>
                ))}
                <TouchableOpacity style={styles.cameraButton} activeOpacity={0.7} onPress={() => goToCamera()}/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    imageSlider: {
        marginVertical: 20,
        height: 205,
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