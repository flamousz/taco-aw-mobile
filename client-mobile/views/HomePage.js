import React, { useRef } from "react";
import { useQuery } from "@apollo/client";

import {
	StyleSheet,
	Text,
	View,
	Image,
	ScrollView,
	ImageBackground,
	SafeAreaView,
	Animated,
	ActivityIndicator,
} from "react-native";
import { GET_PRODUCTS } from "../quaries/foodQuaries";
import CardCarousel from "../components/CardCarousel";

export default function HomePage({ navigation }) {
	const scrollX = useRef(new Animated.Value(0)).current;
	const { data, loading, error } = useQuery(GET_PRODUCTS);

	let imgTaco = data?.getFoods.map((el) => {
		return el.imgUrl;
	});

	return loading ? (
		<ActivityIndicator
			style={{
				textAlign: "center",
				justifyContent: "center",
				marginTop: 320,
			}}
		/>
	) : (
		<>
			<ScrollView style={[styles.container]}>
				<ImageBackground
					style={{ flex: 1, justifyContent: "center" }}
					resizeMode='cover'
					source={require("../assets/Gradient.png")}
				>
					<View
						style={{
							flex: 1,
							padding: 15,
						}}
					>
						<Text
							style={{
								fontSize: 24,
								fontWeight: "bold",
								textAlign: "center",
							}}
						>
							Favorite Restaurants
						</Text>
						<Text
							style={{
								fontSize: 38,
								fontWeight: "bold",
								textAlign: "center",
							}}
						>
							Taco Aw Tacos
						</Text>
						<Text
							style={{
								fontSize: 14,
								fontWeight: "200",
								textAlign: "center",
							}}
						>
							the best Tacos restaurants in your city and get it
							delivered to your tummy!
						</Text>
					</View>
					<SafeAreaView>
						<View
							style={{
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<ScrollView
								horizontal={true}
								pagingEnabled
								showsHorizontalScrollIndicator={false}
								onScroll={Animated.event(
									[
										{
											nativeEvent: {
												contentOffset: {
													x: scrollX,
												},
											},
										},
									],
									{ useNativeDriver: false }
								)}
								scrollEventThrottle={1}
							>
								{imgTaco.map((image, imageIndex) => {
									return (
										<CardCarousel
											image={image}
											key={imageIndex}
											imageIndex={imageIndex}
										/>
									);
								})}
							</ScrollView>
						</View>
					</SafeAreaView>
					<View
						style={{
							flex: 2,
							padding: 4,
						}}
					>
						<Text
							style={{
								fontSize: 30,
								fontWeight: "bold",
							}}
						>
							Just One
						</Text>
						<Text
							style={{
								fontSize: 50,
								fontWeight: "bold",
							}}
						>
							Never Enough
						</Text>
					</View>
					<Image
						style={{
							flex: 1,
							width: "100%",

							resizeMode: "cover",
						}}
						source={require("../assets/buddy.png")}
					/>
				</ImageBackground>
			</ScrollView>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	customText: {
		fontSize: 25,
		fontWeight: "bold",
		marginLeft: 15,
		height: 50,
		alignItems: "center",
	},
});
