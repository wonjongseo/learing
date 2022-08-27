export const SEARCH_PATH = "Search";
import React from "react";
import { Text, View } from "react-native";

export default function Search() {
  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white" }}>Search</Text>
    </View>
  );
}
