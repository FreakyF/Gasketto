import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface SecondaryButtonProps extends TouchableOpacityProps {
  title: string;
}

export default function SecondaryButton({ title, style, ...props }: SecondaryButtonProps) {
  return (
    <TouchableOpacity style={[styles.button, style]} activeOpacity={0.7} {...props}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#EC928E',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontFamily: 'Roboto',
    fontWeight: '500',
  },
});
