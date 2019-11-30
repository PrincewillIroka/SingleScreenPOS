import React from 'react'
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import ProfilePic from '../assets/image4.png'
import downArrow from '../assets/downArrow.png'
import showMessage from '../utils/Message'

const AppBar = () => {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => showMessage()}>
                <View style={styles.hamburgerIcon}>
                    <View style={styles.fLine}></View>
                    <View style={styles.fLine}></View>
                    <View style={styles.sLine}></View>
                </View>
            </TouchableOpacity>
            <View style={styles.picLayout}>
                <Image source={ProfilePic} style={styles.profilePic} />
            </View>
            <Text style={styles.uName}>Johnissimus Van-Doe</Text>
            <Image source={downArrow} style={styles.downArrow} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 51,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        backgroundColor: '#fefefe',
        shadowOpacity: 0.18,
        shadowRadius: 0.5,
        elevation: 1
    },
    hamburgerIcon: {
        backgroundColor: '#000',
        marginTop: 10.26,
        marginBottom: 10.52,
        marginLeft: 16,
        borderRadius: 3,
        height: 30.21,
        width: 32,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    fLine: {
        width: 21,
        backgroundColor: '#fff',
        height: 2,
        borderRadius: 3,
        marginBottom: 3.5
    },
    sLine: {
        width: 21,
        backgroundColor: '#fff',
        height: 2,
        borderRadius: 3
    },
    picLayout: {
        width: 50.95,
        height: 32.61,
        marginLeft: 24.18,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    profilePic: {
        overflow: 'hidden',
        borderRadius: 50
    },
    uName: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 19,
        color: '#151515',
        marginRight: 9,
    },
    downArrow: {
        width: 11.17,
        height: 6.58
    }
})

export default AppBar
