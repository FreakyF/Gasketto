import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Visit, VisitsStackParamList } from '../types';
import ScreenTitle from '../components/ScreenTitle';
import Divider from '../components/Divider';
import ButtonContainer from '../components/ButtonContainer';
import SecondaryButton from '../components/SecondaryButton';
import PrimaryButton from '../components/PrimaryButton';
import { useTheme } from '../hooks/useTheme';
import { storage } from '../utils/storage';

type Props = NativeStackScreenProps<VisitsStackParamList, 'VisitDetails'>;

export default function VisitDetailsScreen({ route, navigation }: Props) {
  const { visit } = route.params;
  const { isDark } = useTheme();
  const themeStyles = isDark ? darkStyles : lightStyles;

  const handleStart = () => {
    navigation.navigate('VehicleDetails', { visit });
  };

  const handleCancel = async () => {
    try {
      const visits = await storage.load<Visit[]>('visits');
      if (visits) {
        const newVisits = visits.filter((v) => v.id !== visit.id);
        await storage.save('visits', newVisits);
      }
      navigation.goBack();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={themeStyles.container}>
      <ScreenTitle title={visit.time} />
      <Divider label="Client Data" />
      <Text style={themeStyles.text}>
        {visit.firstName} {visit.lastName}
      </Text>
      <Text style={themeStyles.text}>{visit.phoneNumber}</Text>
      <Text style={themeStyles.text}>{visit.address1}</Text>
      <Text style={themeStyles.text}>{visit.address2}</Text>
      <Divider label="Visit Description" />
      <View style={themeStyles.textView}>
        <Text style={themeStyles.textContainer}>{visit.description}</Text>
      </View>
      <ButtonContainer>
        <SecondaryButton title="Cancel Visit" onPress={handleCancel} />
        <PrimaryButton title="Start" onPress={handleStart} />
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
    paddingTop: 50,
  },
  text: {
    color: '#000',
    fontSize: 16,
    marginVertical: 2,
  },
  textView: {
    maxWidth: '75%',
    marginVertical: 10,
  },
  textContainer: {
    color: '#000',
  },
});

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  text: {
    color: '#e4e4e4',
    fontSize: 16,
    marginVertical: 2,
  },
  textView: {
    maxWidth: '75%',
    marginVertical: 10,
  },
  textContainer: {
    color: '#e4e4e4',
  },
});
