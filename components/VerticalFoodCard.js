import {View, Text, Image} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS, FONTS, SIZES} from '../constants/theme';
import icons from '../constants/icons';

const VerticalFoodCard = ({containerStyle, item, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        width: 200,
        height: 320,
        padding: SIZES.padding,
        alignItems: 'center',
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray2,
        ...containerStyle,
      }}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flexDirection: 'row', flex: 1}}>
          <Image source={icons.calories} style={{height: 30, width: 30}} />
          <Text style={{color: COLORS.darkGray2, ...FONTS.body5}}>{item.calories} Calories</Text>
        </View>
        <Image
          source={icons.love}
          style={{width: 20, height: 20, tintColor: item.isFavorite ? COLORS.primary : COLORS.gray}}
        />
      </View>

      <View
        style={{
          height: 150,
          width: 150,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image source={item.image} style={{height: '100%', width: '100%'}} />
      </View>

      <View
        style={{
          alignItems: 'center',
          marginTop: -20,
        }}>
        <Text style={{...FONTS.h3}}>{item.name}</Text>
        <Text style={{color: COLORS.darkGray2, textAlign: 'center', ...FONTS.body5}}>{item.description}</Text>
        <Text style={{marginTop: SIZES.radius, ...FONTS.h2}}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default VerticalFoodCard;
