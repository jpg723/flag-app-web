import React from 'react';
import styled from 'styled-components';

import logo from '../contents/grid/Logo_플래그_Small_수정.svg';
import emailIcon from '../contents/Ic_비밀번호변경이메일_Email.svg';
import loginButton from '../contents/Btn_Login.svg';

const Logo = styled.img`
  width: 253.662109375px;
  height: 93px;
  margin: 164px auto 0px;
  display: block;
`;

const EmailIcon = styled.img`
  width: 108px;
  height: 108px;
  margin: 30px auto 0px;
  border: 0;
  display: block;
`;

const EmailSent = styled.h2`
  width: 488px;
  margin: 26px auto 0px;
  text-align: center;
  font-size: 25px;
  font-weight: 700;
  line-height: normal;
`;

const ChangeEmail = styled.p`
  width: 378px;
  color: #696767;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
  margin: 15px auto 0px;
`;

const LoginButton = styled.button`
  width: 355px;
  height: 41px;
  background-image: url(${loginButton});
  background-color: transparent;
  background-repeat: no-repeat;
  border: 0;
  margin: 30px auto 0px;
  display: block;
`;

function ResetPassword2() {
  return (
    <>
      <Logo src={logo} alt="로고" />
      <EmailIcon src={emailIcon} alt="이메일 아이콘" />
      <EmailSent>
        (아이디)로 비밀번호 변경 이메일을 보냈습니다!
      </EmailSent>
      <ChangeEmail>
        이메일 속 링크를 통해 비밀번호를 변경하세요.
      </ChangeEmail>
      <LoginButton />
    </>
  );
}

export default ResetPassword2;
