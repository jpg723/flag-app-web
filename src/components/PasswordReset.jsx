import React from 'react';
import styled from 'styled-components';
//import EmailSent from './EmailSent';

import logo from '../contents/grid/Logo_플래그_Small_수정.svg';
import emailInputBg from '../contents/Box_로그인_Email_Unentered.svg';
import nextButtonImage from '../contents/Btn_Login.svg'; // 다음

const PasswordResetWrapper = styled.div`
  position: relative;
`;

const Logo = styled.img`
  width: 253.662109375px;
  height: 93px;
  position: absolute;
  top: 136px;
  left: 593px;
`;

const Reset = styled.h2`
  width: 134px;
  height: 29px;
  position: absolute;
  top: 379px;
  left: 444px;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  color: #494949;
`;

const EmailInputField = styled.input`
  width: 492px;
  height: 60px;
  position: absolute;
  top: 419px;
  left: 444px;
  padding-left: 60px;
  background-color: transparent;
  background-image: url(${emailInputBg});
  background-repeat: no-repeat;
  background-position: left center;
  border: 0;
`;

const HintMessage = styled.span`
  width: 78px;
  height: 19px;
  position: absolute;
  top: 486px;
  left: 455px;
  font-size: 16px;
  color: #999999;
`;

const NextButton = styled.button`
  width: 552px;
  height: 63px;
  position: absolute;
  top: 547px;
  left: 444px;
  background-image: url(${nextButtonImage});
  background-color: transparent;
  background-repeat: no-repeat;
  font-size: 24px;
  color: white;
  border: 0;
  font-weight: 700;
`;

const Frame = styled.div`
  width: 296px;
  height: 26px;
  position: absolute;
  top: 654px;
  left: 572px;
  display: flex;
  gap: 14px;
`;

const EmailReminder = styled.span`
  width: 195px;
  height: 23px;
  color: #494949;
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  text-align: center;
`;

const FindEmail = styled.a`
  width: 87px;
  height: 26px;
  color: #8e6fff;
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
  text-align: center;
`;

function PasswordReset() {
  return (
    <PasswordResetWrapper>
      <Logo src={logo} alt="로고" />
      <Reset>비밀번호 재설정</Reset>
      <EmailInputField type="email" placeholder="이메일" />
      <HintMessage>힌트 메세지</HintMessage>
      <NextButton>다음</NextButton>
      <Frame>
        <EmailReminder>
          이메일이 기억이 나지 않나요?
        </EmailReminder>
        <FindEmail>이메일 찾기</FindEmail>
      </Frame>
    </PasswordResetWrapper>
  );
}

export default PasswordReset;
