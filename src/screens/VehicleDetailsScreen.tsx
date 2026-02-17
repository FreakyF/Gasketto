import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { VisitsStackParamList, Visit } from '../types';
import ScreenTitle from '../components/ScreenTitle';
import SmallInput from '../components/SmallInput';
import ButtonContainer from '../components/ButtonContainer';
import SecondaryButton from '../components/SecondaryButton';
import PrimaryButton from '../components/PrimaryButton';
import { useTheme } from '../hooks/useTheme';

type Props = NativeStackScreenProps<VisitsStackParamList, 'VehicleDetails'>;

export default function VehicleDetailsScreen({ route, navigation }: Props) {
  const { visit } = route.params;
  const { isDark } = useTheme();
  const themeStyles = isDark ? darkStyles : lightStyles;

  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [licensePlate, setLicensePlate] = useState('');
  const [engine, setEngine] = useState('');
  const [isGas, setIsGas] = useState(false);
  const [vin, setVin] = useState('');
  const [year, setYear] = useState('');

  const handleNext = () => {
    const updatedVisit: Visit = {
      ...visit,
      brand,
      model,
      licensePlate,
      engine,
      gas: isGas ? 'yes' : 'no',
      vin,
      year,
      photos: visit.photos || [],
    };
    navigation.navigate('VehicleCondition', { visit: updatedVisit });
  };

  return (
    <View style={themeStyles.container}>
      <ScreenTitle title="Vehicle Data" />
      <SmallInput label="Brand" placeholder="Enter brand" onChangeText={setBrand} />
      <SmallInput label="Model" placeholder="Enter model" onChangeText={setModel} />
      <SmallInput label="License Plate" placeholder="Enter plate" onChangeText={setLicensePlate} />
      <SmallInput label="Engine" placeholder="Enter engine" onChangeText={setEngine} />
      
      <View style={themeStyles.switchContainer}>
        <Text style={themeStyles.switchLabel}>LPG Engine</Text>
        <Switch
          trackColor={{ false: '#6f59ab', true: '#8154f7' }}
          thumbColor="#6750a4"
          onValueChange={setIsGas}
          value={isGas}
        />
      </View>

      <SmallInput label="VIN" placeholder="Enter VIN" onChangeText={setVin} />
      <SmallInput label="Year" placeholder="Enter year" onChangeText={setYear} />

      <ButtonContainer>
        <SecondaryButton title="Back" onPress={() => navigation.goBack()} />
        <PrimaryButton title="Next" onPress={handleNext} />
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
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 204,
    marginBottom: 10,
  },
  switchLabel: {
    fontFamily: 'Roboto',
    fontSize: 16,
    color: '#000',
  },
});

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 204,
    marginBottom: 10,
  },
  switchLabel: {
    fontFamily: 'Roboto',
    fontSize: 16,
    color: '#e4e4e4',
  },
});
