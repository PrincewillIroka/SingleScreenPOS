import React from 'react'
import { View, Image, StyleSheet } from 'react-native';
import StatusBarImage from '../assets/StatusBar1.png'

const CustomStatusBar = () => {
    return (
        <View style={styles.container}>
            <Image source={StatusBarImage} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 44
    }
})

export default CustomStatusBar