import { Modal, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { blackText, blueText, colorTheme, grayText } from '../../constant'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import UnderLine from '../UnderLine'
import LocationCard from '../LocationCard'
import WebView from 'react-native-webview'

const LocationModal = ({ modalVisible, setModalVisible }) => {
  const [search, setSearch] = useState('')

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <ScrollView style={styles.container}>
        <View style={styles.subContainer}>
          <Pressable
            style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <MaterialIcons name="keyboard-arrow-down" color={colorTheme.primaryColor} size={35} style={{ marginRight: 10 }} />
            <Text style={styles.bigText}>Select Location</Text>
          </Pressable>
          <View style={styles.textInput}>
            <View style={{ flexDirection: "row", width: "90%", justifyContent: "center", alignItems: "center" }}>
              <MaterialIcons name="search" color={colorTheme.primaryColor} size={30} style={{ marginLeft: 15 }} />
              <TextInput
                placeholder='Location'
                onChangeText={setSearch}
                value={search}
                style={{ height: 48, width: "92%", }}
              />
            </View>
            <MaterialIcons name={"cancel"} size={25} color={colorTheme.primaryColor} />
          </View>
          <View style={{ justifyContent: "flex-start", alignItems: "center", flexDirection: 'row', marginTop: 20 }}>
            <MaterialIcons name={"location-on"} size={30} color={colorTheme.primaryColor} style={{ marginRight: 10 }} />
            <Text style={styles.bigText}>Use my current location</Text>
          </View>
          <UnderLine marginTop={15} />
          <Text style={[styles.bigText, { marginTop: 15, textAlign: "center", color: "gray" }]}>Search Result</Text>
          <LocationCard />
          <LocationCard />
          <LocationCard />
          <View style={{ width: '100%', marginTop: 10, height: 600 }}>
            <WebView
              originWhitelist={['*']}
              source={{
                html: `
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d15053.894860220578!2d72.8395422!3d19.3919278!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1696074814477!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade">
                </iframe>
              `,
              }}
              style={{ flex: 1 }}
              onError={(error) => console.error('WebView error:', error)}
            />
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorTheme.appBackGroundColor
  },
  subContainer: {
    width: "90%",
    height: "auto",
    alignSelf: "center"
  },
  textInput: {
    height: 50,
    borderRadius: 10,
    backgroundColor: "white",
    padding: 7,
    borderWidth: 1,
    borderColor: colorTheme.borderColor,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    justifyContent: "space-between"
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
})

export default LocationModal;