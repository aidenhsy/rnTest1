import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const LayoutScreen = () => {
  return (
    <View style={{ display: 'flex', height: 400 }}>
      <View style={{ backgroundColor: 'red', height: 40 }} />
      <View
        style={{
          backgroundColor: 'green',
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        }}
      />
      <View style={{ backgroundColor: 'blue', height: 40 }} />
    </View>
  );
};

export default LayoutScreen;
