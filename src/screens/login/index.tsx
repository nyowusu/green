import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, TextInput } from 'react-native';
import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import loginImage from '../../../assets/images/login-bg-1.jpeg';
import { Button } from '../../components/button';
import { Text } from '../../components/text';
import { NunitoSansExtraBold } from '../../constants/font';
import * as colors from '../../constants/colors';
import { RootAuthStackParamList } from '../../navigation/AuthStack';
import { useDispatch } from 'react-redux';
import { ILoginValues } from '../../state/user/types';
import { VALID_EMAIL } from '../../constants';
import { login } from '../../state/user/actions';
import * as screens from '../../constants/screens';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

const BackgroundImage = styled.ImageBackground`
  width: ${width}px;
  height: ${height}px;
  resize-mode: center;
`;

const BackgroundImageContainer = styled.View`
  flex: 1;
`;

const OverLay = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  opacity: 0.8;
  background-color: 'rgba(0,0,0,1)';
`;

const Container = styled.ScrollView`
  flex: 1;
`;

const GreenLogo = styled.View`
  margin-top: ${height / 6}px;
  flex-direction: row;
  justify-content: center;
`;

const GreenSlogan = styled.View`
  margin-top: ${height / 7}px;
  padding-horizontal: 32px;
`;

const InputContainer = styled.View`
  margin-top: ${height / 4.5}px;
  display: flex;
  align-items: center;
`;

const LoginInput = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 16px;
`;

const LoginButton = styled(Button)`
  padding-bottom: 10px;
`;

const LoginTextInput = styled.TextInput`
  height: 60px;
  border: 1px solid ${colors.dimmerWhite};
  padding: 10px;
  font-size: 20px;
  border-radius: 8px;
  width: ${width - 32}px;
  color: ${colors.white};
  background-color: ${colors.dimmestWhite};
  opacity: 0.5;
`;

const GetQuotes = styled.TouchableOpacity`
  width: ${width - 32}px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;

const TextContainer = styled.View`
  padding-bottom: 16px;
`;

export type LoginScreenNavigationProp =
  NativeStackNavigationProp<RootAuthStackParamList>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

export default function Login({ navigation }: Props) {
  const dispatch = useDispatch();
  const [user, setUser] = useState('');

  const handleLogin = async () => {
    const loginValues: ILoginValues = {
      user,
      type: VALID_EMAIL.test(user) ? 'email' : 'phone',
      callback: 'green://',
    };
    try {
      const response = await dispatch(login(loginValues) as any);
    } catch (error) {
      // TODO: display error message on screen
    }
  };

  const goToQuotesScreen = () => {
    navigation.navigate(screens.QuotesScreen);
  };

  const handleOnTextChange = (value: string) => setUser(value);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BackgroundImageContainer style={{ ...StyleSheet.absoluteFillObject }}>
        <BackgroundImage
          source={loginImage}
          style={{ ...StyleSheet.absoluteFillObject }}
          resizeMode="cover"
        />
      </BackgroundImageContainer>
      <OverLay />
      <Container>
        <GreenLogo>
          <Text
            type="Title"
            fontFamily={NunitoSansExtraBold}
            fontSize={60}
            lineHeight={56}
            textAlign="center">
            green.
          </Text>
          <MaterialCommunityIcons
            name="registered-trademark"
            size={12}
            color={colors.dimmerWhite}
          />
        </GreenLogo>

        <GreenSlogan>
          <Text
            type="CompanyName"
            fontSize={40}
            lineHeight={46}
            textAlign="center">
            Energy tailored just for you.
          </Text>
          <Text
            type="RegularText"
            textAlign="center"
            marginTop={16}
            opacity={0.5}>
            We are Green. The future of energy.
          </Text>
        </GreenSlogan>
        <InputContainer>
          <LoginTextInput
            autoCapitalize="none"
            placeholder="Account email/mobile number"
            placeholderTextColor={colors.dimmerWhite}
            onChangeText={handleOnTextChange}
          />
          <LoginInput>
            <LoginButton color={colors.green} onPress={handleLogin}>
              <Text
                type="RegularText"
                fontSize={16}
                lineHeight={20}
                opacity={0.8}>
                Sign In
              </Text>
            </LoginButton>
          </LoginInput>
        </InputContainer>
        <GetQuotes onPress={goToQuotesScreen}>
          <TextContainer>
            <Text
              type="RegularText"
              fontSize={16}
              lineHeight={20}
              opacity={0.8}>
              Not a member? Get A quote
            </Text>
          </TextContainer>
          <Entypo name="chevron-right" size={24} color={colors.white} />
        </GetQuotes>
      </Container>
    </SafeAreaView>
  );
}
