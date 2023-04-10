import axios from "axios";
import { BASE_URL, CallAuthAPI } from "../uti/lib";
import { Notify } from "../uti/uti";


export async function MyTimeLine(page = 1, size = 10){

    
    const res = await CallAuthAPI("get", `/timeline?page=${page}&size=${size}`)

    console.log("res", res)

    if(res?.data?.timeline){
        return res.data
    }

    return false
    


}

