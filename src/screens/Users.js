
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
import UserComponent from '../components/UserComponent';
import AllServices from '../services';
import { Colors, GlobalStyle } from '../styles';
import { OnLoginSuccess, ValidateEmail } from '../uti/uti';

 const Users = ({noPadding, children}) => {

    const { width, height } = useWindowDimensions()

    const globalStyle = GlobalStyle.useGlobalStyle()
    
    const [users, Setusers] = useState([])
    const [currentPage, SetcurrentPage] = useState(1)
    const [allLoadDone, SetallLoadDone] = useState(false)

    const [activeData, SetactiveData] = useState('users')
    const [extraData, SetextraData] = useState(false)
    const [loading, Setloading] = useState(false)
    const [loadingMore, SetloadingMore] = useState(false)

    useEffect(() => {

        Loadusers()

    }, [activeData])


    const Loadusers = async (page = 1) => {

        if(page == 1){
            SetallLoadDone(false)
            Setloading(true)
        }else{
            SetloadingMore(true)
        }

        let res 
        
        if(activeData == 'users'){
            res = await AllServices.User.UserList(page)
        }

        if(activeData == 'followers'){
            res = await AllServices.User.FollowerList(page)
        }

        if(activeData == 'followings'){
            res = await AllServices.User.FollowingList(page)
        }

        if(res){

            if(activeData == 'users'){
                Setusers(page == 1 ? res.users : [...users, ...res.users])
            }
    
            if(activeData == 'followers'){
                res = await AllServices.User.FollowerList(page)
                Setusers(page == 1 ? res.followers : [...users, ...res.followers])
            }
    
            if(activeData == 'followings'){
                res = await AllServices.User.FollowingList(page)
                Setusers(page == 1 ? res.followings : [...users, ...res.followings])
            }
            
            // Setusers(page == 1 ? res.users : [...users, ...res.users])
            SetcurrentPage(page)
            if(res.count === 0){
                SetallLoadDone(true)
            }
        }

        Setloading(false)
        SetloadingMore(false)

        SetextraData(!extraData)


    }
 
    return (
        <InnerLayer>

            <View style={globalStyle.rowCenter} >
                <ChipBtn 
                    title="All Users"
                    active={activeData == 'users'}
                    onPress={() => SetactiveData('users')}
                />
                <Spacing horizontal={10} />
                <ChipBtn 
                    title="Followers"
                    active={activeData == 'followers'}
                    onPress={() => SetactiveData('followers')}
                />
                <Spacing horizontal={10} />
                <ChipBtn 
                    title="Followings"
                    active={activeData == 'followings'}
                    onPress={() => SetactiveData('followings')}
                />
                <Spacing horizontal={10} />
            </View>

            <Spacing vertical={10} />

            <FlatList 
                extraData={extraData}
                onRefresh={Loadusers}
                refreshing={loading}
                data={users}
                renderItem={({item}) => 
                    <UserComponent 
                        userData={item}
                        isFollowing={activeData == 'followings'}
                    />
                }
                onEndReached={() => !allLoadDone ? Loadusers(currentPage + 1) : {}}
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
 
export default Users;
 