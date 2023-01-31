import { View, ImageBackground, useWindowDimensions } from "react-native";

export default function Carousel({ image, imageIndex }) {
	const { width: windowWidth } = useWindowDimensions();

	return (
		<View style={{ width: windowWidth, height: 250 }} key={imageIndex}>
			<ImageBackground
				source={{ uri: image }}
				style={{
					flex: 1,
					marginVertical: 10,
					borderRadius: 5,
					overflow: "hidden",
					alignItems: "center",
					justifyContent: "center",
				}}
			></ImageBackground>
		</View>
	);
}
