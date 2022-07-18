import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from '../Screen/Splash/Splash'
import Login from '../Screen/LogIn/Login'
import Drawer from './Drawer'

const rootStack = createNativeStackNavigator()

const Routes = () => {
    return (
        <rootStack.Navigator screenOptions={{ headerShown: false }}>
            <rootStack.Screen name='Splash' component={Splash} />
            <rootStack.Screen name='Login' component={Login} />
            <rootStack.Screen name='Drawer' component={Drawer} />
        </rootStack.Navigator>
    )
}

export default Routes

const styles = StyleSheet.create({})