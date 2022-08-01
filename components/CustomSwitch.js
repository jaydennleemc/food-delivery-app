import React from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';

const CustomSwitch = ({value, onChange}) => {
  return (
    <TouchableWithoutFeedback onPress={() => onChange(!value)}>
      <View style={{flexDirection: 'row'}}>
        <View style={value ? styles.switchOnContainer : styles.switchOffContainer}>
          <View
            style={{
              ...styles.dot,
              backgroundColor: COLORS.white,
            }}></View>
        </View>

        <Text style={{color: value ? COLORS.primary : COLORS.gray, marginLeft: SIZES.base, ...FONTS.body4}}>
          Save Me
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  switchOnContainer: {
    width: 40,
    height: 20,
    paddingRight: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderRadius: 10,
    backgroundColor: COLORS.primary,
  },
  switchOffContainer: {
    width: 40,
    height: 20,
    paddingLeft: 2,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 10,
    backgroundColor: COLORS.gray,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
});

export default CustomSwitch;
