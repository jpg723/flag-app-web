import styled from 'styled-components';

import logo from '../contents/grid/Logo_플래그_Small_수정.svg';
import nameInput from '../contents/Box_프로필생성_Nickname.svg';
import nextButton from '../contents/Btn_다음.svg';

const Logo = styled.img`
  width: 253.662109375px;
  height: 93px;
  margin: 164px auto 0px;
  display: block;
`;

const Frame = styled.div`
  width: 450px;
  height: 125px;
  margin: 88px 495px 0px;
`;

const FindEmailTitle = styled.h2`
  width: 97px;
  height: 29px;
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  margin: 0px 0px;
`;

const NameInput = styled.input`
  width: 450px;
  margin: 7px auto 10px;
  justify-content: center;
  font-size: 18px;
  font-weight: 400;
  background-color: transparent;
  background-image: url(${nameInput});
  background-repeat: no-repeat;
  background-position: center center;
  border: 0;
  outline: none;
  display: block;
  padding-left: 20px;
`;

const HintMessage = styled.span`
  width: 78px;
  height: 19px;
  margin: 20px auto 20px 0px;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  text-align: left;
  color: rgba(153, 153, 153, 0.6);
`;

const NextButton = styled.button`
  width: 355px;
  height: 41px;
  border: none;
  flex-shrink: 0;
  background-image: url(${nextButton});
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: contain;
  margin: 20px auto;
  display: block;
`;

function FindEmail1() {
  return (
    <>
      <Logo src={logo} alt="로고" />
      <Frame>
        <FindEmailTitle>이메일 찾기</FindEmailTitle>
        <NameInput type="text" placeholder="닉네임 입력" />
        <HintMessage>힌트 메세지</HintMessage>
      </Frame>
      <NextButton />
    </>
  );
}

export default FindEmail1;
