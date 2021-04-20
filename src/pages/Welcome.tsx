import React from 'react';

import { 
    Text, 
    SafeAreaView, 
    Image,      
    StyleSheet, 
    TouchableOpacity,
    Dimensions,
    View
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';

import colors from '../../styles/colors';

import fonts from '../../styles/fonts';

import wateringImg from '../assets/watering.png';


export function Welcome(){
    const navigation = useNavigation()

    function handleStart(){
        navigation.navigate('UserIdentification');
    }

    return (
        <SafeAreaView style={stlyes.container}>
            <View style={stlyes.wrapper}>
                <Text style={stlyes.title}>
                    Gerencia {'\n'}
                    suas planas de {'\n'}
                    forma fácil
                </Text>

                <Image 
                    source={wateringImg} 
                    style={stlyes.image} 
                    resizeMode="contain"
                />

                <Text style={stlyes.subtitle}>
                    Não esqueça mais de regar suas plantas. 
                    Nós cuidamos de lembrar você sempre que precisar.
                </Text>

                <TouchableOpacity
                    style={stlyes.button}
                    activeOpacity={0.7}   
                    onPress={handleStart}
                >
                    <Text>
                        <Feather 
                            name="chevron-right" 
                            style={stlyes.buttonIcon}
                        />
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const stlyes = StyleSheet.create({

    container: {
        flex: 1,
    },
    wrapper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around", 
        paddingHorizontal: 20
    },
    title:{
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        color: colors.heading,
        marginTop: 38,
        lineHeight: 34,
        fontFamily: fonts.heading        
    },
    subtitle:{
        textAlign: "center",
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading,
        fontFamily: fonts.text 
    },
    image:{        
        height: Dimensions.get('window').width * 0.7
    },
    button:{
        backgroundColor: colors.green,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56        
    },
    buttonIcon:{
        color: colors.white,
        fontSize: 32
    }
});