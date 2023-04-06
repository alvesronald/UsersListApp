import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import UsersList from "../screens/UsersList";

export type MyStackProps = {
  Home: undefined;
  UsersList: undefined;
};

export const Stack = createStackNavigator<MyStackProps>();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="UsersList" component={UsersList} />
    </Stack.Navigator>
  );
}

export default MyStack;
