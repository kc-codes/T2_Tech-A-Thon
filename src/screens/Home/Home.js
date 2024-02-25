import { Image, ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity, Pressable, Dimensions, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { API_URL, colorTheme } from '../../constant'
import DoctorCard from '../../components/DoctorCard'
import ArticleCard from '../../components/ArticleCard'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import LocationModal from '../../components/Modal/LocationModal'
import FilterModal from '../../components/Modal/FilterModal'
import NotificationModal from '../../components/Modal/NotificationModal'
import Carousel from '../../components/Carousel'
import Category from '../../components/Modal/CategoryModal'
import TopDoctorModal from '../../components/Modal/TopDoctorModal'
import TopHospitalModal from '../../components/Modal/TopHospitalModal'
import AddYourTakModal from '../../components/Modal/AddTaskModal'
import SeeAllTaskModal from '../../components/Modal/SeeAllTaskModal'
import JournalModal from '../../components/Modal/JournalModal'
import { sendSmsData } from '../../components/SendSMS'
import { articlesServices } from '../../services/Article'
import QuoteOfTheDay from '../../components/QuoteOfTheDay'
import YoutubeVideos from '../../components/YoutubeVideos'
import axios from 'axios'
import { BlogServices } from '../../services/BlogsServices'
import LottieView from 'lottie-react-native'
import { YoutubeHomeData } from '../../assets/data/YoutubeData'
import YoutubeModal from '../../components/Modal/YoutubeModal'
import BlogScreenModal from '../../components/Modal/BlogScreenModal'

const data = [
  {
    name: 'Dr. Charollette Baker',
    job: "Heart Surgeon",
  },
  {
    name: 'Dr. Gautam Verma',
    job: "Heart Surgeon",
  },
  {
    name: 'Dr. Gautam Verma',
    job: "Heart Surgeon",
  },
];

const SMSDATA = [
  {
    phone: '9082222597',
    msg: "Hello there is medical pls contact me immediatlely"
  },
  {
    phone: '9869852633',
    msg: "Hello there is medical pls contact me immediatlely"
  },
]

function Test(params) {
  // PayNow()
}

function SendSOS(params) {
  sendSmsData(SMSDATA)

}

const SCORE_POINTER = 0

export default function Home({ navigation }) {

  const [article, setarticle] = useState({})
  const [articleLoading, setarticleLoading] = useState(false)
  const [search, setSearch] = useState('')
  const [isPost, setIsPost] = useState(false)
  const [modalVisible, setModalVisible] = useState(false);
  const [filterModal, setFilterModal] = useState(false)
  const [notificationModal, setNotificationModal] = useState(false)
  const [categoryModalVisible, setcategoryModalVisible] = useState(false);
  const [topDoctorModal, setTopDoctorModal] = useState(false);
  const [topHosPitalModal, setTopHospitalModal] = useState(false);
  const [AddTaskModal, setAddTaskModal] = useState(false);
  const [supportiveContent, setSupportiveContent] = useState(false);
  const [seeAllTask, setSeeAllTask] = useState(false);
  const [journalModal, setjournalModalModal] = useState(false);
  const [score, setScore] = useState(0);
  const [isBatchLoading, setisBatchLoading] = useState(true)
  const [blogScreenModal, setBlogScreenModal] = useState(false)
  const [ModalData, setBlogModalData] = useState({
    title: '',
    desc: '',
    img: ''
  })
  const [currentLevel, setCurrentLevel] = useState(0); // Initialize with level 0

  const levels = [
    { threshold: 150, source: require('../../assets/json/level-intial-batch.json') },
    { threshold: 500, source: require('../../assets/json/level-0-batch.json') },
    { threshold: 2000, source: require('../../assets/json/level-1-batch.json') },
    { threshold: 5000, source: require('../../assets/json/level-2-batch.json') },
    { threshold: 10000, source: require('../../assets/json/level-3-batch.json') },
    { threshold: 20000, source: require('../../assets/json/level-5-batch.json') },
  ];


  useEffect(() => {
    articlesServices.FetchArticles().then((
      res => {
        setarticle(res.data.articles)
        setarticleLoading(true)
      }
    )).catch(err => { console.log('error fetching data'); })

    BlogServices.getScore().then(
      res => {
        setScore(res.data[0].score)
        setisBatchLoading(false)
      }
    ).catch()
  }, [])

  useEffect(() => {
    // Find the current level based on the user's score
    const level = levels.findIndex(level => score < level.threshold);
    setCurrentLevel(level === -1 ? levels.length - 1 : level); // If userScore exceeds the highest threshold, set to the last level
  }, [score]);


  return (
    <View style={styles.container}>

      {/* here satrt sos  */}
      {/* <Pressable
        onPress={() => {
          SendSOS()
        }}
        style={styles.fixedComponent}>
        <View style={{ alignItems: 'center', height: 55, justifyContent: 'center' }}>
          <Text style={[styles.boldText, { color: 'white' }]}>SOS</Text>
        </View>
      </Pressable> */}
      {/* end sos  */}

      <Pressable
        onPress={() => {
          // SendSOS()
        }}
        style={styles.fixedComponent}>
        <View style={styles.iconContainer}>
          <FontAwesome5 name="robot" color={"white"} size={30} onPress={() => navigation.navigate('ChatBot')} />
        </View>
      </Pressable>
      <ScrollView contentContainerStyle={styles.subcontainer}>
        <>
          {modalVisible
            ?
            <LocationModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
            : null
          }
          {notificationModal
            ?
            <NotificationModal modalVisible={notificationModal} setModalVisible={setNotificationModal} />
            : null
          }
          {
            filterModal
              ?
              <FilterModal modalVisible={filterModal} setModalVisible={setFilterModal} />
              : null
          }
          {
            categoryModalVisible
              ?
              <Category modalVisible={categoryModalVisible} setModalVisible={setcategoryModalVisible} />
              : null
          }
          {
            topDoctorModal
              ?
              <TopDoctorModal modalVisible={topDoctorModal} setModalVisible={setTopDoctorModal} />
              : null
          }
          {
            topHosPitalModal
              ?
              <TopHospitalModal modalVisible={topHosPitalModal} setModalVisible={setTopHospitalModal} />
              : null
          }
          {
            AddTaskModal
              ?
              <AddYourTakModal modalVisible={AddTaskModal} setModalVisible={setAddTaskModal} />
              : null
          }
          {
            seeAllTask
              ?
              <SeeAllTaskModal modalVisible={seeAllTask} setModalVisible={setSeeAllTask} />
              : null
          }
          {
            journalModal
              ?
              <JournalModal modalVisible={journalModal} setModalVisible={setjournalModalModal} />
              : null
          }
          {
            supportiveContent
              ?
              <YoutubeModal modalVisible={supportiveContent} setModalVisible={setSupportiveContent} />
              : null
          }
          {
            blogScreenModal
              ?
              <BlogScreenModal modalVisible={blogScreenModal} setModalVisible={setBlogScreenModal} ModalData={ModalData} />
              : null
          }
        </>
        <View style={{ width: "90%", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <View>
            <Text style={{ color: "gray" }}>Location</Text>
            <Pressable
              style={{ flexDirection: "row", alignItems: 'center' }}
              onPress={() => setModalVisible(true)}
            >
              <MaterialIcons name="location-pin" color={colorTheme.primaryColor} size={25} />
              <Text style={{ color: "black", fontSize: 15, fontWeight: "700" }}>New York,USA</Text>
              <MaterialIcons name="keyboard-arrow-down" color={colorTheme.primaryColor} size={25} />
            </Pressable>
          </View>
          <View
            style={{ width: 80, height: 32, backgroundColor: "white", justifyContent: "center", alignItems: "center", borderRadius: 50, flexDirection: 'row' }}>
            <MaterialIcons name="videocam" color={colorTheme.primaryColor} size={25} style={{ marginRight: 10 }} onPress={() => { navigation.navigate("VideoCall") }} />
            <MaterialIcons name="notifications-active" color={colorTheme.primaryColor} size={25} style={{ marginRight: 10 }} onPress={() => setNotificationModal(true)} />
            <FontAwesome name="pencil-square-o" color={colorTheme.primaryColor} size={25} style={{ marginRight: 10 }} onPress={() => setjournalModalModal(true)} />
          </View>
        </View>
        {isBatchLoading ? (
          <ActivityIndicator size="large" />
        ) : (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <LottieView
              source={levels[currentLevel].source} // Dynamically select the animation source based on the current level
              autoPlay
              loop
              style={{ width: 100, height: 100, backgroundColor: 'white' }}
            />
            <View style={{ width: '60%' }}>
              <Text
                style={{ textAlign: 'center', fontSize: 18, color: 'black', fontWeight: 'bold', fontStyle: 'italic' }}
                numberOfLines={2}
              >
                {`Congrats! You are level ${currentLevel} now`}
              </Text>
            </View>
          </View>
        )}
        <View style={{ width: '90%', marginBottom: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <View style={styles.textInput}>
            <MaterialIcons name="search" color={colorTheme.primaryColor} size={25} />
            <TextInput
              placeholder='Search'
              onChangeText={(text) => setSearch(text)}
              value={search}
              style={{ height: 48, width: "92%" }}
            />
          </View>
          <Pressable
            style={{ width: 45, height: 45, backgroundColor: colorTheme.primaryColor, justifyContent: "center", alignItems: "center", borderRadius: 10 }}
            onPress={() => { setFilterModal(true) }}
          >
            <FontAwesome name="sliders" color="white" size={25} />
          </Pressable>
        </View>
        {/* youtube webview  */}
        {/* <View style={{ width: '90%', marginTop: 10, height: 600 }}>
          <WebView
            originWhitelist={['*']}
            source={{
              html: `
              <iframe width="560" height="315" src="https://www.youtube.com/embed/DbRXv5TXMEE?si=xbMISuEvM17MXKaP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              `,
            }}
            style={{ flex: 1 }}
            onError={(error) => console.error('WebView error:', error)}
          />
        </View> */}
        {/* youtube webview ended */}
        <View style={{ marginBottom: 15, width: '90%' }}>
          <QuoteOfTheDay />
        </View>
        <View style={{ width: '90%', }}>
          <View style={{ flexDirection: "row", justifyContent: 'space-between', padding: 10 }}>
            <Text style={[styles.grayText, { color: 'black' }]}>Your Todos...</Text>
            <Text onPress={() => { setSeeAllTask(true) }} style={[{ color: colorTheme.primaryColor, fontSize: 15 }]}>See All Tasks</Text>
          </View>
          <View style={{ borderWidth: 1, borderColor: colorTheme.borderColor, borderRadius: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15 }}>
              <Text style={[styles.smallText, { fontSize: 15, color: 'gray' }]}>TaskList for your chores!!!</Text>
              <TouchableOpacity
                onPress={() => { setAddTaskModal(true) }}
                style={{ backgroundColor: colorTheme.primaryColor, justifyContent: 'center', alignItems: 'center', borderRadius: 30, elevation: 10 }}>
                <MaterialIcons name="add" color={"white"} size={25} style={{ padding: 10 }} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ width: '90%', flexDirection: "row", justifyContent: 'space-between', marginTop: 10 }}>
          <Text style={[styles.grayText, {}]}>Supportive Content</Text>
          <Text
            onPress={() => { setSupportiveContent(true) }}
            style={[{ color: colorTheme.primaryColor, fontSize: 15 }]}>See All</Text>
        </View>
        <Carousel data={YoutubeHomeData}>
          <YoutubeVideos />
        </Carousel>
        <View style={{ width: '90%', flexDirection: "row", justifyContent: 'space-between' }}>
          <Text style={[styles.grayText, { marginBottom: 8, }]}>Top Specialist</Text>
          <Text
            onPress={() => { setTopDoctorModal(true) }}
            style={[{ color: colorTheme.primaryColor, fontSize: 15 }]}>See All</Text>
        </View>
        <Carousel data={data} autoPlay>
          <DoctorCard isNavigate />
        </Carousel>
        <View style={{}}>
          <View style={{ width: '90%', flexDirection: "row", justifyContent: 'space-between', padding: 10 }}>
            <Text style={[styles.grayText, { marginBottom: 8, }]}>Doctor Speciality</Text>
            <Text onPress={() => { setcategoryModalVisible(true) }} style={[{ color: colorTheme.primaryColor, fontSize: 15 }]}>See All</Text>
          </View>
          <View style={{ flexDirection: 'row', padding: 5, justifyContent: 'space-around' }}>
            <View style={{ backgroundColor: colorTheme.iconBackGroundColor, padding: 15, borderRadius: 50 }}>
              <FontAwesome5 name="teeth-open" color={colorTheme.primaryColor} size={25} />
            </View>
            <View style={{ backgroundColor: colorTheme.iconBackGroundColor, padding: 15, borderRadius: 50 }}>
              <FontAwesome5 name="heartbeat" color={colorTheme.primaryColor} size={25} />
            </View>
            <View style={{ backgroundColor: colorTheme.iconBackGroundColor, padding: 15, borderRadius: 50 }}>
              <FontAwesome5 name="bone" color={colorTheme.primaryColor} size={25} />
            </View>
            <View style={{ backgroundColor: colorTheme.iconBackGroundColor, padding: 15, borderRadius: 50 }}>
              <FontAwesome5 name="brain" color={colorTheme.primaryColor} size={25} />
            </View>
          </View>
        </View>
        <View style={[{ width: "90%", }]}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity
              style={{ backgroundColor: isPost ? colorTheme.primaryColor : 'white', width: 120, height: 40, borderRadius: 50, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: colorTheme.primaryColor }}
              onPress={() => { setIsPost(true) }}
            >
              <Text style={{ color: isPost ? "white" : 'black' }}>Posts</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ backgroundColor: isPost ? "white" : colorTheme.primaryColor, width: 120, height: 40, borderRadius: 50, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: colorTheme.primaryColor }}
              onPress={() => {
                setIsPost(false)
                // Test()
              }}
            >
              <Text style={{ color: isPost ? "black" : 'white' }}>Articles</Text>
            </TouchableOpacity>
          </View>
          {articleLoading ? article.map((obj, index) => (
            <ArticleCard setBlogModalData={setBlogModalData} key={index} title={obj.title} desc={obj.description} image={obj.urlToImage} modal={blogScreenModal} setModal={setBlogScreenModal} />
          )) :
            <View style={{ alignItems: 'center', marginBottom: 20 }}>
              <ActivityIndicator size="large" />
            </View>
          }
        </View>
      </ScrollView >
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: colorTheme.appBackGroundColor
  },
  subcontainer: {
    alignItems: 'center',
    marginTop: 10,

  },
  textInput: {
    width: "80%",
    height: 48,
    borderRadius: 10,
    backgroundColor: "white",
    padding: 7,
    borderWidth: 1,
    borderColor: colorTheme.borderColor,
    flexDirection: "row",
    // justifyContent:"center",
    alignItems: "center"
  },
  grayText: {
    fontSize: 17,
    fontWeight: '700',
    color: "gray"
  },
  boldText: {
    fontSize: 17,
    fontWeight: '700',
    color: "black"
  },
  smallText: {
    fontSize: 12,
    fontWeight: '500',
    color: "black"
  },
  post: {
    width: '90%',
    marginBottom: 3,
    // backgroundColor: 'white',
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  card: {
    width: "90%",
    height: 112,
    backgroundColor: 'white',
    borderRadius: 10
  },
  image: {
    width: '40%',
    height: '100%',
    marginRight: 5
  },
  fixedComponent: {
    position: 'absolute',
    bottom: 30,
    width: 80,
    height: 80,
    backgroundColor: colorTheme.primaryColor,
    zIndex: 20,
    right: 30,
    borderRadius: 50, // half of width and height to make it circular
    opacity: 2,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
  iconContainer: {
    width: 60, // Adjust the width and height of the icon container as needed
    height: 60,
    borderRadius: 30, // half of width and height to make it circular
    justifyContent: 'center',
    alignItems: 'center',
  },

})