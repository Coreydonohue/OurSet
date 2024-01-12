import React from "react";
import { useState, useEffect } from "react";
import { Text, StyleSheet, View, Pressable, TextInput } from "react-native";
import { useAddUserMutation } from "../../reducers/api";

const HomeScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [register] = useAddUserMutation();

  const handleRegister = async () => {
    try {
      await register({
        email: email,
        password: password,
      });
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
        labelValue={email}
        onChange={(userEmail) => setEmail(userEmail)}
        placeholder="Email"
        iconType="user"
        inputMode="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        labelValue={password}
        onChange={(userPassword) => setPassword(userPassword)}
        placeholder="Password"
        iconType="lock"
        secureTextEntry={true}
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
