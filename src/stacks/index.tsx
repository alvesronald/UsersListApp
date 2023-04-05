import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import MyStack from "./MyStack";

export default function Stack() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
