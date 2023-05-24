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
      <Button title="List" onPress={() => navigation.navigate('List')} />
      <Button title="Images" onPress={() => navigation.navigate('Image')} />
      <Button title="Counter" onPress={() => navigation.navigate('Counter')} />
      <Button title="Color" onPress={() => navigation.navigate('Color')} />
      <Button title="Square" onPress={() => navigation.navigate('Square')} />
      <Button title="Text" onPress={() => navigation.navigate('Text')} />
      <Button title="Laylout" onPress={() => navigation.navigate('Layout')} />
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
