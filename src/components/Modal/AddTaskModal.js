import { Modal, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { blackText, blueText, colorTheme, grayText } from '../../constant'
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import {BlogServices} from '../../services/BlogsServices'

export default function AddTaskModal({ modalVisible, setModalVisible }) {
    const [selected, setselected] = useState(null)
    const [Slider, setSlider] = useState([10, 30])
    const [SelectInstantBook, setSelectInstantBook] = useState(false)
    const [task, setTask] = useState('')

    function hancleSubmit() {
        BlogServices.PostTask(task,Slider[1])
        setModalVisible(!modalVisible)
    }
    const handleSLider = (value) => {
        setSlider(value);
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
                <ScrollView style={styles.subContainer}>
                    <Pressable
                        style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <MaterialIcons name="keyboard-arrow-down" color={colorTheme.primaryColor} size={35} style={{ marginRight: 10 }} />
                        <Text style={styles.bigText}>Add Your Task</Text>
                    </Pressable>

                    <Text style={[styles.bigText, { marginTop: 30 }]}>Add Today's Task</Text>
                    <View style={styles.textInput}>
                        <MaterialIcons name="add" color={colorTheme.primaryColor} size={25} />
                        <TextInput
                            placeholder='Enter Your Task'
                            onChangeText={(text) => setTask(text)}
                            value={task}
                            style={{  width: "92%" }}
                            multiline
                        />
                    </View>
                    <Text style={[styles.bigText, { marginTop: 30 }]}>Priority</Text>
                    <View style={{}}>
                        <MultiSlider
                            values={Slider}
                            onValuesChange={handleSLider}
                            sliderLength={300}
                            min={10}
                            max={30}
                            step={10}
                            allowOverlap={false}
                            snapped={true}
                            markerStyle={{ backgroundColor: colorTheme.primaryColor, width: 25, height: 25, borderWidth: 2, borderColor: "white" }}
                            trackStyle={{ backgroundColor: grayText.color, width: 10, borderWidth: 1.5, borderColor: grayText.color }}
                            selectedStyle={{ backgroundColor: colorTheme.primaryColor, borderWidth: 1.5, borderColor: colorTheme.primaryColor }}
                            containerStyle={{ alignSelf: "center" }}
                        />
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <View style={{alignItems:'center'}}>
                                <Text>10</Text>
                                <Text>Low</Text>
                            </View>
                            <View style={{alignItems:'center'}}>
                                <Text>20</Text>
                                <Text>Medium</Text>
                            </View>
                            <View style={{alignItems:'center'}}>
                                <Text>30</Text>
                                <Text>High</Text>
                            </View>

                        </View>
                    </View>
                </ScrollView>
                <View style={{
                    width: "100%",
                    height: 70,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    elevation: 1,
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    flexDirection: "row"

                }}>
                    <TouchableOpacity
                        style={{ width: "90%", backgroundColor: colorTheme.primaryColor, height: 40, borderRadius: 50, justifyContent: "center" }}
                    onPress={() => hancleSubmit()}
                    >
                        <Text style={[styles.smallText, { color: "white", alignSelf: 'center' }]}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
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
        alignSelf: "center"
    },
    textInput: {
        // height: 150,
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