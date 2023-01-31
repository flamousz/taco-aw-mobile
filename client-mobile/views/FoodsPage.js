import { useQuery } from "@apollo/client";
import {
	FlatList,
	ImageBackground,
	ActivityIndicator,
} from "react-native";
import Card from "../components/Card";
import { GET_PRODUCTS } from "../quaries/foodQuaries";



export default function FoodsPage({ navigation }) {
	const { data, loading, error } = useQuery(GET_PRODUCTS);
	

	const renderItem = ({ item }) => {
		return <Card post={item} />;
	};

	return loading ? 
		<ActivityIndicator
			style={{
				textAlign: "center",
				justifyContent: "center",
				marginTop: 320,
			}}
		/>
	 : (
		<ImageBackground style={{ flex: 1 }} resizeMode='cover'
		source={require("../assets/Gradient.png")} >
			<FlatList
				data={data.getFoods}
				renderItem={renderItem}
				style={{ padding: 5 }}
				numColumns={2}
			/>
		</ImageBackground>
	);
}
