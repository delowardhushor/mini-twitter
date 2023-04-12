import axios from "axios";
import { BASE_URL, CallAuthAPI } from "../uti/lib";
import { Notify, SignOut } from "../uti/uti";


export async function Search(keyword){

    
    const res = await CallAuthAPI("post", `/search`, {
        token:keyword
    })

    console.log("res", res)

    if(res?.data?.search_results){
        return res.data
    }

    if(res.data.error == 'Invalid or Expired JWT'){
        Notify("Session expired", "error")
        SignOut()
        return false
    }

    Notify(res.data.error, "error")

    return false
    


}

export async function UserList(page = 1, size = 10){

    
    const res = await CallAuthAPI("get", `/users?page=${page}&size=${size}`)

    console.log("res", res)

    if(res?.data?.users){
        return res.data
    }

    if(res.data.error == 'Invalid or Expired JWT'){
        Notify("Session expired", "error")
        SignOut()
        return false
    }

    Notify(res.data.error, "error")


    return false
    
}


export async function FollowerList(page = 1, size = 10){

    
    const res = await CallAuthAPI("get", `/followers?page=${page}&size=${size}`)

    console.log("res", res)

    if(res?.data?.followers){
        return res.data
    }

    if(res.data.error == 'Invalid or Expired JWT'){
        Notify("Session expired", "error")
        SignOut()
        return false
    }

    Notify(res.data.error, "error")


    return false
    
}

export async function FollowingList(page = 1, size = 10){

    
    const res = await CallAuthAPI("get", `/following?page=${page}&size=${size}`)

    console.log("res", res)

    if(res?.data?.followings){
        return res.data
    }

    if(res.data.error == 'Invalid or Expired JWT'){
        Notify("Session expired", "error")
        SignOut()
        return false
    }

    Notify(res.data.error, "error")


    return false
    
}

export async function Follow(userID){

    const res = await CallAuthAPI("post", "/follow", {
        user_id:userID
    })

    if(res?.data?.resp){
        Notify(res.data.resp)
        return true
    }

    Notify(res.data.error || "Something went wrong", "error")

    return false

}

export async function UnFollow(userID){

    const res = await CallAuthAPI("post", "/unfollow", {
        user_id:userID
    })

    if(res?.data?.resp){
        Notify(res.data.resp)
        return true
    }

    Notify(res.data.error || "Something went wrong", "error")

    return false

}


