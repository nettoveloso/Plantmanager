import React, {useEffect, useState} from 'react';

import { 
    Text, 
    View,
    StyleSheet,
    Image
} from 'react-native';


import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import userImg from '../assets/kirito.jpg';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Header(){
    const [userName, setUserName] = useState<string>();

    useEffect(()=>{
        async function loadStorageUserName(){
            const user = await AsyncStorage.getItem('@plantmanager:user');
            setUserName(user || '');
        }

        loadStorageUserName();

    },[]);

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá,</Text>
                <Text style={styles.userName}>
                    {userName}
                </Text>
            </View>

            <Image source={userImg} style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{        
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: getStatusBarHeight()        
    },
    image:{
        width: 70,
        height: 70,
        borderRadius: 35
    },
    greeting:{
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text
    },
    userName:{
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 40
    }

})