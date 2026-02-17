import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { MainDrawerParamList } from '../types';
import RepairsStack from './RepairsStack';
import VisitsStack from './VisitsStack';

const Drawer = createDrawerNavigator<MainDrawerParamList>();

export default function MainDrawer() {
  const { isDark } = useTheme();

  return (
    <Drawer.Navigator
      initialRouteName="VisitsStack"
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: isDark ? '#000' : '#fff',
          width: 240,
        },
        drawerLabelStyle: {
          color: isDark ? '#fff' : '#000',
        },
        swipeEdgeWidth: 50,
      }}
    >
      <Drawer.Screen
        name="VisitsStack"
        component={VisitsStack}
        options={{ title: 'Visits' }}
      />
      <Drawer.Screen
        name="RepairsStack"
        component={RepairsStack}
        options={{ title: 'Repairs' }}
      />
    </Drawer.Navigator>
  );
}
