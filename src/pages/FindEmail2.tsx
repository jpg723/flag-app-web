import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
//import { userIdState } from '../recoil/Atoms';

import logo from '../contents/Logo_플래그_Small_수정.svg';
import loginButton from '../contents/desktop/sign/Btn_Login.svg';

const Logo = styled.img`
  width: 253.662109375px;
  height: 93px;
  margin: 164px auto 0px;
  display: block;

  @media screen and (max-width: 500px) {
    width: 200px;
    margin-top: 128px;
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
  font-weight: 700;
  font-family: Inter;
  line-height: normal;
  margin: 106px auto 0;

  @media screen and (max-width: 500px) {
    margin: 109px auto 0;
    font-size: 22px;
  }
`;

const EmailAddress = styled.p`
  font-size: 30px;
  line-height: normal;
  font-weight: 400;
  font-family: Inter;
  margin: 24px auto 0;

  @media screen and (max-width: 500px) {
    margin: 31px auto 0;
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
    width: 300px;
    margin: 30px auto 0;
  }
`;

function FindEmail2() {
  //const userId = useRecoilValue(userIdState);
  const location = useLocation();
  const { userId, email } = location.state;
  console.log(location);

  axios({
    method: 'get',
    url: '/',
    data: { email: email },
    baseURL: 'http://localhost:8080',
  })
    .then(function (response) {
      console.log(response.data);
      console.log('이메일 찾기 성공');
    })
    .catch(function (error) {
      console.error('Find email error: ', error);
      console.log('이메일 찾기 실패');
    });
  return (
    <>
      <Wrapper>
        <Logo src={logo} alt="로고" />
        <EmailMessage>{userId} 님의 이메일</EmailMessage>
        <EmailAddress>{email}</EmailAddress>
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