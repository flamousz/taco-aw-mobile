import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import DummySettingPage from '../views/DummySettingPage'
import DummyEditProfile from '../views/DummyEditProfile'

const Tab = createBottomTabNavigator()

export default function ProfileTab() {
    return(
        <Tab.Navigator screenOptions={{
            headerShown: false
        }}>
            <Tab.Screen name='setting' component={DummySettingPage}/>
            <Tab.Screen name='edit' component={DummyEditProfile}/>
        </Tab.Navigator>
    )
}