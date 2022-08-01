import React from 'react';
import {Text, View} from 'react-native';
import AutoLayout from './AuthLayout';
import {COLORS, FONTS, SIZES} from '../../constants';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {TextButton} from '../../components';

const OPT = ({navigation}) => {
  const [timer, setTimer] = React.useState(60);

  React.useEffect(() => {
    let interval = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          return prevTimer;
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AutoLayout
      title={'OPT Authentication'}
      subtitle={'An authentication code has been sent to your email'}
      titleContainerStyle={{
        marginTop: SIZES.padding * 2,
      }}>
      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding * 2,
        }}>
        <OTPInputView
          pinCount={4}
          style={{width: '100%', height: 50}}
          codeInputFieldStyle={{
            width: 65,
            height: 65,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2,
            color: COLORS.black,
            ...FONTS.h3,
          }}
          onCodeFilled={code => {
            console.log(code);
          }}
        />
      </View>
      {/*Countdown timer*/}

      <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: SIZES.padding}}>
        <Text style={{color: COLORS.darkGray, ...FONTS.body3}}>Didn't receive code ?</Text>
        <TextButton
          label={`Resend (${timer})`}
          disabled={timer !== 0}
          buttonContainerStyle={{
            marginLeft: SIZES.base,
            backgroundColor: null,
          }}
          labelStyle={{color: COLORS.primary, ...FONTS.h3}}
          onPress={() => setTimer(60)}
        />
      </View>

      {/* Footer */}
      <View>
        <TextButton
          label={'Continue'}
          buttonContainerStyle={{
            height: 50,
            alignItems: 'center',
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary,
          }}
          onPress={() => console.log('Continue')}
        />

        <View style={{marginTop: SIZES.padding, alignItems: 'center'}}>
          <Text style={{color: COLORS.darkGray, ...FONTS.body3}}>By signing up,you agree to our.</Text>
          <TextButton
            label={'Terms of Service'}
            buttonContainerStyle={{
              backgroundColor: null,
            }}
            labelStyle={{color: COLORS.primary, ...FONTS.h3}}
            onPress={() => console.log('Terms of Service')}
          />
        </View>
      </View>
    </AutoLayout>
  );
};

export default OPT;
