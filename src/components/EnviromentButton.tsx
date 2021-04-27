import React from 'react';
import { 
    StyleSheet,     
    Text
} from 'react-native';

import { 
    RectButton, 
    RectButtonProperties 
} from 'react-native-gesture-handler';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface EnviromentButtonsProps extends RectButtonProperties{
    title: string;
    active?: boolean
}

export function EnviromentButton({ 
    title, 
    active = false,
    ...rest
}:EnviromentButtonsProps){
    return (
        <RectButton
            style={[
                styles.button,
                active && styles.buttonActive
            ]}
            {...rest}
        > 
            <Text style={[
                styles.text,
                active && styles.textActive
            ]}>
                {title}
            </Text>
        </RectButton>
    );
}

const styles = StyleSheet.create({
    button:{        
        backgroundColor: colors.shape,
        width: 76,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12,
        marginHorizontal: 5,        
    }, 
    buttonActive: {        
        backgroundColor: colors.green_light
    },
    text:{
        color: colors.heading,
        fontFamily: fonts.text,
    }, 
    textActive:{
        color: colors.green_dark,
        fontFamily: fonts.heading,        
    }
})