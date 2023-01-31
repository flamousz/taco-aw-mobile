import { useQuery } from "@apollo/client";
import {
	Text,
	ActivityIndicator,
	Image,
	View,
	ScrollView,
	ImageBackground,
} from "react-native";
import { GET_PRODUCT_DETAIL } from "../quaries/foodQuaries";

export default function DetailPage({ navigation, route }) {
	const { id } = route.params;
	const { loading, error, data } = useQuery(GET_PRODUCT_DETAIL, {
		variables: { getFoodByIdId: id },
	});

	function ingredientsText(arr) {
		if (!arr || arr.length == 0) {
			return "Secret Ingredients";
		}
		let ingredients = arr.map((el) => el.name).join(", ");
		return ingredients;
	}
	return loading ? (
		<ActivityIndicator
			style={{
				textAlign: "center",
				justifyContent: "center",
				marginTop: 320,
			}}
		/>
	) : (
		<ScrollView style={{ flex: 1 }}>
			<ImageBackground
				style={{ flex: 1, justifyContent: "center" }}
				resizeMode='cover'
				source={require("../assets/Gradient.png")}
			>
				<View
					style={{
						flex: 1,
						width: "100%",
						height: 180,
						flexDirection: "column",

						paddingLeft: 10,
					}}
				>
					<View
						style={{
							flex: 1,
							flexDirection: "row",
							height: "100%",
						}}
					>
						<Text
							style={{
								flex: 2,
								width: "40%",
								textAlign: "left",
								paddingTop: 7,
								height: 100,
								fontSize: 30,
								fontWeight: "bold",
								color: "black",
							}}
						>
							{data.getFoodById.name}
						</Text>
						<Image
							style={{
								flex: 1,
								width: 116,
								height: 89,
								resizeMode: "cover",
							}}
							source={require("../assets/wavy.png")}
						/>
					</View>
					<View
						style={{
							flex: 1,
						}}
					>
						<View
							style={{
								flex: 1,
								width: "100%",
								flexDirection: "row",
								alignContent: "flex-start",
							}}
						>
							<Text
								style={{
									width: 20,
									fontSize: 15,
									fontWeight: "200",
								}}
							>
								by
							</Text>
							<Text
								style={{
									fontSize: 30,
									fontWeight: "900",
									color: "#954000",
								}}
							>
								{data.getFoodById.user.userName}
							</Text>
						</View>
						<View
							style={{
								flex: 1,
							}}
						>
							<Text
								style={{
									marginRight: 10,
									alignSelf: "flex-end",
									fontSize: 23,
									fontWeight: "900",
								}}
							>
								in {data.getFoodById.Category.name} Menu
							</Text>
						</View>
					</View>
				</View>
				<Image
					style={{
						flex: 2,
						width: 392,
						height: 263,
						marginLeft: 9,
						borderRadius: 15,
						resizeMode: "cover",
					}}
					source={{ uri: data.getFoodById.imgUrl }}
				/>
				<View
					style={{
						flex: 1,
						alignSelf: "flex-end",
						marginRight: 16,
					}}
				>
					<View style={{ alignSelf: "flex-end" }}>
						<Text
							style={{
								fontSize: 20,
								fontWeight: "bold",
							}}
						>
							Ingredients
						</Text>
					</View>
					<View>
						<Text>{ingredientsText(data.getFoodById.Ingredients)}</Text>
					</View>
				</View>
				<Text
					style={{
						flex: 3,
						padding: 15,
						fontSize: 20,
						width: "100%",
						textAlign: "justify",
					}}
				>
					{data.getFoodById.description}
				</Text>
				<View
					style={{
						flex: 1,
						marginLeft: 14,
					}}
				>
					<View>
						<Text
							style={{
								fontSize: 20,
								fontWeight: "bold",
								marginEnd: 2,
							}}
						>
							Price
						</Text>
					</View>
					<View>
						<Text>Rp. {data.getFoodById.price} </Text>
					</View>
				</View>
				<Image
					style={{
						flex: 1,
						width: "100%",

						resizeMode: "cover",
					}}
					source={require("../assets/delivery.png")}
				/>
			</ImageBackground>
		</ScrollView>
	);
}
