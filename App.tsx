import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Stack from "./src/stacks";
import MyStack from "./src/stacks/MyStack";

export default function App() {
  return (
    <>
      <Stack />
      <StatusBar style="auto" />
    </>
  );
}
