import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { colorTheme } from '../../constant';
import Header from '../../components/Header';
import WebView from 'react-native-webview';

const Music = () => {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Header leftIconName header={'Your Profile'} titleMargin={30} />
            </View>
            {/* Main Content */}
            <ScrollView style={styles.content}>
                <WebView
                    originWhitelist={['*']}
                    source={{ uri: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX9uKNf5jGX6m?utm_source=oembed' }}
                    style={styles.webView}
                    onError={(error) => console.error('WebView error:', error)}
                />
            </ScrollView>

            {/* Footer */}
            <View style={styles.footer}>
                <Text style={styles.footerText}>Footer</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colorTheme.appBackGroundColor,
        flex: 1,
    },
    header: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 5
    },
    content: {
        flex: 1,
        width: '100%', // Ensure WebView takes full width
    },
    footer: {
        padding: 10,
        alignItems: 'center',
        width: '100%', // Ensure footer takes full width
        alignSelf: 'center',
    },
    webView: {
        flex: 1, // Take up all available space
    },
    footerText: {
        color: 'white', // Adjust color for visibility
    },
});

export default Music;
