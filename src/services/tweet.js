import axios from "axios";
import { BASE_URL, CallAuthAPI } from "../uti/lib";
import { Notify, SignOut } from "../uti/uti";


export async function MyTimeLine(page = 1, size = 10){

    
    const res = await CallAuthAPI("get", `/timeline?page=${page}&size=${size}`)

    console.log("res", res)

    if(res?.data?.timeline){
        return res.data
    }

    if(res.data.error == 'Invalid or Expired JWT'){
        Notify("Session expired", "error")
        SignOut()
    }

    return false
    


}


export async function MyTweets(page = 1, size = 10){

    
    const res = await CallAuthAPI("get", `/my-tweets?page=${page}&size=${size}`)

    console.log("res", res)

    if(res?.data?.my_tweets){
        return res.data
    }

    if(res.data.error == 'Invalid or Expired JWT'){
        Notify("Session expired", "error")
        SignOut()
    }

    return false
    


}

export async function PostTweet(payload){

    const res = await CallAuthAPI("post", "/tweet", payload)

    if(res?.data?.tweet){
        Notify(res.data.message)
        return res.data
    }

    Notify(res.data.message, "error")
    
    return false

}

