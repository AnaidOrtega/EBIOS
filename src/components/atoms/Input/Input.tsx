import React, {FC, ReactNode, useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
export interface InputProps {
  item: {secure: boolean | undefined; label: any; placeholder: any; key: any};
  change: any;
}

import {elevation10} from '../../../styles/globals';
export const Input: FC<InputProps> = item => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{item.item.label}</Text>
      <TextInput
        placeholder={item.item.placeholder}
        placeholderTextColor="grey"
        autoCapitalize={'none'}
        secureTextEntry={item.item.secure}
        style={styles.input}
        onChangeText={text => {
          item.change(text, item.item.key);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    textTransform: 'uppercase',
    fontSize: 12,
    color: 'grey',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    color: 'black',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
    borderColor: 'lightgrey',
    borderWidth: 0.5,
    ...elevation10,
    padding: 10,
    marginVertical: 10,
  },
});
