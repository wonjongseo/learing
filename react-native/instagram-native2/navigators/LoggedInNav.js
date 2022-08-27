import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed, { FEED_PATH } from "../screens/Feed";

const Tabs = createBottomTabNavigator();

export default () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name={FEED_PATH} component={Feed} />
    </Tabs.Navigator>
  );
};
