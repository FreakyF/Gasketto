import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Repair } from '../types';
import { useTheme } from '../hooks/useTheme';

interface RepairItemProps {
  item: Repair;
  onPress: () => void;
}

export default function RepairItem({ item, onPress }: RepairItemProps) {
  const { isDark } = useTheme();
  const themeStyles = isDark ? darkStyles : lightStyles;

  return (
    <TouchableOpacity style={themeStyles.container} activeOpacity={0.7} onPress={onPress}>
      <Text style={[themeStyles.text, themeStyles.bold]}>{item.licensePlate}</Text>
      <Text style={themeStyles.text}>{item.time}</Text>
    </TouchableOpacity>
  );
}

const lightStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fef7ff',
    borderColor: '#cac4d0',
    borderWidth: 1,
    minWidth: '85%',
    borderRadius: 10,
    margin: 10,
    padding: 7,
    alignSelf: 'center',
  },
  text: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: '#000',
  },
  bold: {
    fontWeight: 'bold',
  },
});

const darkStyles = StyleSheet.create({
  container: {
    backgroundColor: '#30302f',
    borderColor: '#bdbab3',
    borderWidth: 1,
    minWidth: '85%',
    borderRadius: 10,
    margin: 10,
    padding: 7,
    alignSelf: 'center',
  },
  text: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: '#cfcecc',
  },
  bold: {
    fontWeight: 'bold',
  },
});
