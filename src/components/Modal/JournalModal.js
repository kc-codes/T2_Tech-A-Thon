import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Modal, Image, TouchableOpacity, ActivityIndicator, ScrollView, } from 'react-native';
import { API_URL, blackText, blueText, colorTheme, grayText } from '../../constant';
import Header from '../Header';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import UnderLine from '../UnderLine';
import AddJournalModal from './AddJournalModal'
import axios from 'axios';

const JournalModal = ({ modalVisible, setModalVisible }) => {
    const [addJournal, setaddJournal] = useState(false)
    const [Data, setData] = useState([])
    const [isLoading, setisLoading] = useState(true)

    async function GetAllNotes() {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVjYjg5YzdjMTA4YzE0NGU4MzZkMWYwIn0sImlhdCI6MTcwNzgzNzg5NX0.Ith6JQ1gJBthbo02HRbvNxUy95tbk7GNHXY2LaW6z6o'
        const config = {
            headers: {
                'auth-token': token,
            }
        }

        return new Promise((resolve, reject) => {
            axios.get(`${API_URL}/note/fetmynotes`, config)
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

    useEffect(() => {
        GetAllNotes();
    }, [])

    function SplitDate(date) {
        return date.split('T')[0]
    }
    function SplitTime(date) {
        return date.split('T')[1].substring(0, 5)
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
                <TouchableOpacity
                    onPress={() => { setaddJournal(true) }}
                    style={{ backgroundColor: colorTheme.accentColor, width: 70, height: 70, position: 'absolute', bottom: 0, right: 30, borderRadius: 50, justifyContent: 'center', alignItems: 'center',zIndex:2, }}>
                    <MaterialIcons size={40} color={'white'} name={'add'} />
                </TouchableOpacity>
                <>
                    {
                        addJournal
                            ?
                            <AddJournalModal modalVisible={addJournal} setModalVisible={setaddJournal} />
                            : null
                    }
                </>
                <ScrollView style={styles.content}>
                    {
                        isLoading ?
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <ActivityIndicator size="large" />
                            </View>
                            :
                            <>

                                <View style={{ width: '100%', flexDirection: 'row' }}>
                                    <View style={{ height: 120, width: '50%', backgroundColor: colorTheme.primaryColor, justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row' }}>
                                        <Image source={require('../../assets/img/user.jpg')} resizeMode='cover' style={{
                                            width: 60,
                                            height: 60,
                                            borderRadius: 150 / 2,
                                            overflow: "hidden",
                                            borderWidth: 2,
                                            borderColor: 'white',
                                            marginHorizontal: 10
                                        }} />
                                        <View>
                                            <Text style={[styles.boldText, { color: 'white', fontSize: 15, fontWeight: '500' }]}>Hello,</Text>
                                            <Text style={[styles.boldText, { color: 'white', fontSize: 25, fontWeight: '500' }]}>Sharvesh</Text>
                                        </View>
                                    </View>
                                    <View style={{ height: 120, width: '50%', backgroundColor: colorTheme.primaryColor, borderBottomRightRadius: 70 }}></View>
                                </View>
                                {Data.map((res, index) => (
                                    <View key={index} style={{ marginTop: 20, width: '90%', alignSelf: 'center', backgroundColor: colorTheme.iconBackGroundColor, borderRadius: 10 }}>
                                        <View style={{ padding: 10 }}>
                                            <Text style={[styles.bigText, { color: colorTheme.primaryColor, fontSize: 18, fontWeight: '800' }]}>{SplitDate(res.date)}</Text>
                                            <Text style={[styles.smallText, { color: 'black' }]}>{SplitTime(res.date)}</Text>
                                            <UnderLine marginTop={20} thickness={2} color={colorTheme.accentColor} width={'70%'} />
                                            <Text numberOfLines={3} style={[styles.smallText, { fontSize: 16, marginTop: 10 }]}>
                                                {res.note}
                                            </Text>
                                        </View>
                                    </View>
                                ))}
                            </>
                    }
                </ScrollView>
                {/* Footer */}
                <View style={styles.footer}>
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
        width: '100%',
        alignSelf: 'center',
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

export default JournalModal;
