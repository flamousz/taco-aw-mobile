import { StyleSheet, Button, Text, View, Image, ScrollView, StatusBar } from "react-native";

export default function DummySettingPage({navigation}) {
    return(
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>ini setting</Text>
            <Button 
                title='home'
                onPress={() => navigation.navigate('DummyHome', {
                    id: 65,
                    otherParam: 'anything you want here',
                  })}
            />
        </View>
    )
}