import {View, Text} from 'react-native';
import React from 'react';
import Animated from 'react-native-reanimated';

const MainLayout = ({animatedStyle}) => {
  return (
    <Animated.View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        ...animatedStyle,
      }}>
      <Text>MainLasssyout</Text>
    </Animated.View>
  );
};

export default MainLayout;
