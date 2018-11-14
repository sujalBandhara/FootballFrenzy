'use strict'
import React, { Component } from 'react'
import {
    ImageBackground
} from 'react-native'

class Background extends Component {
    render() {
        return (
            <ImageBackground resizeMode="stretch" source={{ uri: this.props.backgroundImage }} style={[this.props.style || {}, { flex: 9 }]}>
                {this.props.children}
            </ImageBackground>
        )
    }
}

module.exports = Background
