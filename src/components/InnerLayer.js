
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
 } from 'react-native';
import { Colors } from '../styles';

 const InnerLayer = ({noPadding, children}) => {
 
   return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : null}
            style={{ flex: 1, backgroundColor:Colors.White }}
        >
          <View style={[styles.wrapper]}>

              <SafeAreaView style={styles.safeView}>

                {/* {!noHeader ?
                  <Header 
                    backNav={backNav}
                    title={title}
                  />
                : null } */}

                  <View style={[styles.innerContent, {padding: noPadding ? 0 : 15}]}>{children}</View>

                  {/* <BottomTab /> */}
                  
              </SafeAreaView>

          </View>

        </KeyboardAvoidingView>
   );
 };
 
 const styles = StyleSheet.create({

    wrapper: {
        flex: 1,
        backgroundColor: Colors.BG,
        // backgroundColor: Colors.white,
    },
    safeView: {
        flex: 1,
    },
    innerContent: {
        flex: 1,
    },
    
 });
 
 export default InnerLayer;
 