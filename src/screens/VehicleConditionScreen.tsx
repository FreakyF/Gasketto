import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useIsFocused } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as ImagePicker from 'expo-image-picker';
import React, { useEffect, useState } from 'react';
import { ActionSheetIOS, Alert, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import ButtonContainer from '../components/ButtonContainer';
import ImageCarousel from '../components/ImageCarousel';
import PrimaryButton from '../components/PrimaryButton';
import ScreenTitle from '../components/ScreenTitle';
import SecondaryButton from '../components/SecondaryButton';
import { useTheme } from '../hooks/useTheme';
import { MainDrawerParamList, Repair, Visit, VisitsStackParamList } from '../types';
import { storage } from '../utils/storage';

type Props = NativeStackScreenProps<VisitsStackParamList, 'VehicleCondition'>;

export default function VehicleConditionScreen({ route, navigation }: Props) {
  const { visit } = route.params;
  const { isDark } = useTheme();
  const themeStyles = isDark ? darkStyles : lightStyles;
  const isFocused = useIsFocused();

  const [condition, setCondition] = useState('');
  const [photos, setPhotos] = useState<string[]>(visit.photos || []);

  useEffect(() => {
    if (isFocused) {
      setPhotos([...(visit.photos || [])]);
    }
  }, [isFocused, visit]);

  const handlePhotoAction = () => {
    const options = ['Take Photo', 'Choose from Gallery', 'Cancel'];
    const cancelButtonIndex = 2;

    if (Platform.OS === 'ios') {
      ActionSheetIOS.showActionSheetWithOptions(
        { options, cancelButtonIndex },
        (buttonIndex) => {
          if (buttonIndex === 0) navigation.navigate('Camera', { visit });
          else if (buttonIndex === 1) pickFromGallery();
        }
      );
    } else {
      Alert.alert('Add Photo', 'Choose a source', [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Camera', onPress: () => navigation.navigate('Camera', { visit }) },
        { text: 'Gallery', onPress: () => pickFromGallery() },
      ]);
    }
  };

  const pickFromGallery = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert("Permission Required", "You need to allow access to your photos.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.7,
    });

    if (!result.canceled && result.assets[0].uri) {
      const newPhotoUri = result.assets[0].uri;
      const updatedPhotos = [...photos, newPhotoUri];
      setPhotos(updatedPhotos);
      visit.photos = updatedPhotos;
    }
  };

  const handleSave = async () => {
    try {
      const finalVisit: Visit = { ...visit, condition, photos };

      const conditions = await storage.load<Visit[]>('vehicle_condition') || [];
      conditions.push(finalVisit);
      await storage.save('vehicle_condition', conditions);

      const repair: Repair = {
        id: visit.id,
        licensePlate: visit.licensePlate || 'Unknown',
        time: visit.time,
        tasks: [{ id: 0, name: visit.description, description: visit.description, status: 'no' }],
        photos: photos
      };

      const repairs = await storage.load<Repair[]>('repairs') || [];
      repairs.push(repair);
      await storage.save('repairs', repairs);

      const visits = await storage.load<Visit[]>('visits') || [];
      const newVisits = visits.filter(v => v.id !== visit.id);
      await storage.save('visits', newVisits);

      const drawerNav = navigation.getParent<DrawerNavigationProp<MainDrawerParamList>>();
      if (drawerNav) {
        drawerNav.navigate('RepairsStack', {
          screen: 'RepairDetails',
          params: { repair }
        });
        navigation.popToTop();
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={themeStyles.container}>
      <ScreenTitle title="Vehicle Condition" />

      <View style={styles.carouselContainer}>
        {photos.length > 0 ? (
          <ImageCarousel
            images={photos}
            onAddPress={handlePhotoAction}
            onImagePress={(img) => typeof img === 'string' && navigation.navigate('PhotoPreview', { image: img, visit })}
          />
        ) : (
          <TouchableOpacity
            style={[themeStyles.imagePlaceholder, styles.placeholderBorder]}
            onPress={handlePhotoAction}
          >
            <Text style={{ color: themeStyles.placeholderColor, fontSize: 40 }}>+</Text>
            <Text style={{ color: themeStyles.placeholderColor }}>Add Photos</Text>
          </TouchableOpacity>
        )}
      </View>

      <TextInput
        style={themeStyles.textInput}
        placeholder="Describe vehicle condition"
        placeholderTextColor={themeStyles.placeholderColor}
        onChangeText={setCondition}
        multiline
        value={condition}
      />

      <ButtonContainer>
        <SecondaryButton title="Back" onPress={() => navigation.goBack()} />
        <PrimaryButton title="Save & Finish" onPress={handleSave} />
      </ButtonContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  carouselContainer: {
    height: 250,
    width: 350,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderBorder: {
    borderWidth: 2,
    borderStyle: 'dashed',
    borderRadius: 10,
    borderColor: '#ccc',
  }
});

const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagePlaceholder: {
    width: 350,
    height: 250,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
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
  imagePlaceholder: {
    width: 350,
    height: 250,
    backgroundColor: '#1D1B20',
    justifyContent: 'center',
    alignItems: 'center',
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
