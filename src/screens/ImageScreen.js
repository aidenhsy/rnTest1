import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title="forest" image={require('../../assets/forest.jpg')} />
      <ImageDetail title="beach" image={require('../../assets/beach.jpg')} />
      <ImageDetail
        title="mountain"
        image={require('../../assets/mountain.jpg')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ImageScreen;
