import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function Card({ post }) {
	const navigation = useNavigation();
	return (
		<View style={style.container}>
			<View style={style.card}>
				<View style={style.imageContainer}>
					<Image
						style={style.image}
						source={{
							uri: post.imgUrl,
						}}
					/>
				</View>
				<View style={style.textContainer}>
					<Text style={style.text}>{post.name}</Text>
					<TouchableOpacity
						style={style.action}
						onPress={() => {
							navigation.navigate("Detail", { id: post.id });
						}}
					>
						<Text style={{ color: "white" }}>Detail</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

const style = StyleSheet.create({
	container: { paddingHorizontal: 5, paddingVertical: 5, width: "50%" },
	card: {
		flexDirection: "row",
		borderRadius: 5,
		overflow: "hidden",
		backgroundColor: "#fff",
	},
	imageContainer: { padding: 5 },
	image: {
		width: 75,
		height: 120,
		borderRadius: 5,
	},
	textContainer: {
		flex: 1,
		padding: 5,
	},
	text: {
		color: "#4285F4",
		fontSize: 12,
	},
	action: {
		backgroundColor: "#ACE0F990",
		borderRadius: 5,
		paddingHorizontal: 10,
		paddingVertical: 2,
		alignSelf: "flex-start",
		opacity: 0.8,
		marginTop: 5,
	},
});
