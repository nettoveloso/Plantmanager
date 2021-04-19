import React from 'react';
import { 
    TouchableOpacity, 
    StyleSheet, 
    Text, 
    TouchableOpacityProps
} from 'react-native';

import colors from '../../styles/colors';

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
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56,
        paddingHorizontal: 10
    },
    buttonText:{
        color: colors.white,
        fontSize: 24
    }
});