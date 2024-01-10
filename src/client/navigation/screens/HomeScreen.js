import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
         <Text style={styles.text}>Join Group</Text>
      </TouchableOpacity>
      <TouchableOpacity>
         <Text style={styles.text}>Create Group</Text>
      </TouchableOpacity>
      <TouchableOpacity>
         <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity>
         <Text style={styles.text}>Register</Text>
      </TouchableOpacity>
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