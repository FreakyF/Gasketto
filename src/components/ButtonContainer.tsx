import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

export default function ButtonContainer({ children, style, ...props }: ViewProps) {
  return (
    <View style={[styles.container, style]} {...props}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
    width: 321,
    alignSelf: 'center',
  },
});
