import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RepairTask } from '../types';
import { useTheme } from '../hooks/useTheme';

interface RepairTaskItemProps {
  item: RepairTask;
  onStatusChange: (status: 'yes' | 'no') => void;
}

export default function RepairTaskItem({ item, onStatusChange }: RepairTaskItemProps) {
  const { isDark } = useTheme();
  const themeStyles = isDark ? darkStyles : lightStyles;

  return (
    <View style={themeStyles.container}>
      <Text style={themeStyles.listItem}>{item.name}</Text>
      <Text style={themeStyles.description}>{item.description}</Text>
      <Text style={themeStyles.doneText}>Completed:</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonNo}
          activeOpacity={0.7}
          onPress={() => onStatusChange('no')}
        >
          <Text style={styles.buttonText}>No</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonYes}
          activeOpacity={0.7}
          onPress={() => onStatusChange('yes')}
        >
          <Text style={styles.buttonTextWhite}>Yes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    width: '100%',
  },
  buttonNo: {
    backgroundColor: '#EC928E',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 25,
  },
  buttonYes: {
    backgroundColor: '#6750a4',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 25,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'black',
  },
  buttonTextWhite: {
    fontWeight: 'bold',
    color: 'white',
  },
});

const lightStyles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: '#FEF7FF',
    width: '90%',
    alignSelf: 'center',
    marginBottom: 20,
    paddingVertical: 10,
  },
  listItem: {
    fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 24,
    paddingTop: 10,
    paddingLeft: 20,
    color: '#000',
  },
  description: {
    fontFamily: 'Roboto',
    fontSize: 14,
    lineHeight: 20,
    paddingLeft: 20,
    color: '#000',
  },
  doneText: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 20,
    paddingLeft: 20,
    marginTop: 10,
    color: '#000',
  },
});

const darkStyles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: '#30302f',
    width: '90%',
    alignSelf: 'center',
    marginBottom: 20,
    paddingVertical: 10,
  },
  listItem: {
    fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 24,
    paddingTop: 10,
    paddingLeft: 20,
    color: '#e4e4e4',
  },
  description: {
    fontFamily: 'Roboto',
    fontSize: 14,
    lineHeight: 20,
    paddingLeft: 20,
    color: '#e4e4e4',
  },
  doneText: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 20,
    paddingLeft: 20,
    marginTop: 10,
    color: '#e4e4e4',
  },
});
