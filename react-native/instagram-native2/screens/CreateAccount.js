export const CREATE_ACCOUNT_PATH = "CreateAccount";
import React, { useRef } from "react";

import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";
import { TextInput } from "../components/auth/AuthShared";

export default function CreateAccount() {
  const lastNameRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const onNext = (nextOne) => {
    nextOne?.current?.focus();
  };

  const onDone = () => {
    alert("Good");
  };
  return (
    <AuthLayout>
      <TextInput
        autoFocus
        placeholder="First Name"
        placeholderTextColor={"rgba(255,255,255,0.6)"}
        returnKeyType="next"
        onSubmitEditing={() => onNext(lastNameRef)}
      />

      <TextInput
        ref={lastNameRef}
        placeholder="Last Name"
        placeholderTextColor={"rgba(255,255,255,0.6)"}
        returnKeyType="next"
        onSubmitEditing={() => onNext(usernameRef)}
      />

      <TextInput
        ref={usernameRef}
        placeholder="UserName"
        placeholderTextColor={"rgba(255,255,255,0.6)"}
        returnKeyType="next"
        onSubmitEditing={() => onNext(emailRef)}
      />

      <TextInput
        ref={emailRef}
        placeholder="Email"
        placeholderTextColor={"rgba(255,255,255,0.6)"}
        keyboardType="email-address"
        returnKeyType="next"
        onSubmitEditing={() => onNext(passwordRef)}
      />
      <TextInput
        ref={passwordRef}
        placeholder="Password"
        placeholderTextColor={"rgba(255,255,255,0.6)"}
        returnKeyType="done"
        secureTextEntry
        onSubmitEditing={onDone}
        isLast={true}
      />
      <AuthButton disabled={true} onPress={() => null} text="Create Account" />
    </AuthLayout>
  );
}
