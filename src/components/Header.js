
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
import { Colors, GlobalStyle } from '../styles';
import IconBtn from './IconBtn';
import Spacing from './Spacing';

 const Header = ({onPress, title}) => {

  const globalStyle = GlobalStyle.useGlobalStyle()
 
   return (
      <View 
        style={[styles.Header, globalStyle.shadow]}
      >
        <Text style={globalStyle.bigText} >Mini Twitter</Text>

        <View style={globalStyle.rowCenter} >

          <IconBtn 
            icon="search1"
          />
          <Spacing horizontal={5} />
          <IconBtn 
            icon="bars"
          />
        </View>

      </View>
   );
 };
 
 const styles = StyleSheet.create({
  
  Header:{
    height:60,
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:"row",
    paddingHorizontal:15,
    borderColor:Colors.Border,
    borderBottomWidth:1
  }
    
 });
 
 export default Header;
 