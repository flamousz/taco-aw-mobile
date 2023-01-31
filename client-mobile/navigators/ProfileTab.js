import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomePage from "../views/HomePage";
import FoodsPage from "../views/FoodsPage";

const Tab = createBottomTabNavigator();

export default function ProfileTab() {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				headerShown: false,
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					if (route.name === "Home") {
						iconName = focused ? "ios-home" : "ios-home-outline";
					} else if (route.name === "Foods") {
						iconName = focused ? "fast-food" : "fast-food-outline";
					}

					return <Ionicons name={iconName} size={size} color={color} />;
				},
				tabBarActiveTintColor: "#1DA1F2",
				tabBarInactiveTintColor: "black",
				tabBarStyle: { backgroundColor: "#ACE0F9" },
			})}
		>
			<Tab.Screen name='Home' component={HomePage} />
			<Tab.Screen name='Foods' component={FoodsPage} />
		</Tab.Navigator>
	);
}
