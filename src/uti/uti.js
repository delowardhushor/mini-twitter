import Toast from 'react-native-toast-message';
import { store } from "../redux/store";
import { ResetAuth, UpdateAuth } from '../redux/authSlice';


export async function Notify(msg, type = 'success', duration = 3000){
    Toast.show({
        type: type,
        text1: msg,
        // text2: 'This is some something 👋',
        visibilityTime:duration
    });
}


export async function OnLoginSuccess(data){

    console.log()

    store.dispatch(UpdateAuth({
        token:data.token,
        user:{email:data.email},
    }))

}

export async function SignOut(){
    store.dispatch(ResetAuth())
}

export function isObjEmpty (obj) {
    return Object.keys(obj).length === 0;
}

export function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    return (false)
}

