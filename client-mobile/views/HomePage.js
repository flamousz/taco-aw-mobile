import { StyleSheet, Text, View, Image, ScrollView, StatusBar } from "react-native";
import useFetch from "../hooks/itemFetch";

export default function HomePage() {
	const items = useFetch("https://taco-aw.foxhub.space/items")
	console.log(items,'<< ini items');
	return (
		<ScrollView
			style={[
				styles.container,
				{
					flexDirection: "column",
				},
			]}
		>
			<View
				style={{
					flex: 1,
					// backgroundColor: "red",
				}}
			>
				<Image
					source={{
						uri: `https://i.postimg.cc/ZRhgS8g5/Add-a-heading.png`,
					}}
					style={{
						width: "100%",
						height: 200,
						// borderWidth: 5,
						// borderColor: "#fdf",
						resizeMode: "cover",
					}}
				/>
			</View>
			<View
				style={{
					flex: 2,
					backgroundColor: "yellow",
				}}
			>

				<Image
					source={{
						uri: `https://i.postimg.cc/ZRhgS8g5/Add-a-heading.png`,
					}}
					style={{
						width: "100%",
						height: 200,
						// borderWidth: 5,
						// borderColor: "#fdf",
						resizeMode: "cover",
					}}
				/>
				<Image
					source={{
						uri: `https://i.postimg.cc/ZRhgS8g5/Add-a-heading.png`,
					}}
					style={{
						width: "100%",
						height: 200,
						// borderWidth: 5,
						// borderColor: "#fdf",
						resizeMode: "cover",
					}}
				/>
				<Image
					source={{
						uri: `https://i.postimg.cc/ZRhgS8g5/Add-a-heading.png`,
					}}
					style={{
						width: "100%",
						height: 200,
						// borderWidth: 5,
						// borderColor: "#fdf",
						resizeMode: "cover",
					}}
				/>
			</View>
			<View
				style={{
					flex: 1,
					// backgroundColor: "red",
				}}
			>
				<Image
					source={{
						uri: "https://reactnative.dev/docs/assets/p_cat2.png",
					}}
					style={{
						width: "100%",
						height: 200,
						// borderWidth: 5,
						// borderColor: "#fff",
						resizeMode: "contain",
					}}
				/>
			</View>

			{/* <StatusBar style='auto' /> */}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: "#aff",
	},
});
