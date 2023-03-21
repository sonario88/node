import React from 'react';
import {ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';


import {useNavigation} from "@react-navigation/native";
import {Container} from "../components/Container";
import bgImage from "../UI/login1.png";

export const  LoginScreen =()=>{
    const  navigation = useNavigation()
    return(
        <View >
            <ImageBackground source={bgImage} style={{width: '100%', height: '100%',}}>
                <TouchableOpacity onPress={()=>navigation.navigate('Screen1')}
                                  style={styles.loginScreenButton}
                                  underlayColor='#fff'>
                    <Text  >Войти</Text>
                </TouchableOpacity>
                <Text > Организуй свой {'\n'} учебный процесс </Text>
            </ImageBackground>

        </View>
    );
};

// ...

export default LoginScreen;

const styles = StyleSheet.create({
    loginScreenButton:{
        marginTop:30,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        width: 320,
        marginHorizontal: 50,
        paddingVertical: 25,
        borderRadius: 20,
        backgroundColor:'#FFFFFF' ,
        shadowColor: '#7442c8',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 10,
        borderColor: '#fff'

    },


});


