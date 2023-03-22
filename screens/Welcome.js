import React from "react";
import { StatusBar } from "expo-status-bar";

import {
  InnerContainer,
  PageTitle,
  SubTitle,
  StyledFormArea,
  StyledButton,
  ButtonText,
  Line,
  WelcomeContainer,
  WelcomeImage,
  Avatar
} from "./../components/styles";


const Welcome = ({ navigation }) => {

  return (
    <>
      <StatusBar style="dark" />
      <InnerContainer>
        <WelcomeImage resizeMode="cover" source={require('./../assets/img/img2.jpg')} />
        <WelcomeContainer>
          <PageTitle welcome={true}>Welcome! Buddy</PageTitle>
          <SubTitle welcome={true}>John Doe</SubTitle>
          <SubTitle welcome={true}>john@gmail.com</SubTitle>

          <StyledFormArea>
            <Avatar resizeMode="cover" source={require('./../assets/img/img1.png')} />
            <Line />
            <StyledButton onPress={() => navigation.navigate("Login")} activeOpacity={0.8}>
              <ButtonText>Logout</ButtonText>
            </StyledButton>
          </StyledFormArea>
        </WelcomeContainer>
      </InnerContainer>
    </>
  );
}

export default Welcome;