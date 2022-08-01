import React from 'react';
import {Image, Text, View} from 'react-native';
import {COLORS, FONTS, images, SIZES} from '../../constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const AutoLayout = ({title, subtitle, titleContainerStyle, children}) => {
  return (
    <View
      style={{
        flex: 1,
        paddingVertical: SIZES.padding,
        backgroundColor: COLORS.white,
      }}>
      <KeyboardAwareScrollView
        bounces={false}
        contentContainerStyle={{
          flex: 1,
          paddingHorizontal: SIZES.padding,
        }}>
        <View style={{alignItems: 'center'}}>
          <Image source={images.logo_02} resizeMode={'contain'} style={{height: 100, width: 200}} />
        </View>
        <View
          style={{
            marginTop: SIZES.padding,
            ...titleContainerStyle,
          }}>
          <Text style={{textAlign: 'center', ...FONTS.h2}}>{title}</Text>
          <Text style={{textAlign: 'center', color: COLORS.darkGray, marginTop: SIZES.base, ...FONTS.body3}}>
            {subtitle}
          </Text>
        </View>
        {children}
      </KeyboardAwareScrollView>
    </View>
  );
};

export default AutoLayout;
