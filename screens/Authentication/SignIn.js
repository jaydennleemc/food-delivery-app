import React from 'react';
import AutoLayout from './AuthLayout';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, FONTS, icons, SIZES} from '../../constants';
import {CustomSwitch, FormInput, SocialButton, TextButton} from '../../components';
import {utils} from '../../utils';

const SignIn = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [showPass, setShowPass] = React.useState(false);
  const [saveMe, setSaveMe] = React.useState(false);

  function isEnableSignIn() {
    return email != '' && password != '' && emailError == '';
  }

  return (
    <AutoLayout title={"Let's Sign You In"} subtitle={"Welcome back, you've been missed"}>
      <View style={{flex: 1, marginTop: SIZES.padding * 2}}>
        <FormInput
          label={'Email'}
          placeholder={'Email'}
          keyboardType={'email-address'}
          autoCompleteType={'email'}
          onChange={value => {
            utils.isValidEmail(value, setEmailError);
            setEmail(value);
          }}
          error={emailError}
          appendComponent={
            <View style={{justifyContent: 'center'}}>
              <Image
                source={icons.correct}
                style={{
                  height: 20,
                  width: 20,
                  tintColor: email == '' ? COLORS.gray : email != '' && emailError == '' ? COLORS.green : COLORS.red,
                }}
              />
            </View>
          }
        />

        <FormInput
          label={'Password'}
          placeholder={'Password'}
          secureTextEntry={!showPass}
          containerStyle={{
            marginTop: SIZES.radius,
          }}
          onChange={value => {
            setPassword(value);
          }}
          appendComponent={
            <TouchableOpacity
              style={{
                width: 40,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => setShowPass(!showPass)}>
              <Image
                source={showPass ? icons.eye_close : icons.eye}
                style={{height: 20, width: 20, tintColor: COLORS.gray}}
              />
            </TouchableOpacity>
          }
        />

        {/*  Save me & Forgot Password */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
            justifyContent: 'space-between',
          }}>
          <CustomSwitch value={saveMe} onChange={value => setSaveMe(value)} />
          <TextButton
            label={'Forgot Password?'}
            buttonContainerStyle={{
              backgroundColor: null,
            }}
            labelStyle={{
              color: COLORS.gray,
              ...FONTS.body4,
            }}
            onPress={() => navigation.navigate('ForgotPassword')}
          />
        </View>
        <TextButton
          label={'Sign In'}
          disabled={!isEnableSignIn()}
          buttonContainerStyle={{
            height: 55,
            alignItems: 'center',
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: isEnableSignIn() ? COLORS.primary : COLORS.transparentPrimary,
          }}
          onPress={() => navigation.navigate('Home')}
        />

        <View style={{flexDirection: 'row', marginTop: SIZES.radius, justifyContent: 'center'}}>
          <Text style={{color: COLORS.darkGray, ...FONTS.body3}}>Don't have an account ?</Text>
          <TextButton
            label={'Sign Up'}
            buttonContainerStyle={{
              marginLeft: 3,
              backgroundColor: null,
            }}
            labelStyle={{
              color: COLORS.primary,
              ...FONTS.body3,
            }}
            onPress={() => navigation.navigate('SignUp')}
          />
        </View>
      </View>
      <View>
        <SocialButton
          label={'Sign In with Facebook'}
          buttonContainerStyle={{
            height: 50,
            alignItems: 'center',
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.blue,
          }}
          icon={icons.fb}
          iconPosition={'left'}
          iconStyle={{tintColor: COLORS.white, marginRight: SIZES.radius}}
          labelStyle={{
            color: COLORS.white,
            ...FONTS.body3,
          }}
          onPress={() => console.log('Sign in with Facebook')}
        />
        <SocialButton
          label={'Sign In with Google'}
          buttonContainerStyle={{
            height: 50,
            alignItems: 'center',
            marginTop: SIZES.radius,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.darkGray,
          }}
          icon={icons.google}
          iconPosition={'left'}
          iconStyle={{tintColor: null, marginRight: SIZES.radius}}
          labelStyle={{
            color: COLORS.white,
            ...FONTS.body3,
          }}
          onPress={() => console.log('Sign in with Google')}
        />
      </View>
    </AutoLayout>
  );
};

export default SignIn;
