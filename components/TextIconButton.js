import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../constants/theme';

const TextIconButton = ({containerStyle, label, labelStyle, icon, iconStyle, onPress}) => {
  return (
    <TouchableOpacity
      style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', ...containerStyle}}
      onPress={onPress}>
      <Text style={{...FONTS.body3, ...labelStyle}}>{label}</Text>
      <Image source={icon} style={{marginLeft: 3, width: 20, height: 20, tintColor: COLORS.black, ...iconStyle}} />
    </TouchableOpacity>
  );
};

export default TextIconButton;
