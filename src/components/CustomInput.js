
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
   TextInput,
 } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { Colors, GlobalStyle } from '../styles';

 const CustomInput = (props) => {

    const globalStyle = GlobalStyle.useGlobalStyle()
 
    return (
      <View>
        <View
          style={[styles.CustomInput, {borderWidth: props.error ? 0.5 : 0}]}
        >
          <View style={styles.leftIcon} >
            <FeatherIcon 
              name={props.leftIcon}
              size={16}
              color={props.error ? Colors.BaseColor : Colors.BaseFont}
            />
          </View>
          <TextInput 
            style={styles.input}
            {...props}
          />
          {props.rightIcon ? 
          <Pressable style={styles.leftIcon} onPress={props.onPressRightIcon} >
            <FeatherIcon 
              name={props.rightIcon}
              size={16}
              color={props.error ? Colors.BaseColor : Colors.BaseFont}
            />
          </Pressable>
          : null }
        </View>
        {props.error ? 
          <Text style={[globalStyle.smText, {marginLeft:5, marginTop:5}]} >{props.error}</Text>
        : null}
      </View>
   );
 };
 
 const styles = StyleSheet.create({
  
  CustomInput:{
    height:40,
    alignItems:'center',
    justifyContent:"center",
    flexDirection:"row",
    borderRadius:10,
    backgroundColor:Colors.InputBG,
    borderColor:Colors.BaseColor
  },

  leftIcon:{
    width:50,
    alignItems:'center'
  },

  input:{
    flex:1,
  }
    
 });
 
 export default CustomInput;
 