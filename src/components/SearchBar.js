import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import search from '../assets/search.png'
import bar from '../assets/bar.png'
import showMessage from '../utils/Message'

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <Image source={search} style={styles.searchIcon} />
            <TouchableOpacity onPress={() => showMessage()}>
                <View style={styles.searchButton}>
                    <Image source={bar} style={styles.barIcon} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        height: 50,
        marginTop: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 2,
        justifyContent: 'space-between',
        backgroundColor: '#FEFEFE',
        borderRadius: 3,
        marginLeft: 16,
        marginRight: 16
    },
    searchIcon: {
        marginTop: 15,
        marginLeft: 16,
        width: 20,
        height: 20.84
    },
    searchButton: {
        backgroundColor: '#151515',
        borderRadius: 2,
        marginTop: 3,
        marginRight: 3,
        marginBottom: 3,
        height: 44,
        width: 75,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    barIcon: {
        width: 24,
        height: 20.84
    }

})

export default SearchBar
