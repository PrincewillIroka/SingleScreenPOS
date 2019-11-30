import React, { useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import SingleItem from '../components/SingleItem'
import showMessage from '../utils/Message'

const ItemsContainer = () => {

    const items = [
        {
            names: [`Kendall Jackson Vintner's`, 'Reserve Chardonnay'],
            prices: ['$349.38'],
            image: require('../assets/beer1.png')
        },
        {
            names: [`Kendall Jackson Vintner's`, 'Reserve Chardonnay', 'Luxury Wine'],
            prices: ['$4,439.98', '2 x $2.035.67'],
            image: require('../assets/beer2.png')
        },
        {
            names: ['Kendall Chardonnay'],
            prices: ['$349.38'],
            image: require('../assets/Rectangle22.png')
        },
        {
            names: [`Kendall Jackson Vintner's`, 'Reserve Chardonnay'],
            prices: ['$5,349.38'],
            image: require('../assets/beer3.png')
        },
        {
            names: ['Jackson Luxury Wine'],
            prices: ['$439.98', '2 x $345.67', '10% (-$25.99)'],
            image: require('../assets/beer2.png')
        }
    ]

    return (
        <View style={styles.container}>
            <View style={styles.itemsHeader}>
                <View style={styles.noOfItemsContainer}>
                    <Text style={styles.noOfItemsText}>7</Text>
                    <Text style={styles.nText}>items</Text>
                </View>
                <Text style={styles.nText}>#0134234</Text>
            </View>

            <View style={styles.itemsLayout}>
                {items.map((item, index) => {
                    return <SingleItem key={index} item={item} />
                })}
            </View>

            <View style={styles.dtContainer}>
                <View style={styles.dtTextContainer}>
                    <Text style={styles.dtFirstText}>Discount:</Text>
                    <Text style={styles.dtFirstText}>Total:</Text>
                </View>
                <View style={styles.dtTextContainer2}>
                    <Text style={styles.tPriceText}>10% (-$25.99)</Text>
                    <Text style={styles.fPriceText}>$1,300.00</Text>
                </View>
            </View>

            <View style={styles.ocContainer}>
                <View style={styles.orderContainer}>
                    <TouchableOpacity onPress={() => showMessage()}>
                        <View style={styles.nOrderContainer}>
                            <Text style={styles.nOrderText}>New Order</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => showMessage()}>
                        <View style={styles.cOrderContainer}>
                            <Text style={styles.cOrderText}>Cancel Order</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.checkOutContainer}>
                    <TouchableOpacity onPress={() => showMessage()}>
                        <View style={styles.checkOutContainer2}>
                            <Text style={styles.checkOutText}>Checkout</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        marginTop: 26
    },
    itemsHeader: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
        paddingLeft: 16,
        paddingRight: 16
    },
    noOfItemsContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    noOfItemsText: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 12,
        lineHeight: 16,
        color: '#151515',
        marginRight: 5
    },
    nText: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 12,
        lineHeight: 16,
        color: '#151515'
    },
    itemsLayout: {
        paddingLeft: 16,
        paddingRight: 16
    },
    dtContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'flex-end',
        paddingLeft: 16,
        paddingRight: 16
    },
    dtTextContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        marginBottom: 3,
        justifyContent: 'space-between'
    },
    dtTextContainer2: {
        display: 'flex',
        flexDirection: 'column'
    },
    dtFirstText: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 13,
        lineHeight: 18,
        color: 'rgba(0, 0, 0, 0.6)',
        paddingRight: 10
    },
    fPriceText: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 18,
        lineHeight: 25,
        color: '#151515',
    },
    tPriceText: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 19,
        color: '#FF2929'
    },
    ocContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        marginTop: 20,
        marginLeft: 16,
        marginRight: 16
    },
    orderContainer: {
        marginRight: 8,
        width: '34.67%'
    },
    nOrderContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        backgroundColor: '#FEFEFE',
        height: 50,
        marginBottom: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    nOrderText: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 19,
        color: '#151515'
    },
    cOrderContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        backgroundColor: '#FEFEFE',
        height: 50,
        marginTop: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
    },
    cOrderText: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 19,
        color: 'rgba(0, 0, 0, 0.6)'
    },
    checkOutContainer: {
        width: '54.67%',
        height: 110,
        borderRadius: 3,
        backgroundColor: '#002A5C',
        shadowColor: "#002A5C",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 3.00,
        elevation: 1,
    },
    checkOutContainer2: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    checkOutText: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 27,
        color: '#FFFFFF'
    }

})

export default ItemsContainer
