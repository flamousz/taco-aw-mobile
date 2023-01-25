import { StyleSheet, Text, View, Image, StatusBar } from "react-native";


export default function HomePage() {
	return (
		<View style={styles.container}>
			<Text>Open app!</Text>
			<Text>ds app!</Text>
			<Image 
				source={{
					uri: "https://reactnative.dev/docs/assets/p_cat2.png",
				}}
				style={{ width: '100%', height: 200, borderWidth: 5, borderColor: '#fdf', resizeMode: 'contain' }}
			/>

			<StatusBar style='auto' />
		</View>
	);
}




const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

