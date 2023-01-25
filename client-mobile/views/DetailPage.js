import { StyleSheet, Button, Text, View, Image, ScrollView, StatusBar } from "react-native";
import { useState, useEffect } from 'react'
import { Card } from '../components/Card'

export default function DetailPage({navigation}) {

    return(
        <View style={{ flex: 1, flexDirection:'column', paddingTop: 5 }} >
            <Card />
            <Button title="Home" onPress={() => navigation.navigate('Home')} />
        </View>
    )


}


// const style = StyleSheet.create({
//     container: { paddingHorizontal: 5, paddingVertical: 5, width: '50%' },
//     card: {
//         flexDirection: 'row',
//         borderRadius: 5,
//         overflow: 'hidden',
//         backgroundColor: '#fff'
//     },
//     imageContainer: {padding: 5},
//     image: {
//         width: 75,
//         height: 75,
//         borderRadius: 5
//     },
//     textContainer: {
//         flex:1,
//         padding: 5
//     }, 
//     text: {
//         color: 'white',
//         fontSize: 18
//     },
//     action: {
//         backgroundColor: 'tomato',
//         borderRadius: 5,
//         paddingHorizontal: 10,
//         paddingVertical: 2,
//         alignSelf: 'flex-start',
//         opacity: 0.8,
//         marginTop: 5
//     }
// })