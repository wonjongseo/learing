import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import StackNavFactory from "../components/nav/StackNavFactory";
import TabIcon from "../components/nav/TabIcon";
import { FEED_PATH, TAB_FEED_PATH } from "../screens/Feed";
import { ME_PATH, TAB_ME_PATH } from "../screens/Me";
import {
  NOTIFICATIONS_PATH,
  TAB_NOTIFICATIONS_PATH,
} from "../screens/Notifications";
import { SEARCH_PATH, TAB_SEARCH_PATH } from "../screens/Search";

const Tabs = createBottomTabNavigator();

export default () => {
  return (
    <Tabs.Navigator
      headerShown={() => false}
      screenOptions={{
        tabBarShowLabel: false,
        headerBackTitleVisible: false,
        headerShown: false,

        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "black",
          borderTopColor: "rgba(255,255,255,0.3)",
        },
      }}
    >
      <Tabs.Screen
        name={FEED_PATH}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon focused={focused} color={color} iconName={"home"} />
          ),
        }}
      >
        {() => <StackNavFactory screenName={TAB_FEED_PATH} />}
      </Tabs.Screen>
      <Tabs.Screen
        name={SEARCH_PATH}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon focused={focused} color={color} iconName={"search"} />
          ),
        }}
      >
        {() => <StackNavFactory screenName={TAB_SEARCH_PATH} />}
      </Tabs.Screen>
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
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon focused={focused} color={color} iconName={"heart"} />
          ),
        }}
      >
        {() => <StackNavFactory screenName={TAB_NOTIFICATIONS_PATH} />}
      </Tabs.Screen>
      <Tabs.Screen
        name={ME_PATH}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon focused={focused} color={color} iconName={"person"} />
          ),
        }}
      >
        {() => <StackNavFactory screenName={TAB_ME_PATH} />}
      </Tabs.Screen>
    </Tabs.Navigator>
  );
};
