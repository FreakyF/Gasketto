import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { VisitsStackParamList } from '../types';
import UpcomingVisitsScreen from '../screens/UpcomingVisitsScreen';
import VisitDetailsScreen from '../screens/VisitDetailsScreen';
import VehicleDetailsScreen from '../screens/VehicleDetailsScreen';
import VehicleConditionScreen from '../screens/VehicleConditionScreen';
import CameraScreen from '../screens/CameraScreen';
import PhotoPreviewScreen from '../screens/PhotoPreviewScreen';

const Stack = createNativeStackNavigator<VisitsStackParamList>();

export default function VisitsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="UpcomingVisits" component={UpcomingVisitsScreen} />
      <Stack.Screen name="VisitDetails" component={VisitDetailsScreen} />
      <Stack.Screen name="VehicleDetails" component={VehicleDetailsScreen} />
      <Stack.Screen name="VehicleCondition" component={VehicleConditionScreen} />
      <Stack.Screen name="Camera" component={CameraScreen} />
      <Stack.Screen name="PhotoPreview" component={PhotoPreviewScreen} />
    </Stack.Navigator>
  );
}
