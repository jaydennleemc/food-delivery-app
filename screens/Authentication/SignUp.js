import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import AutoLayout from './AuthLayout';
import {COLORS, FONTS, icons, SIZES} from '../../constants';
import {utils} from '../../utils';
import {FormInput, TextButton} from '../../components';

const SignUp = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [showPass, setShowPass] = React.useState(false);

  const [emailError, setEmailError] = React.useState('');
  const [usernameError, setUsernameError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');

  function isEnableSignUp() {
    return (
      email != '' &&
      username != '' &&
      password != '' &&
      confirmPassword != '' &&
      emailError == '' &&
      usernameError == '' &&
      passwordError == ''
    );
  }

  return (
    <AutoLayout
      title={'Getting Started'}
      subtitle={'Create an account to continue !'}
      titleContainerStyle={{
        marginTop: SIZES.radius,
      }}>
      <View style={{flex: 1, marginTop: SIZES.padding}}>
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
          label={'Username'}
          placeholder={'Username'}
          onChange={value => {
            setUsername(value);
          }}
          error={usernameError}
          appendComponent={
            <View style={{justifyContent: 'center'}}>
              <Image
                source={icons.correct}
                style={{
                  height: 20,
                  width: 20,
                  tintColor:
                    username == '' ? COLORS.gray : username != '' && usernameError == '' ? COLORS.green : COLORS.red,
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

        <FormInput
          label={'Confirm Password'}
          placeholder={'Password'}
          secureTextEntry={!showPass}
          containerStyle={{
            marginTop: SIZES.radius,
          }}
          onChange={value => {
            setConfirmPassword(value);
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

        <TextButton
          label={'Sign Up'}
          buttonContainerStyle={{
            height: 55,
            alignItems: 'center',
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: isEnableSignUp() ? COLORS.primary : COLORS.transparentPrimary,
          }}
          disabled={!isEnableSignUp()}
          onPress={() => {}}
        />
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
            justifyContent: 'center',
          }}>
          <Text style={{color: COLORS.darkGray, ...FONTS.body3}}>Already have an account ?</Text>
          <TextButton
            label={'Sign In'}
            buttonContainerStyle={{
              backgroundColor: null,
            }}
            labelStyle={{color: COLORS.primary, ...FONTS.h3}}
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
    </AutoLayout>
  );
};

export default SignUp;
