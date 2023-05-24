import { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const ColorAdjuster = ({ color, currentValue, add, minus }) => {
  return (
    <View style={{ display: 'flex', flexDirection: 'row', gap: 30 }}>
      <Button title="-" onPress={minus} />
      <Text>{`${color}: ${currentValue}`}</Text>
      <Button title="+" onPress={add} />
    </View>
  );
};

export default ColorAdjuster;
