import { StyleSheet, View } from 'react-native';
import React from 'react';
import { colorTheme } from '../../constant';
import Header from '../../components/Header';
import WebView from 'react-native-webview';

export default function Music() {
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Header leftIconName header={'Listen To Music'} titleMargin={40} />
                <View style={styles.webViewContainer}>
                    <WebView
                        originWhitelist={['*']}
                        source={{ uri: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX9uKNf5jGX6m?utm_source=oembed' }}
                        style={{ flex: 1 }}
                        onError={(error) => console.error('WebView error:', error)}
                    />
                </View>
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorTheme.appBackGroundColor
    },
    subContainer: {
        flex: 1,
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    webViewContainer: {
        width: '100%',
        marginTop: 10,
        height: 650, // Adjust height as needed
    },
});
