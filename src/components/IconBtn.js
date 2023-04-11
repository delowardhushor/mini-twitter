
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
 } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Colors } from '../styles';

const IconBtn = ({onPress, icon}) => {
 
   return (
      <Pressable 
        onPress={onPress}
        style={styles.IconBtn}
      >
        <AntDesign 
          color={Colors.BaseFont}
          size={24}
          name={icon}
        />
      </Pressable>
   );
 };
 
 const styles = StyleSheet.create({
  
  IconBtn:{
    height:40,
    width:40,
    alignItems:'center',
    justifyContent:"center",
    flexDirection:"row",
    borderRadius:10,
    borderWidth:1,
    borderColor:Colors.BaseFont
  },
    
 });
 
 export default IconBtn;
 