'use strict'
import React, { Component } from 'react';
import { View, Platform, StyleSheet, Text, TouchableOpacity, Image, ImageBackground, Dimensions, } from 'react-native';
import PropTypes from 'prop-types';
import colors from './../utils/colors';
import DeviceInfo from 'react-native-device-info';
import navigatorStyle from './../utils/navigatorStyle';

const iPhone_X = DeviceInfo.getModel() === 'iPhone X';
const device = Dimensions.get('window')

class NavBar extends Component {

    constructor(props) {
        super(props);
    }

    // onPress={() => this._pressBtnBack()}
    render() {
        let txtMarginLeft = (this.props.hideBackButton) ? 0 : 0
        let btnBack = (
            <TouchableOpacity style={styles.btnback} onPress={() => this._pressBtnBack()}>
                <Image source={{ uri: this.props.backButtonImage }} resizeMode="contain" style={[{ height: (Platform.OS === 'android') ? 42 : 50, width: 50 }, this.props.backButtonStyle]} />
            </TouchableOpacity>
        )
        let btnMenu = (
            <TouchableOpacity style={{ marginRight: 10, borderWidth: 0 }} onPress={() => this._pressBtnMenu()}>
                <Image source={{ uri: 'menu' }} style={{ height: (Platform.OS === 'android') ? 42 : 50, width: 50 }} resizeMode="contain" />
            </TouchableOpacity>
        )
        return (
            <ImageBackground source={{ uri: this.props.navbarBackgroundImage }} style={[styles.bar, this.props.style || {}]}>

                {/* {(this.props.headerRight) ? this.props.headerRight : <View style={{ width: 35 }} />} */}
                {(!this.props.hideRightBar) ? (this.props.headerRight) ? this.props.headerRight : btnMenu : <View style={{ width: 35 }} />}

                {(this.props.showStationCounter) ?
                    <View style={styles.coinCntView}>
                        <ImageBackground source={{ uri: 'coins_counter' }} resizeMode="contain" style={styles.stationCounter}>
                            <Text style={styles.txtCoinCounter}>{this.props.coinCount}</Text>
                        </ImageBackground>
                    </View> : <View />}

                {(this.props.showStationCounter) ?
                    <View style={styles.statCntView}>
                        <ImageBackground source={{ uri: 'stations_counter' }} resizeMode="contain" style={styles.stationCounter}>
                            <Text style={styles.txtStatCount}>{this.props.taskCount}/{this.props.totalTask}</Text>
                        </ImageBackground>
                    </View> : <View />}

                <View style={styles.titleHolder}>
                    <Text style={[styles.text, this.props.titleStyle || {}, { marginRight: txtMarginLeft }]}>{this.props.title}</Text>
                </View>

                {(!this.props.hideBackButton) ? (this.props.backButton) ? this.props.backButton : btnBack : <View style={{ width: 35 }} />}

            </ImageBackground>
        )
    }

    _pressBtnBack() {
        this.props.navigator.pop()
    }

    _pressBtnMenu() {
        this.props.navigator.resetTo({ screen: 'app.menu', navigatorStyle: navigatorStyle })
    }
}

NavBar.defaultProps = {
    backButtonImage: "back_btn",
    navbarBackgroundImage: "navbar",
    hideRightBar: false
};

NavBar.propTypes = {
    backButtonImage: PropTypes.string,
    navbarBackgroundImage: PropTypes.string,
    hideRightBar: PropTypes.bool
};


const styles = StyleSheet.create({
    bar: {
        flexDirection: 'row',
        height: (iPhone_X) ? 88 : 65,
        alignItems: 'center',
        backgroundColor: colors.navBar,
        paddingTop: (iPhone_X) ? 30 : 15,
        borderWidth: 0
    },
    titleHolder: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0
    },
    text: {
        borderWidth: 0,
        color: colors.txtWhite,
        fontWeight: '700',
        fontSize: (device.height > 600) ? 20 : 18,
        alignSelf: "flex-start",

    },
    icon: {
        color: colors.txtWhite,
        backgroundColor: 'transparent'
    },
    btnback: {

        marginLeft: 10
    },
    stationCounter: {
        height: (device.height > 600) ? 40 : 32,
        justifyContent: 'center',
        alignItems: 'center',
    },
    statCntView: {
        flex: 1.7,
        borderWidth: 0,
    },
    coinCntView: {
        flex: 1.5,
        borderWidth: 0,
    },
    txtStatCount: {
        paddingRight: (Platform.OS === "ios") ? 20 : 0,
        paddingLeft: (Platform.OS === "android") ? 20 : 0,
        fontWeight: '700',
        fontSize: (device.height > 600) ? 17 : 15,
        color: colors.txtWhite
    },
    txtCoinCounter: {
        paddingRight: (Platform.OS === "ios") ? 20 : 0,
        paddingLeft: (Platform.OS === "android") ? 20 : 0,
        fontWeight: '700',
        fontSize: (device.height > 600) ? 17 : 15,
        color: colors.txtWhite
    }
})

module.exports = NavBar
