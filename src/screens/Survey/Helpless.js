import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { colorTheme, blackText, blueText, grayText } from '../../constant'
import { useNavigation } from '@react-navigation/native';

const data = ["Yes", 'No']


export default function Helpless() {
    const [selected, setselected] = useState(0)
    const navigation=useNavigation()
    function Reccommendations() {
        return (
            <View style={{ padding: 3, marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                {data.map((item, index) => (
                    <TouchableOpacity key={index} onPress={() => {navigation.navigate('BottomTab') }} style={{ borderColor: colorTheme.borderColor, width: '48%', marginBottom: 10, borderWidth: 1, borderRadius: 20, marginTop: 5 }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ paddingVertical: 50, color: 'black', fontSize: 16 }}>{item}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        );
    }
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Text style={[styles.bigText, { marginTop: '30%', fontWeight: 'bold', fontSize: 25, textAlign: 'center' }]}>Did You Feel Helpless Or Hopeless Today?</Text>
                <View style={{ marginTop: "30%" }}>
                    <Reccommendations />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorTheme.appBackGroundColor
    },
    subContainer: {
        width: "90%",
        height: "auto",
        alignSelf: "center",
        // backgroundColor:"red"
    },
    bigText: {
        fontSize: blackText.fontSize,
        color: blackText.color,
        fontWeight: blackText.fontWeight
    },
    smallText: {
        fontSize: grayText.fontSize,
        color: grayText.color,
        fontWeight: grayText.fontWeight
    },
    blueText: {
        fontSize: blueText.fontSize,
        color: blueText.color,
        fontWeight: blueText.fontWeight
    },
    textInput: {
        borderRadius: 10,
        backgroundColor: "white",
        padding: 7,
        borderWidth: 1,
        borderColor: "#d3d2d6",
        height: 200,
        textAlignVertical: 'top',
    },
})