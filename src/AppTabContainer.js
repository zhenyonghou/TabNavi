/**
 * Created by mumuhou on 16/6/24.
 */
import React, { Component } from 'react';
import {
  View,
  Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import HomePage from './containers/HomePage';
import ProductPage from './containers/ProductPage';
import ProfilePage from './containers/ProfilePage';

export default class AppTabContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home'
    };
  }

  render() {
    return (
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="Home"
          renderIcon={() => <Image style={{width: 23, height: 22}} source={require('../images/tabbar_home.png')} />}
          renderSelectedIcon={() => <Image style={{width: 23, height: 22}} source={require('../images/tabbar_homed.png')} />}
          /*badgeText="1"*/
          onPress={() => this.setState({ selectedTab: 'home' })}>
          <HomePage navigator={this.props.navigator}/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'product'}
          title="Product"
          renderIcon={() => <Image style={{width: 25, height: 25}} source={require('../images/tabbar_discovery.png')} />}
          renderSelectedIcon={() => <Image style={{width: 25, height: 25}} source={require('../images/tabbar_discovered.png')} />}
          /*renderBadge={() => <CustomBadgeView />}*/
          onPress={() => this.setState({ selectedTab: 'product' })}>
          <ProductPage />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'profile'}
          title="Profile"
          renderIcon={() => <Image style={{width: 25, height: 25}} source={require('../images/tabbar_me.png')} />}
          renderSelectedIcon={() => <Image style={{width: 25, height: 25}} source={require('../images/tabbar_me_on.png')} />}
          onPress={() => this.setState({ selectedTab: 'profile' })}>
          <ProfilePage />
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}