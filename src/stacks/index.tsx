import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import UsersList from "../screens/UsersList";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="UsersList" component={UsersList} />
    </Stack.Navigator>
  );
}

export default MyStack;
