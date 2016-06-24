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

export default class ProductPage extends Component {
  handleTouchedRightButton() {
    console.log('handleTouchedRightButton');
  }
  render() {
    var leftTitle = 'Back';
    var title = 'ProductPage';
    var rightTitle = 'Push';
    return (
      <View style={styles.container}>
        <XNGNavigationBar
          title={title}
          rightTitle={rightTitle}
          onTouchedRightButton={this.handleTouchedRightButton.bind(this)}/>

        <View>
          <Text>
            {'ProductPage lalala'}
          </Text>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
  },
});