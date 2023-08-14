import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userIdState } from '../recoil/Atoms';

import logo from '../contents/Logo_플래그_Small_수정.svg';
import nextButton from '../contents/desktop/sign/Btn_다음.svg';

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

  @media screen and (max-width: 500px) {
  }
`;

const FindEmailTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  margin: 88px auto 0px 535px;
  font-family: Noto Sans KR;

  @media screen and (max-width: 500px) {
    margin: 191px auto 0 75px;
    font-size: 22px;
  }
`;

const NameInput = styled.input`
  width: 450px;
  height: 50px;
  margin: 10px auto 0;
  border-radius: 13px;
  background-color: #d9d9d9;
  font-size: 18px;
  font-weight: 400;
  font-family: Noto Sans KR;
  border: 0;
  outline: none;
  display: block;
  padding-left: 20px;

  @media screen and (max-width: 500px) {
    width: 350px;
    margin-top: 78px;
  }
`;

const NextButton = styled.img`
  width: 355px;
  margin: 60px auto 0;
  display: block;

  @media screen and (max-width: 500px) {
    width: 350px;
    margin-top: 35px;
  }
`;

function FindEmail1() {
  const [userId, setUserId] = useRecoilState(userIdState);

  const handleUserIdChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setUserId(e.target.value);
  };

  const handleNextButtonClick = () => {
    setUserId(userId);
  };

  return (
    <>
      <Wrapper>
        <Logo src={logo} alt="로고" />
          <FindEmailTitle>이메일 찾기</FindEmailTitle>
          <NameInput
            placeholder="닉네임"
            value={userId}
            onChange={handleUserIdChange}
          />
        <Link to="/find-email-complete">
          <NextButton
            src={nextButton}
            alt="다음 버튼"
            onClick={handleNextButtonClick}
          />
        </Link>
      </Wrapper>
    </>
  );
}

export default FindEmail1;
