import { StyleSheet, Button, Text, View, Image, ScrollView, StatusBar } from "react-native";

export default function DummyEditProfile({navigation}) {
    return(
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>ini edit profile</Text>
            <Button 
                title='home'
                onPress={() => navigation.navigate('DummyHome', {
                    id: 41,
                    otherParam: 'anything you want here',
                  })}
            />
        </View>
    )
}