import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
//IMPORTING SCREENS
import Home from "../components/Home";
import Fidelite from "../components/Fidelite";
import Others from "../components/Others";
import Rendezvous from "../components/Rendezvous";
import colors from "../colors/Colors";
import Connexion from "../components/Connexion";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Messages from "../components/Messages";
//Screen names
const homeName = "Home";
const fideliteName = "Fidelite";
const rendezvousName = "Rendezvous";
const othersName = "Others";

//Tab navigator
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const MainContainer = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        //firstRoute={Connexion}
        initialRouteName={Home}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === rendezvousName) {
              iconName = focused ? "calendar-sharp" : "calendar-outline";
            } else if (rn === fideliteName) {
              iconName = focused ? "ellipsis-vertical" : "md-card-outline";
            } else if (rn === othersName) {
              iconName = focused ? "ellipsis-vertical" : "ellipsis-vertical";
            }
            return (
              <Ionicons
                name={iconName}
                size={size}
                color={focused ? colors.white : colors.primary}
              />
            );
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarActiveBackgroundColor: colors.primary,
            //tabBarActiveTintColor: colors.white,
            //tabBarInactiveTintColor: colors.primary,
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="Rendezvous"
          component={Rendezvous}
          options={{
            headerShown: false,
            tabBarActiveBackgroundColor: colors.primary,
            //tabBarActiveTintColor: colors.white,
            // tabBarInactiveTintColor: colors.primary,
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="Fidelité"
          component={Fidelite}
          options={{
            headerShown: false,
            tabBarActiveBackgroundColor: colors.primary,
            // tabBarActiveTintColor: colors.white,
            //tabBarInactiveTintColor: colors.primary,
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="Others"
          component={Others}
          options={{
            headerShown: false,
            tabBarActiveBackgroundColor: colors.primary,
            // tabBarActiveTintColor: colors.white,
            //  tabBarInactiveTintColor: colors.primary,
            tabBarShowLabel: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainContainer;

const styles = StyleSheet.create({});
