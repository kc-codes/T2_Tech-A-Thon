import React from 'react';
import { View, Text, StyleSheet, Modal, Image, ScrollView } from 'react-native';
import { blackText, blueText, colorTheme, grayText } from '../../constant';
import Header from '../Header';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const BlogScreenModal = ({ modalVisible, setModalVisible, ModalData }) => {
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
                    <Header leftIconName header={'Read Blogs'} titleMargin={40} isModal setModalVisible={setModalVisible} />
                </View>
                {/* Main Content */}
                <ScrollView style={styles.content}>
                    <View style={{width:'90%',alignSelf:'center',marginVertical:20}}>
                        <Text style={[styles.bigText,{fontSize:20,fontWeight:'bold'}]}>{ModalData.title}</Text>
                    </View>
                    <View style={{ width: '95%', alignSelf: 'center' }}>
                        <Image source={{ uri: `${ModalData.img}` }} resizeMode='cover' style={styles.image} />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', alignSelf: 'center', marginTop: 20 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <MaterialCommunityIcons color={colorTheme.primaryColor} size={30} name={"comment-text-outline"} />
                            <Text style={[styles.smallText, { marginLeft: 5, color: 'black' }]}>Comments</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <MaterialCommunityIcons color={colorTheme.primaryColor} size={30} name={"cards-heart-outline"} />
                            <Text style={[styles.smallText, { marginLeft: 5, color: 'black' }]}>24 likes</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <MaterialCommunityIcons color={colorTheme.primaryColor} size={30} name={"share-variant-outline"} />
                            <Text style={[styles.smallText, { marginLeft: 5, color: 'black' }]}>Share</Text>
                        </View>
                    </View>
                    <View style={{ width: '90%', alignSelf: 'center', marginTop: 10 }}>
                        <Text style={[styles.smallText, { fontSize: 17 }]}>{ModalData.desc}{ModalData.desc}{ModalData.desc}{ModalData.desc}{ModalData.desc}{ModalData.desc} {ModalData.desc}</Text>
                    </View>
                </ScrollView>
                {/* Footer */}
                <View style={styles.footer}>
                </View>
            </View>
        </Modal >
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
        // alignSelf: 'center',
        marginTop: 20
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
        width: '100%',
        height: 300,
        borderRadius: 20,
        overflow: "hidden",
        borderWidth: 2,
        borderColor: colorTheme.primaryColor
    },
});

export default BlogScreenModal;
