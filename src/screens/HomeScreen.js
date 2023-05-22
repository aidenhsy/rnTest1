import React from 'react';
import {
  Text,
  StyleSheet,
  Button,
  View,
  TouchableOpacity,
  Linking,
} from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.textStyle}>This is the home screen</Text>
      <Button
        title="List"
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('List')}
      />
      <Button
        title="Images"
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Image')}
      />
      <TouchableOpacity
        style={styles.componentsButton}
        onPress={() => Linking.openURL('https://baidu.com')}
      >
        <Text style={styles.textStyle}>Go to components</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
  buttonStyle: {
    marginTop: 20,
  },
  componentsButton: {
    marginTop: 10,
  },
});

export default HomeScreen;
