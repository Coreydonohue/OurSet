import React from "react";
import { useState, useEffect } from "react";
import { Text, StyleSheet, View, Pressable, TextInput } from "react-native";
import { useAddUserMutation } from "../../reducers/api";

const HomeScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [groupCode, setGroupCode] = useState("");

  const [register] = useAddUserMutation();
  // console.log('register ', register)

  const handleRegister = async () => {
    try {
      const response = await register({
        email: email,
        password: password,
      });
      console.log("response from register", response.data);
    } catch (err) {
      console.log("error during registration", err);
    }
  };

  return (
    <View style={styles.container}>
      {/* join group  */}
      <View style={styles.joinGroup}>
        <TextInput
          value={groupCode}
          onChangeText={(code) => setGroupCode(code)}
          placeholder="Group Code"
          style={styles.input}
          // secureTextEntry={true}
        />
        <Pressable style={styles.btn}>
          <Text style={styles.text}>Join Group</Text>
        </Pressable>
      </View>
      {/* join group  */}

      <Pressable style={styles.btn}>
        <Text style={styles.text}>Create Group</Text>
      </Pressable>
      <Pressable style={styles.btn}>
        <Text style={styles.text}>Login</Text>
      </Pressable>

      <TextInput
        value={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholder="Email"
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholder="Password"
        style={styles.input}
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
  joinGroup: {
    display: "flex",
    flexDirection: "row",
  },
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
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 8,
    fontSize: 16,
    color: "#333",
  },
});

export default HomeScreen;
