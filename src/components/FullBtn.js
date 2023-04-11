
 import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   KeyboardAvoidingView,
   ActivityIndicator,
   View,
   Pressable,
 } from 'react-native';
import { Colors } from '../styles';

 const FullBtn = ({onPress, title, loading}) => {
 
   return (
      <Pressable 
        onPress={onPress}
        style={styles.FullBtn}
      >
        {loading ?
          <ActivityIndicator 
            color={Colors.White}
            size="small"
          />
        :
          <Text style={styles.btnText} >{title}</Text>
        }
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
 