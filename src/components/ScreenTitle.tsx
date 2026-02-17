import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { useTheme } from '../hooks/useTheme';

interface ScreenTitleProps {
  title: string;
  size?: number;
}

export default function ScreenTitle({ title, size = 45 }: ScreenTitleProps) {
  const { isDark } = useTheme();
  const themeStyles = isDark ? darkStyles : lightStyles;

  return (
    <Text style={[themeStyles.title, { fontSize: size }]}>{title}</Text>
  );
}

const lightStyles = StyleSheet.create({
  title: {
    fontFamily: 'Roboto',
    textAlign: 'center',
    margin: 20,
    color: '#000',
  },
});

const darkStyles = StyleSheet.create({
  title: {
    fontFamily: 'Roboto',
    textAlign: 'center',
    margin: 20,
    color: '#fff',
  },
});
