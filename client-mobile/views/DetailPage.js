import { StyleSheet, Button, Text, View, Image, ScrollView, StatusBar } from "react-native";

export default function HomePage({navigation}) {
    return(
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }} >
            <Text>dsad</Text>
            <Button title="Home" onPress={() => navigation.navigate('Dummy')} />
        </View>
    )
}