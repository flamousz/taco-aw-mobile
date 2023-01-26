import { Text, Image, View, ScrollView } from "react-native";
import { useState, useEffect } from "react";

export default function DetailPage({ navigation, route }) {
	const { id } = route.params;
	const [data, setData] = useState({});
	useEffect(() => {
		fetch(`https://taco-aw.foxhub.space/items/${id}`)
			.then((res) => res.json())
			.then((data) => setData(data))
			.catch((err) => console.log(err));
	}, []);
	console.log(data, "<< ini food");

	return (
		<ScrollView style={{ flex: 1, backgroundColor: 'white'}}>
			<Text
				style={{
					flex: 1,
					width: "100%",
                    textAlign: 'left',
                    paddingLeft:23,
                    paddingTop: 35,
                    height: 100,
					backgroundColor: "#4285F4",
					fontSize: 30,
                    fontWeight: 'bold',
                    borderLeftWidth: 8,
                    borderRightWidth: 8,
                    borderColor: 'white',
                    borderTopWidth:8,
                    color: 'white'
				}}
			>
				{data.name}
			</Text>
			<Image
				style={{
					flex: 2,
                    marginLeft:8,
					width: "96%",
					height: 200,
					resizeMode: "cover",
				}}
				source={{ uri: data.imgUrl }}
			/>
			<Text
				style={{
					flex: 3,
                    padding: 30,
					fontSize: 20,
					borderWidth: 15,
					width: "100%",
                    borderColor: 'white',
					backgroundColor: "white",
				}}
			>
				{data.description}
			</Text>
		</ScrollView>
	);
}
