import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
//import PasswordReset from './PasswordReset';
import axios from 'axios';

import logo from '../contents/grid/Logo_플래그_Small_수정.svg';
import emailInput from '../contents/Box_로그인_Email_Unentered.svg';
import passwordInput from '../contents/Box_로그인_Password_Unentered.svg';
import loginButton from '../contents/Btn_Login.svg'; //로그인
import signUpButton from '../contents/Btn_로그인_newaccount.svg'; //회원가입

const Logo = styled.img`
  width: 253.662109375px;
  height: 93px;
  margin: 164px auto 0px;
  display: block;
`;

const EmailInput = styled.input`
  width: 450px;
  height: 50px;
  margin: 78px auto 10px;
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
  width: 69px;
  color: #999;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  margin: 10px 868px 0px 503px;
`;

const PasswordInput = styled(EmailInput)`
  margin-top: 12px;
  background-image: url(${passwordInput});
`;

const LoginButton = styled.button`
  width: 355px;
  height: 41px;
  margin: 28px auto 0px;
  background-image: url(${loginButton});
  background-color: transparent;
  background-repeat: no-repeat;
  border: 0;
  display: block;
`;

const Frame = styled.div`
  margin: 62px auto 0px;
  width: 395px;
  height: 34px;
`;

const FindPassword = styled.span`
  height: 22px;
  color: #494949;
  text-align: center;
  font-size: 15px;
  font-weight: 400;
  margin-right: 76px;
`;

const FindEmail = styled(FindPassword)``;

const SignupButton = styled.button`
  width: 83px;
  height: 34px;
  background-image: url(${signUpButton});
  background-color: transparent;
  background-repeat: no-repeat;
  border: 0;
  padding: 10px 16px;
  color: white;
  font-size: 14px;
  font-weight: 600;
  line-height: 100%;
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
    <>
      <Logo src={logo} alt="로고" />
      <div>
        <EmailInput
          type="email"
          placeholder="이메일"
          onChange={updateUserId}
        />
        <HintMessage>힌트 메세지</HintMessage>
      </div>
      <div>
        <PasswordInput
          type="password"
          placeholder="비밀번호"
          onChange={updatePw}
        />
      </div>
      <HintMessage>힌트 메세지</HintMessage>
      <LoginButton />
      <Frame>
        <FindPassword>비밀번호 찾기</FindPassword>
        <FindEmail>이메일 찾기</FindEmail>
        <SignupButton>회원가입</SignupButton>
      </Frame>
    </>
  );
}

export default LoginForm;
