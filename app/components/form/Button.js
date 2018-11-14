'use strict'
import React, { Component } from 'react'
import {
    TouchableOpacity, StyleSheet, Text
} from 'react-native'

import colors from './../../utils/colors'

class Button extends Component {
    render() {
        const type = this.props.type || {}
        const txtType = type + 'Txt'
        return (
            <TouchableOpacity onPress={this.props.onPress} style={[styles.default, styles[type], this.props.style || {}]}>
                <Text style={[styles.defaultTxt, styles[txtType], this.props.titleStyle || {}]}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    // Border button type by default
    default: {
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: colors.txtWhite,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    defaultTxt: {
        color: colors.txtWhite,
        fontSize: 20
    },
    facebook: {
        backgroundColor: colors.txtWhite
    },
    facebookTxt: {
        color: colors.txtMain
    },
    // Button with background color
    submit: {
        backgroundColor: colors.txtWhite,
        width: 50
    },
    submitTxt: {
        color: colors.txtMain
    },
    borderMain: {
        borderColor: colors.bdMain,
        borderRadius: 5,
        paddingHorizontal: 25
    },
    borderMainTxt: {
        color: colors.txtMain
    }
})

module.exports = Button
