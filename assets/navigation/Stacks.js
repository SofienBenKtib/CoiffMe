import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../components/Home";
import Rendezvous from "../components/Rendezvous";
import Connexion from "../components/Connexion";
import Fidelite from "../components/Fidelite";
import Messages from "../components/Messages";
import Signup from "../components/Signup";
import Signuppro from "../components/Signuppro";
import Profil from "../components/Profil";
const Stack = createStackNavigator();
const Stacks = () => {
  return (
    <Stack.Navigator initialRouteName="Connexion">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Rendezvous" component={Rendezvous} />
      <Stack.Screen name="Connexion" component={Connexion} />
      <Stack.Screen name="Fidelite" component={Fidelite} />
      <Stack.Screen name="Messages" component={Messages} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Signuppro" component={Signuppro} />
      <Stack.Screen name="Profil" component={Profil} />
    </Stack.Navigator>
  );
};

export default Stacks;

const styles = StyleSheet.create({});
