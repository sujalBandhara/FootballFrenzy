import React from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    Dimensions,
    Image,
    Platform
} from 'react-native';
import Fonts from './../constants/Fonts';
import colors from './../utils/colors';
import ImageButton from './form/ImageButton';

const device = Dimensions.get('window')
const ANIMATION = ['none', 'slide', 'fade'];

class CustomAlert extends React.Component {

    constructor(props) {
        super(props);
        this.state = { showAlert: this.props.showAlert, textContent: this.props.textContent };
    }

    static propTypes = {
        showAlert: PropTypes.bool,
        cancelable: PropTypes.bool,
        textContent: PropTypes.string,
        animation: PropTypes.oneOf(ANIMATION),
        containTwoButtons: PropTypes.bool,
        hideCloseBtn: PropTypes.bool,
    };

    static defaultProps = {
        showAlert: false,
        cancelable: false,
        textContent: '',
        animation: 'none',
        containTwoButtons: false,
        hideCloseBtn: false
    };

    close() {
        this.setState({ showAlert: false });
    }

    componentWillReceiveProps(nextProps) {
        const { showAlert, textContent } = nextProps;
        this.setState({ showAlert, textContent });
    }

    _handleOnRequestClose() {
        if (this.props.cancelable) {
            this.close();
        }
    }

    _renderSpinner() {
        return (
            <View style={{ flex: 10 }}>                    
                    <View style={styles.alertView}>
                        <ImageBackground source={{ uri: 'system_alert_box' }} style={styles.imgAlert} resizeMode="stretch">
                            {/* Close button view */}
                            <View style={styles.closeView}>
                                {(!this.props.hideCloseBtn) &&
                                    <TouchableOpacity style={styles.btnClickClose} onPress={this.props.onPressClose}>
                                        <Image source={{ uri: 'x_click' }} style={styles.imgClose} resizeMode="stretch" />
                                    </TouchableOpacity>
                                }
                            </View>

                            {/* Alert text view */}
                            <View style={styles.alertTextArea}>
                                <Text style={styles.alertText}>
                                    {this.props.alertText}
                                </Text>
                            </View>

                            {/* Alert buttons view */}

                            {(this.props.containTwoButtons)
                                ?
                                <View style={styles.alertBtnsView}>
                                    <ImageButton btnImage="send_button" onPress={this.props.onPressSecondeBtn} btnTitleText={this.props.btnSecondTitle} textStyle={styles.btnTitleStyle} style={styles.btnImg} />
                                    <ImageButton btnImage="take_photo_again_button" onPress={this.props.onPressFirstBtn} btnTitleText={this.props.btnFirstTitle} textStyle={styles.btnTitleStyle} style={styles.btnImg} />
                                </View>
                                :
                                <View style={styles.alertBtnsView}>
                                    <ImageButton btnImage="send_button" onPress={this.props.onPressSingleBtn} btnTitleText={this.props.btnSingleTitle} textStyle={styles.btnTitleStyle} style={styles.btnImg} />
                                </View>
                            }
                        </ImageBackground>
                    </View>
                </View>
        );
    }

    render() {
        return this._renderSpinner();
    }

}


const styles = StyleSheet.create({
    blankViews: {
        flex: 4,        
    },
    alertView: {
        width:device.width-30,        
        height:130,
        marginLeft: (Platform.OS === 'ios')?30:0,
        marginRight: 30
    },
    imgAlert: {
        flex: 1
    },
    closeView: {
        flex: (Platform.OS === 'ios') ? 0.7 : 0.9,
        borderWidth: 0,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginLeft: 10,
        marginTop: 5
    },
    btnClickClose: {
        flex: (Platform.OS === 'ios') ? 0.7 : 0.9,
        borderWidth: 0,
        justifyContent: 'center'
    },
    imgClose: {
        height: (device.height > 600) ? 25 : 20,
        width: (device.height > 600) ? 25 : 20
    },
    alertTextArea: {
        flex: 1.3,
        borderWidth: 0,
        marginLeft: 10,
        marginRight: 10
    },
    alertText: {
        fontFamily: Fonts.rubik_regular,
        color: colors.txtWhite,
        fontSize: (device.height > 600) ? 15 : 13,
        textAlign: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    alertBtnsView: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'center',
        borderWidth: 0,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10
    },
    btnTitleStyle: {
        fontFamily: Fonts.rubik_medium,
        textAlign: "center",
        color: colors.txtWhite,
        fontSize: (device.height > 600) ? 16 : 12
    },
    btnImg: {
        flex: (device.height > 600) ? 0.3 : 0.3
    }
});


module.exports = CustomAlert;