import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const MainBtn = ({title, style, onPress}) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      hitSlop={{top: 50, bottom: 50, left: 30, right: 30}}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#58D68D',
    height: 50,
    borderRadius: 25,
    marginBottom: 13,
    top: '90%',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 50,
    textAlign: 'center',
    fontFamily: 'RobotoCondensed-Light',
  },
});

export default MainBtn;
