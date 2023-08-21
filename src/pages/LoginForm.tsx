import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useRecoilState } from 'recoil';
import { isLoginAtom } from '../recoil/Atoms';

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
    width: 300px;
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

const ErrorMessage = styled.p`
  color: #999;
  font-size: 12px;
  margin-top: 5px;
  text-align: left;

  @media screen and (max-width: 500px) {
    margin-left: 50px;
  }
`;

const LoginButton = styled.img`
  width: 355px;
  margin: 28px 41.5px 0;

  @media screen and (max-width: 500px) {
    width: 300px;
  }
`;

const FindSignUpWrapper = styled.div`
  margin: 30px auto 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 360px) {
  }
`;

const FindPassword = styled.a`
  color: #494949;
  line-height: normal;
  font-family: Noto Sans KR;
  font-size: 15px;
  font-weight: 400;
  margin-right: 76px;
  margin-top: 62px;

  @media screen and (max-width: 500px) {
    font-size: 13px;
    margin-right: 40px;
  }
`;

const FindEmail = styled(FindPassword)``;

const SignupButton = styled.img`
  width: 83px;
  height: 34px;
  border: 0;
  margin: 0px;

  @media screen and (max-width: 500px) {
    width: 75px;
  }
`;

function LoginForm() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [userIdError, setUserIdError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [isLogin, setIsLogin] = useRecoilState(isLoginAtom);

  const emailValid = (email: string) => {
    const emailRegExp =
      /^[0-9a-zA-Z]+@[0-9a-zA-Z]+(\.[a-zA-Z]{2,3})+$/;
    return emailRegExp.test(email);
  };

  const handleUserIdChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const newUserId = e.target.value;
    setUserId(newUserId);

    if (newUserId === '') {
      setUserIdError('아이디를 입력해주세요.');
    } else if (!emailValid(newUserId)) {
      setUserIdError('올바른 이메일 형식이 아닙니다.');
    } else {
      setUserIdError('');
    }
  };

  const handlePasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (newPassword === '') {
      setPasswordError('비밀번호를 입력해주세요.');
    } else if (newPassword.length < 8) {
      setPasswordError(
        '비밀번호는 영문, 숫자 조합 최소 8자 이상이어야 합니다.',
      );
    } else {
      setPasswordError('');
    }
  };

  const handleLoginButtonClick = () => {
    if (
      !userId ||
      !password ||
      userIdError ||
      passwordError
    ) {
      window.alert('입력한 정보를 확인해주세요.');
    } else {
      const requestData = {
        userId: userId,
        password: password,
      };
      axios({
        url: '/user/login',
        method: 'POST',
        data: {
          email: requestData.userId,
          password: requestData.password,
        },
      })
        .then((response) => {
          console.log(response.data);
          console.log('로그인 성공');
          sessionStorage.setItem('token', response.data);
          setIsLogin(true);
        })
        .catch((error) => {
          console.error('AxiosError:', error);
          //error.preventDefault();
        });
      return <Link to="/promise-view" />;
    }
  };

  const handleSignUpButtonClick = () => {
    console.log();
  };

  return (
    <>
      <Wrapper>
        <Logo src={logo} alt="로고" />
        <InputWrapper>
          <EmailInput
            type="email"
            placeholder="이메일"
            value={userId}
            onChange={handleUserIdChange}
          />
          {userIdError && (
            <ErrorMessage>{userIdError}</ErrorMessage>
          )}
          <PasswordInput
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordError && (
            <ErrorMessage>{passwordError}</ErrorMessage>
          )}
          <Link
            to={
              userId ||
              password ||
              !userIdError ||
              !passwordError
                ? '/promise-view'
                : '#'
            }
          >
            <LoginButton
              src={loginButton}
              alt="로그인 버튼"
              onClick={handleLoginButtonClick}
            />
          </Link>
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
          <Link to="/SignUp1">
            <SignupButton
              src={signUpButton}
              alt="회원가입 버튼"
              onClick={handleSignUpButtonClick}
            />
          </Link>
        </FindSignUpWrapper>
      </Wrapper>
    </>
  );
}

export default LoginForm;
