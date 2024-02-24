import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';
import { colorTheme } from '../../constant';

const IMAGE_SIZE = 200;
const MIN_DISTANCE = 10; // Minimum distance between score and bubble

export default function App() {

    const [score, setScore] = useState(0);
    const [position, setPosition] = useState(getRandXY());

    return (
        <View style={{ flex: 1, backgroundColor: colorTheme.appBackGroundColor }}>
            <View style={{ alignItems: 'center', marginTop: MIN_DISTANCE }}>
                <Text style={{ fontSize: 72, textAlign: 'center', position: 'absolute', zIndex: 1 }}>{score}</Text>
                <TouchableWithoutFeedback onPressIn={() => increaseScore()}>
                    <LottieView
                        source={require('../../assets/json/bubble.json')}
                        autoPlay
                        loop
                        style={{ width: IMAGE_SIZE, height: IMAGE_SIZE, left: position.x, top: position.y, position: 'absolute' }}
                    />
                </TouchableWithoutFeedback>
            </View>
        </View>
    );

    function increaseScore() {
        setScore(score + 1);
        setPosition(getRandXY());
    }
}

function getRandXY() {
    return {
        x: getRandInt(0, Dimensions.get('window').width - IMAGE_SIZE),
        y: getRandInt(MIN_DISTANCE, Dimensions.get('window').height - IMAGE_SIZE)
    }
}

function getRandInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
