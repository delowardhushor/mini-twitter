
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
import ChipBtn from '../components/ChipBtn';
import CustomInput from '../components/CustomInput';
import FullBtn from '../components/FullBtn';
import Header from '../components/Header';
import InnerLayer from '../components/InnerLayer';
import Spacing from '../components/Spacing';
import Tweet from '../components/Tweet';
import AllServices from '../services';
import { AllNavigations } from '../statics';
import { Colors, GlobalStyle } from '../styles';
import { OnLoginSuccess, ValidateEmail } from '../uti/uti';

 const Home = ({navigation}) => {

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
                    <View style={{alignItems:'center', justifyContent:'center', minHeight:50}} >
                      {!allLoadDone ?
                        <ActivityIndicator 
                          color={Colors.BaseColor}
                          size="small"
                        />
                      :
                      <>
                            {tweets.length == 0 ? 
                            <>
                                <Spacing  vertical={150} />

                                <Text style={[globalStyle.regularText, globalStyle.textBold]} >Looks like your timeline is empty.</Text>
                                <Spacing  vertical={8} />
                                <ChipBtn 
                                    title="Let's get some followings"
                                    active
                                    onPress={() => navigation.navigate(AllNavigations.Users)}
                                />
                                <Spacing  vertical={5} />

                                <Text style={globalStyle.smText} >OR</Text>
                                <Spacing  vertical={5} />
                                <ChipBtn 
                                    title="Refresh"
                                    active
                                    onPress={() => LoadTweets()}
                                />
                            </>
                            :
                                <Text style={globalStyle.smText} >No More Data</Text>
                            }
                        </>
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
 