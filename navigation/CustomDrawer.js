import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {createDrawerNavigator, DrawerContentScrollView} from '@react-navigation/drawer';
import MainLayout from '../screens/MainLayout';
import {COLORS, FONTS, SIZES} from '../constants/theme';
import icons from '../constants/icons';
import dummyData from '../constants/dummyData';
import constants from '../constants/constants';
import Animated from 'react-native-reanimated';

const Drawer = createDrawerNavigator();

const CustomDrawerItem = ({label, icon}) => {
  return (
    <TouchableOpacity style={{flexDirection: 'row', height: 40, marginBottom: SIZES.base, alignItems: 'center', paddingLeft: SIZES.radius, borderRadius: SIZES.base}}>
      <Image source={icon} style={{height: 20, width: 20, tintColor: COLORS.white}} />
      <Text style={{color: COLORS.white, ...FONTS.h3, marginLeft: 15}}>{label}</Text>
    </TouchableOpacity>
  );
};

const CustomDrawerContent = ({navigation}) => {
  return (
    <DrawerContentScrollView scrollEnabled={true} contentContainerStyle={{flex: 1, backgroundColor: COLORS.primary}}>
      <View style={{flex: 1}}>
        <View style={{marginLeft: SIZES.radius}}>
          {/* Close icon */}
          <TouchableOpacity style={{}} onPress={() => navigation.closeDrawer()}>
            <Image
              source={icons.cross}
              style={{
                height: 35,
                width: 35,
                tintColor: COLORS.white,
              }}
            />
          </TouchableOpacity>

          {/* Profile */}
          <TouchableOpacity style={{flexDirection: 'row', marginTop: SIZES.radius, alignItems: 'center'}} onPress={() => console.log('profile onpress')}>
            <Image source={dummyData.myProfile?.profile_image} style={{height: 50, width: 50, borderRadius: SIZES.radius}} />
            <View style={{marginLeft: SIZES.radius}}>
              <Text style={{color: COLORS.white, ...FONTS.h3}}>{dummyData.myProfile?.name}</Text>
              <Text style={{color: COLORS.white, ...FONTS.body4}}>View your profile</Text>
            </View>
          </TouchableOpacity>

          {/* Drawer Itmes */}
          <CustomDrawerItem label={constants.screens.home} icon={icons.home} />
          <CustomDrawerItem label={constants.screens.wallet} icon={icons.wallet} />
          <CustomDrawerItem label={constants.screens.notification} icon={icons.notification} />
          <CustomDrawerItem label={constants.screens.favourite} icon={icons.favourite} />

          {/* Line Divider */}
          <View
            style={{
              height: 1,
              width: '65%',
              marginVertical: SIZES.radius,
              marginLeft: SIZES.radius,
              backgroundColor: COLORS.lightGray1,
            }}
          />

          <CustomDrawerItem label={'Track Your Order'} icon={icons.location} />
          <CustomDrawerItem label={'Coupons'} icon={icons.coupon} />
          <CustomDrawerItem label={'Settings'} icon={icons.setting} />
          <CustomDrawerItem label={'Invite a Friend'} icon={icons.profile} />
          <CustomDrawerItem label={'Help Center'} icon={icons.help} />

          <View style={{marginTop: SIZES.padding}}>
            <CustomDrawerItem label={'Logout'} icon={icons.logout} />
          </View>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const CustomDrawer = () => {
  const [progress, setProgress] = React.useState(new Animated.Value(0));
  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });

  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [, 26],
  });

  const animatedStyle = {borderRadius, transform: [{scale}]};

  return (
    <View style={{flex: 1, backgroundColor: COLORS.primary}}>
      <Drawer.Navigator
        screenOptions={{headerShown: false}}
        overlayColor="transparent"
        drawerContent={props => {
          setTimeout(() => {
            setProgress, props.progress;
          }, 0);
          return <CustomDrawerContent navigation={props.navigation} />;
        }}>
        <Drawer.Screen name="MainLayout">{props => <MainLayout {...props} animatedStyle={animatedStyle} />}</Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

export default CustomDrawer;
