import { Text, View, Button } from "react-native";

export default function DummyHomePage({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>ini dummy</Text>
			<Button 
                title='profile'
                onPress={() => navigation.navigate('Detail', {
                    id: 86,
                    otherParam: 'anything you want here',
                  })}
            />
		</View>
	);
}
