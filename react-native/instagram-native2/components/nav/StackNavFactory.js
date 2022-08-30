import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Feed, { TAB_FEED_PATH } from "../../screens/Feed";
import Search, { TAB_SEARCH_PATH } from "../../screens/Search";
import Notifications, {
  NOTIFICATIONS_PATH,
  TAB_NOTIFICATIONS_PATH,
} from "../../screens/Notifications";
import Me, { TAB_ME_PATH } from "../../screens/Me";
import Profile, { TAB_PROFILE_PATH } from "../../screens/Profile";
import Photo, { TAB_PHOTO_PATH } from "../../screens/Photo";
import { Image } from "react-native";

const Stack = createStackNavigator();

export default ({ screenName }) => {
  return (
    <Stack.Navigator
      // options={{
      //   modal: {
      //     headerMode: "screen",
      //   },
      // }}
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: "white",
        headerStyle: {
          shadowColor: "rgba(255,255,255,0.3)",
          backgroundColor: "black",
        },
      }}
    >
      {screenName === TAB_FEED_PATH ? (
        <Stack.Screen
          name={TAB_FEED_PATH}
          component={Feed}
          options={{
            headerTitle: () => (
              <Image
                style={{
                  flex: 1,
                  alignSelf: "center",
                }}
                resizeMode="contain"
                source={require("../../assets/logo.png")}
              />
            ),
          }}
        />
      ) : null}
      {screenName === TAB_SEARCH_PATH ? (
        <Stack.Screen name={TAB_SEARCH_PATH} component={Search} />
      ) : null}
      {screenName === TAB_NOTIFICATIONS_PATH ? (
        <Stack.Screen name={TAB_NOTIFICATIONS_PATH} component={Notifications} />
      ) : null}
      {screenName === TAB_ME_PATH ? (
        <Stack.Screen name={TAB_ME_PATH} component={Me} />
      ) : null}

      <Stack.Screen name={TAB_PROFILE_PATH} children={Profile} />
      <Stack.Screen name={TAB_PHOTO_PATH} children={Photo} />
    </Stack.Navigator>
  );
};
