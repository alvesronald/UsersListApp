import React, { useCallback, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  Text,
  ActivityIndicator,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import UserInfoCard from "../../components/UserInfoCard";
import { api } from "../../services/api";
import { UserProps } from "../../types";



const UsersList: React.FC = () => {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [errors, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getUsers = async () => {
    setIsLoading(true);
    try {
      const response = await api.get<UserProps[]>("/users");

      const usersData = response.data;

      setUsers(usersData);
      setErrors("");
    } catch (error) {
      setErrors("Erro ao obter usuários.");
    } finally {
      setIsLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getUsers();

      return () => {
        setUsers([]);
        setErrors("");
        setIsLoading(false);
      };
    }, [])
  );

  const renderData = () => {
    if (!!errors) {
      return <Text style={styles.infoText}>{errors}</Text>;
    } else if (isLoading) {
      return (
        <ActivityIndicator
          size="large"
          testID="loading-users-list"
          style={{ marginTop: 10 }}
        />
      );
    } else {
      return (
        <FlatList
          data={users}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <UserInfoCard {...item} />}
          contentContainerStyle={{
            gap: 10,
            paddingVertical: 10,
          }}
          ListEmptyComponent={() => {
            return <Text style={styles.infoText}>Não possui usuários.</Text>;
          }}
          refreshing={isLoading}
          onRefresh={getUsers}
        />
      );
    }
  };

  return (
    <SafeAreaView style={styles.container} testID="usersList-screen-container">
      {renderData()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoText: {
    textAlign: "center",
    marginTop: 10,
  },
});

export default UsersList;
