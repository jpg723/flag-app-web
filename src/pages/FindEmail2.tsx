import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userIdState } from '../recoil/Atoms';

import logo from '../contents/Logo_플래그_Small_수정.svg';
import loginButton from '../contents/desktop/sign/Btn_Login.svg';

const Logo = styled.img`
  width: 253.662109375px;
  height: 93px;
  margin: 164px auto 0px;
  display: block;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 1024px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 500px) {
  }
`;

const EmailMessage = styled.p`
  font-size: 28px;
  font-weight: 600;
  font-family: Inter;
  line-height: normal;
  margin: 106px auto 0px;

  @media screen and (max-width: 500px) {
    margin: 255px auto 0px;
    font-size: 22px;
  }
`;

const EmailAddress = styled.p`
  font-size: 30px;
  line-height: normal;
  font-weight: 400;
  font-family: Inter;
  margin: 24px auto 0px;

  @media screen and (max-width: 500px) {
    margin: 31px auto 0px;
    font-size: 22px;
  }
`;

const LoginButton = styled.img`
  width: 355px;
  height: 41px;
  border: 0;
  display: block;
  margin: 34px auto 0;

  @media screen and (max-width: 500px) {
    width: 350px;
    margin: 42px auto 0px;
  }
`;

function FindEmail2() {
  const userId = useRecoilValue(userIdState);

  return (
    <>
      <Wrapper>
        <Logo src={logo} alt="로고" />
        <EmailMessage>{userId} 님의 이메일</EmailMessage>
        <EmailAddress>khr180253@gmail.com</EmailAddress>
        <Link to="/login">
          <LoginButton
            src={loginButton}
            alt="로그인 버튼"
          />
        </Link>
      </Wrapper>
    </>
  );
}

export default FindEmail2;
