export const LOGIN_PATH = "Login";
import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";
import { TextInput } from "../components/auth/AuthShared";
import { CREATE_ACCOUNT_PATH } from "./CreateAccount";

export default function Login({ navigation }) {
  return (
    <AuthLayout>
      <TextInput
        placeholder="UserName"
        placeholderTextColor={"rgba(255,255,255,0.6)"}
        returnKeyType="next"
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor={"rgba(255,255,255,0.6)"}
        returnKeyType="done"
        secureTextEntry
        isLast={true}
      />
      <AuthButton text={"Login"} />
    </AuthLayout>
  );
}
