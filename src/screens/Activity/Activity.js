import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Clipboard, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colorTheme, blackText, blueText, grayText } from '../../constant'
import MemeGeneratorModal from '../../components/Modal/MemeGeneratorModal'
import LottieView from 'lottie-react-native'
import UnderLine from '../../components/UnderLine'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'

const data = [
  {
    screen: 'Workout',
    path: require('../../assets/json/Yoga-game.json')
  },
  {
    screen: 'BubblePop',
    path: require('../../assets/json/bubles-game.json')
  },
  {
    screen: 'WordGuessGame',
    path: require('../../assets/json/word-game.json')
  },
  {
    screen: 'TicTacToe',
    path: require('../../assets/json/tictactoe-game.json')
  },
  {
    screen: 'JokesGenerator',
    path: require('../../assets/json/joke-game.json')
  },
  {
    screen: 'RockPaperScissor',
    path: require('../../assets/json/sps-game.json')
  },

]

const reccomendData = [
  {
    screen: 'Music',
    path: require('../../assets//img/MusicLogo.png')
  },
  {
    screen: 'Books',
    path: require('../../assets/img/BookLogo.png')
  },
]

function DifferentActivities() {
  const navigation = useNavigation();
  return (
    <View style={{ padding: 3, marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
      {data.map((item, index) => (
        <Pressable key={index} onPress={() => navigation.navigate(item.screen)} style={{ borderColor: colorTheme.borderColor, width: '48%', marginBottom: 10, borderWidth: 1, borderRadius: 20, marginTop: 5 }}>
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
      ))}
    </View>
  );
}

function Reccommendations() {
  const navigation = useNavigation();
  return (
    <View style={{ padding: 3, marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
      {reccomendData.map((item, index) => (
        <Pressable key={index} onPress={() => navigation.navigate(item.screen)} style={{ borderColor: colorTheme.borderColor, width: '48%', marginBottom: 10, borderWidth: 1, borderRadius: 20, marginTop: 5 }}>
          {item.path ?
            <Image source={item.path} resizeMode='cover' style={{ width: '100%', height: 190, borderRadius: 20 }} />
            :
            <Image source={require('../../assets/img/hospital.jpg')} resizeMode='cover' style={{ width: '100%', height: 190, borderRadius: 20 }} />
          }
        </Pressable>
      ))}
    </View>
  );
}

export default function Activity() {
  const [memeModal, setMemeModal] = useState(false)

  const navigation = useNavigation()

  const [quote, setQuote] = useState("");
  useEffect(() => {
    fetchQuoteFunction();
  }, []);
  const fetchQuoteFunction = async () => {
    try {
      const res = await axios.get("https://type.fit/api/quotes");
      const quo = res.data;
      const idx = Math.floor(Math.random() * quo.length);
      const randomQuo = quo[idx].text;
      await AsyncStorage.setItem("lastQuote", randomQuo);
      setQuote(randomQuo);
    } catch (error) {
      console.error("Error fetching quotes:", error.message);
    }
  };
  const newQuoteFunction = () => {
    fetchQuoteFunction();
  };
  const cpyFunction = () => {
    try {
      Clipboard.setString(quote);
      alert("Quote copied to clipboard!");
    } catch (error) {
      console.error("Error copying to clipboard:", error.message);
    }
  };
  return (
    <View style={styles.container}>
      <>
        {memeModal
          ?
          <MemeGeneratorModal modalVisible={memeModal} setModalVisible={setMemeModal} />
          : null
        }
      </>
      <ScrollView>
        <View style={{ width: '100%', flexDirection: 'row' }}>
          <View style={{ height: 120, width: '10%', }}></View>
          <View style={{ height: 120, width: '40%', backgroundColor: colorTheme.primaryColor, borderBottomLeftRadius: 100 }}></View>
          <View style={{ height: 120, width: '50%', backgroundColor: colorTheme.primaryColor, justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row' }}>
            <View>
              <Text style={[styles.boldText, { color: 'white', fontSize: 15, fontWeight: '500' }]}>Hello,</Text>
              <Text style={[styles.boldText, { color: 'white', fontSize: 25, fontWeight: '500' }]}>Sharvesh</Text>
            </View>
            <Image source={require('../../assets/img/user.jpg')} resizeMode='cover' style={{
              width: 60,
              height: 60,
              borderRadius: 150 / 2,
              overflow: "hidden",
              borderWidth: 2,
              borderColor: 'white',
              marginHorizontal: 10
            }} />
          </View>
        </View>
        {/* <View>
          <TouchableOpacity onPress={()=>{setMemeModal(true)}}><Text>meme</Text></TouchableOpacity>
        </View> */}
        <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
          <LottieView
            source={require('../../assets/json/bot.json')}
            autoPlay
            loop
            style={{ width: 200, height: 200 }}
          />
          <View style={{ alignItems: 'center' }}>
            <Text style={[styles.bigText, { color: colorTheme.primaryColor, fontSize: 20, marginBottom: 5 }]}>I'M TINK</Text>
            <TouchableOpacity
              onPress={() => { navigation.navigate('ChatBot') }}
              style={{ backgroundColor: 'black', borderRadius: 10 }}>
              <Text style={[styles.bigText, { color: 'white', paddingHorizontal: 20, paddingVertical: 10 }]}>Let's Chat</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.subContainer}>
          <UnderLine marginTop={20} thickness={2} />
          <TouchableOpacity
            onPress={() => { setMemeModal(true) }}
            style={{ backgroundColor: colorTheme.secondaryColor, borderRadius: 10, marginTop: 15, width: '60%' }}>
            <Text style={[styles.bigText, { color: 'white', paddingHorizontal: 20, paddingVertical: 10, textAlign: 'center' }]}>CREATE A MEME</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.subContainer, { marginTop: 28, }]}>
          <Text style={[styles.bigText, { textAlign: 'left', fontSize: 18, }]}>REFRESH YOUR MOOD</Text>
          <Reccommendations />
        </View>
        <View style={[styles.subContainer, { marginTop: 28, }]}>
          <Text style={[styles.bigText, { textAlign: 'left', fontSize: 18, }]}>ACTIVITY TO CHANGE YOUR MOOD</Text>
          <DifferentActivities />
        </View>
      </ScrollView>
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