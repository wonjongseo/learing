export const LOGIN_PATH = "Login";
import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { CREATE_ACCOUNT_PATH } from "./CreateAccount";

export default function Login({ navigation }) {
  return (
    <View>
      <Text>Login</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate(CREATE_ACCOUNT_PATH)}
      >
        <View>
          <Text>Go to Create Account</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
