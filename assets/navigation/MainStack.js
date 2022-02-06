import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//IMPORTING SCREENS
import Home from "../components/Home";
import Fidelite from "../components/Fidelite";
import Others from "../components/Others";
import Rendezvous from "../components/Rendezvous";
import colors from "../colors/Colors";
import Connexion from "../components/Connexion";
import Messages from "../components/Messages";
import MainContainer from "./MainContainer";

const Stack = createNativeStackNavigator();
const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Connexion">
        <Stack.Screen
          name="Connexion"
          component={Connexion}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Fidelite"
          component={Fidelite}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Others"
          component={Others}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Rendezvous"
          component={Rendezvous}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Messages"
          component={Messages}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainContainer"
          component={MainContainer}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
