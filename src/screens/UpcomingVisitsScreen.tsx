import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Divider from '../components/Divider';
import ScreenTitle from '../components/ScreenTitle';
import VisitItem from '../components/VisitItem';
import { useTheme } from '../hooks/useTheme';
import { Visit, VisitsStackParamList } from '../types';
import { storage } from '../utils/storage';

export default function UpcomingVisitsScreen() {
  const [visits, setVisits] = useState<Visit[]>([]);
  const { isDark } = useTheme();
  const themeStyles = isDark ? darkStyles : lightStyles;
  const navigation = useNavigation<NativeStackNavigationProp<VisitsStackParamList>>();

  const loadVisits = async () => {
    const data = await storage.load<Visit[]>('visits');
    if (data) {
      setVisits(data);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      loadVisits();
    }, [])
  );

  return (
    <View style={themeStyles.container}>
      <ScreenTitle title="Upcoming Visits" />
      <Divider label="Today" />
      <FlatList
        data={visits}
        renderItem={({ item }) => (
          <VisitItem
            item={item}
            onPress={() => navigation.navigate('VisitDetails', { visit: item })}
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
