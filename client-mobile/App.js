import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from "./views/HomePage";

const Stack = createNativeStackNavigator()

export default function App() {
	return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Home" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>

	);
}

