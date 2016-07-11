/**
 * Created by mumuhou on 16/6/24.
 */
import React, { Component } from 'react';
import {
  View,
  Text,
  Navigator,
  StyleSheet
} from 'react-native';
import XNGNavigationBar from '../components/XNGNavigationBar';
import BlackPage from './BlackPage';

export default class RedPage extends Component {

  handleTouchedBackButton() {
    this.props.navigator.pop();
  }

  handleTouchedRightButton() {
    console.log('handleTouchedRightButton');
    this.props.navigator.push({
      component: BlackPage,
      sceneConfig: Navigator.SceneConfigs.FloatFromBottom,
    });
  }

  render() {
    var leftTitle = 'Back';
    var title = 'RedPage';
    var rightTitle = 'Push';
    const {lastTitle} = this.props;
    return (
      <View style={{flex: 1}}>
        <XNGNavigationBar
          leftTitle={lastTitle}
          title={title}
          rightTitle={rightTitle}
          onTouchedLeftButton={this.handleTouchedBackButton.bind(this)}
          onTouchedRightButton={this.handleTouchedRightButton.bind(this)}/>

        <View style={styles.container}>
          <Text>
            {'RedPage lalala'}
          </Text>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});