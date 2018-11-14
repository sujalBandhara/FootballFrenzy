'use strict'
import PropTypes from 'prop-types';
import React, { Component } from 'react'
import {
    View,
} from 'react-native'

class BlankSpace extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
        }
    }

    render() {
        return (
            <View style={[this.props.style || {}, { height: this.props.spaceHeight }]}>

            </View>
        )
    }
}

BlankSpace.defaultProps = {
    spaceHeight: 5
};

BlankSpace.propTypes = {
    spaceHeight: PropTypes.number,
};

module.exports = BlankSpace
