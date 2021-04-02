import React, {useState} from 'react';
import {Text, TouchableOpacity, StyleSheet, Animated} from 'react-native';

const SnackBar = ({
  text,
  containerStyle,
  textStyle,
  closeIconStyle,
  onPress,
  onClose,
  bounceValue,
}) => {
  return (
    <Animated.View
      style={[styles.container, {transform: [{translateY: bounceValue}]}]}>
      <TouchableOpacity style={styles.content} onPress={onPress}>
        <Text style={[styles.text, textStyle]}>{text}</Text>
        <TouchableOpacity
          style={[styles.close, closeIconStyle]}
          onPress={onClose}>
          <Text style={styles.icon}>X</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  container: {
    top: '5%',
    backgroundColor: '#EC3A68',
    height: 'auto',
    position: 'absolute',
    zIndex: 100,
    width: '90%',
    marginHorizontal: 20,
    borderRadius: 15,
    padding: 20,
    position: 'absolute',
  },
  content: {flexDirection: 'row', justifyContent: 'space-between'},
  text: {
    color: 'white',
    fontSize: 18,
    width: '80%',
    fontFamily: 'RobotoCondensed-Light',
  },
  close: {
    marginTop: 'auto',
    marginBottom: 'auto',
    width: '10%',
  },
  icon: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SnackBar;
