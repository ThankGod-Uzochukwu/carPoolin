import React from 'react'
import {TouchableOpacity} from 'react-native'

const Press = ({children, onPress, ...props}) => {
    return (
        <TouchableOpacity onPress={onPress} {...props}>
            {children}
        </TouchableOpacity>
    )
}

export default Press