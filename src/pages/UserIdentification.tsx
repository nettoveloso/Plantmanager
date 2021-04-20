import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Platform,
    Keyboard
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Button } from '../components/Button';

import colors from '../../styles/colors';

import fonts from '../../styles/fonts';

export function UserIdentification(){
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();
    const navigation = useNavigation()

    function handleSubmit(){
        navigation.navigate('Confirmation');
    }

    function handleInputFocus(){
        setIsFocused(true);
        setIsFilled(!!name);
    }
    
    function hadleInputBlur(){
        setIsFocused(false);
    }

    function hadleInputChange(value: string){
        setIsFilled(!!value);
        setName(value);
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView 
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.content}>
                        <View style={styles.form}>
                            <View style={styles.header}>
                                <Text style={styles.emoji}>
                                    { isFilled ? '😄' : '😃'}
                                </Text>
                                
                                <Text style={styles.title}>
                                    Como podemos {'\n'}
                                    chamar você? 
                                </Text>      
                            </View>                                      

                            <TextInput 
                                style={[
                                    styles.input,
                                    (isFocused || isFilled) && {borderColor: colors.green}
                                ]}
                                placeholder="Digite um nome"
                                onBlur={hadleInputBlur}
                                onFocus={handleInputFocus}
                                onChangeText={hadleInputChange}
                            />

                            <View style={styles.footer}>
                                <Button 
                                    title="Confirmar" 
                                    onPress={handleSubmit}
                                />
                            </View>

                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: "center",
        justifyContent: "center"
    },
    content:{
        flex: 1,
        width: '100%',
    },
    form:{
        flex: 1,
        paddingHorizontal: 54,
        alignItems: "center",
        justifyContent: "center"        
    },
    header: {
        alignItems: "center"
    },
    emoji:{
        fontSize: 44,
        marginBottom: 20
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center'
    },
    title:{
        fontSize: 24,
        lineHeight: 32,
        textAlign: "center",
        color: colors.heading,
        fontFamily: fonts.heading
    },
    footer: {
        marginTop: 40,
        width: "100%",
        paddingHorizontal: 20
    }
});