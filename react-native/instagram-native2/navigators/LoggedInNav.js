import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import TabIcon from "../components/nav/TabIcon";
import Feed, { FEED_PATH } from "../screens/Feed";
import Notifications, { NOTIFICATIONS_PATH } from "../screens/Notifications";
import Profile, { PROFILE_PATH } from "../screens/Profile";
import Search, { SEARCH_PATH } from "../screens/Search";

const Tabs = createBottomTabNavigator();

export default () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        // tabBarActiveTintColor: "whtie",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "black",
          borderTopColor: "rgba(255,255,255,0.3)",
        },
      }}
    >
      <Tabs.Screen
        name={FEED_PATH}
        component={Feed}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon focused={focused} color={color} iconName={"home"} />
          ),
        }}
      />
      <Tabs.Screen
        name={SEARCH_PATH}
        component={Search}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon focused={focused} color={color} iconName={"search"} />
          ),
        }}
      />
      <Tabs.Screen
        name={"Camera"}
        component={View}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon focused={focused} color={color} iconName={"camera"} />
          ),
        }}
      />
      <Tabs.Screen
        name={NOTIFICATIONS_PATH}
        component={Notifications}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon focused={focused} color={color} iconName={"heart"} />
          ),
        }}
      />
      <Tabs.Screen
        name={PROFILE_PATH}
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon focused={focused} color={color} iconName={"person"} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};
