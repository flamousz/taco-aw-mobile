import { gql, useQuery } from "@apollo/client";
import { Text, Image, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const GET_PRODUCT_DETAIL =  gql`
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
`
export default function DetailPage({ navigation, route }) {
	const { id } = route.params;
	const { loading, error, data } = useQuery(GET_PRODUCT_DETAIL, {
		variables: { getFoodByIdId: id }
	})
	  console.log(data.getFoodById.Ingredients[0].name,'<<<<< ini bumbu');
	if (loading) {
		return (
		  <SafeAreaView >
			<Text>loading</Text>
		  </SafeAreaView>
		);
	}  
	
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
				{data.getFoodById.name}
			</Text>
			<Image
				style={{
					flex: 2,
                    marginLeft:8,
					width: "96%",
					height: 200,
					resizeMode: "cover",
				}}
				source={{ uri: data.getFoodById.imgUrl }}
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
				{data.getFoodById.description}
			</Text>
		</ScrollView>
	);
}
