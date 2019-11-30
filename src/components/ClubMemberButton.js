import React from 'react'
import { View, Image, StyleSheet, Text } from 'react-native';
import bag from '../assets/bag.png'

const ClubMemberButton = () => {
    return (
        <View style={styles.container}>
            <Image source={bag} style={styles.bagIcon} />
            <Text style={styles.lgText}>Club member</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#28A745',
        borderRadius: 60,
        height: 50,
        marginLeft: 16,
        marginRight: 16
    },
    bagIcon: {
        marginRight: 16.33,
        width: 16.67,
        height: 15.83
    },
    lgText: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 25,
        color: '#FFFFFF',
    }
})

export default ClubMemberButton
