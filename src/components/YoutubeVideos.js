import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'
import { colorTheme } from '../constant'



export default function YoutubeVideos({item}) {
    return (
        <View style={{ width: '100%', marginTop: 10, height: 200, borderWidth: 1, borderRadius: 10, borderColor: colorTheme.borderColor }}>
            <WebView
                originWhitelist={['*']}
                source={{
                    uri:item.link
                }}
                style={{ flex: 1, }}
                onError={(error) => console.error('WebView error:', error)}
            />
        </View>

    )
    // https://youtu.be/wsUOIpjCZ2k?si=kCchO7Gugb-aYQyK
    // <iframe width="560" height="315" src="https://www.youtube.com/embed/wsUOIpjCZ2k?si=kCchO7Gugb-aYQyK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
}

const styles = StyleSheet.create({})