import {View, Text, Image} from 'react-native';
import React from 'react';
import Animated, {useAnimatedStyle, useSharedValue, withTiming} from 'react-native-reanimated';
import constants from '../constants/constants';
import {connect} from 'react-redux';
import {COLORS, FONTS, SIZES} from '../constants/theme';
import LinearGradient from 'react-native-linear-gradient';

import {Header} from '../components';
import {setSelectedTab} from '../stores/tab/tabActions';
import {TouchableOpacity, TouchableWithoutFeedback} from 'react-native-gesture-handler';
import icons from '../constants/icons';
import dummyData from '../constants/dummyData';

const TabButton = ({label, icon, isFocused, outterContainerStyle, innerContainerStyle, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View style={[{flex: 1, alignItems: 'center'}, outterContainerStyle]}>
        <Animated.View
          style={[
            {
              flexDirection: 'row',
              width: isFocused ? '80%' : '15%',
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 25,
            },
            innerContainerStyle,
          ]}>
          <Image source={icon} style={{height: 20, width: 20, tintColor: isFocused ? COLORS.white : COLORS.gray}} />
          {isFocused && (
            <Text
              numberOfLines={1}
              style={{
                marginLeft: SIZES.base,
                color: isFocused ? COLORS.white : COLORS.gray,
                ...FONTS.h3,
              }}>
              {label}
            </Text>
          )}
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const MainLayout = ({animatedStyle, navigation, selectedTab, setSelectedTab}) => {
  // Reanimated Shared Value
  const homeTabFlex = useSharedValue(1);
  const homeTabColor = useSharedValue(COLORS.white);
  const searchTabFlex = useSharedValue(1);
  const searchTabColor = useSharedValue(COLORS.white);
  const cartTabFlex = useSharedValue(1);
  const cartTabColor = useSharedValue(COLORS.white);
  const favouriteTabFlex = useSharedValue(1);
  const favouriteTabColor = useSharedValue(COLORS.white);
  const notificationTabFlex = useSharedValue(1);
  const notificationTabColor = useSharedValue(COLORS.white);

  // Reanimated Animated Style

  const homeFlexStyle = useAnimatedStyle(() => {
    return {
      flex: homeTabFlex.value,
    };
  });

  const homeColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: homeTabColor.value,
    };
  });

  const searhFlexStyle = useAnimatedStyle(() => {
    return {
      flex: searchTabFlex.value,
    };
  });

  const searchColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: searchTabColor.value,
    };
  });

  const cartFlexStyle = useAnimatedStyle(() => {
    return {
      flex: cartTabFlex.value,
    };
  });

  const cartColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: cartTabColor.value,
    };
  });

  const favouriteFlexStyle = useAnimatedStyle(() => {
    return {
      flex: favouriteTabFlex.value,
    };
  });

  const favouriteColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: favouriteTabColor.value,
    };
  });

  const notificationFlexStyle = useAnimatedStyle(() => {
    return {
      flex: notificationTabFlex.value,
    };
  });

  const notificationColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: notificationTabColor.value,
    };
  });

  React.useEffect(() => {
    setSelectedTab(constants.screens.home);
  }, []);

  React.useEffect(() => {
    if (selectedTab == constants.screens.home) {
      homeTabFlex.value = withTiming(4, {duration: 0});
      homeTabColor.value = withTiming(COLORS.primary, {duration: 0});
    } else {
      homeTabFlex.value = withTiming(1, {duration: 0});
      homeTabColor.value = withTiming(COLORS.white, {duration: 0});
    }

    if (selectedTab == constants.screens.search) {
      searchTabFlex.value = withTiming(4, {duration: 0});
      searchTabColor.value = withTiming(COLORS.primary, {duration: 0});
    } else {
      searchTabFlex.value = withTiming(1, {duration: 0});
      searchTabColor.value = withTiming(COLORS.white, {duration: 0});
    }

    if (selectedTab == constants.screens.cart) {
      cartTabFlex.value = withTiming(4, {duration: 0});
      cartTabColor.value = withTiming(COLORS.primary, {duration: 0});
    } else {
      cartTabFlex.value = withTiming(1, {duration: 0});
      cartTabColor.value = withTiming(COLORS.white, {duration: 0});
    }

    if (selectedTab == constants.screens.favourite) {
      favouriteTabFlex.value = withTiming(4, {duration: 0});
      favouriteTabColor.value = withTiming(COLORS.primary, {duration: 0});
    } else {
      favouriteTabFlex.value = withTiming(1, {duration: 0});
      favouriteTabColor.value = withTiming(COLORS.white, {duration: 0});
    }

    if (selectedTab == constants.screens.notification) {
      notificationTabFlex.value = withTiming(4, {duration: 0});
      notificationTabColor.value = withTiming(COLORS.primary, {duration: 0});
    } else {
      notificationTabFlex.value = withTiming(1, {duration: 0});
      notificationTabColor.value = withTiming(COLORS.white, {duration: 0});
    }
  }, [selectedTab]);

  return (
    <Animated.View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        ...animatedStyle,
      }}>
      {/* Header */}
      <Header
        containerStyle={{
          height: 50,
          paddingHorizontal: SIZES.padding,
          marginTop: 40,
          alignItems: 'center',
        }}
        title={selectedTab.toUpperCase()}
        leftComponent={
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              borderColor: COLORS.gray2,
              borderRadius: SIZES.radius,
            }}
            onPress={() => navigation.openDrawer()}>
            <Image source={icons.menu} />
          </TouchableOpacity>
        }
        rightComponent={
          <TouchableOpacity style={{borderRadius: SIZES.radius, alignItems: 'center', justifyContent: 'center'}}>
            <Image
              source={dummyData.myProfile.profile_image}
              style={{height: 40, width: 40, borderRadius: SIZES.radius}}
            />
          </TouchableOpacity>
        }
      />

      {/* Content */}
      <View style={{flex: 1}}></View>

      {/* Footer */}
      <View style={{height: 100, justifyContent: 'flex-end'}}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: 4}}
          colors={[COLORS.transparent, COLORS.lightGray1]}
          style={{
            position: 'absolute',
            top: -20,
            left: 0,
            right: 0,
            height: 100,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
        />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            paddingHorizontal: SIZES.radius,
            paddingBottom: 10,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: COLORS.white,
            marginTop: SIZES.base,
            paddingTop: SIZES.base,
          }}>
          <TabButton
            label={constants.screens.home}
            icon={icons.home}
            isFocused={selectedTab === constants.screens.home}
            outterContainerStyle={homeFlexStyle}
            innerContainerStyle={homeColorStyle}
            onPress={() => setSelectedTab(constants.screens.home)}
          />
          <TabButton
            label={constants.screens.search}
            icon={icons.search}
            isFocused={selectedTab === constants.screens.search}
            outterContainerStyle={searhFlexStyle}
            innerContainerStyle={searchColorStyle}
            onPress={() => setSelectedTab(constants.screens.search)}
          />

          <TabButton
            label={constants.screens.cart}
            icon={icons.cart}
            isFocused={selectedTab === constants.screens.cart}
            outterContainerStyle={cartFlexStyle}
            innerContainerStyle={cartColorStyle}
            onPress={() => setSelectedTab(constants.screens.cart)}
          />
          <TabButton
            label={constants.screens.favourite}
            icon={icons.favourite}
            isFocused={selectedTab === constants.screens.favourite}
            outterContainerStyle={favouriteFlexStyle}
            innerContainerStyle={favouriteColorStyle}
            onPress={() => setSelectedTab(constants.screens.favourite)}
          />
          <TabButton
            label={constants.screens.notification}
            icon={icons.notification}
            isFocused={selectedTab === constants.screens.notification}
            outterContainerStyle={notificationFlexStyle}
            innerContainerStyle={notificationColorStyle}
            onPress={() => setSelectedTab(constants.screens.notification)}
          />
        </View>
      </View>
    </Animated.View>
  );
};

function mapStateToProps(state) {
  return {
    selectedTab: state.tabReducer.selectedTab,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSelectedTab: selectedTab => dispatch(setSelectedTab(selectedTab)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
