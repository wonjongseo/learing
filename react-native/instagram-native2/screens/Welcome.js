export const WELCOME_PATH = "Welcome";
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { CREATE_ACCOUNT_PATH } from "./CreateAccount";
import { LOGIN_PATH } from "./Login";
import styled from "styled-components/native";
import { colors } from "../colors";
import AuthLayout from "../components/auth/AuthLayout";
import AuthButton from "../components/auth/AuthButton";

const LoginLink = styled.Text`
  color: ${colors.blue};
  font-weight: 600;
  margin-top: 20px;
  text-align: center;
`;

export default function Welcome({ navigation }) {
  const goToCreateAccount = () => navigation.navigate(CREATE_ACCOUNT_PATH);
  const goToLogin = () => navigation.navigate(LOGIN_PATH);
  return (
    <AuthLayout>
      <AuthButton
        disabled={false}
        onPress={goToCreateAccount}
        text="Create New Account"
      />
      <TouchableOpacity onPress={goToLogin}>
        <LoginLink>Log in</LoginLink>
      </TouchableOpacity>
    </AuthLayout>
  );
}
