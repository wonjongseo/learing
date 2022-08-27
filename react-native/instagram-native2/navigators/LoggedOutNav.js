import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import CreateAccount, { CREATE_ACCOUNT_PATH } from "../screens/CreateAccount";
import Login, { LOGIN_PATH } from "../screens/Login";
import Welcome, { WELCOME_PATH } from "../screens/Welcome";

const Stack = createStackNavigator();

export default function LoggedOutNav() {
  return (
    <Stack.Navigator screenOptions={{ headerBackTitleVisible: false }}>
      <Stack.Screen name={WELCOME_PATH} component={Welcome} />
      <Stack.Screen name={LOGIN_PATH} component={Login} />
      <Stack.Screen name={CREATE_ACCOUNT_PATH} component={CreateAccount} />
    </Stack.Navigator>
  );
}
