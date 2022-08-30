export const NOTIFICATIONS_PATH = "Notifications";
export const TAB_NOTIFICATIONS_PATH = "TabNotifications";
import React from "react";
import { Text, View } from "react-native";

export default function Notifications() {
  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white" }}>Notifications</Text>
    </View>
  );
}
