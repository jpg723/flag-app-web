import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
//import PasswordReset from './PasswordReset';
import axios from 'axios';

import logo from '../contents/grid/Logo_플래그_Small_수정.svg';
import emailInputBg from '../contents/Box_로그인_Email_Unentered.svg';
import passwordInputBg from '../contents/Box_로그인_Password_Unentered.svg';
import loginButtonImage from '../contents/Btn_Login.svg'; //로그인
import signupButtonImage from '../contents/Btn_로그인_newaccount.svg'; //회원가입

const LoginFormWrapper = styled.div`
  position: relative;
`;

const Logo = styled.img`
  width: 253.662109375px;
  height: 93px;
  position: absolute;
  top: 136px;
  left: 593px;
`;

const EmailInputWrapper = styled.div`
  position: relative;
`;

const EmailInputField = styled.input`
  width: 492px;
  height: 60px;
  position: absolute;
  top: 344px;
  left: 444px;
  padding-left: 60px;
  background-color: transparent;
  background-image: url(${emailInputBg});
  background-repeat: no-repeat;
  background-position: left center;
  border: 0;
`;

const PasswordInputWrapper = styled.div`
  position: relative;
`;

const PasswordInputField = styled.input`
  width: 492px;
  height: 60px;
  position: absolute;
  top: 433px;
  left: 444px;
  padding-left: 60px;
  background-color: transparent;
  background-image: url(${passwordInputBg});
  background-repeat: no-repeat;
  background-position: left center;
  border: 0;
`;

const HintMessage = styled.span`
  width: 78px;
  height: 19px;
  position: absolute;
  top: 500px;
  left: 455px;
  font-size: 16px;
  color: #999999;
`;

const LoginButton = styled.button`
  width: 552px;
  height: 63px;
  position: absolute;
  top: 547px;
  left: 444px;
  background-image: url(${loginButtonImage});
  background-color: transparent;
  background-repeat: no-repeat;
  font-size: 24px;
  color: white;
  border: 0;
  font-weight: 700;
`;

const Frame = styled.div`
  display: flex;
  width: fit-content(395px);
  height: fit-content(34px);
  position: absolute;
  top: 651px;
  left: 522px;
  gap: 76px;
`;

const PasswordLink = styled.a`
  width: 87px;
  height: 22px;
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
  text-align: center;
  color: #494949;
`;

const EmailLink = styled.a`
  width: 73px;
  height: 22px;
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
  text-align: center;
  color: #494949;
`;

const SignupButton = styled.button`
  width: Hug (83px);
  height: Hug (34px);
  padding: 10px 16px 10px 16px;
  background-image: url(${signupButtonImage});
  background-color: transparent;
  background-repeat: no-repeat;
  border: 0;
  color: white;
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  letter-spacing: -0.5px;
  text-align: center;
`;

function LoginForm() {
  const [userId, setUserId] = useState('');
  const [pw, setPw] = useState('');
  const [checkUserId, setCheckUserId] = useState(' ');
  const [checkPw, setCheckPw] = useState(' ');

  const updateUserId = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (e.target.value === '')
      setCheckUserId('아이디를 입력해주세요');
    else {
      setCheckUserId('');
      setUserId(e.target.value);
    }
  };
  const updatePw = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (e.target.value === '')
      setCheckPw('비밀번호를 입력해주세요');
    else {
      setCheckPw('');
      setPw(e.target.value);
    }
  };
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/member/login')
      .then((response) => response.text())
      .then((message) => {
        setMessage(message);
      });
  }, []);

  /*로그인 버튼 클릭시*/
  function loginBtn_click() {
    /*백엔드로 값 전달*/
    if (checkUserId === '' && checkPw === '') {
      axios({
        url: '/member/login.do',
        method: 'post',
        data: {
          data1: userId,
          data2: pw,
        },
        baseURL: 'http://localhost:8080',
        //baseURL: 'http://localhost:8080',
        //withCredentials: true,
      }).then(function (response) {
        console.log(response.data);
        console.log(response.data.user_id);
        if (response.data.user_id === undefined) {
          alert(
            '입력하신 아이디 또는 비밀번호가 일치하지 않습니다',
          );
        } else if (response.data.password === undefined) {
          alert(
            '입력하신 아이디 또는 비밀번호가 일치하지 않습니다',
          );
        } else {
          alert(response.data.user_name + '님 환영합니다!');

          sessionStorage.setItem(
            'id',
            response.data.user_id,
          ); // sessionStorage에 id라는 key 값으로 저장
          sessionStorage.setItem(
            'name',
            response.data.user_name,
          );
          document.location.href = '/';
        }
      });
    } else {
      alert('로그인 입력폼을 확인해주세요');
    }
  }
  return (
    <LoginFormWrapper>
      <Logo src={logo} alt="로고" />
      <EmailInputWrapper>
        <EmailInputField
          type="email"
          placeholder="이메일"
          onChange={updateUserId}
        />
      </EmailInputWrapper>
      <PasswordInputWrapper>
        <PasswordInputField
          type="password"
          placeholder="비밀번호"
          onChange={updatePw}
        />
      </PasswordInputWrapper>
      <HintMessage>힌트메세지</HintMessage>
      <LoginButton>로그인</LoginButton>
      <Frame>
        <PasswordLink>비밀번호 찾기</PasswordLink>
        <EmailLink>이메일 찾기</EmailLink>
        <SignupButton>회원가입</SignupButton>
      </Frame>
    </LoginFormWrapper>
  );
}

export default LoginForm;
