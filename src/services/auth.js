import axios from "axios";
import { AllNavigations } from "../statics";
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

export async function SignUp(payload, navigation){


    try{
        const res = await axios.post(`${BASE_URL}/signup`, payload)

        if(res?.data?.error){
            Notify(res?.data?.error, "error")
            return false
        }

        if(res?.data?.message == "successful"){
            Notify("Sing up successful! Let's sign in now", 'success', 5000)
            navigation.navigate(AllNavigations.SignIn)
        }


        return false;
    }catch(e){
        console.log(e, payload)
        Notify("Some thing went wrong", "error")
        return false
    }


}

