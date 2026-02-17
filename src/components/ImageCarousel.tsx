import React from 'react';
import { Image, ImageSourcePropType, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

interface ImageCarouselProps {
  images: (string | ImageSourcePropType)[];
  onAddPress?: () => void;
  onImagePress?: (image: string | ImageSourcePropType) => void;
  showAddButton?: boolean;
}

export default function ImageCarousel({ images, onAddPress, onImagePress, showAddButton = true }: ImageCarouselProps) {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {images.map((img, index) => (
          <TouchableOpacity key={index} activeOpacity={0.7} onPress={() => onImagePress?.(img)}>
            <Image
              source={typeof img === 'string' ? { uri: img } : img}
              style={styles.image}
            />
          </TouchableOpacity>
        ))}
        {showAddButton && (
          <TouchableOpacity style={styles.addButton} activeOpacity={0.7} onPress={onAddPress} />
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    height: 205,
  },
  scrollContent: {
    paddingHorizontal: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginRight: 10,
    borderRadius: 10,
    resizeMode: 'cover',
    backgroundColor: '#eee',
  },
  addButton: {
    width: 200,
    height: 200,
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: 'black',
  },
});
