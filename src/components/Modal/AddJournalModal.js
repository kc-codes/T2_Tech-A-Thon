import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, Image, TouchableOpacity, TextInput, } from 'react-native';
import { blackText, blueText, colorTheme, grayText } from '../../constant';
import Header from '../Header';
import { BlogServices } from '../../services/BlogsServices';

const JournalModal = ({ modalVisible, setModalVisible }) => {
    const [Journal, setJournal] = useState('')

    function handleSubmit(params) {
        BlogServices.PostNotes(Journal)
        BlogServices.SentimentRequest(Journal)
        setModalVisible(!modalVisible)
    }
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}>
            <View style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    <Header leftIconName header={'Add Your Journal'} titleMargin={40} isModal setModalVisible={setModalVisible} />
                </View>
                {/* Main Content */}
                <View style={styles.content}>
                        <TextInput
                            placeholder='Enter Your Note'
                            onChangeText={(text) => setJournal(text)}
                            value={Journal}
                            style={styles.textInput}
                            multiline
                        />
                </View>
                {/* Footer */}
                <View style={styles.footer}>
                    <TouchableOpacity
                        style={{ backgroundColor: colorTheme.primaryColor, width: "50%", height: 40, borderRadius: 50, justifyContent: "center" ,marginTop:50}}
                        onPress={() => handleSubmit()}
                    >
                        <Text style={[styles.smallText, { color: "white", alignSelf: 'center' }]}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
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
        marginTop: 5,
    },
    content: {
        flex: 1,
        width: '90%',
        alignSelf: 'center',
        // marginTop: 20
    },
    footer: {
        padding: 10,
        alignItems: 'center',
        width: '95%',
        alignSelf: 'center',
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
        borderColor: colorTheme.borderColor,
        marginTop: 20,
        height:150
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

export default JournalModal;
