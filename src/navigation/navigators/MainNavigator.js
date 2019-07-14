import { createBottomTabNavigator } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
const MainNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen
  },
  Other: {
    screen: HomeScreen
  }
});

export default MainNavigator;
