import {Image, ScrollView, StyleSheet, View} from "react-native";

export default function Karuzela({images}){
    return(
        <ScrollView horizontal style={styles.imageSlider} showsHorizontalScrollIndicator={false}>
            {images.map((image, index) => (
                <Image key={index} source={image} style={styles.image} />
            ))}
            <View style={styles.cameraButton}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    imageSlider: {
        marginTop: 20,
        marginBottom: 20,
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