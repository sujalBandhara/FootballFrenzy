import React, { Component } from 'react'
import ImageSequence from 'react-native-image-sequence';
export default class AnimationView extends Component {
    render() {
        console.log("$$$$$$$$$$$$$$$$$");
        console.log(this.props.images);
        return (
            (this.props.images !== undefined) ? <ImageSequence
                images={this.props.images}
                startFrameIndex={0}
                framesPerSecond={24}
                loop={this.props.loop}
                style={this.props.style} /> : null

        )
    }
}