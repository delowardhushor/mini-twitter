
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
   ActivityIndicator,
 } from 'react-native';
import { Colors } from '../styles';

 const ChipBtn = ({onPress, title, active, loading}) => {
 
   return (
    <Pressable 
      style={[styles.btn, {backgroundColor: active ? Colors.BaseColor : Colors.White}]} 
      onPress={onPress}
    >
      {loading ?
        <ActivityIndicator 
          color={active ? Colors.White : Colors.BaseColor}
          size="small"
        />
      :
        <Text style={[styles.btnText, {color: active ? Colors.White : Colors.BaseColor}]} >{title}</Text>
      }
    </Pressable>
   );
 };
 
 const styles = StyleSheet.create({
  
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
 
 export default ChipBtn;
 