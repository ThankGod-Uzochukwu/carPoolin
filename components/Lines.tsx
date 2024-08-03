import { View } from 'react-native'
import React from 'react'

export const VerticalLine = () => {
    return (
        <View style={{
            height: '60%',
            width: 1,
            backgroundColor: '#fff',
        }} /> 
    )
}

export const HorizontalLine = () => {
    return (
        <View
            style={{
                borderBottomColor: '#fff',
                borderBottomWidth: 1,
            }}
        />
    )
}

// export default VerticalLine