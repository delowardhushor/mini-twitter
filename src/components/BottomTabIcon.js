
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
import { AllNavigations } from '../statics';

import { Colors } from '../styles';

 const BottomTabIcon = ({ focused, color, size, route }) => {
 
  let iconName;

  if (route.name === AllNavigations.Home) {
    iconName = "home";
  } else if (route.name === AllNavigations.TweetPost) {
    iconName = "twitter";
  } else if (route.name === AllNavigations.Users) {
    iconName = "addusergroup";
  }

  // You can return any component that you like here!
  return <AntDesign name={iconName} size={18} color={color} />;

};
 
const styles = StyleSheet.create({
  
    
 });
 
 export default BottomTabIcon;
 