import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./views/HomePage";
import DetailPage from './views/DetailPage'
import DummyHomePage from './views/DummyHomePage'

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} >
				{/* <Stack.Screen name='Home' component={HomePage} /> */}
        <Stack.Screen name="DummyHome" component={DummyHomePage} />
        <Stack.Screen name="Detail" component={DetailPage} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
