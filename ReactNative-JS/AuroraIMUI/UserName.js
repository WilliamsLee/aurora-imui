import React, {Component} from "react";
import PropTypes from 'prop-types';
import { View, ViewPropTypes, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  userName: {
    height: 20.0,
  },
  
})

export default class UserName extends Component {
  render() {
    return <Text style={[styles.userName]}>{this.props.userName}</Text>
  }
}