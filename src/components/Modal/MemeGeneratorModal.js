import { Image, Modal, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { blackText, blueText, colorTheme, grayText } from '../../constant'
import RadioButton from '../RadioButton'
import MultiSlider from '@ptomasroos/react-native-multi-slider'


export default function MemeGeneratorModal({ modalVisible, setModalVisible }) {
    const [allMemeData, setMemeAllImages] = useState({});
    const [imgState, setImageState] = useState(false);
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "",
    });

    useEffect(() => {
        async function getMemesApi() {
            try {
                const response = await fetch(
                    "https://api.imgflip.com/get_memes");
                const data = await response.json();
                setMemeAllImages(data);
            } catch (error) {
                console.error("Error fetching memes:", error);
            }
        }
        getMemesApi();
    }, []);

    const handleClick = () => {
        const memesArray = allMemeData.data.memes;
        const randomIndex = Math.floor(Math.random() * memesArray.length);
        const imgUrl = memesArray[randomIndex].url;
        setImageState(true);
        setMeme({
            ...meme,
            randomImage: imgUrl,
        });
    };

    const handleChange = (name, value) => {
        setMeme({
            ...meme,
            [name]: value,
        });
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}>
            <SafeAreaView style={styles.container}>
                <Pressable
                    style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
                    onPress={() => setModalVisible(!modalVisible)}
                >
                    <MaterialIcons name="keyboard-arrow-down" color={colorTheme.primaryColor} size={35} style={{ marginRight: 10 }} />
                    <Text style={[styles.bigText, { fontSize: 18 }]}>Go Back To Activity</Text>
                </Pressable>
                <ScrollView>
                    <View style={styles.navbar}>
                        <Text style={styles.navbarText}>
                            Meme Generator
                        </Text>
                    </View>
                    {imgState && (
                        <View style={styles.imageContainer}>
                            <Image source={
                                { uri: meme.randomImage }}
                                style={styles.memeImage} />
                            <Text style={styles.memeTextTop}>
                                {meme.topText}</Text>
                            <Text style={styles.memeText}>
                                {meme.bottomText}</Text>
                        </View>
                    )}
                    <View style={styles.formContainer}>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.inputText}
                                onChangeText={(value) =>
                                    handleChange("topText", value)}
                                value={meme.topText}
                                placeholder="Enter top text"
                            />
                            <TextInput
                                style={styles.inputText}
                                onChangeText={(value) =>
                                    handleChange("bottomText", value)}
                                value={meme.bottomText}
                                placeholder="Enter bottom text"
                            />
                        </View>
                        <TouchableOpacity style={styles.button}
                            onPress={handleClick}>
                            <Text style={styles.buttonText}>
                                Get a new random meme
                            </Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </SafeAreaView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorTheme.appBackGroundColor,
    },
    navbar: {
        padding: 20,
        alignItems: "center",
    },
    navbarText: {
        color: "black",
        fontSize: 24,
        fontWeight: "bold",
    },
    formContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        margin: 20,
        padding: 20,
        borderRadius: 15,
        elevation: 5,
        shadowColor: "#000",
        shadowOpacity: 1,
        shadowOffset: { width: 3, height: 3 },
    },
    inputContainer: {
        marginBottom: 20,
    },
    inputText: {
        borderBottomWidth: 1,
        borderBottomColor: "#333",
        fontSize: 16,
        paddingVertical: 10,
    },
    button: {
        backgroundColor: colorTheme.primaryColor,
        padding: 12,
        borderRadius: 10,
        width: "100%",
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    imageContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    memeImage: {
        width: 300,
        height: 300,
        resizeMode: "contain",
        borderRadius: 10,
        borderWidth: 3,
        borderColor: "#333",
        shadowColor: "#000",
        shadowOpacity: 0.4,
        shadowOffset: { width: 0, height: 4 },
        marginBottom: 20,
    },
    memeTextTop: {
        fontSize: 20,
        fontWeight: "bold",
        position: "absolute",
        top: 30,
        left: 50,
        zIndex: 3,
        color: "crimson",
        textShadowColor: "rgba(0, 0, 0, 0.75)",
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
    },
    memeText: {
        fontSize: 20,
        fontWeight: "bold",
        position: "absolute",
        bottom: 40,
        left: 50,
        zIndex: 3,
        color: "crimson",
        textAlign: "center",
        textShadowColor: "rgba(0, 0, 0, 0.75)",
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
    },
});