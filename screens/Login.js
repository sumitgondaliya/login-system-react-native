import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

//formik
import { Formik } from "formik";

//icons
import { Octicons, Ionicons, Fontisto } from "@expo/vector-icons";

import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
  LeftIcon,
  StyledInputLabel,
  StyledTextInput,
  RightIcon,
  StyledButton,
  ButtonText,
  Colors,
  MsgBox,
  Line,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent
} from "./../components/styles";

//colors
const { brand, darkLight, primary } = Colors;

//keyboard avoiding wrapper
import KeyboardAvoidingWrapper from "./../components/KeyboardAvoidingWrapper"

const Login = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <PageLogo resizeMode="cover" source={require('./../assets/img/img1.png')} />
          <PageTitle>Flower Crib</PageTitle>
          <SubTitle>Account Login</SubTitle>

          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values) => {
              console.log(values);
              navigation.navigate("Welcome")
            }}
          >{({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea>
              <MyTextInput
                label="Email Address"
                icon="mail"
                placeholder="joe@gmail.com"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
              />
              <MyTextInput
                label="Password"
                icon="lock"
                placeholder="Type your password"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />
              <MsgBox>...</MsgBox>
              <StyledButton onPress={handleSubmit} activeOpacity={0.8}>
                <ButtonText>
                  Login
                </ButtonText>
              </StyledButton>
              <Line />
              <StyledButton google={true} onPress={handleSubmit} activeOpacity={0.8}>
                <Fontisto name="google" color={primary} size={25} />
                <ButtonText google={true}>
                  Sign in with Google
                </ButtonText>
              </StyledButton>
              <ExtraView>
                <ExtraText>Don't have an account?</ExtraText>
                <TextLink activeOpacity={0.6} onPress={() => navigation.navigate("Signup")}>
                  <TextLinkContent>&nbsp;Signup</TextLinkContent>
                </TextLink>
              </ExtraView>
            </StyledFormArea>
          )}
          </Formik>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
}

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
  return (
    <View>
      <StyledInputLabel>{label}</StyledInputLabel>
      <LeftIcon>
        <Octicons name={icon} size={28} color={brand} />
      </LeftIcon>
      <StyledTextInput {...props} isPassword={isPassword} />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)} activeOpacity={0.6}>
          <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={28} color={darkLight} />
        </RightIcon>
      )}
    </View>
  )
}

export default Login;