
 import React, { useEffect, useState } from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   KeyboardAvoidingView,
   View,
   useWindowDimensions,
   ActivityIndicator,
   FlatList,
 } from 'react-native';
import CustomInput from '../components/CustomInput';
import FullBtn from '../components/FullBtn';
import Header from '../components/Header';
import InnerLayer from '../components/InnerLayer';
import Spacing from '../components/Spacing';
import Tweet from '../components/Tweet';
import UserComponent from '../components/UserComponent';
import AllServices from '../services';
import { Colors, GlobalStyle } from '../styles';
import { OnLoginSuccess, ValidateEmail } from '../uti/uti';

 const Search = ({noPadding, children}) => {

    const { width, height } = useWindowDimensions()

    const globalStyle = GlobalStyle.useGlobalStyle()
    
    const [searchKeyWord, SetsearchKeyWord] = useState("")

    const [users, Setusers] = useState([])
    const [currentPage, SetcurrentPage] = useState(1)
    const [allLoadDone, SetallLoadDone] = useState(false)

    const [loading, Setloading] = useState(false)
    const [loadingMore, SetloadingMore] = useState(false)

    useEffect(() => {

        if(searchKeyWord.length < 3){
            
            Setusers([])

        }else{
            LoadUsers()
        }


    }, [searchKeyWord])


    const LoadUsers = async () => {

        Setloading(true)

        const res = await AllServices.User.Search(searchKeyWord)

        if(res){
            Setusers(res.search_results )
        }

        Setloading(false)


    }
 
    return (
        <InnerLayer
            backNav="Search Users"
        >


            <CustomInput 
                leftIcon="search"
                placeholder="Type at least 3 characters"
                onChangeText={text => SetsearchKeyWord(text)}
                value={searchKeyWord}
            />

            <Spacing vertical={10} />
            

            <FlatList 
                data={users}
                renderItem={({item}) => 
                    <UserComponent 
                        userData={item}
                    />
                }
                ListFooterComponent={
                    <View style={{alignItems:'center', justifyContent:'center', height:50}} >
                      {loading && searchKeyWord.length > 2 ?
                        <ActivityIndicator 
                          color={Colors.BaseColor}
                          size="small"
                        />
                      : searchKeyWord.length > 2 && users.length == 0 ?
                        <Text style={globalStyle.smText} >No {users.length > 0 ? "More" : ""} Data</Text>
                      : null}
                    </View>
                }
                keyExtractor={item => item.id}
            />

        </InnerLayer>
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
 
export default Search;
 