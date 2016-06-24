/**
 * Created by mumuhou on 16/6/24.
 */

import React, { Component, PropTypes} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform
} from 'react-native';

export default class XNGNavigationBar extends Component {
  render() {
    const {leftTitle, title, rightTitle, renderLeftButton, renderRightButton} = this.props;

    var leftComponent = null;
    if (leftTitle) {
      leftComponent = (
        <TouchableOpacity style={styles.leftComponent} onPress={this.props.onTouchedLeftButton}>
          <Image style={styles.backArrow} source={require('../../images/back_arrow_white.png')}/>
          <Text style={[styles.leftText, styles.buttonText]}>{leftTitle}</Text>
        </TouchableOpacity>
      );
    } else if (renderLeftButton) {
      leftComponent = (
        <TouchableOpacity style={styles.leftComponent} onPress={this.props.onTouchedLeftButton}>
          {renderLeftButton}
        </TouchableOpacity>
      );
    } else {
      leftComponent = (
        <View style={styles.leftComponent}>
        </View>
      );
    }

    var rightComponent = null;
    if (rightTitle) {
      rightComponent = (
        <TouchableOpacity style={styles.rightComponent} onPress={this.props.onTouchedRightButton}>
          <Text style={[styles.rightText, styles.buttonText]}>{rightTitle}</Text>
        </TouchableOpacity>
      );
    } else if (renderRightButton) {
      rightComponent = (
        <TouchableOpacity style={styles.rightComponent} onPress={this.props.onTouchedRightButton}>
          {renderRightButton}
        </TouchableOpacity>
      );
    } else {
      rightComponent = (
        <View style={styles.rightComponent}>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        {leftComponent}
        <View style={styles.centerComponent}>
          <Text style={styles.buttonText}>{title}</Text>
        </View>
        {rightComponent}
      </View>
    );
  }
}

let BAR_HEIGHT = (Platform.OS === 'ios') ? 64 : 44

var styles = StyleSheet.create({
  container: {
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    flexDirection: 'row',
    height: (Platform.OS === 'ios') ? 64 : 44,
    shadowOffset: {
      width: 1,
      height: 0.5,
    },
    shadowColor: '#55ACEE',
    shadowOpacity: 0.8,
    backgroundColor: '#55ACEE',
  },

  leftComponent: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 100,
  },
  backArrow: {
    width: 11,
    height: 20,
    marginLeft: 11,
  },
  leftText: {
    marginLeft: 4,
  },

  centerComponent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 17,
    color: 'white',
  },

  rightComponent: {
    justifyContent: 'center',
    width: 100,
  },

  rightText: {
    textAlign: 'right',
    marginRight: 11,
  }
});

XNGNavigationBar.propTypes = {
  leftTitle: PropTypes.string,
  title: PropTypes.string,
  rightTitle: PropTypes.string,
  onTouchedLeftButton: PropTypes.func,
  onTouchedRightButton: PropTypes.func,
  renderLeftButton: PropTypes.func,
  renderRightButton: PropTypes.func,
};