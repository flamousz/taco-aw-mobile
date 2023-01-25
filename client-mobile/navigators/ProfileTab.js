import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';
import HomePage from '../views/HomePage'
import DetailPage from '../views/DetailPage'
import Card from '../components/Card';

const Tab = createBottomTabNavigator()

export default function ProfileTab() {
    return(
        <Tab.Navigator screenOptions={({route}) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
    
                if (route.name === 'Home') {
                  iconName = focused
                    ? 'ios-home'
                    : 'ios-home-outline';
                } else if (route.name === 'Card') {
                  iconName = focused ? 'fast-food' : 'fast-food-outline';
                }
    
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: '#4285F4',
              tabBarInactiveTintColor: 'gray',
              
        })}>
            <Tab.Screen name='Home' component={HomePage}/>
            {/* <Tab.Screen name='Foods' component={DetailPage}/> */}
            <Tab.Screen name='Card' component={Card}/>
        </Tab.Navigator>
    )
}