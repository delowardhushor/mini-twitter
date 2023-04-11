
 import moment from 'moment';
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
   Pressable,
   Image
 } from 'react-native';
import { Colors, GlobalStyle } from '../styles';
import Spacing from './Spacing';

import AntIcon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AllServices from '../services';
import ChipBtn from './ChipBtn';


 const UserComponent = ({userData, isFollowing}) => {

  const globalStyle = GlobalStyle.useGlobalStyle()

  const [following, Setfollowing] = useState(false)
  const [loading, Setloading] = useState(false)

  useEffect(() => {
    Setfollowing(isFollowing)
  }, [isFollowing])

  const FollowUnfollow = async () => {

    Setloading(true)

    let res

    if(following){
      res = await AllServices.User.Follow(userData.id)
    }else{
      res = await AllServices.User.Follow(userData.id)
    }

    if(res){
      Setfollowing(!following)
    }

    Setloading(false)

  }

 
  return (
      <View style={[styles.wrapper]} >
          <Image 
            style={styles.avater}
            source={require("./../assets/images/user-placeholder.png")}
          />

          <Spacing horizontal={10} />

          <View style={{flex:1}} >
            <Text style={globalStyle.bgText} >{userData?.username}</Text>
            {/* <Text style={globalStyle.baseFont}>{userData?.user?.email}</Text> */}
            <Spacing vertical={3} />
            <Text style={[globalStyle.smText, globalStyle.lightFontColor]} >Active from {moment(userData.join_date).format("MMMM YYYY")}</Text>
          </View> 

          <ChipBtn 
            active={following}
            onPress={FollowUnfollow}
            loading={loading}
            title={following ? "Unfollow" : "Follow"}
          />

      </View>
   );
 };
 
 const styles = StyleSheet.create({

  wrapper:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:12
  },

  avater:{
    height:40,
    width:40,
    borderRadius:25,
    backgroundColor:Colors.BG,
    flexDirection:'row',
    borderColor:Colors.Border,
    borderWidth:1
  },

  btn:{
    backgroundColor:Colors.BaseColor,
    borderColor:Colors.BaseColor,
    borderWidth:1,
    padding:5,
    paddingHorizontal:20,
    borderRadius:15,
  },

  btnText:{
    fontWeight:'bold',
    color:Colors.White,
    fontSize:12
  }
    
 });
 
 export default UserComponent;
 