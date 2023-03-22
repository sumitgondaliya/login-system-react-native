import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, TouchableOpacity } from "react-native";

//formik
import { Formik } from "formik";

//icons
import { Octicons, Ionicons } from "@expo/vector-icons";

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
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent
} from "./../components/styles";

//colors
const { brand, darkLight } = Colors;

//keyboard avoiding wrapper
import KeyboardAvoidingWrapper from "./../components/KeyboardAvoidingWrapper"

//Datetime picker
import DateTimePicker from '@react-native-community/datetimepicker';

const Signup = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date(2000, 0, 1));

  //Actual date of birth to be sent
  const [dob, setDob] = useState();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    setDob(currentDate);
  }

  const showDatePicker = () => {
    setShow(true);
  }

  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <PageTitle>Flower Crib</PageTitle>
          <SubTitle>Account Signup</SubTitle>

          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode='date'
              is24Hour={true}
              onChange={onChange}
            />
          )}

          <Formik
            initialValues={{ fullName: '', email: '', dateOfBirth: '', password: '', confirmPassword: '' }}
            onSubmit={(values) => {
              console.log(values);
              navigation.navigate("Welcome");
            }}
          >{({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea>
              <MyTextInput
                label="Full Name"
                icon="person"
                placeholder="John Doe"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('fullName')}
                onBlur={handleBlur('fullName')}
                value={values.fullName}
                keyboardType="email-address"
              />
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
                label="Date of Birth"
                icon="calendar"
                placeholder="YYYY - MM - DD"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('dateOfBirth')}
                onBlur={handleBlur('dateOfBirth')}
                value={dob ? dob.toDateString() : ''}
                isDate={true}
                editable={false}
                showDatePicker={showDatePicker}
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
              <MyTextInput
                label="Confirm Password"
                icon="lock"
                placeholder="Type confirm password"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />
              <MsgBox>...</MsgBox>
              <StyledButton onPress={handleSubmit} activeOpacity={0.8}>
                <ButtonText>
                  Signup
                </ButtonText>
              </StyledButton>

              <ExtraView>
                <ExtraText>Already have an account?</ExtraText>
                <TextLink activeOpacity={0.6} onPress={() => navigation.navigate("Login")}>
                  <TextLinkContent>&nbsp;Login</TextLinkContent>
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

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, isDate, showDatePicker, ...props }) => {
  return (
    <View>
      <StyledInputLabel>{label}</StyledInputLabel>
      <LeftIcon>
        <Octicons name={icon} size={28} color={brand} />
      </LeftIcon>
      {!isDate && <StyledTextInput {...props} isPassword={isPassword} />}
      {isDate && (
        <TouchableOpacity onPress={showDatePicker} activeOpacity={0.8}>
          <StyledTextInput {...props} />
        </TouchableOpacity>
      )}
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)} activeOpacity={0.6}>
          <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={28} color={darkLight} />
        </RightIcon>
      )}
    </View>
  )
}

export default Signup;