import React from 'react';
//import { useRecoilState } from 'recoil';
//import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
//import axios from 'axios';

import logo from '../contents/Logo_플래그_Small_수정.svg';
import emailInput from '../contents/desktop/sign/Box_로그인_Email_Unentered.svg';
import passwordInput from '../contents/desktop/sign/Box_로그인_Password_Unentered.svg';
import loginButton from '../contents/desktop/sign/Btn_Login.svg'; //로그인
import signUpButton from '../contents/desktop/sign/Btn_로그인_newaccount.svg'; //회원가입

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
    margin-top: 260px;
  }
`;

const InputWrapper = styled.div`
  width: 450px;

  @media screen and (max-width: 500px) {
  }
`;

const EmailInput = styled.input`
  width: 450px;
  height: 50px;
  margin: 78px auto 10px;
  padding-left: 60px;
  font-size: 18px;
  line-height: normal;
  font-weight: 400;
  background-color: transparent;
  background-image: url(${emailInput});
  background-repeat: no-repeat;
  background-size: contain;
  border: 0;
  outline: none;
  display: block;

  @media screen and (max-width: 500px) {
    background-image: none;
    width: 350px;
    height: 35px;
    font-size: 14px;
    font-family: Noto Sans KR;
    line-height: normal;
    font-weight: 500;
    border-bottom: 2px solid #999;
    text-align: left;
    padding-left: 10px;
  }
`;

const PasswordInput = styled(EmailInput)`
  margin-top: 23px;
  background-image: url(${passwordInput});

  @media screen and (max-width: 500px) {
    background-image: none;
  }
`;

const LoginButton = styled.img`
  width: 355px;
  margin: 28px 41.5px 0;

  @media screen and (max-width: 500px) {
    width: 340px;
  }
`;

const FindSignUpWrapper = styled.div`
  width: 395px;
  margin: 30px auto 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 360px) {
    width: 283px;
  }
`;

const FindPassword = styled.a`
  height: 22px;
  color: #494949;
  line-height: normal;
  font-size: 15px;
  font-weight: 400;
  margin-right: 76px;
  margin-top: 62px;

  @media screen and (max-width: 360px) {
    font-size: 12px;
    margin-right: 40px;
  }
`;

const FindEmail = styled(FindPassword)``;

const SignupButton = styled.img`
  width: 83px;
  height: 34px;
  border: 0;
  margin: 0px;

  @media screen and (max-width: 360px) {
    width: 75px;
    height: 25px;
  }
`;

function LoginForm() {
  // const [userId, setUserId] = useState('');
  // const [pw, setPw] = useState('');
  // const [checkUserId, setCheckUserId] = useState(' ');
  // const [checkPw, setCheckPw] = useState(' ');

  // const updateUserId = (
  //   e: React.ChangeEvent<HTMLInputElement>,
  // ) => {
  //   if (e.target.value === '')
  //     setCheckUserId('아이디를 입력해주세요');
  //   else {
  //     setCheckUserId('');
  //     setUserId(e.target.value);
  //   }
  // };
  // const updatePw = (
  //   e: React.ChangeEvent<HTMLInputElement>,
  // ) => {
  //   if (e.target.value === '')
  //     setCheckPw('비밀번호를 입력해주세요');
  //   else {
  //     setCheckPw('');
  //     setPw(e.target.value);
  //   }
  // };
  // const [message, setMessage] = useState('');

  // useEffect(() => {
  //   fetch('/member/login')
  //     .then((response) => response.text())
  //     .then((message) => {
  //       setMessage(message);
  //     });
  // }, []);

  /*로그인 버튼 클릭시*/
  // function loginBtn_click() {
  //   /*백엔드로 값 전달*/
  //   if (checkUserId === '' && checkPw === '') {
  //     axios({
  //       url: '/member/login.do',
  //       method: 'post',
  //       data: {
  //         data1: userId,
  //         data2: pw,
  //       },
  //       baseURL: 'http://localhost:8080',
  //       //baseURL: 'http://localhost:8080',
  //       //withCredentials: true,
  //     }).then(function (response) {
  //       console.log(response.data);
  //       console.log(response.data.user_id);
  //       if (response.data.user_id === undefined) {
  //         alert(
  //           '입력하신 아이디 또는 비밀번호가 일치하지 않습니다',
  //         );
  //       } else if (response.data.password === undefined) {
  //         alert(
  //           '입력하신 아이디 또는 비밀번호가 일치하지 않습니다',
  //         );
  //       } else {
  //         alert(response.data.user_name + '님 환영합니다!');

  //         sessionStorage.setItem(
  //           'id',
  //           response.data.user_id,
  //         ); // sessionStorage에 id라는 key 값으로 저장
  //         sessionStorage.setItem(
  //           'name',
  //           response.data.user_name,
  //         );
  //         document.location.href = '/';
  //       }
  //     });
  //   } else {
  //     alert('로그인 입력폼을 확인해주세요');
  //   }
  // }

  return (
    <>
      <Wrapper>
        <Logo src={logo} alt="로고" />
        <InputWrapper>
          <EmailInput
            type="email"
            placeholder="이메일"
            //onChange={updateUserId}
          />
          <PasswordInput
            type="password"
            placeholder="비밀번호"
            //onChange={updatePw}
          />
          <LoginButton
            src={loginButton}
            alt="로그인 버튼"
          />
        </InputWrapper>
        <FindSignUpWrapper>
          <Link
            to="/reset-password"
            style={{ textDecoration: 'none' }}
          >
            <FindPassword>비밀번호 찾기</FindPassword>
          </Link>
          <Link
            to="/find-email"
            style={{ textDecoration: 'none' }}
          >
            <FindEmail>이메일 찾기</FindEmail>
          </Link>
          <Link to="/">
            <SignupButton
              src={signUpButton}
              alt="회원가입 버튼"
            />
          </Link>
        </FindSignUpWrapper>
      </Wrapper>
    </>
  );
}

export default LoginForm;
