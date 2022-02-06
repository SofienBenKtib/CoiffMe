import colors from "./assets/colors/Colors";
import Home from "./assets/components/Home";
import {AntDesign, Ionicons, MaterialCommunityIcons, Octicons} from "@expo/vector-icons";
import Rendezvous from "./assets/components/Rendezvous";
import Fidelite from "./assets/components/Fidelite";
import Others from "./assets/components/Others";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

const BtmTab = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                activeBackgroundColor: colors.primary,
                activeTintColor: colors.white,
                inactiveTintColor: colors.primary,
                keyboardHidesTabBar: true,
            }}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <AntDesign
                            name="home"
                            size={30}
                            color={focused ? colors.white : colors.primary}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Rendezvous"
                component={Rendezvous}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <MaterialCommunityIcons
                            name="calendar-clock"
                            size={30}
                            color={focused ? colors.white : colors.primary}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Fidelite"
                component={Fidelite}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Octicons
                            name="credit-card"
                            size={30}
                            color={focused ? colors.white : colors.primary}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Others"
                component={Others}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons
                            name="md-ellipsis-vertical-sharp"
                            size={30}
                            color={focused ? colors.white : colors.primary}
                        />
                    ),
                }}
            />
        </Tab.Navigator>)
};
export default BtmTab