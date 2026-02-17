import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../hooks/useTheme';

interface DividerProps {
  label: string;
}

export default function Divider({ label }: DividerProps) {
  const { isDark } = useTheme();
  const themeStyles = isDark ? darkStyles : lightStyles;

  return (
    <View style={themeStyles.wrapper}>
      <View style={themeStyles.line} />
      <Text style={themeStyles.label}>{label}</Text>
    </View>
  );
}

const lightStyles = StyleSheet.create({
  wrapper: {
    width: '75%',
    alignSelf: 'center',
    marginVertical: 10,
  },
  line: {
    backgroundColor: '#aaa',
    height: 1,
    width: '100%',
  },
  label: {
    fontSize: 10,
    paddingHorizontal: 10,
    paddingVertical: 2,
    color: '#000',
  },
});

const darkStyles = StyleSheet.create({
  wrapper: {
    width: '75%',
    alignSelf: 'center',
    marginVertical: 10,
  },
  line: {
    backgroundColor: '#aaa',
    height: 1,
    width: '100%',
  },
  label: {
    fontSize: 10,
    paddingHorizontal: 10,
    paddingVertical: 2,
    color: '#fff',
  },
});
