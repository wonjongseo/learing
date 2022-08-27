export const LOGIN_PATH = "Login";
import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";
import { TextInput } from "../components/auth/AuthShared";

export default function Login() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const { register, handleSubmit, setValue } = useForm();
  useEffect(() => {
    register("username");
    register("password");
  }, [register]);
  const onValid = (data) => {
    console.log(data);
  };
  const onNext = (nextOne) => {
    nextOne?.current?.focus();
  };
  return (
    <AuthLayout>
      <TextInput
        ref={usernameRef}
        placeholder="UserName"
        placeholderTextColor={"rgba(255,255,255,0.6)"}
        returnKeyType="next"
        onChangeText={(text) => setValue("username", text)}
        onSubmitEditing={() => onNext(passwordRef)}
      />
      <TextInput
        ref={passwordRef}
        placeholder="Password"
        placeholderTextColor={"rgba(255,255,255,0.6)"}
        returnKeyType="done"
        secureTextEntry
        isLast={true}
        onChangeText={(text) => setValue("password", text)}
        onSubmitEditing={handleSubmit(onValid)}
      />
      <AuthButton text={"Login"} onPress={handleSubmit(onValid)} />
    </AuthLayout>
  );
}
