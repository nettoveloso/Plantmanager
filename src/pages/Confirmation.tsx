import React from 'react';

import {
    SafeAreaView,
    StyleSheet,
    View,
    Text
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Button } from '../components/Button';

import colors from '../../styles/colors';

import fonts from '../../styles/fonts';


export function Confirmation(){
    const navigation = useNavigation();

    function handleMoveOn(){
        navigation.navigate('PlantSeletion');
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.emoji}>
                    😄 
                </Text>

                <Text style={styles.title}>
                    Prontinho
                </Text>

                <Text style={styles.subtitle}>
                    Agora vamos começar a cuidar das suas
                    plantinhas com muito cuidado
                </Text>

                <View style={styles.footer}>
                    <Button 
                        title="Começar"
                        onPress={handleMoveOn}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,        
        alignItems: "center",
        justifyContent: "space-around"
    },
    content:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
        padding: 30
    },  
    title:{
        fontSize: 22,
        fontFamily: fonts.heading,
        textAlign: "center",
        color: colors.heading,
        lineHeight: 38,
        marginTop: 15,
        marginBottom:10
    },
    subtitle:{
        fontFamily: fonts.text,
        textAlign: "center",
        fontSize: 17,
        paddingHorizontal: 10,
        color: colors.heading,
        marginBottom:10
    },     
    emoji:{
        fontSize: 78        
    },
    footer: {
        width: "100%",        
        paddingHorizontal: 50,
        marginTop: 20
    }
});