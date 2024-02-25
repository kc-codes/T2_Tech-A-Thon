import React from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import { blackText, blueText, colorTheme, grayText } from '../../constant';
import Header from '../../components/Header';
import WebView from 'react-native-webview';
import { bookData } from '../../assets/data/BooksData';

export default Books = () => {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Header leftIconName header={'Read Books'} titleMargin={30} />
            </View>
            {/* Main Content */}
            <ScrollView style={styles.content}>
                {bookData.map((data, index) => (
                    <View key={index} style={{ width: '100%', marginTop: 20, height: 250, borderWidth: 1, borderRadius: 10, borderColor: colorTheme.borderColor }}>
                        <WebView
                            originWhitelist={['*']}
                            source={{
                                uri: data.link
                            }}
                            style={{ flex: 1, }}
                            onError={(error) => console.error('WebView error:', error)}
                        />
                    </View>
                ))}

            </ScrollView>

            {/* Footer */}
            <View style={styles.footer}>
            </View>
        </View>
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
        width: '90%',
        alignSelf: 'center'
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

