import { ActivityIndicator, Modal, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { API_URL, blackText, blueText, colorTheme, grayText } from '../../constant'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { BlogServices } from '../../services/BlogsServices'
import axios from 'axios'


function Notification({ iconBackGroundColor, iconColor, iconName, Date, isDate }) {
    return (
        <>
            {isDate ?
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 30, alignItems: 'center' }}>
                    <Text style={[styles.bigText, { color: "gray" }]}>Today</Text>
                </View>
                : null
            }
            <View style={{ flexDirection: "row", backgroundColor: 'white', elevation: 1, borderRadius: 10, padding: 10, marginBottom: 10 }}>
                <View style={{ backgroundColor: iconBackGroundColor, borderRadius: 50, width: 50, height: 50 }}>
                    <MaterialIcons name={"date-range"} size={20} color={iconColor} style={{ padding: 15 }} />
                </View>
                <View style={{ width: '80%', marginLeft: 10 }}>
                    <Text style={[styles.smallText,]}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam voluptas dicta illum,</Text>
                </View>
            </View>
        </>
    )
}
const SetAllTaskModal = ({ modalVisible, setModalVisible }) => {
    const [search, setSearch] = useState('')
    const [isLoading, setisLoading] = useState(true)
    const [isRead, setIsRead] = useState(false)
    const [Data, setData] = useState([])

    async function GetAllTask() {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVjYjg5YzdjMTA4YzE0NGU4MzZkMWYwIn0sImlhdCI6MTcwNzgzNzg5NX0.Ith6JQ1gJBthbo02HRbvNxUy95tbk7GNHXY2LaW6z6o'
        const config = {
            headers: {
                'auth-token': token,
            }
        }

        return new Promise((resolve, reject) => {
            axios.get(`${API_URL}/todo/fetchmytodo`, config)
                .then(async (response) => {
                    try {
                        // console.log(response.data);
                        resolve(response)
                        setData(response.data)
                        setisLoading(false)
                    } catch (e) { reject(e) }
                }).catch((err) => {
                    console.log(err.response.data);
                    reject(err)
                })
        })
    }

    function handleDelete(id,score) {
        BlogServices.DeleteTask(id)
        BlogServices.PostScore(score)
        GetAllTask()
    }

    useEffect(() => {
        GetAllTask();
    }, [])

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}>
            <View style={styles.container}>
                {
                    isLoading ?
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <ActivityIndicator size="large" />
                        </View>
                        :
                        <ScrollView style={styles.subContainer} showsVerticalScrollIndicator={false}>

                            <View
                                style={{ flexDirection: "row", alignItems: "center", marginTop: 10, justifyContent: 'space-between' }}
                            >
                                <Pressable
                                    onPress={() => setModalVisible(!modalVisible)}
                                    style={{ width: 35, height: 35, backgroundColor: "white", justifyContent: "center", alignItems: "center", borderRadius: 50, borderWidth: 1, borderColor: colorTheme.borderColor }}>
                                    <Ionicons name={"chevron-back"} size={20} color={colorTheme.primaryColor} />
                                </Pressable>
                                <Text style={[styles.bigText, { fontFamily: "NotoSans_ExtraCondensed-Bold" }]}>Your Task List</Text>
                                <View style={{ marginLeft: 30 }}></View>
                            </View>
                            {[Data.map((res, index) => (
                                <View key={index}>

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 30, alignItems: 'center' }}>
                                        <Text style={[styles.bigText, { color: "gray" }]}>{res.date}</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", backgroundColor: 'white', elevation: 1, borderRadius: 10, padding: 10, marginBottom: 10, alignItems: 'center' }}>
                                        <View style={{ backgroundColor: res.priority === 30 ? 'red' : res.priority === 20 ? '#aeddf2' : '#c1f7c3', borderRadius: 50, width: 50, height: 50 }}>
                                            <MaterialIcons name={"date-range"} size={20} color={'white'} style={{ padding: 15 }} />
                                        </View>
                                        <View style={{ width: '69%', marginLeft: 10 }}>
                                            <Text style={[styles.smallText,]}>{res.todo}</Text>
                                        </View>
                                        <TouchableOpacity 
                                        onPress={()=>{handleDelete(res._id,res.priority)}}
                                        style={{elevation:2,backgroundColor:'white',borderRadius:20}}>
                                            <MaterialIcons name={"delete"} size={25} color={"red"} style={{padding:5}} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            ))]}
                        </ScrollView>
                }
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

export default SetAllTaskModal;