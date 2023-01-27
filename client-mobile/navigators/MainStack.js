import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import HomePage from "./views/HomePage";
import DetailPage from "../views/DetailPage";
import DummyHomePage from "../views/DummyHomePage";
import ProfileTab from "./ProfileTab";

const Stack = createNativeStackNavigator();

export default function MainStack() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: "#4285F4",
				},
				headerTintColor: "#fff",
				headerTitleStyle: {
					fontWeight: "bold",
				},
                headerTitleAlign: 'center'
			}}
		>
			{/* <Stack.Screen name='Home' component={HomePage} /> */}
			<Stack.Screen  name='Taco-Aw' component={ProfileTab} />
			<Stack.Screen name='DummyHome' component={DummyHomePage} />
			<Stack.Screen name='Detail' component={DetailPage} />
		</Stack.Navigator>
	);
}
