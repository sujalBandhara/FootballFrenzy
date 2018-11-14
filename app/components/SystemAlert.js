import React from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    View,
    Text,
    Modal,
    TouchableOpacity,
    ImageBackground,
    Dimensions,
    Image,
    Platform
} from 'react-native';
import Fonts from './../constants/Fonts';
import colors from './../utils/colors';
import ImageButton from './form/ImageButton';
import Input from './../components/form/Input';
import Strings from './../constants/Strings';
import dataManager from "./../utils/dataManager";
const device = Dimensions.get('window')
const ANIMATION = ['none', 'slide', 'fade'];
const SIZES = ['small', 'normal', 'large'];

class SystemAlert extends React.Component {

    constructor(props) {
        super(props);
        this.state = { showAlert: this.props.showAlert, textContent: this.props.textContent, userAnswer: '' };
    }

    static propTypes = {
        showAlert: PropTypes.bool,
        cancelable: PropTypes.bool,
        textContent: PropTypes.string,
        animation: PropTypes.oneOf(ANIMATION),
        containTwoButtons: PropTypes.bool,
        hideCloseBtn: PropTypes.bool,
        showTextInput: PropTypes.bool,
    };

    static defaultProps = {
        showAlert: false,
        cancelable: false,
        textContent: '',
        animation: 'none',
        containTwoButtons: false,
        hideCloseBtn: false,
        showTextInput: false
    };

    close() {
        this.setState({ showAlert: false });
    }

    componentWillReceiveProps(nextProps) {
        const { showAlert, textContent } = nextProps;
        this.setState({ showAlert, textContent });


    }

    componentDidUpdate() {
        var dataManagerObj = dataManager.getInstance();
        dataManagerObj.setPromoCode(this.state.userAnswer)
    }

    _handleOnRequestClose() {
        if (this.props.cancelable) {
            this.close();
        }
    }

    _renderSpinner() {

        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.props.showAlert}
                onRequestClose={() => this._handleOnRequestClose()}
            >
                <View style={{ flex: 10 }}>
                    <View style={styles.blankViews} />

                    <View style={styles.alertView}>
                        <ImageBackground source={{ uri: 'system_alert_box' }} style={styles.imgAlert} resizeMode="stretch">

                            {(this.props.showTextInput) ?

                                <View style={styles.couponView}>
                                    <View style={styles.titleView}>
                                        <View style={styles.titlecloseView}>
                                            {(!this.props.hideCloseBtn) &&
                                                <TouchableOpacity style={styles.buttonView} onPress={this.props.onPressClose}>
                                                    <Image source={{ uri: 'x_click' }} style={styles.imgClose} resizeMode="stretch" />
                                                </TouchableOpacity>
                                            }
                                        </View>
                                        <View style={styles.titleTextView}>
                                            <Text style={styles.titleText}>
                                                {this.props.alertText}
                                            </Text>
                                        </View>
                                        <View style={styles.titleSpaceView} />
                                    </View>
                                    <View style={styles.inputView}>

                                        <ImageBackground source={{ uri: 'search_window' }} resizeMode="stretch" style={styles.imageBG}>
                                            <Input
                                                placeholderText={Strings.alertCoupon.placeHolderText}
                                                placeholderColor={colors.txtWhite}
                                                style={styles.inputText}
                                                keyboardType='numeric'
                                                onChangeText={(text) => this.setState({ userAnswer: text })}
                                            />
                                        </ImageBackground>
                                    </View>
                                    <View style={styles.buttonCoupon}>


                                        <ImageButton disabled={(this.state.userAnswer.length === 4) ? false : true} btnImage="send_button" onPress={this.props.onPressSingleBtn} btnTitleText={this.props.btnSingleTitle} textStyle={styles.btnTitleStyle} style={{ flex: 0.6 }} />

                                        <View style={{ flex: 0.2 }} />
                                    </View>
                                </View>

                                :
                                <View style={{ flex: 1 }}>

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

                                </View>

                            }

                        </ImageBackground>
                    </View>

                    <View style={styles.blankViews} />
                </View>
            </Modal >
        );
    }

    render() {
        return this._renderSpinner();
    }

}


const styles = StyleSheet.create({
    blankViews: {
        flex: 4
    },
    alertView: {
        flex: 2,
        marginLeft: 20,
        marginRight: 20
    },
    imgAlert: {
        flex: 1
    },
    closeView: {
        flex: (Platform.OS === 'ios') ? 0.7 : 0.9,
        borderWidth: 0,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginLeft: 12,
        marginTop: 10
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
        flex: (device.height > 600) ? 0.35 : 0.3
    },

    //Coupon View

    couponView: {
        flex: 1, borderWidth: 0
    },
    titleView: {
        flex: 0.30,
        borderWidth: 0,
        flexDirection: 'row'
    },
    titlecloseView: {
        flex: 0.2,
        borderWidth: 0
    },
    titleSpaceView: {
        flex: 0.2,
        borderWidth: 0
    },
    buttonView: {
        marginLeft: 10,
        marginTop: 10
    },
    titleTextView: {
        flex: 0.6,
        borderWidth: 0,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    titleText: {
        fontFamily: Fonts.rubik_regular,
        color: colors.txtWhite,
        fontSize: (device.height > 600) ? 13 : 11,
        textAlign: 'center',
    },
    inputView: {
        flex: 0.30,
        borderWidth: 0,
        alignItems: 'center',
    },
    imageBG: {
        height: 35,
        width: 160,
        justifyContent: 'center'
    },
    inputText: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        fontSize: (device.height > 600) ? 14 : 12,
        marginLeft: 10
    },
    buttonCoupon: {
        flex: 0.40, borderWidth: 0,
    }
});


module.exports = SystemAlert;