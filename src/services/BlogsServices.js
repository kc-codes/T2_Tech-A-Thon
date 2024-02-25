import axios from "axios";
import { API_URL, API_URL_AIML } from "../constant";
import AsyncStorage from "@react-native-async-storage/async-storage";

async function PostBlog(title, titleBody) {
    console.log('inside blogs');
    const token = await AsyncStorage.getItem("doctorToken");
    console.log(token);
    const body = {
        "title": "65cb89c7c108c144e836d1f0",
        "description": "65cb89c7c108c144e836d1f0"
    }
    const config = {
        headers: {
            'auth-token': token,
        }
    }

    return new Promise((resolve, reject) => {
        axios.post(`${API_URL}/blog/postblog`, body, config)
            .then(async (response) => {
                try {
                    console.log(response.data);
                    // console.log(response);
                    resolve(response)
                } catch (e) { reject(e) }
            }).catch((err) => {
                console.log(err.response.data);
                reject(err)
            })
    })
}

async function PostTask(todo, priority) {
    // console.log(typeof priority);
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVjYjg5YzdjMTA4YzE0NGU4MzZkMWYwIn0sImlhdCI6MTcwNzgzNzg5NX0.Ith6JQ1gJBthbo02HRbvNxUy95tbk7GNHXY2LaW6z6o'
    console.log(token);
    const body = {
        "todo": todo,
        "priority": priority
    }
    const config = {
        headers: {
            'auth-token': token,
        }
    }

    return new Promise((resolve, reject) => {
        axios.post(`${API_URL}/todo/posttodo`, body, config)
            .then(async (response) => {
                try {
                    console.log(response.data);
                    // console.log(response);
                    resolve(response)
                } catch (e) { reject(e) }
            }).catch((err) => {
                console.log(err.response.data);
                reject(err)
            })
    })
}


async function DeleteTask(id) {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVjYjg5YzdjMTA4YzE0NGU4MzZkMWYwIn0sImlhdCI6MTcwNzgzNzg5NX0.Ith6JQ1gJBthbo02HRbvNxUy95tbk7GNHXY2LaW6z6o'
    const config = {
        headers: {
            'auth-token': token,
        }
    }

    return new Promise((resolve, reject) => {
        axios.delete(`${API_URL}/todo/deletetodo/${id}`, config)
            .then(async (response) => {
                try {
                    console.log(response.data);
                    resolve(response)
                } catch (e) { reject(e) }
            }).catch((err) => {
                console.log(err.response.data);
                reject(err)
            })
    })
}

async function PostNotes(notes) {
    // console.log(typeof priority);
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVjYjg5YzdjMTA4YzE0NGU4MzZkMWYwIn0sImlhdCI6MTcwNzgzNzg5NX0.Ith6JQ1gJBthbo02HRbvNxUy95tbk7GNHXY2LaW6z6o'
    console.log(token);
    const body = {
        note: notes

    }
    const config = {
        headers: {
            'auth-token': token,
        }
    }

    return new Promise((resolve, reject) => {
        axios.post(`${API_URL}/note/addnote`, body, config)
            .then(async (response) => {
                try {
                    console.log(response.data);
                    // console.log(response);
                    resolve(response)
                } catch (e) { reject(e) }
            }).catch((err) => {
                console.log(err.response.data);
                reject(err)
            })
    })
}

async function getScore() {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVjYjg5YzdjMTA4YzE0NGU4MzZkMWYwIn0sImlhdCI6MTcwNzgzNzg5NX0.Ith6JQ1gJBthbo02HRbvNxUy95tbk7GNHXY2LaW6z6o'
    const config = {
        headers: {
            'auth-token': token,
        }
    }

    return new Promise((resolve, reject) => {
        axios.get(`${API_URL}/todo/fetchmytodoscore`, config)
            .then(async (response) => {
                try {
                    resolve(response)
                } catch (e) { reject(e) }
            }).catch((err) => {
                console.log(err.response.data);
                reject(err)
            })
    })
}

async function PostScore(score) {
    // console.log(typeof priority);
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVjYjg5YzdjMTA4YzE0NGU4MzZkMWYwIn0sImlhdCI6MTcwNzgzNzg5NX0.Ith6JQ1gJBthbo02HRbvNxUy95tbk7GNHXY2LaW6z6o'
    console.log(token);
    const body = {
        score: score
    }
    const config = {
        headers: {
            'auth-token': token,
        }
    }

    return new Promise((resolve, reject) => {
        axios.post(`${API_URL}/todo/posttodosscore`, body, config)
            .then(async (response) => {
                try {
                    console.log(response.data);
                    // console.log(response);
                    resolve(response)
                } catch (e) { reject(e) }
            }).catch((err) => {
                console.log(err.response.data);
                reject(err)
            })
    })
}

async function SentimentRequest(query) {
    // console.log(typeof priority);
    const body = {
        query: query
    }

    return new Promise((resolve, reject) => {
        axios.post(`${API_URL_AIML}/postquery/`, body)
            .then(async (response) => {
                try {
                    console.log(response.data);
                    // console.log(response);
                    resolve(response)
                } catch (e) { reject(e) }
            }).catch((err) => {
                console.log(err.response.data);
                reject(err)
            })
    })
}


async function getMySentiment() {
    // console.log(typeof priority);
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVjZmM2MDMwNjZlMjIwNjZlN2ZjOGRlIn0sImlhdCI6MTcwODExNjM0NX0.DnzbQIqxXVVhzZU741LFUXD33UpEBxAt6lbgAPRHCwM'
    const config = {
        headers: {
            'auth-token': token,
        }
    }

    return new Promise((resolve, reject) => {
        axios.get(`${API_URL}/sentiments/fetchmysentiments`,config)
            .then(async (response) => {
                try {
                    console.log(response.data);
                    // console.log(response);
                    resolve(response)
                } catch (e) { reject(e) }
            }).catch((err) => {
                console.log(err.response.data);
                reject(err)
            })
    })
}
export const BlogServices = { PostBlog, PostTask, DeleteTask, PostNotes, getScore, PostScore,SentimentRequest,getMySentiment }