import React from 'react';
import { 
    TouchableOpacity, 
    StyleSheet, 
    Text, 
    TouchableOpacityProps
} from 'react-native';

import colors from '../../styles/colors';

import fonts from '../../styles/fonts';

interface ButtonsProps extends TouchableOpacityProps {
    title: string;
}

export function Button({ title, ...rest }: ButtonsProps){
    return (
        <TouchableOpacity
            style={stlyes.button}
            activeOpacity={0.7}
            {...rest}
        >
            <Text style={stlyes.buttonText}>
                { title }
            </Text>
        </TouchableOpacity>
    )
}


const stlyes = StyleSheet.create({    
    button:{
        backgroundColor: colors.green,
        height: 56,        
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText:{
        color: colors.white,
        fontSize: 16,
        fontFamily: fonts.heading
    }
});