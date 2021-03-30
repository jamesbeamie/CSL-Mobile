import React from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';

import {icons} from '../../constants';
const SnackBar = ({
  text,
  containerStyle,
  textStyle,
  closeIconStyle,
  onPress,
  onClose,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity style={styles.content} onPress={onPress}>
        <Text style={[styles.text, textStyle]}>{text}</Text>
        <TouchableOpacity
          style={[styles.close, closeIconStyle]}
          onPress={onClose}>
          <Image
            source={icons.cross}
            resizeMode="contain"
            style={styles.icon}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    top: '5%',
    backgroundColor: '#EC3A68',
    minHeight: 100,
    height: 'auto',
    position: 'absolute',
    zIndex: 100,
    width: '90%',
    marginHorizontal: 20,
    borderRadius: 15,
    padding: 20,
  },
  content: {flexDirection: 'row', justifyContent: 'space-between'},
  text: {color: 'white', fontSize: 18, width: '80%'},
  close: {
    marginTop: 'auto',
    marginBottom: 'auto',
    width: '10%',
  },
  icon: {
    width: 25,
    height: 25,
  },
});

export default SnackBar;
