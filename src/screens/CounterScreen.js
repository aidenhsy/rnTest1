import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Button title="Increase" onPress={() => setCount(count + 1)} />
      <Button title="Decrease" onPress={() => setCount(count - 1)} />
      <Text>Current Count</Text>
      <Text style={{ fontSize: 48 }}>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 30,
    alignItems: 'center',
    gap: 20,
  },
});

export default CounterScreen;
