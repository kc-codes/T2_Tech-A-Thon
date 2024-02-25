import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Header from '../../components/Header';
import { colorTheme } from '../../constant';
import { BlogServices } from '../../services/BlogsServices';

export default function CheckMood() {
    const [chooseDate, setchooseDate] = useState(1)
    const [sentimentData, setsentimentData] = useState([])
    const [chooseSentiment, setchooseSentiment] = useState(null)
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth(); // 0-based index
    const currentYear = currentDate.getFullYear();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); // Get the last day of the current month
    const daysArray = Array.from({ length: daysInMonth }, (_, index) => index + 1);

    useEffect(() => {
        BlogServices.getMySentiment().then(
            res => {
                setsentimentData(res.data)
                // console.log(res.data[0].date.substring(8,10));
            }
        )
    }, [])

    function handlePress(date, sentiment) {
        setchooseDate(date)
        setchooseSentiment(sentiment)
    }

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Header leftIconName header={'Your Months Sentiments'} titleMargin={30} />
            </View>
            {/* Main Content */}
            <View style={styles.content}>
                <View style={styles.calendar}>
                    {/* Render days */}
                    {sentimentData.map((data, index) => (
                        <View key={index} style={[styles.dayContainer, { backgroundColor: chooseDate === data.date.substring(8, 10) ? colorTheme.primaryColor : 'white' }]}>
                            <Text onPress={() => handlePress(data.date.substring(8, 10), data.sentiments)} style={styles.dayText}>{data.date.substring(8, 10)}</Text>
                        </View>
                    ))}
                </View>
                {
                    chooseSentiment === 'neutral' ?
                        <View>
                            <Image source={require('../../assets/img/neutral.png')} resizeMode='contain' style={styles.image} />
                            <Text style={{ textAlign: 'center', fontSize: 18, color: 'black', fontWeight: 'bold' }}>Your Sentiment at this day was {chooseSentiment}</Text>
                        </View> : null
                }
                {
                    chooseSentiment === 'negative' ?
                        <View>
                            <Image source={require('../../assets/img/sad.png')} resizeMode='contain' style={styles.image} />
                            <Text style={{ textAlign: 'center', fontSize: 18, color: 'black', fontWeight: 'bold' }}>Your Sentiment at this day was {chooseSentiment}</Text>
                        </View> : null
                }
                {
                    chooseSentiment === 'positive' ?
                        <View>
                            <Image source={require('../../assets/img/happy.png')} resizeMode='contain' style={styles.image} />
                            <Text style={{ textAlign: 'center', fontSize: 18, color: 'black', fontWeight: 'bold' }}>Your Sentiment at this day was {chooseSentiment}</Text>
                        </View> : null
                }
                {
                    chooseSentiment === 'very positive' ?
                        <View>
                            <Image source={require('../../assets/img/veryhappy.png')} resizeMode='contain' style={styles.image} />
                            <Text style={{ textAlign: 'center', fontSize: 18, color: 'black', fontWeight: 'bold' }}>Your Sentiment at this day was {chooseSentiment}</Text>
                        </View> : null
                }
                {
                    chooseSentiment === 'very negative' ?
                        <View>
                            <Image source={require('../../assets/img/neutral.png')} resizeMode='contain' style={styles.image} />
                            <Text style={{ textAlign: 'center', fontSize: 18, color: 'black', fontWeight: 'bold' }}>Your Sentiment at this day was {chooseSentiment}</Text>
                        </View> : null
                }
            </View>

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
        alignSelf: 'center',
        marginTop: 20,
        paddingHorizontal: 10,
    },
    footer: {
        padding: 10,
        alignItems: 'center',
        width: '90%',
        alignSelf: 'center'
    },
    weekDays: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    day: {
        width: 30,
        textAlign: 'center',
    },
    calendar: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
    },
    dayContainer: {
        width: '14.28%', // 7 days, so 100/7 = 14.28%
        aspectRatio: 1, // to make sure each cell is square
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'lightgrey',
    },
    dayText: {
        textAlign: 'center',
    },
    footerText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 150 / 2,
        overflow: "hidden",
        alignSelf: 'center'
        // borderWidth: 2,
        // borderColor: colorTheme.primaryColor 
    },
});
