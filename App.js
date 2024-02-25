import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navigation from './src/screens/Navigation/Navigation'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import store from './src/store'
import { navigationRef } from './src/services/navRef'


export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer ref={navigationRef}>
                <Navigation />
            </NavigationContainer>
        </Provider>
    )
}
// "react-native-webrtc": "^1.94.2",

const styles = StyleSheet.create({})