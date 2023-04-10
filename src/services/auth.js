import axios from "axios";
import { BASE_URL } from "../uti/lib";
import { Notify } from "../uti/uti";


export async function SignIn(payload){

    try{
        const res = await axios.post(`${BASE_URL}/login`, payload)

        if(res?.data?.token){
            return res.data.token
        }else{
            Notify(res?.data?.error, "error")
        }
        return false;
    }catch(e){
        console.log(e)
        Notify("Some thing went wrong", "error")
        return false
    }


}

