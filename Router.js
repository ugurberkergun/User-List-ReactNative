import React, { useEffect, useState } from 'react'
import {SafeAreaView, View } from 'react-native'
import Home from './src/Pages/Home/Home';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator, createBottomTabNavigator} from "@react-navigation/native-stack"
import NewUser from './src/Pages/NewUser/NewUser';
import UserDetails from './src/Pages/UserDetails/UserDetails';

const Stack = createNativeStackNavigator();


function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Add New User" component={NewUser}></Stack.Screen>
        <Stack.Screen name="DetailPage" component={UserDetails}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    
  )
    
}

export default App