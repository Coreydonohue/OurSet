import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';

const MainContainer = () => {
  return (
    <View style={styles.container}>
      <HomeScreen/> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Your container styles here
  },
  text: {
    // Your text styles here
  },
});

export default MainContainer;