
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
import { Colors } from '../styles';

 const FullBtn = ({onPress, title}) => {
 
   return (
      <Pressable 
        onPress={onPress}
        style={styles.FullBtn}
      >
        <Text style={styles.btnText} >{title}</Text>
      </Pressable>
   );
 };
 
 const styles = StyleSheet.create({
  
  FullBtn:{
    height:40,
    alignItems:'center',
    justifyContent:"center",
    flexDirection:"row",
    borderRadius:10,
    backgroundColor:Colors.BaseColor
  },

  btnText:{
    color:Colors.White,
    fontWeight:"bold"
  }
    
 });
 
 export default FullBtn;
 