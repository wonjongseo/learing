export const SEARCH_PATH = "Search";
export const TAB_SEARCH_PATH = "TabSearch";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { TAB_PHOTO_PATH } from "./Photo";

export default function Search({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate(TAB_PHOTO_PATH)}>
        <Text style={{ color: "white" }}>Photo</Text>
      </TouchableOpacity>
    </View>
  );
}
