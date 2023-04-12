
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
import { SignOut } from '../uti/uti';
import IconBtn from './IconBtn';
import Spacing from './Spacing';

 const Header = ({onPress, title}) => {

  const navigation = useNavigation()

  const globalStyle = GlobalStyle.useGlobalStyle()
 
   return (
      <View 
        style={[styles.Header]}
      >
        <Text style={globalStyle.bigText} >Mini Twitter</Text>

        <View style={globalStyle.rowCenter} >

          <IconBtn 
            icon="search1"
            onPress={() => navigation.navigate(AllNavigations.Search)}
          />

          <Spacing horizontal={10} />

          <IconBtn 
            icon="user"
            onPress={() => navigation.navigate(AllNavigations.Profile)}
          />

          <Spacing horizontal={10} />

          <IconBtn 
            icon="logout"
            onPress={SignOut}
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
 