export const PHOTO_PATH = "Photo";
export const TAB_PHOTO_PATH = "TabPhoto";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { TAB_PROFILE_PATH } from "./Profile";

export default function Photo({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate(TAB_PROFILE_PATH)}>
        <Text style={{ color: "white" }}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}
