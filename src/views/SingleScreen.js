import React, { Component } from 'react'
import { View, StatusBar, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import CustomStatusBar from '../components/CustomStatusBar'
import AppBar from '../components/AppBar'
import ClubMemberButton from '../components/ClubMemberButton'
import SearchBar from '../components/SearchBar'
import ItemsContainer from './ItemsContainer'
import showMessage from '../utils/Message'

class SingleScreen extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        StatusBar.setHidden(true);
    }

    render() {
        return (
            <View style={styles.singleScreenContainer}>
                <CustomStatusBar />
                <AppBar />
                <ScrollView style={styles.mainLayout} showsVerticalScrollIndicator={false}>
                    <View style={styles.scrollChild}>
                        <TouchableOpacity onPress={() => showMessage()}>
                            <ClubMemberButton />
                        </TouchableOpacity>
                        <SearchBar />
                        <ItemsContainer />
                    </View>

                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    singleScreenContainer: {
        flex: 1
    },
    mainLayout: {
        backgroundColor: '#E5E5E5'
    },
    scrollChild: {
        paddingTop: 16,
        paddingBottom: 16,
    }
})

export default SingleScreen