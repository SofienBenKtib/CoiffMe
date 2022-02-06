import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//IMPORTING SCREENS
import Connexion from "./assets/components/Connexion";
import Fidelite from "./assets/components/Fidelite";
import Home from "./assets/components/Home";
import Others from "./assets/components/Others";
import colors from "./assets/colors/Colors";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Rendezvous from "./assets/components/Rendezvous";
import Messages from "./assets/components/Messages";
import Signup from "./assets/components/Signup";
import BtmTab from "./btm-tb";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Connexion'}>
        <Stack.Screen
            name="BtmTab"
            component={BtmTab}
            options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Connexion"
          component={Connexion}
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
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
