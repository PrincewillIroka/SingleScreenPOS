import React, { Component } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import StatusBarImage from './src/assets/StatusBar1.png'

export default class App extends Component {

  constructor() {
    super()
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusBarContainer}>
          <Image source={StatusBarImage} style={styles.statusBarImage} />
        </View>
        <View style={styles.appBar}>
          <Text>Help</Text>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 375,
    height: 923,
    backgroundColor: '#F5F5F5'
  },
  statusBarContainer: {
    position: 'absolute',
    left: '0%',
    right: '0%',
    top: '0%',
    bottom: '95.23%',
    backgroundColor: '#FFFFFF'
  },
  statusBarImage: {
    position: 'absolute',
    left: '5.33%',
    right: '4%',
    top: '1.52%',
    bottom: '96.53%'
  },
  appBar: {
    position: 'absolute',
    left: '0%',
    right: '0%',
    top: '4.77%',
    bottom: '89.71%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    backgroundColor: '#FEFEFE',
    shadowOpacity: 0.18,
    shadowRadius: 1.00,

    elevation: 1,
  }
})
