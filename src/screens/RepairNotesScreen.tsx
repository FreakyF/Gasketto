import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import ButtonContainer from '../components/ButtonContainer';
import ImageCarousel from '../components/ImageCarousel';
import PrimaryButton from '../components/PrimaryButton';
import ScreenTitle from '../components/ScreenTitle';
import SecondaryButton from '../components/SecondaryButton';
import { useTheme } from '../hooks/useTheme';
import { RepairsStackParamList } from '../types';

type Props = NativeStackScreenProps<RepairsStackParamList, 'RepairNotes'>;

export default function RepairNotesScreen({ route, navigation }: Props) {
  const repair = route.params?.repair;
  const { isDark } = useTheme();
  const themeStyles = isDark ? darkStyles : lightStyles;
  const [notes, setNotes] = useState('');
  const [photos, setPhotos] = useState<string[]>([]);

  const handleSave = () => {
    navigation.goBack();
  };

  return (
    <View style={themeStyles.container}>
      <ScreenTitle title="Notes" />
      <ImageCarousel
        images={photos}
        onAddPress={() => {
          if (repair) {
            navigation.navigate('Camera', { repair });
          }
        }}
      />
      <TextInput
        style={themeStyles.textInput}
        placeholder="Describe technical condition"
        placeholderTextColor={themeStyles.placeholderColor}
        onChangeText={setNotes}
        multiline
      />
      <ButtonContainer>
        <SecondaryButton title="Cancel" onPress={() => navigation.goBack()} />
        <PrimaryButton title="Save" onPress={handleSave} />
      </ButtonContainer>
    </View>
  );
}

const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
    color: '#49454F',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    width: 350,
    height: 250,
  },
  placeholderColor: '#49454F',
});

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    textAlignVertical: 'top',
    backgroundColor: '#30302f',
    fontSize: 16,
    lineHeight: 24,
    color: '#e4e4e4',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    width: 350,
    height: 250,
  },
  placeholderColor: '#e4e4e4',
});
