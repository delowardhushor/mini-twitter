
 import React, { useState } from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   Image,
   useColorScheme,
   KeyboardAvoidingView,
   View,
   useWindowDimensions,
 } from 'react-native';
import CustomInput from '../components/CustomInput';
import FullBtn from '../components/FullBtn';
import InnerLayer from '../components/InnerLayer';
import Spacing from '../components/Spacing';
import AllServices from '../services';
import { AllImages, AllNavigations } from '../statics';
import { Colors, GlobalStyle } from '../styles';
import { isObjEmpty, OnLoginSuccess, ValidateEmail } from '../uti/uti';

 const SignIn = ({navigation}) => {

    const { width, height } = useWindowDimensions()

    const globalStyle = GlobalStyle.useGlobalStyle()

    const [showPass, SetshowPass] = useState(false)
    const [loading, Setloading] = useState(false)
    const [errors, Seterrors] = useState({})
    const [submitData, SetsubmitData] = useState({
        email:"",
        password:""
    })

    const Submit = async () => {

        let validation = {}

        if(!submitData.email){
            validation.email = "Email required"
        }

        if(!ValidateEmail(submitData.email)){
            validation.email = "Invalid email address"
        }

        if(!submitData.password){
            validation.password = "Passowrd required"
        }

        if(!isObjEmpty(validation)){
            Seterrors(validation)
            return false
        }

        Setloading(true)

        const token = await AllServices.Auth.SignIn(submitData)

        Setloading(false)


        if(token){
            OnLoginSuccess({
                email:submitData.email,
                token:token
            })
        }

    }
 
    return (
        <InnerLayer>

            <ScrollView>

                <View style={{height:height, justifyContent:'center'}} >

                    <Image 
                        source={AllImages.logo}
                        style={styles.logo}
                    />

                    <Spacing vertical={30} />


                    <Text style={globalStyle.hugeText} >Create your Account</Text>

                    <Spacing vertical={20} />

                    <CustomInput 
                        placeholder="Email"
                        leftIcon="mail"
                        error={errors.email}
                        value={submitData.email}
                        onChangeText={email => SetsubmitData({...submitData, ...{email}})}
                    />

                    <Spacing vertical={15} />

                    <CustomInput 
                        leftIcon="lock"
                        placeholder="Password"
                        secureTextEntry={!showPass}
                        // value="qqweqwe"
                        rightIcon={showPass ? "eye" : "eye-off"}
                        onPressRightIcon={() => SetshowPass(!showPass)}
                        error={errors.password}
                        value={submitData.password}
                        onChangeText={password => SetsubmitData({...submitData, ...{password}})}

                    />

                    <Spacing vertical={30} />


                    <FullBtn 
                        title="Save"
                        onPress={Submit}
                        loading={loading}
                    />

                <Spacing vertical={30} />

                <Text style={[globalStyle.regularText, globalStyle.textCenter]} >Don't have an account? <Text onPress={() => navigation.navigate(AllNavigations.SignUp)} style={[globalStyle.baseColorFont, globalStyle.textBold]} >Sign Up</Text></Text>

                </View>

            </ScrollView>

        </InnerLayer>
   );
 };
 
 const styles = StyleSheet.create({

    wrapper: {
        flex: 1,
        backgroundColor: Colors.BG,
        // backgroundColor: Colors.white,
    },
    safeView: {
        flex: 1,
    },
    innerContent: {
        flex: 1,
    },

    logo:{
        height:150,
        width:150,
        alignSelf:'center'
    }
    
 });
 
export default SignIn;
 