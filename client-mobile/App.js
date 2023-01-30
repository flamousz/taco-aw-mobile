import { NavigationContainer } from "@react-navigation/native";
import { ApolloProvider } from "@apollo/client";
import MainStack from "./navigators/MainStack";
import client from "./src/config/apolloConfig";

export default function App() {
	return (
		<ApolloProvider client={client}>
			<NavigationContainer>
				<MainStack />
			</NavigationContainer>
		</ApolloProvider>
	);
}
