
 import React, { useEffect, useRef, useState } from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   KeyboardAvoidingView,
   View,
   useWindowDimensions,
   ActivityIndicator,
   Image,
   FlatList,
   TextInput,
   Pressable,
 } from 'react-native';
import { useSelector } from 'react-redux';
import CustomInput from '../components/CustomInput';
import FullBtn from '../components/FullBtn';
import Header from '../components/Header';
import InnerLayer from '../components/InnerLayer';
import Spacing from '../components/Spacing';
import Tweet from '../components/Tweet';
import AllServices from '../services';
import { AllImages } from '../statics';
import { Colors, GlobalStyle } from '../styles';
import { OnLoginSuccess, ValidateEmail } from '../uti/uti';

 const TweetPost = ({noPadding, children}) => {

    const { width, height } = useWindowDimensions()

    const globalStyle = GlobalStyle.useGlobalStyle()

    const {user} = useSelector(state => state.auth)
    
    const [content, Setcontent] = useState("")
    
    const [loadingMore, SetloadingMore] = useState(false)

    const tweetInput = useRef(null)

    const Submit = async () => {

    }
    
 
    return (
        <InnerLayer
            noPadding
        >

            <ScrollView
                style={styles.container}
            >

                <View style={globalStyle.rowCenter} >
                    <Image 
                        source={AllImages.avaterPlaceholder}
                        style={styles.avater}
                    />
                    <View>
                        <Text style={globalStyle.bgText} >{user.email}</Text>
                        <Spacing vertical={3} />
                        <Text style={[globalStyle.smText, globalStyle.textBold, globalStyle.lightFontColor]} >Public</Text>
                    </View>
                </View>

                <Spacing vertical={15} />


                <TextInput 
                    ref={tweetInput}
                    multiline={true}
                    style={[styles.input]} 
                    onChangeText={text => Setcontent(text)}
                    maxLength={160}
                    placeholder="Let's tweet your thought, it's easy and free"
                />

                <Text style={[globalStyle.textBold, styles.counter]} >{content.length}/160</Text>

                <Spacing vertical={20} />

                <FullBtn 
                    title="Tweet"
                />

                
            </ScrollView>
            

        </InnerLayer>
   );
 };
 
 const styles = StyleSheet.create({

    container:{
        padding:15
    },

    input:{
        minHeight:150,
        borderRadius:10,
        backgroundColor:Colors.InputBG,
        borderWidth:0.5,
        borderColor:Colors.Border,
        padding:15
    },

    counter:{
        marginTop:5,
        textAlign:'right'
    },

    avater:{
        height:50,
        width:50,
        marginRight:10,
        borderRadius:30
    }
    
 });
 
export default TweetPost;
 