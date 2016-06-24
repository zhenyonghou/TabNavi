/**
 * Created by mumuhou on 16/6/24.
 */
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class ProfilePage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          {'ProfilePage lalala'}
        </Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
  },
});