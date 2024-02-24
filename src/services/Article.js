import axios from "axios"
import { HEALTH_NEWS_API_KEY } from "../constant";

function FetchArticles() {
    return new Promise((resolve, reject) => {
        axios.get(
            `https://newsapi.org/v2/everything?q=depression&from=2024-02-06&pageSize=10&sortBy=publishedAt&apiKey=${HEALTH_NEWS_API_KEY}`
        ).then(async (response) => {
            try {
                resolve(response)
            } catch (e) { reject(e) }
        }).catch((err) => {
            reject(err)
        })
    })
}


export const articlesServices={
    FetchArticles
}