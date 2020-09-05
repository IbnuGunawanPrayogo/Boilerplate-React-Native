import React, {useEffect, useState} from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from '../../context/index';
import OneSignal from '../../oneSignal'

// screen
import MainScreen from '../../../containers/screens/main'
import Counter from '../../../containers/screens/counter'
// close Screen

const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
  },
};

const Stack = createStackNavigator();

function App() {
  
  // EXAMPLE CREATE CONTEXT
  // const authContext =  React.useMemo(() => ({
  //   contextName: async () => {
  //     try {
  //       console.log('success')
  //     } catch(e) {
  //       console.log('error');
  //     }
  //   },
  // }), []);
  
  return(
    <NavigationContainer theme={MyTheme}>
      {/* <OneSignal> */}
        {/* <AuthContext.Provider value={authContext}> */}
          <Stack.Navigator screenOptions={{headerShown: false, animationEnabled: false}} initialRouteName="MainScreen">
            <Stack.Screen name="MainScreen" component={MainScreen} options={{
              animationEnabled: true,
              animationTypeForReplace: 'pop'
            }} />
            <Stack.Screen name="Counter" component={Counter} options={{
              animationEnabled: true,
              animationTypeForReplace: 'pop'
            }} />
          </Stack.Navigator>
        {/* </AuthContext.Provider> */}
      {/* </OneSignal> */}
    </NavigationContainer>
  )
}

export default App