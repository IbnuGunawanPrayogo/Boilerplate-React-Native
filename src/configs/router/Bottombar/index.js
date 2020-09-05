import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

// import Screen Here

// Close import screen

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Home" tabBarOptions={{
        iconStyle: {}, 
        inactiveTintColor: '#C2C2C2', 
        activeTintColor: '#6FB7FF',
        style: {
          borderWidth: 0,
          height: 60, paddingBottom: 8, paddingTop: 5,
          shadowColor: "#000",
          shadowOffset: {
            width: 10,
            height: 0,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,

          elevation: 20,
        },
        showLabel: false
    }}>
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: ({focused}) => {
          if(focused){
            return <Image source={require('Icon path Here')} style={{width: 85, height: 85, resizeMode: "contain"}}/>
          } else {
            return <Image source={require('Icon path Here')} style={{width: 48, height: 48, resizeMode: "contain"}}/>
          }
        }
      }} />

    </Tab.Navigator>
  );
}

export default MyTabs