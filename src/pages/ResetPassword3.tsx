import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logo from '../contents/Logo_플래그_Small_수정.svg';
import completeIcon from '../contents/desktop/sign/Ic_비밀번호재설정완료_Complete.svg';
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

const CompleteIcon = styled.img`
  width: 108px;
  height: 108px;
  margin: 94px auto 0px;
  display: block;

  @media screen and (max-width: 500px) {
    width: 100px;
    height: 100px;
    margin-top: 62px;
  }
`;

const CompleteMessage = styled.p`
  width: 279px;
  margin: 53px auto 0px;
  font-size: 24px;
  font-weight: 700;
  line-height: normal;

  @media screen and (max-width: 500px) {
    font-size: 18px;
    margin-top: 30px;
  }
`;

const LoginButton = styled.img`
  width: 355px;
  height: 41px;
  margin: 30px auto 0px;
  border: 0;
  display: block;

  @media screen and (max-width: 500px) {
    width: 300px;
    margin-top: 40px;
  }
`;

function ResetPassword4() {
  return (
    <>
      <Wrapper>
        <Logo src={logo} alt="로고" />
        <CompleteIcon
          src={completeIcon}
          alt="비밀번호 재설정 완료 아이콘"
        />
        <CompleteMessage>
          비밀번호가 변경되었습니다!
        </CompleteMessage>
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

export default ResetPassword4;
