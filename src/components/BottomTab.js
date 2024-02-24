import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home/Home'
import Appointment from '../screens/AppointMents/Appointment'
import Profile from '../screens/Profile/Profile'
import Search from '../screens/Search/Search'
import Activity from '../screens/Activity/Activity'

import Chat from '../screens/Chat/Chat';
import { colorTheme } from '../constant';


const Tab = createBottomTabNavigator();

export default function BottomTab() {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                tabBarInactiveTintColor: '#929CAD',
                tabBarActiveTintColor: colorTheme.primaryColor,
                tabBarHideOnKeyboard: true
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" color={color} size={size} />
                    ),

                }}
            />
            <Tab.Screen
                name="Activity"
                component={Activity}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Activity',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="gamepad-variant" color={color} size={35} />
                    ),

                }}
            />
            <Tab.Screen
                name="Appointment"
                component={Appointment}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Appointment',
                    tabBarIcon: ({ color, size }) => (
                        <Fontisto name="date" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Chat"
                component={Chat}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Chat',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="chat-processing-outline" color={color} size={size} />
                    ),

                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="user" color={color} size={size} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({

})