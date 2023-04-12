
 import { useNavigation } from '@react-navigation/native';
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
import { AllNavigations } from '../statics';
import { Colors, GlobalStyle } from '../styles';
import IconBtn from './IconBtn';
import Spacing from './Spacing';

 const BackNavHeader = ({title}) => {

  const navigation = useNavigation()

  const globalStyle = GlobalStyle.useGlobalStyle()
 
   return (
      <View 
        style={[styles.BackNavHeader]}
      >
        <IconBtn 
          icon="arrowleft"
          onPress={navigation.goBack}
          noBorder
        />

        <Spacing horizontal={15} />

        <Text style={[globalStyle.bigText, {flex:1,}]} numberOfLines={1} >{title || "Mini Twitter"}</Text>

      </View>
   );
 };
 
 const styles = StyleSheet.create({
  
  BackNavHeader:{
    height:60,
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:"row",
    paddingHorizontal:15,
    borderColor:Colors.Border,
    borderBottomWidth:1
  }
    
 });
 
 export default BackNavHeader;
 