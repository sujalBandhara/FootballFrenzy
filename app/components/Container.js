'use strict'
import PropTypes from 'prop-types';
import React, { Component } from 'react'
import {
    StyleSheet, View, Platform
} from 'react-native'


import colors from './../utils/colors';
class Container extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={[styles.container, this.props.style || {}]}>
                {/* Replace status on iOS */}
                {(Platform.OS == 'ios' && this.props.showStatusBar) ? <View style={[this.props.statusBarStyle || {}, { height: 20, backgroundColor: colors.navBar }]}></View> : <View />}
                {this.props.children}
            </View>
        )
    }
}
Container.defaultProps = {
    showStatusBar: true
};
Container.propTypes = {
    showStatusBar: PropTypes.bool,
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.txtWhite,
        // alignItems: 'stretch',
        flex: 10
    },
})

module.exports = Container
