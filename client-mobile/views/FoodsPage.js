import { StyleSheet, FlatList, Button, Text, View, Image, ScrollView, StatusBar } from "react-native";
import  Card  from '../components/Card'
import useFetch from "../hooks/itemFetch";

export default function FoodsPage({navigation}) {
	const items = useFetch("https://taco-aw.foxhub.space/items");
    
    const renderItem = ({ item }) => {
        
        return <Card post={item}/>
    }


    return(
        <View style={{ flex: 1 }}>
            <FlatList  
                data={items}
                renderItem={renderItem}
                style={{padding: 5}}
                numColumns={2}
                />
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