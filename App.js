import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { View, Text} from 'react-native';

import { store, persistor } from './src/redux/store'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';

import { Colors } from './src/styles'
import Toast from 'react-native-toast-message';
import SignIn from './src/screens/SignIn';
import { AllNavigations } from './src/statics';
import Home from './src/screens/Home';
import BottomTabIcon from './src/components/BottomTabIcon';
import TweetPost from './src/screens/TweetPost';
import Search from './src/screens/Search';
import Users from './src/screens/Users';
import Profile from './src/screens/Profile';
import SignUp from './src/screens/SignUp';


const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator()

const TabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        lazy: true,
        tabBarIcon: (props) => <BottomTabIcon {...props} route={route}  />,
        tabBarActiveTintColor: Colors.BaseColor,
        tabBarInactiveTintColor: Colors.BaseFont,
        // tabBarLabel:false,
        tabBarStyle:{
          paddingVertical:4,
          paddingBottom:8,
          
        }
        
      })}
      // tabBar={props => <MyTabBar {...props} />}
    >
      <Tab.Screen
        name={AllNavigations.Home}
        component={Home}
      />

      <Tab.Screen
        name={AllNavigations.TweetPost}
        component={TweetPost}
        options={{
          title:"Tweet"
        }}
      />

      <Tab.Screen
        name={AllNavigations.Users}
        component={Users}
      />


    </Tab.Navigator>
  )
}

const StackNav = () => {

  const {token} = useSelector(state => state.auth)
  
  const dispatch = useDispatch()

  return(
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerShadowVisible: false
      }}
      initialRouteName = 'SignIn'
    >
      {!token ?
        <>
          <Stack.Screen
              name={AllNavigations.SignIn}
              component={SignIn}
          />
          <Stack.Screen
              name={AllNavigations.SignUp}
              component={SignUp}
          />
        </>
      :
        <>
          <Stack.Screen name="MainTab" component={TabNav} />
          <Stack.Screen name={AllNavigations.Search} component={Search} />
          <Stack.Screen name={AllNavigations.Profile} component={Profile} />
        </>
      }
          
    </Stack.Navigator> 
  )
}

const App = ()=> {
 
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor} >
        <View style={{flex:1, backgroundColor: 'white'}}>
          <NavigationContainer>
            <StackNav />
          </NavigationContainer>
          <Toast />
        </View>
      </PersistGate>
    </Provider>
  );
}

export default App;
