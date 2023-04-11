
 import React, { useEffect, useState } from 'react';
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
   FlatList,
 } from 'react-native';
import CustomInput from '../components/CustomInput';
import FullBtn from '../components/FullBtn';
import Header from '../components/Header';
import InnerLayer from '../components/InnerLayer';
import Spacing from '../components/Spacing';
import Tweet from '../components/Tweet';
import AllServices from '../services';
import { Colors, GlobalStyle } from '../styles';
import { OnLoginSuccess, ValidateEmail } from '../uti/uti';

 const Home = ({noPadding, children}) => {

    const { width, height } = useWindowDimensions()

    const globalStyle = GlobalStyle.useGlobalStyle()
    
    const [tweets, SetTweets] = useState([])
    const [currentPage, SetcurrentPage] = useState(1)
    const [allLoadDone, SetallLoadDone] = useState(false)

    const [loading, Setloading] = useState(false)
    const [loadingMore, SetloadingMore] = useState(false)

    useEffect(() => {

        LoadTweets()

    }, [])


    const LoadTweets = async (page = 1) => {

        if(page == 1){
            SetallLoadDone(false)
            Setloading(true)
        }else{
            SetloadingMore(true)
        }

        const res = await AllServices.Tweets.MyTimeLine(page)

        if(res){
            SetTweets(page == 1 ? res.timeline : [...tweets, ...res.timeline])
            SetcurrentPage(page)
            if(res.count === 0){
                SetallLoadDone(true)
            }
        }

        Setloading(false)
        SetloadingMore(false)


    }
 
    return (
        <InnerLayer
            noPadding
        >

            <FlatList 
                onRefresh={LoadTweets}
                refreshing={loading}
                data={tweets}
                renderItem={({item}) => 
                    <Tweet 
                        tweetData={item}
                    />
                }
                onEndReached={() => !allLoadDone ? LoadTweets(currentPage + 1) : {}}
                ListFooterComponent={
                    <View style={{alignItems:'center', justifyContent:'center', height:50}} >
                      {!allLoadDone ?
                        <ActivityIndicator 
                          color={Colors.BaseColor}
                          size="small"
                        />
                      :
                        <Text style={globalStyle.smText} >No More Data</Text>
                      }
                    </View>
                }
                keyExtractor={item => item.id}
            />

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
    
 });
 
export default Home;
 