import {
	StyleSheet,
	Text,
	View,
	Image,
	ScrollView,
	StatusBar,
} from "react-native";
import useFetch from "../hooks/itemFetch";

export default function HomePage({ navigation }) {
	const items = useFetch("https://taco-aw.foxhub.space/items");
	// console.log(items,'<< ini items');
	return (
		<ScrollView
			style={[
				styles.container,
				{
					flexDirection: "column",
				},
			]}
		>
			<View>
				<Text style={styles.customText}>What We're Loving Now</Text>
			</View>
			<View
				style={{
					flex: 2,
					// backgroundColor: "yellow",
				}}
			>
				<Image
					source={{
						uri: `https://www.tacobell.co.id/wp-content/uploads/2020/09/Crunchwrap-Supreme.jpg"`,
					}}
					style={{
						width: "100%",
						height: 300,
						// borderWidth: 5,
						// borderColor: "#fdf",
						resizeMode: "cover",
					}}
				/>
				<Text
					style={{
						height: 40,
						// borderWidth: 5,
						// borderColor: "#fdf",
						resizeMode: "cover",
						alignSelf: "center",
						fontSize: 25,
						fontWeight: "bold"
					}}
				>
					CRUNCHWRAP SUPREME
				</Text>
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
		backgroundColor: "#fff",
	},
	customText: {
		fontSize: 25,
		fontWeight: "bold",
		marginLeft: 15,
		height: 50,
		alignItems: "center",
	},
});
