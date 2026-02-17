import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ButtonContainer from '../components/ButtonContainer';
import PrimaryButton from '../components/PrimaryButton';
import RepairTaskItem from '../components/RepairTaskItem';
import ScreenTitle from '../components/ScreenTitle';
import { useTheme } from '../hooks/useTheme';
import { Repair, RepairsStackParamList, RepairTask } from '../types';
import { api, endpoints } from '../utils/api';
import { storage } from '../utils/storage';

type Props = NativeStackScreenProps<RepairsStackParamList, 'RepairDetails'>;

export default function RepairDetailsScreen({ route, navigation }: Props) {
  const { repair } = route.params;
  const [tasks, setTasks] = useState<RepairTask[]>(repair.tasks);
  const { isDark } = useTheme();
  const themeStyles = isDark ? darkStyles : lightStyles;

  const handleTaskStatus = async (task: RepairTask, status: 'yes' | 'no') => {
    const newTasks = tasks.filter((t) => t.id !== task.id);
    setTasks(newTasks);

    try {
      await api.post(endpoints.repairs, {
        repair_id: repair.id,
        task_id: task.id,
        status,
      });

      const allRepairs = (await storage.load<Repair[]>('repairs')) || [];
      const updatedRepairs = allRepairs.map((r) => {
        if (r.id === repair.id) {
          return { ...r, tasks: newTasks };
        }
        return r;
      });
      const filteredRepairs = updatedRepairs.filter(r => r.tasks.length > 0);
      await storage.save('repairs', updatedRepairs);
    } catch (e) {
      console.error(e);
    }
  };

  const handleOk = () => {
    navigation.popToTop();
  };

  return (
    <View style={themeStyles.container}>
      <ScreenTitle title={repair.licensePlate} />
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <RepairTaskItem item={item} onStatusChange={(status) => handleTaskStatus(item, status)} />
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
      <ButtonContainer>
        <PrimaryButton title="Ok" onPress={handleOk} />
      </ButtonContainer>
    </View>
  );
}

const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
});

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 20,
  },
});
