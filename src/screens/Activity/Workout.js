import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image, ScrollView } from 'react-native';
import { blackText, blueText, colorTheme, grayText } from '../../constant';
import Header from '../../components/Header';
import LottieView from 'lottie-react-native';

const WorkOutData = [
    {
        path: require('../../assets/json/workout/Boxing.json'),
        name: 'Boxing'
    },
    {
        path: require('../../assets/json/workout/Crunches.json'),
        name: 'Crunches'
    },
    {
        path: require('../../assets/json/workout/ExplosiveLunges.json'),
        name: 'ExplosiveLunges'
    },
    {
        path: require('../../assets/json/workout/HighKnees.json'),
        name: 'HighKnees'
    },
    {
        path: require('../../assets/json/workout/HipThrust.json'),
        name: 'HipThrust'
    },
    {
        path: require('../../assets/json/workout/JumpingJacks.json'),
        name: 'JumpingJacks'
    },
    {
        path: require('../../assets/json/workout/Plank.json'),
        name: 'Plank'
    },
    {
        path: require('../../assets/json/workout/Pushups.json'),
        name: 'Pushups'
    },
    {
        path: require('../../assets/json/workout/Running.json'),
        name: 'Running'
    },
    {
        path: require('../../assets/json/workout/TricepsDips.json'),
        name: 'TricepsDips'
    },
]



const WorkOut = () => {

    const [Choose, setChoose] = useState({
        path: require('../../assets/json/workout/Boxing.json'),
    })

    function DifferentActivities() {
        return (
            <View style={{ padding: 3, marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                {WorkOutData.map((item, index) => (
                    <View key={index} >
                        <Pressable onPress={() => { setChoose({ path: item.path }) }} style={{ borderColor: colorTheme.borderColor, width: '48%', marginBottom: 10, borderRadius: 20, marginTop: 5 }}>
                            {item.path ?
                                <LottieView
                                    source={item.path}
                                    autoPlay
                                    loop
                                    style={{ width: 150, height: 150 }}
                                />
                                :
                                <Image source={require('../../assets/img/hospital.jpg')} resizeMode='cover' style={{ width: '100%', height: 190, borderRadius: 20 }} />
                            }
                        </Pressable>
                        <Text style={{ textAlign: 'center', color: 'black', fontWeight: 'bold' }}>{item.name}</Text>
                    </View>
                ))}
            </View>
        );
    }
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Header leftIconName header={'Calm Your Mind'} titleMargin={30} />
            </View>
            {/* Main Content */}
            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                <Text
                    style={{ textAlign: 'center', fontSize: 18, color: 'black', fontWeight: 'bold', fontStyle: 'italic',marginTop:10 }}
                    numberOfLines={2}
                >
                    "Embrace movement, celebrate strength."
                </Text>
                <View style={{ marginTop: 20 }}>
                    <LottieView
                        source={Choose.path}
                        autoPlay
                        loop
                        style={{ width: 300, height: 250 }}
                    />
                </View>
                <DifferentActivities />

            </ScrollView>
            {/* Footer */}
            <View style={styles.footer}>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colorTheme.appBackGroundColor,
        flex: 1,
        justifyContent: 'space-between',
    },
    header: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 5
    },
    content: {
        flex: 1,
        width: '90%',
        alignSelf: 'center'
    },
    footer: {
        padding: 10,
        alignItems: 'center',
        width: '90%',
        alignSelf: 'center'
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
    image: {
        width: 110,
        height: 110,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 2,
        borderColor: colorTheme.primaryColor
    },
});

export default WorkOut;
