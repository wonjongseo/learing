export const WELCOME_PATH = "Welcome";
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { CREATE_ACCOUNT_PATH } from "./CreateAccount";
import { LOGIN_PATH } from "./Login";

export default function Welcome({ navigation }) {
  return (
    <View>
      <Text>Welcome</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate(CREATE_ACCOUNT_PATH)}
      >
        <Text>Go to Create Account</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate(LOGIN_PATH)}>
        <Text>Go to Login</Text>
      </TouchableOpacity>
    </View>
  );
}
