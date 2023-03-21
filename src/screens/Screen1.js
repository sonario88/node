import React from "react";
import {Text,
        View,
        TouchableOpacity,
        ImageBackground,
        StyleSheet
        } from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {Container} from "../components/Container";

export const  Screen1 =()=>{

    const navigation = useNavigation();
    return(
        <Container showArrow = {false}>

            <TouchableOpacity >
                <Text style={styles.text}> Организуй свой {'\n'} учебный процесс </Text>
                <Text style={styles.text1}> Равным образом курс на социально- {'\n'} ориентированный национальный
                    {'\n'}  проект требует определения...
                </Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('Screen2')}
                        style={styles.loginScreenButton}
                        underlayColor='#fff'>
                        <Text  >Начать</Text>
                    </TouchableOpacity>
            </TouchableOpacity>

        </Container>

    );
};


const styles = StyleSheet.create({

    text: {
        marginTop:290,
        fontSize: 36,
        fontWeight: '700',
        color: 'white',
        textAlign: 'justify',
        lineHeight: 50,

    },
    text1: {
        marginTop:10,
        fontSize: 16,
        color:'#a5a5a5',
    },
    loginScreenButton:{
        marginTop:30,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 72,
        borderRadius: 20,
        backgroundColor:'#FFFFFF' ,
        borderColor: '#fff'
    },
    loginText:{
        color:'black',
        textAlign:'center',
        paddingLeft : 10,
        paddingRight : 10
    }
});
