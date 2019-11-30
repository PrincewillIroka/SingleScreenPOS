import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native';
import beer1 from '../assets/beer1.png'

const SingleItem = ({ item }) => {
    return (
        <View style={styles.singleItem}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemNamesContainer}>
                {item.names && item.names.map(
                    (name, index) => {
                        return <Text key={index} style={styles.itemNameText}>{name}</Text>
                    }
                )}
            </View>
            <View style={styles.itemPriceContainer}>
                {item.prices && item.prices.map((price, index) => {
                    if (index === 0) {
                        return <Text key={index} style={styles.fPriceText}>{price}</Text>
                    } else if (index === 1) {
                        return <Text key={index} style={styles.sPriceText}>{price}</Text>
                    } else if (index === 2) {
                        return <Text key={index} style={styles.tPriceText}>{price}</Text>
                    }
                })}

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    singleItem: {
        display: 'flex',
        backgroundColor: '#FEFEFE',
        borderRadius: 3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 3,
        height: 71,
        padding: 10,
        flexDirection: 'row',
        paddingRight: 11,
        marginBottom: 10
    },
    itemImage: {
        resizeMode: 'stretch',
        width: 36,
        height: 51
    },
    itemNamesContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: 176,
        marginLeft: 9
    },
    itemNameText: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 19,
        color: '#151515'
    },
    itemPriceContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 'auto',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    fPriceText: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 18,
        lineHeight: 25,
        color: '#151515'
    },
    sPriceText: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 19,
        color: 'rgba(0, 0, 0, 0.6)',
    },
    tPriceText: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 19,
        color: '#FF2929'
    }
})

export default SingleItem
