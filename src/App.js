/**
 * Created by mumuhou on 16/6/24.
 */

import React, { Component } from 'react';
import {
  Navigator,
  View
} from 'react-native';
import AppTabContainer from './AppTabContainer';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  getInitialRoute() {
    return {
      component: AppTabContainer
    };
  }

  configureScene(route) {
    if (route.sceneConfig) {
      return route.sceneConfig;
    }
    return Navigator.SceneConfigs.PushFromRight;
  }

  renderScene(route, navigator) {
    let Component = route.component;
    return <Component {...route.params} navigator={navigator} />
  }
  
  render() {
    return (
      <Navigator 
        initialRoute={this.getInitialRoute()}
        configureScene={this.configureScene}
        renderScene={this.renderScene}
        sceneStyle={{paddingTop: 0}}  /*64*/
      />
    );
  }
}