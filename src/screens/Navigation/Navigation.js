import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from '../Splash'
import GetStarted from '../Authentication/GetStarted'
import VerifyAccount from '../Authentication/VerifyAccount'
import SignUp from '../Authentication/SignUp'
import DoctorRegister from '../Authentication/DoctorRegister'
import Login from '../Authentication/Login'
import Olddisease from '../Authentication/Olddisease'
import LoginChoice from '../Authentication/LoginChoice'
import BottomTab from '../../components/BottomTab'
import DoctorDetail from '../AppointMents/DoctorDetail'
import BookAppointment from '../AppointMents/BookAppointment'
import SelectAppointmentPackage from '../AppointMents/SelectAppointmentPackage'
import PatientDetails from '../AppointMents/PatientDetails'
import PaymentMethod from '../AppointMents/PaymentMethod'
import SuccesfullPayment from '../AppointMents/SuccesfullPayment'
import Message from '../Chat/Messages'
import VideoCall from '../Chat/VideoCall'
import CancelBooking from '../AppointMents/CancelBooking'
import RescheduledAppointment from '../AppointMents/ReschedledAppointment'
import EditProfile from '../Profile/EditProfile'
import Settings from '../Profile/Settings'
import CheckMood from '../Profile/CheckMood'
import PasswordManager from '../Profile/PasswordManager'
import PrivacyPolicy from '../Profile/PrivacyPolicy'
import HelpCenter from '../Profile/HelpCenter'
import CompleteProfile from '../Profile/CompleteProfile'
import OfflineVideo from '../Profile/OfflineVideo'
import SuccesfullRegistration from '../Profile/SuccesfullRegistration'
import Hospital from '../Hospital'
import Favorites from '../Profile/Favorites'
import ForgetPassword from '../Authentication/ForgetPassword'
import Activity from '../Activity/Activity'
import TicTacToe from '../Activity/Tic-Tac-Toe'
import WordGuessGame from '../Activity/WordGuessGame'
import RockPaperScissor from '../Activity/RockPaperScissor'
import JokesGenerator from '../Activity/JokesGenerator'
import BubblePop from '../Activity/BubblePop'
import Workout from '../Activity/Workout'
import Music from '../Activity/Music'
import Books from '../Activity/Books'
import ChatBot from '../Chat/ChatBot'
import Survey from '../Survey/Survey'
import HowYourDay from '../Survey/HowYourDay'
import Helpless from '../Survey/Helpless'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
      <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name='GetStarted' component={GetStarted} options={{ headerShown: false }} />
        <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name='DoctorRegister' component={DoctorRegister} options={{ headerShown: false }} />
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='ForgetPassword' component={ForgetPassword} options={{ headerShown: false }} />
        <Stack.Screen name='VerifyAccount' component={VerifyAccount} options={{ headerShown: false }} />
        <Stack.Screen name='BottomTab' component={BottomTab} options={{ headerShown: false }} />
        <Stack.Screen name='DoctorDetail' component={DoctorDetail} options={{ headerShown: false }} />
        <Stack.Screen name='Hospital' component={Hospital} options={{ headerShown: false }} />
        <Stack.Screen name='BookAppointment' component={BookAppointment} options={{ headerShown: false }} />
        <Stack.Screen name='SelectAppointmentPackage' component={SelectAppointmentPackage} options={{ headerShown: false }} />
        <Stack.Screen name='PatientDetails' component={PatientDetails} options={{ headerShown: false }} />
        <Stack.Screen name='PaymentMethod' component={PaymentMethod} options={{ headerShown: false }} />
        <Stack.Screen name='SuccesfullPayment' component={SuccesfullPayment} options={{ headerShown: false }} />
        <Stack.Screen name='Message' component={Message} options={{ headerShown: false }} />
        <Stack.Screen name='VideoCall' component={VideoCall} options={{ headerShown: false }} />
        <Stack.Screen name='CancelBooking' component={CancelBooking} options={{ headerShown: false }} />
        <Stack.Screen name='RescheduledAppointment' component={RescheduledAppointment} options={{ headerShown: false }} />
        <Stack.Screen name='EditProfile' component={EditProfile} options={{ headerShown: false }} />
        <Stack.Screen name='Settings' component={Settings} options={{ headerShown: false }} />
        <Stack.Screen name='OfflineVideo' component={OfflineVideo} options={{ headerShown: false }} />
        <Stack.Screen name='PasswordManager' component={PasswordManager} options={{ headerShown: false }} />
        <Stack.Screen name='PrivacyPolicy' component={PrivacyPolicy} options={{ headerShown: false }} />
        <Stack.Screen name='HelpCenter' component={HelpCenter} options={{ headerShown: false }} />
        <Stack.Screen name='CompleteProfile' component={CompleteProfile} options={{ headerShown: false }} />
        <Stack.Screen name='Favorites' component={Favorites} options={{ headerShown: false }} />
        <Stack.Screen name='SuccesfullRegistration' component={SuccesfullRegistration} options={{ headerShown: false }} />
        <Stack.Screen name='LoginChoice' component={LoginChoice} options={{ headerShown: false }} />
        <Stack.Screen name='Olddisease' component={Olddisease} options={{ headerShown: false }} />
        <Stack.Screen name='Activity' component={Activity} options={{ headerShown: false }} />
        <Stack.Screen name='TicTacToe' component={TicTacToe} options={{ headerShown: false }} />
        <Stack.Screen name='WordGuessGame' component={WordGuessGame} options={{ headerShown: false }} />
        <Stack.Screen name='RockPaperScissor' component={RockPaperScissor} options={{ headerShown: false }} />
        <Stack.Screen name='JokesGenerator' component={JokesGenerator} options={{ headerShown: false }} />
        <Stack.Screen name='BubblePop' component={BubblePop} options={{ headerShown: false }} />
        <Stack.Screen name='Workout' component={Workout} options={{ headerShown: false }} />
        <Stack.Screen name='Music' component={Music} options={{ headerShown: false }} />
        <Stack.Screen name='Books' component={Books} options={{ headerShown: false }} />
        <Stack.Screen name='ChatBot' component={ChatBot} options={{ headerShown: false }} />
        <Stack.Screen name='CheckMood' component={CheckMood} options={{ headerShown: false }} />
        <Stack.Screen name='Survey' component={Survey} options={{ headerShown: false }} />
        <Stack.Screen name='HowYourDay' component={HowYourDay} options={{ headerShown: false }} />
        <Stack.Screen name='Helpless' component={Helpless} options={{ headerShown: false }} />
      </Stack.Navigator>
  )
}
