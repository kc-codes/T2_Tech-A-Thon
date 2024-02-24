import { Modal, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { blackText, blueText, colorTheme, grayText } from '../../constant'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'


function Notification({ iconBackGroundColor, iconColor, iconName, Date, isDate }) {
    return (
        <>
            {isDate ?
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 30, alignItems: 'center' }}>
                    <Text style={[styles.bigText, { color: "gray" }]}>Today</Text>
                    <Text style={[styles.blueText, { fontSize: 15 }]}>Mark all as read</Text>
                </View>
                : null
            }
            <View style={{ flexDirection: "row", backgroundColor: 'white', elevation: 1, borderRadius: 10, padding: 10, marginBottom: 10 }}>
                <View style={{ backgroundColor: iconBackGroundColor, borderRadius: 50, width: 50, height: 50 }}>
                    <MaterialIcons name={iconName} size={20} color={iconColor} style={{ padding: 15 }} />
                </View>
                <View style={{ width: '80%', marginLeft: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.bigText}>Appointment Success</Text>
                        <Text style={{}}>1h</Text>
                    </View>
                    <Text style={[styles.smallText,]}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam voluptas dicta illum,</Text>
                </View>
            </View>
        </>
    )
}
const NotificationModal = ({ modalVisible, setModalVisible }) => {
    const [search, setSearch] = useState('')
    const [isRead, setIsRead] = useState(false)

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}>
            <View style={styles.container}>
                <ScrollView style={styles.subContainer} showsVerticalScrollIndicator={false}>
                    <View
                        style={{ flexDirection: "row", alignItems: "center", marginTop: 10, justifyContent: 'space-between' }}
                    >
                        <Pressable
                            onPress={() => setModalVisible(!modalVisible)}
                            style={{ width: 35, height: 35, backgroundColor: "white", justifyContent: "center", alignItems: "center", borderRadius: 50, borderWidth: 1, borderColor: colorTheme.borderColor }}>
                            <Ionicons name={"chevron-back"} size={20} color={colorTheme.primaryColor} />
                        </Pressable>
                        <Text style={[styles.bigText, { fontFamily: "NotoSans_ExtraCondensed-Bold" }]}>Notification</Text>
                        <View style={{ backgroundColor: colorTheme.primaryColor, borderRadius: 50 }}>
                            <Text style={[styles.smallText, { color: "white", padding: 8 }]}>2 NEW</Text>
                        </View>
                    </View>
                    <Notification iconName={'date-range'} iconColor={"#1ce823"} iconBackGroundColor={'#c1f7c3'} isDate Date={'Today'} />
                    <Notification iconName={'videocam'} iconColor={"#e88c1c"} iconBackGroundColor={'#facc93'} />
                    <Notification iconName={'date-range'} iconColor={"#31b0eb"} iconBackGroundColor={'#aeddf2'} />
                    <Notification iconName={'date-range'} iconColor={"#1ce823"} iconBackGroundColor={'#c1f7c3'} isDate Date={'Yesterday'} />
                    <Notification iconName={'date-range'} iconColor={"#31b0eb"} iconBackGroundColor={'#aeddf2'} />
                    <Notification iconName={'videocam'} iconColor={"#e88c1c"} iconBackGroundColor={'#facc93'} />
                </ScrollView>
            </View>
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
        fontWeight: blackText.fontWeight,
    },
    smallText: {
        fontSize: grayText.fontSize,
        color: grayText.color,
        fontWeight: grayText.fontWeight
    },
    blueText: {
        fontSize: blueText.fontSize,
        color: blueText.color,
        fontWeight: blueText.fontWeight,
    },
})

export default NotificationModal;