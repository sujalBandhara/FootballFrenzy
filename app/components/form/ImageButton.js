'use strict'
import React, { Component } from 'react'
import {
    TouchableOpacity, StyleSheet, Text, ImageBackground
} from 'react-native'
import PropTypes from 'prop-types';
import colors from './../../utils/colors'

class ImageButton extends Component {
    render() {
        const type = this.props.type || {}
        const txtType = type + 'Txt'
        return (

            <TouchableOpacity disabled={this.props.disabled} onPress={this.props.onPress} style={[styles.default, styles[type], this.props.style || {}]}>
                <ImageBackground style={[this.props.style, { flex: 1, justifyContent: 'center', alignItems: 'center' }]} source={{ uri: (this.props.disabled) ? 'desable_search_and_clean_btn2' : this.props.btnImage }} resizeMode={this.props.resizeMode}>
                    <Text style={this.props.textStyle}>{this.props.btnTitleText}</Text>
                </ImageBackground>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    // Border button type by default
    default: {
        flex: 1
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


ImageButton.defaultProps = {
    resizeMode: "contain"
};

ImageButton.propTypes = {
    resizeMode: PropTypes.string,
};

module.exports = ImageButton
