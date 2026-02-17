import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Repair, RepairsStackParamList } from '../types';
import RepairItem from '../components/RepairItem';
import ScreenTitle from '../components/ScreenTitle';
import Divider from '../components/Divider';
import { useTheme } from '../hooks/useTheme';
import { storage } from '../utils/storage';

export default function UpcomingRepairsScreen() {
  const [repairs, setRepairs] = useState<Repair[]>([]);
  const { isDark } = useTheme();
  const themeStyles = isDark ? darkStyles : lightStyles;
  const navigation = useNavigation<NativeStackNavigationProp<RepairsStackParamList>>();

  const loadRepairs = async () => {
    const data = await storage.load<Repair[]>('repairs');
    if (data) {
      setRepairs(data);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      loadRepairs();
    }, [])
  );

  return (
    <View style={themeStyles.container}>
      <ScreenTitle title="Upcoming Repairs" />
      <Divider label="Today" />
      <FlatList
        data={repairs}
        renderItem={({ item }) => (
          <RepairItem
            item={item}
            onPress={() => navigation.navigate('RepairDetails', { repair: item })}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
});
