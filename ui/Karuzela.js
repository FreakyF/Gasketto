import {Image, ScrollView, StyleSheet, TouchableOpacity, View} from "react-native";
import {useEffect, useState} from "react";
import {useIsFocused} from "@react-navigation/native";

export default function Karuzela({navigation, item}) {
    const isFocused = useIsFocused();
    const goToCamera = () => {
        navigation.navigate("Aparat", {item: item,});
    }

    const goToZdjecie = (image) => {
        navigation.navigate("Zdjecie", {image: image, item: item});
    }

    const [newItem, setNewItem] = useState(item)

    useEffect(() => {
        setNewItem(item);
    }, [isFocused]);

    return (
        <View style={styles.imageSlider}>
            <ScrollView horizontal>
                {newItem.Zdjecia.map((image, index) => (
                    <TouchableOpacity key={index} activeOpacity={0.7} onPress={() => goToZdjecie(image)}>
                        <Image source={{uri: image}} style={styles.image}/>
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