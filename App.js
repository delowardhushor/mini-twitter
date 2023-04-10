import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { View, Text} from 'react-native';

import { store, persistor } from './src/redux/store'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';

import { Colors } from './src/styles'
import Toast from 'react-native-toast-message';
import SignIn from './src/screens/SignIn';
import { AllNavigations } from './src/statics';
import Home from './src/screens/Home';


const Stack = createNativeStackNavigator();

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
        </>
      :
        <>
          <Stack.Screen 
            name={AllNavigations.Home} 
            component={Home} 
          />
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
