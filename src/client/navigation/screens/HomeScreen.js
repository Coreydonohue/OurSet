import React from "react";
import { useState, useEffect } from "react";
import { Text, StyleSheet, View, Pressable, TextInput } from "react-native";
import { useAddUserMutation } from "../../reducers/api";

const HomeScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [register] = useAddUserMutation();
  // console.log('register ', register)

  const handleRegister = async () => {
    try {
      const response = await register({
        email: email,
        password: password,
      });
      console.log('response from register', response.data);
    } catch (err) {
      console.log("error during registration", err);
    }
  };

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

      <TextInput
        value={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholder="Email"
      />
      <TextInput
        value={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholder="Password"
        // secureTextEntry={true}
      />
      {/* <TextInput
        labelValue={confirmPassword}
        onChange={(userPassword) => setConfirmPassword(userPassword)}
        placeholder="Confirm Password"
        iconType="lock"
        secureTextEntry={true}
      /> */}
      <Pressable onPress={handleRegister} style={styles.btn}>
        <Text style={styles.btnText}>Register</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  btn: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default HomeScreen;
