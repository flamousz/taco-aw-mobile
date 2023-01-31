import { gql, useQuery } from "@apollo/client";
import {
	StyleSheet,
	FlatList,
	Button,
	Text,
	View,
	Image,
	ScrollView,
	StatusBar,
} from "react-native";
import Card from "../components/Card";

const GET_PRODUCTS = gql`
	query Query {
		getFoods {
			id
			name
			imgUrl
		}
	}
`;

export default function FoodsPage({ navigation }) {
	const { data, loading, error } = useQuery(GET_PRODUCTS);
	if (loading) {
		return (
			<View>
				<Text>loading</Text>
			</View>
		);
	}

	// console.log(data);
	const renderItem = ({ item }) => {
		return <Card post={item} />;
	};

	return (
		<View style={{ flex: 1 }}>
			<FlatList
				data={data.getFoods}
				renderItem={renderItem}
				style={{ padding: 5 }}
				numColumns={2}
			/>
		</View>
	);
}
