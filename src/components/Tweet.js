
 import moment from 'moment';
import React from 'react';
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


 const Tweet = ({tweetData}) => {

  const globalStyle = GlobalStyle.useGlobalStyle()
 
   return (
      <View style={[styles.tweet]} >
        <View style={globalStyle.rowCenter} >

          <Image 
            style={styles.avater}
            source={require("./../assets/images/user-placeholder.png")}
          />

          <Spacing horizontal={10} />

          <View>
            <Text style={globalStyle.bigText} >{tweetData?.user?.username}</Text>
            {/* <Text style={globalStyle.baseFont}>{tweetData?.user?.email}</Text> */}
            <Spacing vertical={3} />
            <Text style={[globalStyle.smText, globalStyle.lightFontColor]} >{moment(tweetData.published).fromNow()}</Text>
          </View> 

        </View>

        <Spacing vertical={20} />

        <View>
          <Text style={globalStyle.regularText} >{tweetData.content}</Text>
        </View>

        <Spacing vertical={15} />

        {/* <View style={styles.hr} /> */}


        {/* <View style={[globalStyle.rowCenteraround, styles.bottomSection]} >
          <Text>1.5k likes</Text>
        </View> */}

        <View style={styles.hr} />

        <View style={[globalStyle.rowCenteraround, styles.bottomSection]} >

          <Pressable style={globalStyle.rowCenter} >
            <AntIcon 
              name="like2"
              size={16}
              color={Colors.BaseFont}
            />
            <Text> 5K</Text>
          </Pressable>

          <Pressable style={globalStyle.rowCenter} >
            <Ionicons 
              name="chatbox-outline"
              size={20}
              color={Colors.BaseFont}
            />
            <Text> 48</Text>

          </Pressable>

          <Pressable style={globalStyle.rowCenter} >
            <AntIcon 
              name="sharealt"
              size={20}
              color={Colors.BaseFont}
            />
            <Text> 123</Text>
          </Pressable>
          
        </View>

        <View style={styles.hr} />


      </View>
   );
 };
 
 const styles = StyleSheet.create({

  avater:{
    height:50,
    width:50,
    borderRadius:25,
    backgroundColor:Colors.BG
  },

  tweet:{
    marginVertical:10,
    paddingHorizontal:10,
    backgroundColor:Colors.White,
    // marginHorizontal:15,
    // padding:15
  },

  bottomSection:{
    // borderTopColor:Colors.Border,
    // borderBottomColor:Colors.Border,
    // borderTopWidth:1,
    // borderBottomWidth:1,
    // height:50,
    paddingVertical:10,
  },

  hr:{
    height:1,
    backgroundColor:Colors.Border
  }
    
 });
 
 export default Tweet;
 