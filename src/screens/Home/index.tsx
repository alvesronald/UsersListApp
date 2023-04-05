import React from "react";
import { SafeAreaView, StyleSheet, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MyStackProps } from "../../stacks/MyStack";

export type HomeScreenProps = NativeStackScreenProps<MyStackProps, "Home">;

const Home = ({ navigation }: HomeScreenProps) => {
  return (
    <SafeAreaView style={styles.container} testID="home-screen-container">
      <Button
        title="Navegar para listagem de usuários"
        onPress={() => navigation.navigate("UsersList")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
