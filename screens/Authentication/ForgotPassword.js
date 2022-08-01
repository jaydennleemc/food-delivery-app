import React from 'react';
import {Image, View} from 'react-native';
import AutoLayout from './AuthLayout';
import {COLORS, icons, SIZES} from '../../constants';
import {utils} from '../../utils';
import {FormInput, TextButton} from '../../components';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState('');

  function isEnableSendEmail() {
    return email != '' && emailError == '';
  }

  return (
    <AutoLayout
      title={'Password Recovery'}
      subtitle={'Please enter your email address to recover your password'}
      titleContainerStyle={{
        marginTop: SIZES.padding * 2,
      }}>
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
      </View>

      <TextButton
        label={'Send Email'}
        disabled={!isEnableSendEmail()}
        buttonContainerStyle={{
          height: 55,
          alignItems: 'center',
          marginTop: SIZES.padding,
          borderRadius: SIZES.radius,
          backgroundColor: isEnableSendEmail() ? COLORS.primary : COLORS.gray,
        }}
        onPress={() => navigation.goBack()}
      />
    </AutoLayout>
  );
};

export default ForgotPassword;
