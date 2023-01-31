import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailPage from "../views/DetailPage";
import ProfileTab from "./ProfileTab";

const Stack = createNativeStackNavigator();

export default function MainStack() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: "#ACE0F990",
					opacity: 0.3,
				},
				headerTintColor: "#1DA1F2",
				headerTitleStyle: {
					fontWeight: "bold",
				},
				headerTitleAlign: "center",
			}}
		>
			<Stack.Screen name='Taco-Aw' component={ProfileTab} />
			<Stack.Screen name='Detail' component={DetailPage} />
		</Stack.Navigator>
	);
}
