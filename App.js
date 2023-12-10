import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import LogowanieEkran from "./ekrany/logowanie/Logowanie-ekran";

export default function App() {
  return (
    <View style={styles.container}>
      <LogowanieEkran/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
