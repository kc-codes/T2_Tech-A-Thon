import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { API_URL } from "../constant";
import { navigate } from "./navRef";

async function BookAppointment() {
    console.log('in BookAppointment');
    const token = await AsyncStorage.getItem("userToken");
    const body = {
        doctor: "65cb89c7c108c144e836d1f0",
        date: "10",
        time: "male",
        customschedule: "male",
        package: "male",
        duration: "male",
        problem: "male"
    }
    const config = {
        headers: {
            'auth-token': token,
        }
    }
    return new Promise((resolve, reject) => {

        console.log(token);
        axios.post(`${API_URL}/doctor/bookappoinment`, body, config
        ).then(async (response) => {
            try {
                // await setAuthAsyncStorage(response)
                console.log(response.data);
                resolve(response)
                navigate('PaymentMethod')
            } catch (err) {
                console.log(err);
                reject(e)
            }
        }).catch((err) => {
            console.log(err.response.data);
            reject(err)
        })
    })
}

export const appointmentServices = {
    BookAppointment
}