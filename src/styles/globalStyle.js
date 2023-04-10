import {StyleSheet} from 'react-native';
import {Colors} from '.';

export const useGlobalStyle = () => {
  return StyleSheet.create({
    
    shadow:{
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5
    },
    bigTitle: {
      fontSize: 40,
      color: '#1E1E1E',
      fontWeight: '700',
      textAlign: 'center',
    },

    rowCenterBetween: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    rowCenter: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    rowCenteraround: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:'space-around'
    },
    mr10: {
      marginRight: 10,
    },
    textCenter:{
      textAlign:'center'
    },
    textBold:{
      fontWeight:'bold'
    },
    textSemiBold:{
      fontWeight:'600'
    },
    regularText:{
      fontSize:14, 
      color:Colors.Black
    },
    baseColorFont:{
      color:Colors.BaseColor
    },
    textRed:{
      fontSize:14, 
      color:'red'
    },
    smText:{
      fontSize:11, 
      color:Colors.Black
    },
    baseFont:{
      color: Colors.BaseFont,
    },
    bigText: {
      fontSize: 24,
      color: Colors.BaseFont,
      fontWeight: '700',
    },
    hugeText: {
      fontSize: 32,
      color: Colors.BaseFont,
      fontWeight: '700',
    },
    viewWrapper: {
      flex: 1,
      backgroundColor: Colors.White,
      padding: 20,
    },
    card: {
      backgroundColor: 'white',
      borderRadius: 8,
      paddingVertical: 10,
      paddingHorizontal: 15,
      marginVertical: 10,
      shadowColor: '#000',
      elevation: 5,
    },
  });
};
