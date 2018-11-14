'use strict'
import React, { Component } from 'react'
import {
    TextInput, StyleSheet, Text, View
} from 'react-native'

import colors from './../../utils/colors'


class Input extends Component {
    render() {
        const type = this.props.type || {}
        let typeProps
        switch (type) {
            case 'email':
                typeProps = {
                    autoCapitalize: 'none',
                    autoCorrect: false,
                    keyboardType: 'email-address',
                    returnKeyType: 'next'
                }
                break;
            case 'password':
                typeProps = {
                    secureTextEntry: true
                }
                break;
            default:
        }

        const textInputProps = this.props.textInputProps
        return (
            <View style={[styles.defaultHolder, this.props.holderStyle || {}]}>
                {(this.props.showTitle) ? <Text style={[styles.defaultTxt, this.props.titleStyle || {}]}>{this.props.title}</Text> : <View />}
                <View style={styles.inputHolder}>
                    <TextInput
                        ref={inputFocus => this._textInput = inputFocus}
                        {...this.props}
                        onChangeText={this.props.onChangeText}
                        {...typeProps}
                        placeholder={this.props.placeholderText}
                        placeholderTextColor={this.props.placeholderColor}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        keyboardType={this.props.keyboardType}
                        secureTextEntry={this.props.isPasswordField}
                        value={this.props.value}
                        selectionColor={colors.txtWhite}
                        multiline={this.props.multiline}
                        textAlignVertical={this.props.textAlignVertical}
                        style={[styles.default, styles[type], this.props.style || {}]} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    // Border button type by default
    default: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        color: colors.txtWhite,
        fontWeight: '700',
        flex: 1,
        textAlign: 'right',
        paddingRight: 10
    },
    defaultTxt: {
        color: colors.txtWhite,
        fontWeight: '700'
    },
    defaultHolder: {
        borderBottomWidth: 0,
        borderColor: colors.txtWhite
    },
    inputHolder: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    validIcon: {
        color: colors.txtWhite,
        paddingLeft: 10
    }
})

module.exports = Input
