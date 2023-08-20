import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { emailState } from '../recoil/Atoms';

import logo from '../contents/Logo_플래그_Small_수정.svg';
import emailIcon from '../contents/desktop/sign/Ic_비밀번호변경이메일_Email.svg';
import nextButton from '../contents/desktop/sign/Btn_다음.svg'; // 다음

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
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 auto;

  @media screen and (max-width: 500px) {
  }
`;

const EmailIcon = styled.img`
  width: 108px;
  height: 108px;
  margin: 30px auto 0px;
  border: 0;

  @media screen and (max-width: 500px) {
    width: 100px;
    height: 100px;
    margin: 45px auto 0px;
  }
`;

const EmailAddress = styled.p`
  margin: 26px auto 0px;
  font-size: 25px;
  font-weight: 700;
  line-height: normal;
  font-family: Inter;
  font-style: normal;

  @media screen and (max-width: 500px) {
    width: 300px;
    font-size: 18px;
  }
`;

const EmailMessage = styled.p`
  margin-top: 6px;
  font-size: 25px;
  font-weight: 700;
  line-height: normal;
  font-family: Inter;
  font-style: normal;

  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
`;

const ChangeEmail = styled.p`
  width: 378px;
  margin: 15px auto 0px;
  color: #696767;
  font-size: 20px;
  font-weight: 400;
  line-height: normal;

  @media screen and (max-width: 500px) {
    font-size: 15px;
  }
`;

const LoginButton = styled.img`
  width: 355px;
  height: 41px;
  border: 0;
  margin: 30px auto 0;

  @media screen and (max-width: 500px) {
    width: 300px;
    margin: 38px auto 0;
  }
`;

function ResetPassword2() {
  const handleEmailSentClick = () => {
    console.log();
  };
  const email = useRecoilValue(emailState);

  return (
    <>
      <Wrapper>
        <Logo src={logo} alt="로고" />
        <EmailIcon src={emailIcon} alt="이메일 아이콘" />
        <EmailAddress>{email}</EmailAddress>
        <EmailMessage>
          으로 비밀번호 변경 이메일을 보냈습니다!
        </EmailMessage>
        <ChangeEmail>
          이메일 속 링크를 통해 비밀번호를 변경하세요.
        </ChangeEmail>
        <Link to="/new-password">
          <LoginButton
            src={nextButton}
            onClick={handleEmailSentClick}
          />
        </Link>
      </Wrapper>
    </>
  );
}

export default ResetPassword2;