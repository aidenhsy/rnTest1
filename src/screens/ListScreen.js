import React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'friend 1' },
    { name: 'friend 2' },
    { name: 'friend 3' },
    { name: 'friend 4' },
    { name: 'friend 5' },
    { name: 'friend 6' },
    { name: 'friend 7' },
  ];
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={friends}
      keyExtractor={(friend) => friend.name}
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    marginVertical: 50,
  },
});

export default ListScreen;
