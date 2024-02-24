import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native'
import React,{useEffect} from 'react'
import LottieView from 'lottie-react-native'
import { colorTheme } from '../constant';

export default function App({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("GetStarted")
    }, 4000);
  }, [])
  
  return (
    <View style={styles.container}> 
      <LottieView
        source={require('../assets/json/mental_splash.json')}
        autoPlay
        loop
        style={{width:300,height:300}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colorTheme.appBackGroundColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
})