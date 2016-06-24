/**
 * Created by mumuhou on 16/6/24.
 */
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import XNGNavigationBar from '../components/XNGNavigationBar';
import RedPage from './RedPage';

export default class HomePage extends Component {

  handleTouchedBackButton() {
    console.log('handleTouchedBackButton');
    // this.props.navigator.pop();
  }

  handleTouchedRightButton() {
    console.log('handleTouchedRightButton');
    this.props.navigator.push({
      component: RedPage,
      params: {
        lastTitle: 'Home',
      }
    });
  }

  render() {
    var title = 'Home';
    var rightTitle = 'Push';
    return (
      <View style={{flex: 1}}>
        <XNGNavigationBar
          title={title}
          rightTitle={rightTitle}
          onTouchedRightButton={this.handleTouchedRightButton.bind(this)}
        />
        <View style={styles.container}>
          <Text>
            {'HomePage lalala'}
          </Text>
        </View>
      </View>
    );
  }
}
  
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    margin: 0,
  },
});