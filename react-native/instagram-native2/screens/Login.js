export const LOGIN_PATH = "Login";
import { gql, useMutation } from "@apollo/client";
import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { isLoggedInVar } from "../client";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";
import { TextInput } from "../components/auth/AuthShared";

const LOGIN_MUTATION = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      ok
      token
      error
    }
  }
`;

export default function Login({ route: { params } }) {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const onCompleted = (data) => {
    const {
      login: { ok, token, error },
    } = data;

    if (ok) {
      isLoggedInVar(true);
    }
  };
  const { register, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      username: params?.username,
      password: params?.password,
    },
  });

  const [loginMutation, { loading }] = useMutation(LOGIN_MUTATION, {
    onCompleted,
  });
  useEffect(() => {
    register("username");
    register("password");
  }, [register]);
  const onValid = (data) => {
    if (!loading) {
      loginMutation({
        variables: {
          ...data,
        },
      });
    }
  };
  const onNext = (nextOne) => {
    nextOne?.current?.focus();
  };
  return (
    <AuthLayout>
      <TextInput
        value={watch("username")}
        ref={usernameRef}
        placeholder="UserName"
        placeholderTextColor={"rgba(255,255,255,0.6)"}
        returnKeyType="next"
        onChangeText={(text) => setValue("username", text)}
        onSubmitEditing={() => onNext(passwordRef)}
      />
      <TextInput
        value={watch("password")}
        ref={passwordRef}
        placeholder="Password"
        placeholderTextColor={"rgba(255,255,255,0.6)"}
        returnKeyType="done"
        secureTextEntry
        isLast={true}
        onChangeText={(text) => setValue("password", text)}
        onSubmitEditing={handleSubmit(onValid)}
      />
      <AuthButton
        text={"Login"}
        loading={loading}
        disabled={!watch("password") || !watch("password")}
        onPress={handleSubmit(onValid)}
      />
    </AuthLayout>
  );
}
