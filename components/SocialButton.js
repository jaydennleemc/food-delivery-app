import React from 'react';
import {TouchableOpacity, StyleSheet, Image, Text} from 'react-native';
import {COLORS, FONTS} from '../constants';

const SocialButton = ({buttonContainerStyle, label, labelStyle, icon, iconPosition, iconStyle, onPress}) => {
  return (
    <TouchableOpacity
      style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', ...buttonContainerStyle}}
      onPress={onPress}>
      {iconPosition === 'left' && <Image source={icon} style={{...styles.image, ...iconStyle}} />}
      <Text style={{...FONTS.body3, ...labelStyle}}>{label}</Text>
      {iconPosition === 'right' && <Image source={icon} style={{...styles.image, ...iconStyle}} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    marginLeft: 5,
    width: 20,
    height: 20,
    tintColor: COLORS.black,
  },
});

export default SocialButton;
