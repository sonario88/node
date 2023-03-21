import * as React from 'react';
import { View, Text,ImageBackground} from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Navigator} from "./src/Navigation/Navigator";
import bgImage from './src/UI/background.jpg'

function App() {
    return (
        <NavigationContainer>
            <Navigator/>
        </NavigationContainer>
    );
}

export default App;