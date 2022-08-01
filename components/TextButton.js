import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../constants/theme';

const TextButton = ({label, labelStyle, buttonContainerStyle, disabled, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
        ...buttonContainerStyle,
      }}
      disabled={disabled}
      onPress={onPress}>
      <Text style={{color: COLORS.white, ...FONTS.h3, ...labelStyle}}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;
