import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ButtonContainer from '../components/ButtonContainer';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import { Repair, RepairsStackParamList, Visit, VisitsStackParamList } from '../types';

type Props =
  | NativeStackScreenProps<VisitsStackParamList, 'Camera'>
  | NativeStackScreenProps<RepairsStackParamList, 'Camera'>;

export default function CameraScreen({ route, navigation }: Props) {
  let item: Visit | Repair | undefined;
  if ('visit' in route.params) {
    item = route.params.visit;
  } else if ('repair' in route.params) {
    item = route.params.repair;
  }

  const [permission, requestPermission] = useCameraPermissions();
  const [mediaPermission, requestMediaPermission] = MediaLibrary.usePermissions();

  const cameraRef = useRef<CameraView>(null);
  const [facing, setFacing] = useState<CameraType>('back');

  useEffect(() => {
    (async () => {
      await requestPermission();
      await requestMediaPermission();
    })();
  }, []);

  if (!permission || !mediaPermission) {
    return <View style={styles.container} />;
  }

  if (!permission.granted || !mediaPermission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera and save photos</Text>
        <PrimaryButton title="Grant Permission" onPress={() => {
          requestPermission();
          requestMediaPermission();
        }} />
      </View>
    );
  }

  const takePicture = async () => {
    if (cameraRef.current && item) {
      try {
        const photo = await cameraRef.current.takePictureAsync({ quality: 0.7 });
        if (photo) {
          await MediaLibrary.saveToLibraryAsync(photo.uri);
          handleNavigationWithPhoto(photo.uri);
        }
      } catch (e) {
        console.error(e);
      }
    }
  };

  const handleNavigationWithPhoto = (uri: string) => {
    if (!item) return;
    const updatedPhotos = [...(item.photos || []), uri];

    if ('visit' in route.params) {
      const updatedVisit = { ...item, photos: updatedPhotos } as Visit;
      (navigation as any).navigate('VehicleCondition', { visit: updatedVisit });
    } else {
      const updatedRepair = { ...item, photos: updatedPhotos } as Repair;
      (navigation as any).navigate('RepairDetails', { repair: updatedRepair });
    }
  };

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        facing={facing}
        ref={cameraRef}
      />

      <ButtonContainer style={styles.controls}>
        <SecondaryButton
          title="Cancel"
          onPress={() => navigation.goBack()}
        />

        <TouchableOpacity style={styles.captureBtn} onPress={takePicture}>
          <View style={styles.innerCircle} />
        </TouchableOpacity>

        <PrimaryButton
          title="Done"
          onPress={() => navigation.goBack()}
        />
      </ButtonContainer>
    </View>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D1B20',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  message: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 20,
  },
  camera: {
    width: width,
    height: width * (4 / 3),
    alignSelf: 'center',
  },
  controls: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  captureBtn: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  innerCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#1D1B20',
  }
});
