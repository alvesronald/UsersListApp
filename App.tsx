import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import MyStack from "./src/stacks";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <MyStack />
    </NavigationContainer>
  );
}
