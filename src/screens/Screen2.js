import React from "react";
import {Text,
    View,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    StyleSheet
} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import bgImage from "../UI/login3.png";
export const  Screen2 =()=>{
    const  navigation = useNavigation()
    const [text, onChangeText] = React.useState('');
    const [text2, onChangeText2] = React.useState('');
    return(
        <View style={{ height: '100%',backgroundColor:"#f0f0f0"}}>
            <ImageBackground source={bgImage} style={{width: '100%', height: '100%',}}>
            <View style={styles.button}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Username/email"
                    />
            </View>
                <View style={styles.button2}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText2}
                        value={text2}
                        placeholder="Password"
                    />
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate('Screen1')}
                                  style={styles.loginScreenButton}
                                  underlayColor='#fff'>
                            <Text  >Войти</Text>
                </TouchableOpacity>
                <Text style={styles.text}> забыли пароль? </Text>
                <Text style={styles.text1}>
                    <Text>Нет своего аккаунта?</Text>
                    <Text style={{fontWeight: 'bold',textDecorationLine: 'underline',width: 30}} onPress={()=>navigation.navigate('LoginScreen')}> Регистрация</Text>

                </Text>
            </ImageBackground>
        </View>
    );
};



const styles = StyleSheet.create({

    button:{
        flexDirection:"row",
        alignItems:"center",
        marginHorizontal: 50,
        borderWidth:2,
        marginTop: 470,
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius:23,
        backgroundColor:'#FFFFFF',
        borderColor: '#fff'
    },
    button2:{
        flexDirection:"row",
        alignItems:"center",
        marginHorizontal: 50,
        borderWidth:2,
        marginTop: 30,
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius:23,
        backgroundColor:'#FFFFFF',
        borderColor: '#fff'
    },

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
    input: {
        fontSize: 17,
        width: 300,
        padding: 10,
    },
    text: {
        fontSize: 16,
        textAlign: 'justify',
        lineHeight: 30,
        paddingVertical: 15,
        paddingHorizontal: 10,
        paddingLeft: 140,
        color: 'black',

    },
    text1: {

        fontSize: 16,
        textAlign: 'justify',
        lineHeight: 30,
        paddingLeft: 70,
        color: 'black',



    },

});