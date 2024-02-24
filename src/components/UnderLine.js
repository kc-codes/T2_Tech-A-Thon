import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colorTheme } from '../constant'

export default function UnderLine({ marginTop, thickness, color, width }) {
    return (
        <View style={{ backgroundColor: color, height: thickness, marginTop: marginTop, width: width, }} />
    )
}

const styles = StyleSheet.create({})