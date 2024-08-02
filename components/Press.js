import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

const Press = ({children, onPress, ...props}) => {
    return (
        <TouchableOpacity onPress={onPress} {...props}>
            {children}
        </TouchableOpacity>
    )
}

export default Press