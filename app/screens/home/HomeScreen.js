import React, { Component } from 'react';
import {
  Image,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import homeScreenData from '../../api/HomeScreenData.js';
import Strings from './../../constants/Strings';
class HomeScreen extends Component {
  componentDidMount() {
    // Font.loadAsync({
    //   'DINCondensed-Bold': require('./Fonts/DIN/DINCondensed-Bold.ttf'),
    //   'Roboto': require('./Fonts/Roboto/Roboto-Black.ttf'),
    // });
  }

  constructor(props) {
    super(props);
    this.state = {
      dataSource: homeScreenData,
      userName: "John"
    }
  }

  render() {

    return (

      <View style={styles.mainBackGround}>
        <Image style={styles.backgroundImage} source={require('./../../assets/images/football_bg.jpeg')} />
        <Image style={styles.backgroundImageOverlay} source={require('./../../assets/images/football_bg_overlay.png')} />
        <View style={styles.header}>

          <View style={styles.headerTopBar}>
          </View>

          <View style={styles.headerNavBar}>
            <View style={styles.headerNavBarEnds}>
              <Image stype={styles.menuImage} source={require('./../../assets/images/menu_icon.png')} />
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
                  numberOfLines={1} style={styles.tabBarText} >{Strings.home_screen.upcomingTab}</Text>

              </TouchableOpacity>
            </View>
            <View style={styles.headerTabBarTabs}>
              <TouchableOpacity
                style={styles.tabBarButton}
              >
                <Text adjustsFontSizeToFit={false}
                  numberOfLines={1} style={styles.tabBarText} >{Strings.home_screen.pastTab}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.headerTabBarTabs}>
              <TouchableOpacity
                style={styles.tabBarButton}
              >
                <Text adjustsFontSizeToFit={false}
                  numberOfLines={1} style={styles.tabBarText} >{Strings.home_screen.live}</Text>
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
module.exports = HomeScreen