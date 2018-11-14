import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  Platform,
  TouchableOpacity,
} from 'react-native';

import items from '.app/api/homeScreenData.js';
export default class App extends Component {

  componentDidMount() {
    // Font.loadAsync({
    //   'DINCondensed-Bold': require('./Fonts/DIN/DINCondensed-Bold.ttf'),
    //   'Roboto': require('./Fonts/Roboto/Roboto-Black.ttf'),
    // });
  }

  constructor(props) {
    super(props);
    this.state = {
      dataSource: items,
      userName: "John"
    }
  }

  render() {

    return (

      <View style={styles.mainBackGround}>
        <Image style={styles.backgroundImage} source={require('./assets/images/football_bg.jpeg')} />
        <Image style={styles.backgroundImageOverlay} source={require('./assets/images/football_bg_overlay.png')} />
        <View style={styles.header}>

          <View style={styles.headerTopBar}>
          </View>

          <View style={styles.headerNavBar}>
            <View style={styles.headerNavBarEnds}>
              <Image stype={styles.menuImage} source={require('./assets/images/menu_icon.png')} />
            </View>
            <View style={styles.headerNavBarTitle}>
              <Text adjustsFontSizeToFit={false}
                numberOfLines={1} style={styles.navBarTitle} >Welcome, {this.state.userName}</Text>
            </View>
            <View style={styles.headerNavBarEnds}>
              <Image style={styles.userImage} source={{ uri: "https://a0.muscache.com/im/pictures/15273358/d7329e9a_original.jpg?aki_policy=large" }} />
            </View>
          </View>

          <View style={styles.headerTabBar}>
            <View style={styles.headerTabBarTabsSelected}>
              <TouchableOpacity
                style={styles.tabBarButton}
              >
                <Text adjustsFontSizeToFit={false}
                  numberOfLines={1} style={styles.tabBarText} >UPCOMING</Text>

              </TouchableOpacity>
            </View>
            <View style={styles.headerTabBarTabs}>
              <TouchableOpacity
                style={styles.tabBarButton}
              >
                <Text adjustsFontSizeToFit={false}
                  numberOfLines={1} style={styles.tabBarText} >PAST</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.headerTabBarTabs}>
              <TouchableOpacity
                style={styles.tabBarButton}
              >
                <Text adjustsFontSizeToFit={false}
                  numberOfLines={1} style={styles.tabBarText} >LIVE</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>

        <FlatList style={styles.holder}
          ListHeaderComponent=
          {() => <Text style={styles.screenTitle} type='h1'></Text>}
          enableEmptySections={true}
          data={this.state.dataSource}
          renderItem={this.renderMatchesRow}
          keyExtractor={(item, index) => index.toString()}
          removeClippedSubviews={false}
        />

      </View>
    );
  }

  renderMatchesRow = (data) => {
    let rowData = data.item;
    let buttonText = rowData.matchResult === "VS" ? "Bet Now" : "Result"
    return (

      (rowData.type === "section") ?
        <View style={styles.headerForCallTitle}>
          <Text adjustsFontSizeToFit={false}
            numberOfLines={1} style={styles.headerForCallText} >{rowData.sectionTitle}</Text>
        </View>
        :
        <View style={[styles.customCell]}>

          <View style={styles.customCellTop}>
            <View style={styles.customCellTopViewLeft}>
              <Text adjustsFontSizeToFit={false}
                numberOfLines={2} style={styles.matchDetailText} type='h5'>{rowData.name}{'\n'}{rowData.description}
              </Text>
            </View>
            <View style={styles.customCellTopViewRight}>
              <TouchableOpacity
                style={rowData.matchResult === "VS" ? styles.betButton : styles.resultButton}
              >
                <Text adjustsFontSizeToFit={false}
                  numberOfLines={1} style={styles.betNowText} >{buttonText}</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.customCellBottom}>
            <View style={styles.customCellBottomViews}>
              <Image style={{ height: "40%", aspectRatio: 1, resizeMode: 'contain' }} source={{ uri: rowData.teamALogo }} />
              <Text adjustsFontSizeToFit={true}
                numberOfLines={0} style={styles.customCellBottomText} >{rowData.teamAName}</Text>
            </View>

            <View style={styles.customCellBottomViews}>
              <Text adjustsFontSizeToFit={false}
                numberOfLines={0} style={styles.customCellBottomVSText} >{rowData.matchResult}</Text>
              <View style={styles.teamImage}></View>
            </View>

            <View style={styles.customCellBottomViews}>
              <Image style={styles.teamImage} source={{ uri: rowData.teamBLogo }} />
              <Text adjustsFontSizeToFit={true}
                numberOfLines={0} style={styles.customCellBottomText} >{rowData.teamBName}</Text>
            </View>
          </View>
        </View>
    )
  }
}

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
const styles = StyleSheet.create({

  mainBackGround: {
    flex: 100,
    backgroundColor: "black"
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
    backgroundColor: "black"
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
    color: '#FFF',
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
    borderColor: "#FFF",
    borderBottomWidth: 3,
  },
  headerTabBarTabs: {
    ...fillContain,
    ...testMode,
    ...alignCenter,
    flex: 1,
    borderColor: 'rgba(255,255,255,0.3)',
    borderBottomWidth: 2,
  },
  navBarTitle: {
    ...fillContain,
    ...testMode,
    fontWeight: '700',
    fontSize: 16,
    color: '#FFF',
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
    color: "#2A2A2A",
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
    color: "#2A2A2A",
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
    color: "#2A2A2A",
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
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    backgroundColor: '#388E3C',
    borderRadius: 20,
  },
  resultButton: {
    ...alignCenter,
    ...fillContain,
    flex: 0.5,
    width: "80%",
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    backgroundColor: '#FF9100',
    borderRadius: 20,
  },

  betNowText: {
    ...alignCenter,
    ...fillContain,
    fontWeight: 'normal',
    fontSize: 14,
    width: "100%",
    color: '#FFF',
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
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    borderRadius: 10,
  },
  tabBarText: {
    ...alignCenter,
    ...fillContain,
    fontWeight: '500',
    fontSize: 14,
    width: "100%",
    color: '#FFF',
    ...Platform.select({
      ios: { fontFamily: 'Arial', },
      android: { fontFamily: 'Roboto' }
    })
  },
});