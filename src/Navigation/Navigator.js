import React from "react";
import {ImageBackground,View} from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Screen1} from "../screens/Screen1";
import {Screen2} from "../screens/Screen2";
import {LoginScreen} from "../screens/LoginScreen";
import bgImage from "../UI/background.jpg";


export const Navigator = () => {
    const Stack = createNativeStackNavigator();

    return(

        <Stack.Navigator
            screenOptions={{
            headerShown: false,
        }}
            initialRouteName="App">
            <Stack.Screen name="Screen1" component={Screen1} />
            <Stack.Screen name="Screen2" component={Screen2} />
            <Stack.Screen name= "LoginScreen" component= {LoginScreen} />
        </Stack.Navigator>
    );
};