import { gql, useQuery } from "@apollo/client";
import { Text, Image, View, ScrollView, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const GET_PRODUCT_DETAIL = gql`
	query Query($getFoodByIdId: ID!) {
		getFoodById(id: $getFoodByIdId) {
			id
			name
			description
			price
			imgUrl
			UserMongoId
			categoryId
			user {
				userName
			}
			Category {
				name
			}
			Ingredients {
				name
			}
		}
	}
`;
export default function DetailPage({ navigation, route }) {
	const { id } = route.params;
	const { loading, error, data } = useQuery(GET_PRODUCT_DETAIL, {
		variables: { getFoodByIdId: id },
	});
	//   console.log(data.getFoodById.Ingredients[0].name,'<<<<< ini bumbu');
	if (loading) {
		return (
			<SafeAreaView>
				<Text>loading</Text>
			</SafeAreaView>
		);
	}

	return (
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
							height: '100%'
						}}
					>
						<Text
							style={{
								flex: 3,
								width: "60%",
								textAlign: "left",
								paddingTop: 7,
								height: 100,
								// backgroundColor: "white",
								fontSize: 30,
								fontWeight: "bold",

								// borderLeftWidth: 8,
								// borderRightWidth: 8,
								// borderColor: 'white',
								// borderTopWidth:8,
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
							source={require("../assets/bud.svg")}
						/>
					</View>
					<View
						style={{
							flex: 1,
							// backgroundColor: 'red'
						}}
					>
						<View
							style={{
								flex: 1,
								width: "100%",
								// height: 10,
								flexDirection: 'row',
								alignContent: 'flex-start'
							}}
						>
							<Text
								style={{
									width: 20,
									fontSize: 15,
									fontWeight: '200',
									// backgroundColor: 'red'
								}}
							>
								by
							</Text>
							<Text
								style={{
									fontSize: 30,
								fontWeight: "900",
								color: '#954000',
								// backgroundColor: 'red'
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
							<Text style={{
								// flex: 
								marginRight: 10,
								alignSelf: 'flex-end',
								// backgroundColor: 'green',
								fontSize: 23,
								fontWeight: "900",
							}}>
								in {data.getFoodById.Category.name} Menu
							</Text>
						</View>
					</View>
				</View>
				<Image
					style={{
						flex: 2,
						// marginLeft:8,
						width: 392,
						height: 263,
						marginLeft: 9,
						borderRadius: 15,
						resizeMode: "cover",
					}}
					source={{ uri: data.getFoodById.imgUrl }}
				/>
				<Text
					style={{
						flex: 3,
						padding: 30,
						fontSize: 20,
						// borderWidth: 15,
						width: "100%",
						// borderColor: "white",
						// backgroundColor: "white",
					}}
				>
					{data.getFoodById.description}
				</Text>
			</ImageBackground>
		</ScrollView>
	);
}
