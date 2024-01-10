import React from 'react';
import { Text, StyleSheet, View, Pressable } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Pressable>
         <Text style={styles.text}>Join Group</Text>
      </Pressable>
      <Pressable>
         <Text style={styles.text}>Create Group</Text>
      </Pressable>
      <Pressable>
         <Text style={styles.text}>Login</Text>
      </Pressable>
      <Pressable>
         <Text style={styles.text}>Register</Text>
      </Pressable>
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

export default HomeScreen;