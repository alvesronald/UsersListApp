import React from "react";
import { View, StyleSheet } from "react-native";
import Card from "../../components/Card";

const UsersList = () => {
  return (
    <View style={styles.container}>
      <Card email="odeoi@yahoo.com" user="Ronald Alves" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});

export default UsersList;
