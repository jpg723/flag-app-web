import React from 'react';
import styled from 'styled-components';
//import EmailSent from './EmailSent';

import logo from '../contents/grid/Logo_플래그_Small_수정.svg';
import emailInput from '../contents/Box_로그인_Email_Unentered.svg';
import nextButton from '../contents/Btn_Login.svg'; // 다음

const Logo = styled.img`
  width: 253.662109375px;
  height: 93px;
  margin: 164px auto 0px;
  display: block;
`;

const ResetPasswordTitle = styled.h2`
  width: 120px;
  margin: 88px 820px 0px 500px;
  font-size: 18px;
  font-weight: 700;
`;

const EmailInput = styled.input`
  width: 450px;
  height: 50px;
  margin: 10px auto 15px 500px;
  padding-left: 60px;
  font-size: 18px;
  font-weight: 400;
  background-color: transparent;
  background-image: url(${emailInput});
  background-repeat: no-repeat;
  background-size: contain;
  border: 0;
  outline: none;
  display: block;
`;

const HintMessage = styled.span`
  width: 78px;
  font-size: 16px;
  font-weight: 500;
  margin: 10px auto 0px 500px;
  color: #999999;
`;

const NextButton = styled.button`
  width: 355px;
  height: 41px;
  background-image: url(${nextButton});
  background-color: transparent;
  background-repeat: no-repeat;
  border: 0;
  margin: 30px auto 0px;
  display: block;
`;

const Frame = styled.div`
  display: flex;
  margin: 62px 572px 0px;
`;

const EmailReminder = styled.p`
  width: 195px;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  color: #494949;
  margin: 0px 14px 0px 0px;
  float: left;
`;

const FindEmail = styled.p`
  width: 87px;
  margin: 0px;
  float: left;
  color: #8e6fff;
  font-size: 18px;
  font-weight: 500;
`;

function ResetPassword1() {
  return (
    <>
      <Logo src={logo} alt="로고" />
      <div>
        <ResetPasswordTitle>
          비밀번호 재설정
        </ResetPasswordTitle>
        <EmailInput type="email" placeholder="이메일" />
        <HintMessage>힌트 메세지</HintMessage>
      </div>
      <NextButton />
      <Frame>
        <EmailReminder>
          이메일이 기억이 나지 않나요?
        </EmailReminder>
        <FindEmail>이메일 찾기</FindEmail>
      </Frame>
    </>
  );
}

export default ResetPassword1;
