import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const TextScreen = () => {
  return (
    <View>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default TextScreen;
