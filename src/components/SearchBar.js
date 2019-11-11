import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons'

const SearchBar = () => {
  return (
    <View style={styles.background}>
      <Feather name='search' size={30}/>
      <Text>SearchBar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#f0eeee',
    marginVertical: 5,
    marginHorizontal: 20,
    height: 40,
    borderRadius: 5,
    padding: 2
  }
});

export default SearchBar;