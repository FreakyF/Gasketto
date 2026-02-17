import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RepairsStackParamList } from '../types';
import UpcomingRepairsScreen from '../screens/UpcomingRepairsScreen';
import RepairDetailsScreen from '../screens/RepairDetailsScreen';
import RepairNotesScreen from '../screens/RepairNotesScreen';
import CameraScreen from '../screens/CameraScreen';
import PhotoPreviewScreen from '../screens/PhotoPreviewScreen';

const Stack = createNativeStackNavigator<RepairsStackParamList>();

export default function RepairsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="UpcomingRepairs" component={UpcomingRepairsScreen} />
      <Stack.Screen name="RepairDetails" component={RepairDetailsScreen} />
      <Stack.Screen name="RepairNotes" component={RepairNotesScreen} />
      <Stack.Screen name="Camera" component={CameraScreen} />
      <Stack.Screen name="PhotoPreview" component={PhotoPreviewScreen} />
    </Stack.Navigator>
  );
}
