import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {  colorTheme } from '../constant'

export default function UnderLine({marginTop,thickness}) {
    return (
        <View style={{ backgroundColor: colorTheme.borderColor, height: thickness, marginTop: marginTop }} />
    )
}

const styles = StyleSheet.create({})