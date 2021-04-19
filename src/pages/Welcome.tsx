import React from 'react';

import { 
    Text, 
    SafeAreaView, 
    Image,      
    StyleSheet 
} from 'react-native';

import { Button } from '../components/Button';

import colors from '../../styles/colors';

import wateringImg from '../assets/watering.png';


export function Welcome(){
  return (
    <SafeAreaView style={stlyes.container}>
        <Text style={stlyes.title}>
            Gerencia {'\n'}
            suas planas {'\n'}
            de forma fácil
        </Text>

        <Image source={wateringImg} style={stlyes.image} />

        <Text style={stlyes.subtitle}>
            Não esqueça mais de regar suas plantas. 
            Nós cuidamos de lembrar você sempre que precisar.
        </Text>

        <Button title='>'/>

    </SafeAreaView>
  )
}

const stlyes = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between"
    },
    title:{
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "center",
        color: colors.heading,
        marginTop: 38
    },
    subtitle:{
        textAlign: "center",
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading
    },
    image:{
        width:292,
        height: 284
    }
});