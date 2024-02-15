import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { UserProps } from "../../types";



const UserInfoCard = ({ name, email }: UserProps) => {
  return (
    <View style={styles.container} testID="usersList-card">
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3F63B5",
    height: 120,
    width: "90%",
    borderRadius: 20,
    padding: 15,
    gap: 16,
    justifyContent: "center",
    alignSelf: "center",
  },
  text: {
    color: "#FFF",
    fontSize: 17,
  },
});

export default UserInfoCard;
