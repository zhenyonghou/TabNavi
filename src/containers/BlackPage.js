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

export default class BlackPage extends Component {

  handleTouchedBackButton() {
    this.props.navigator.pop();
  }

  handleTouchedRightButton() {
    console.log('handleTouchedRightButton');
  }

  render() {
    var leftTitle = 'Back';
    var title = 'BlackPage';
    var rightTitle = 'Push';
    return (
      <View style={styles.container}>
        <XNGNavigationBar
          leftTitle={leftTitle}
          title={title}
          rightTitle={rightTitle}
          onTouchedLeftButton={this.handleTouchedBackButton.bind(this)}
          onTouchedRightButton={this.handleTouchedRightButton.bind(this)}/>

        <View>
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
    backgroundColor: 'black',
  },
});