import React from 'react';
import styled from 'styled-components';

import logo from '../contents/grid/Logo_플래그_Small_수정.svg';
import mailImage from '../contents/Ic_비밀번호변경이메일_Email.svg';
import loginButtonImage from '../contents/Btn_Login.svg'; //로그인

const EmailSentWrapper = styled.div`
  position: relative;
`;

const Logo = styled.img`
  width: 253.662109375px;
  height: 93px;
  position: absolute;
  top: 136px;
  left: 593px;
`;

const MailIcon = styled.img`
  width: 148px;
  height: 148px;
  position: absolute;
  top: 275px;
  left: 646px;
`;

const ResetMessage = styled.p`
  width: 586px;
  height: 43px;
  position: absolute;
  top: 452px;
  left: 427px;
  font-size: 30px;
  line-height: 43px;
  font-weight: 700;
  text-align: center;
`;

const EmailLinkMessage = styled.p`
  width: 529px;
  height: 41px;
  position: absolute;
  top: 504px;
  left: 455px;
  font-size: 28px;
  font-weight: 400;
  line-height: 41px;
  text-align: center;
  color: #696767;
`;

const LoginButton = styled.button`
  width: 552px;
  height: 63px;
  position: absolute;
  top: 591px;
  left: 444px;
  background-image: url(${loginButtonImage});
  background-color: transparent;
  background-repeat: no-repeat;
  font-size: 24px;
  color: white;
  border: 0;
  font-weight: 700;
`;

function EmailSent() {
  return (
    <EmailSentWrapper>
      <Logo src={logo} alt="로고" />
      <MailIcon src={mailImage} alt="메일" />
      <ResetMessage>
        (아이디)로 비밀번호 변경 이메일을 보냈습니다!
      </ResetMessage>
      <EmailLinkMessage>
        이메일 속 링크를 통해 비밀번호를 변경하세요.
      </EmailLinkMessage>
      <LoginButton>로그인</LoginButton>
    </EmailSentWrapper>
  );
}

export default EmailSent;
