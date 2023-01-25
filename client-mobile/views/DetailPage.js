import { StyleSheet, Button, Text, View, Image, ScrollView, StatusBar } from "react-native";
import { useState, useEffect } from 'react'

export default function DetailPage({navigation, route}) {
    console.log(route.params,'<< ini params');
    const {id} = route.params
    useEffect(() => {
        console.log('fetch data dengan id ' + id);
    })

    return(
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }} >
            <Text>dsad</Text>
            <Button title="Home" onPress={() => navigation.navigate('DummyHome')} />
        </View>
    )
}