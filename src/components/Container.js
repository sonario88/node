import React from "react";
import { TouchableOpacity, View, Text,ImageBackground,StyleSheet} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import bgImage from "../UI/background.jpg"

export  const  Container =(props) =>{
    const {children, showArrow = true} = props;

    const  navigation = useNavigation()
    return(
        <ImageBackground source={bgImage} style={styles.container}>
        <View>
            <View >
                {showArrow &&(
                    <TouchableOpacity onPress={()=> navigation.goBack()}>
                        <Text>назад</Text>
                    </TouchableOpacity>
                )}
            </View>
                <View >
                    {children}
                </View>
        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },






    }

)