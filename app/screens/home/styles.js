const React = require("react-native")
const { Dimensions, StyleSheet, Platform } = React
const device = Dimensions.get('window');
import colors from './../../utils/colors';

const fillContain = {
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    paddingVertical: 0,
}
const alignCenter = {
    textAlignVertical: "center",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
}
const testMode = {
    // borderColor: '#388E3C',
    // borderWidth: 1,
    // backgroundColor: 'rgba(1,0,0,0.1)',
}
export default styles = StyleSheet.create({

    mainBackGround: {
        flex: 100,
        backgroundColor: colors.black
    },
    backgroundImage: {
        ...fillContain,
        position: "absolute",
        resizeMode: 'cover',
        height: "100%"
    },
    backgroundImageOverlay: {
        ...fillContain,
        position: "absolute",
        resizeMode: 'cover',
    },
    menuImage: {
        height: 30, aspectRatio: 1, resizeMode: 'contain'
    },
    userImage: {
        ...fillContain,
        height: 30,
        borderRadius: 15,
        aspectRatio: 1,
    },
    header: {
        ...fillContain,
        flex: 0.25,
        backgroundColor: colors.black
    },
    headerForCallTitle: {
        ...fillContain,
        ...testMode,
        ...alignCenter,
        flex: 1,
        right: 5,
        left: 5,
        paddingVertical: 7,
    },
    headerForCallText: {
        ...fillContain,
        ...testMode,
        ...alignCenter,
        textAlign: "left",
        fontWeight: '700',
        fontSize: 14,
        width: "100%",
        color: colors.white,
        ...Platform.select({
            ios: { fontFamily: 'Arial', },
            android: { fontFamily: 'Roboto' }
        })
    },
    headerTopBar: {
        ...fillContain,
        ...testMode,
        flex: 0.2,
    },
    headerNavBar: {
        ...fillContain,
        ...testMode,
        flex: 0.4,
        flexDirection: 'row',
    },
    headerTabBar: {
        ...fillContain,
        ...testMode,
        flex: 0.4,
        flexDirection: 'row'
    },
    headerNavBarEnds: {
        ...fillContain,
        ...testMode,
        ...alignCenter,
        flex: 0.2,
    },
    headerNavBarTitle: {
        ...fillContain,
        ...testMode,
        ...alignCenter,
        flex: 0.6,
    },
    headerTabBarTabsSelected: {
        ...fillContain,
        ...testMode,
        ...alignCenter,
        flex: 1,
        borderColor: colors.white,
        borderBottomWidth: 3,
    },
    headerTabBarTabs: {
        ...fillContain,
        ...testMode,
        ...alignCenter,
        flex: 1,
        borderColor: colors.tabBarBoarderColor,
        borderBottomWidth: 2,
    },
    navBarTitle: {
        ...fillContain,
        ...testMode,
        fontWeight: '700',
        fontSize: 16,
        color: colors.white,
        ...Platform.select({
            ios: { fontFamily: 'Arial', },
            android: { fontFamily: 'Roboto' }
        })
    },
    holder: {
        ...fillContain,
        ...testMode,
        flex: 0.75,
        width: "98.5%"
    },
    customCell: {
        ...fillContain,
        ...testMode,
        flex: 1,
        height: 200,
        borderBottomWidth: StyleSheet.hairlineWidth,
        paddingVertical: 7,
    },
    customCellTop: {
        ...fillContain,
        ...testMode,
        ...alignCenter,
        flex: 0.4,
        flexDirection: 'row',
        right: 0,
        left: 5,
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    customCellBottom: {
        ...fillContain,
        ...testMode,
        ...alignCenter,
        flex: 0.6,
        flexDirection: 'row',
        right: 5,
        left: 5,
        backgroundColor: 'white',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    customCellTopViewLeft: {
        ...fillContain,
        ...testMode,
        ...alignCenter,
        flex: 0.66,
        right: 5,
        left: 5,
    },
    matchDetailText: {
        textAlignVertical: "center",
        textAlign: "left",
        fontWeight: 'normal',
        fontSize: 12,
        color: colors.cellText,
        width: "90%",
        alignItems: 'center',
        justifyContent: 'center',
        ...Platform.select({
            ios: { fontFamily: 'Arial', },
            android: { fontFamily: 'Roboto' }
        })
    },
    customCellTopViewRight: {
        ...fillContain,
        ...testMode,
        ...alignCenter,
        flex: 0.34,
    },
    customCellBottomViews: {
        ...fillContain,
        ...testMode,
        ...alignCenter,
        flex: 1
    },
    customCellBottomText: {
        flex: 1,
        ...fillContain,
        ...testMode,
        ...alignCenter,
        fontWeight: '700',
        fontSize: 12,
        color: colors.cellText,
        width: "100%",
        top: 5,
        ...Platform.select({
            ios: { fontFamily: 'Arial', },
            android: { fontFamily: 'Roboto' }
        })
    },
    customCellBottomVSText: {
        ...fillContain,
        ...testMode,
        ...alignCenter,
        fontWeight: '700',
        fontSize: 40,
        color: colors.cellText,
        ...Platform.select({
            ios: { fontFamily: 'DINCondensed-Bold', },
            android: { fontFamily: 'DINCondensed-Bold' }
        })
    },
    betButton: {
        ...alignCenter,
        ...fillContain,
        flex: 0.5,
        width: "80%",
        backgroundColor: colors.greenBtn,
        borderRadius: 20,
    },
    resultButton: {
        ...alignCenter,
        ...fillContain,
        flex: 0.5,
        width: "80%",
        backgroundColor: colors.orangeBtn,
        borderRadius: 20,
    },

    betNowText: {
        ...alignCenter,
        ...fillContain,
        fontWeight: 'normal',
        fontSize: 14,
        width: "100%",
        color: colors.white,
        ...Platform.select({
            ios: { fontFamily: 'Arial', },
            android: { fontFamily: 'Roboto' }
        })
    },
    teamImage: {
        height: "40%", aspectRatio: 1, resizeMode: 'contain'
    },
    tabBarButton: {
        ...alignCenter,
        ...fillContain,
        flex: 0.5,
        width: "80%",
        borderRadius: 10,
    },
    tabBarText: {
        ...alignCenter,
        ...fillContain,
        fontWeight: '500',
        fontSize: 14,
        width: "100%",
        color: colors.white,
        ...Platform.select({
            ios: { fontFamily: 'Arial', },
            android: { fontFamily: 'Roboto' }
        })
    },
});