export const FEED_PATH = "Feed";
export const TAB_FEED_PATH = "TabFeed";
import React from "react";
import { Text, View } from "react-native";

export default function Feed() {
  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white" }}>Feed</Text>
    </View>
  );
}
