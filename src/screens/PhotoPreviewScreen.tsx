import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import ButtonContainer from '../components/ButtonContainer';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import { useTheme } from '../hooks/useTheme';
import { Repair, RepairsStackParamList, Visit, VisitsStackParamList } from '../types';

type Props = NativeStackScreenProps<VisitsStackParamList, 'PhotoPreview'> | NativeStackScreenProps<RepairsStackParamList, 'PhotoPreview'>;

export default function PhotoPreviewScreen({ route, navigation }: Props) {
  const { image } = route.params;

  let item: Visit | Repair | undefined;
  if ('visit' in route.params) {
    item = route.params.visit;
  } else if ('repair' in route.params) {
    item = route.params.repair;
  }

  const { isDark } = useTheme();
  const themeStyles = isDark ? darkStyles : lightStyles;

  const handleDelete = () => {
    if (item && item.photos) {
      item.photos = item.photos.filter((p: string) => p !== image);
    }
    navigation.goBack();
  };

  return (
    <View style={themeStyles.container}>
      <View style={themeStyles.header}>
        <Text style={themeStyles.text}>Photo Preview</Text>
        <SecondaryButton title="Delete" onPress={handleDelete} style={{ paddingHorizontal: 20 }} />
      </View>

      <Image source={{ uri: image }} style={styles.image} />

      <ButtonContainer>
        <PrimaryButton title="Back" onPress={() => navigation.goBack()} />
      </ButtonContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 376,
    height: 616,
    resizeMode: 'contain',
    marginVertical: 10,
  },
});

const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 321,
    marginBottom: 10,
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontSize: 16,
  },
});

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 321,
    marginBottom: 10,
    alignItems: 'center',
  },
  text: {
    color: '#e4e4e4',
    fontSize: 16,
  },
});
