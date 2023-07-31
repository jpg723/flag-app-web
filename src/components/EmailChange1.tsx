// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Header from './Header';

import emailChangeButton from '../contents/Btn_마이페이지_Modifyemail.svg';
import Arrow from '../contents/Ic_회원가입_Spread.svg';

const EmailChangeTitle = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: normal;
  margin: 95px auto 0px 216px;
`;

const EmailInput = styled.input`
  width: 492px;
  font-size: 20px;
  font-weight: 500;
  line-height: 35px;
  border: none;
  border-bottom: 2px solid #000;
  outline: none;
  margin: 88px auto 0px 216px;
`;

const DropDownArrow = styled.button`
  height: 11.84px;
  background-color: transparent;
  background-image: url(${Arrow});
  background-repeat: no-repeat;
  margin-bottom: 15px;
  border: 0;
`;

const AvailableEmailMessage = styled.p`
  color: #999999;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  margin: 8px auto 0px 219px;
`;

const EmailChangeButton = styled.button`
  width: 355px;
  height: 41px;
  background-color: transparent;
  background-image: url(${emailChangeButton});
  background-repeat: no-repeat;
  background-size: contain;
  border: 0;
  margin: 68px auto 0px;
  display: block;
`;

function EmailChange1() {
  return (
    <>
      <Header></Header>
      <EmailChangeTitle>이메일 변경</EmailChangeTitle>
      <div>
        <EmailInput
          type="email"
          placeholder="기존 이메일"
        />
        <DropDownArrow />
        <AvailableEmailMessage>
          사용 가능한 이메일입니다.
        </AvailableEmailMessage>
      </div>
      <EmailChangeButton />
    </>
  );
}

export default EmailChange1;
