
import axios from "axios"
import { store } from "../redux/store"

export const BASE_URL = "https://missingdata.pythonanywhere.com"


export async function CallAuthAPI(method, url, payload, fullURL){

    const { token } = store.getState().auth

    console.log(token)

    let config = {
        method: method,
        url: fullURL ? url : (BASE_URL + url),
        headers:{
            'Content-Type' : 'application/json',
            'X-Jwt-Token' : 'Bearer '+token,
        }
    }

    if(payload){
        config.data = payload
    }

    try{

        return await axios(config);

    }catch(e){

        console.log("Error at Lib :", e, method, url, payload, fullURL )

        return false


    }    

}

