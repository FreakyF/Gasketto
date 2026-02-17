import React from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';
import { useTheme } from '../hooks/useTheme';

interface SmallInputProps extends TextInputProps {
  label: string;
}

export default function SmallInput({ label, style, ...props }: SmallInputProps) {
  const { isDark } = useTheme();
  const themeStyles = isDark ? darkStyles : lightStyles;
  const placeholderColor = isDark ? '#c9c9c9' : '#49454F';

  return (
    <View style={themeStyles.container}>
      <Text style={themeStyles.label}>{label}</Text>
      <TextInput
        style={[themeStyles.input, style]}
        placeholderTextColor={placeholderColor}
        {...props}
      />
    </View>
  );
}

const lightStyles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '80%',
    alignSelf: 'center',
  },
  label: {
    minWidth: '50%',
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 2,
    color: '#49454F',
    fontFamily: 'Roboto',
  },
  input: {
    minWidth: '50%',
    fontSize: 16,
    lineHeight: 24,
    color: '#49454F',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ccc',
    padding: 10,
    backgroundColor: 'transparent',
  },
});

const darkStyles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '80%',
    alignSelf: 'center',
  },
  label: {
    minWidth: '50%',
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 2,
    color: '#c9c9c9',
    fontFamily: 'Roboto',
  },
  input: {
    minWidth: '50%',
    fontSize: 16,
    lineHeight: 24,
    color: '#e4e4e4',
    backgroundColor: '#30302f',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ccc',
    padding: 10,
  },
});
