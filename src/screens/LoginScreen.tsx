import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import ScreenTitle from '../components/ScreenTitle';
import SmallInput from '../components/SmallInput';
import { useTheme } from '../hooks/useTheme';
import { RootStackParamList, User, Visit } from '../types';
import { api, endpoints } from '../utils/api';
import { storage } from '../utils/storage';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: Props) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [warning, setWarning] = useState(false);
  const { isDark } = useTheme();
  const themeStyles = isDark ? darkStyles : lightStyles;

  const initializeData = async () => {
    const visits: Visit[] = [
      {
        id: 101,
        firstName: 'John',
        lastName: 'Smith',
        phoneNumber: 555010203,
        address1: '123 Maple Street',
        address2: 'Warsaw, 00-001',
        description: 'Power window motor failure - left front door',
        time: '08:00 - 10:00',
        photos: [],
      },
      {
        id: 102,
        firstName: 'Emily',
        lastName: 'Johnson',
        phoneNumber: 555010405,
        address1: '45 Oak Lane',
        address2: 'Cracow, 31-002',
        description: 'Suspension noise: knocking sound when driving over bumps',
        time: '10:00 - 11:30',
        photos: [],
      },
      {
        id: 103,
        firstName: 'Michael',
        lastName: 'Brown',
        phoneNumber: 555010607,
        address1: '88 Pine Avenue',
        address2: 'Wroclaw, 50-003',
        description: 'Brake system check: spongy pedal and low fluid warning',
        time: '13:00 - 15:00',
        photos: [],
      },
      {
        id: 104,
        firstName: 'Sarah',
        lastName: 'Davis',
        phoneNumber: 555010809,
        address1: '12 Industrial Way',
        address2: 'Gdansk, 80-004',
        description: 'Annual safety inspection and oil change service',
        time: '15:30 - 17:00',
        photos: [],
      },
    ];

    await storage.remove('visits');
    await storage.remove('vehicle_condition');
    await storage.remove('repairs');
    await storage.save('visits', visits);
  };

  const validateLogin = () => {
    api.get<User[]>(endpoints.login)
      .then((res) => {
        let found = false;
        if (Array.isArray(res.data)) {
          res.data.forEach((user) => {
            if (login === user.username && password === user.password) {
              found = true;
            }
          });
        }

        if (found) {
          setWarning(false);
          initializeData().then(() => {
            navigation.replace('Main');
          });
        } else {
          setWarning(true);
        }
      })
      .catch((e) => {
        console.log(e);
        setWarning(true);
      });
  };

  return (
    <View style={themeStyles.container}>
      <ScreenTitle title="Login" />
      <SmallInput label="Login" onChangeText={setLogin} placeholder="Enter login" />
      <SmallInput
        label="Password"
        onChangeText={setPassword}
        secureTextEntry={true}
        placeholder="Enter password"
      />
      <PrimaryButton title="Log In" onPress={validateLogin} style={{ marginTop: 20 }} />
      {warning ? (
        <Text style={themeStyles.warningText}>Invalid login or password</Text>
      ) : null}
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
  warningText: {
    color: 'red',
    marginTop: 10,
  },
});

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
  warningText: {
    color: '#e4e4e4',
    marginTop: 10,
  },
});
