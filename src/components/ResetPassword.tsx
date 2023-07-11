import React from 'react';
import styled from 'styled-components';

import logo from '../contents/grid/Logo_플래그_Small_수정.svg';
import newPasswordInputBg from '../contents/Box_비밀번호재설정_Newpassoword_Unentered.svg';
import resetButtonImage from '../contents/Btn_비밀번호재설정_passwordrenew.svg'; // 비밀번호 재설정 버튼

const ResetPasswordWrapper = styled.div`
  position: relative;
`;

const Logo = styled.img`
  width: 253.662109375px;
  height: 93px;
  position: absolute;
  top: 136px;
  left: 593px;
`;

const Title = styled.h2`
  width: 134px;
  height: 29px;
  position: absolute;
  top: 311px;
  left: 444px;
  font-size: 20px;
  font-weight: 700;
  line-height: 29px;
  text-align: center;
`;

const NewPasswordInput1 = styled.input`
  width: 532px;
  height: 60px;
  position: absolute;
  top: 351px;
  left: 444px;
  border-radius: 13px;
  padding-left: 20px;
  background-color: transparent;
  background-image: url(${newPasswordInputBg});
  background-repeat: no-repeat;
  background-position: left center;
  border: 0;
`;

const HintMessage1 = styled.span`
  width: 78px;
  height: 23px;
  position: absolute;
  top: 414px;
  left: 452px;
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  text-align: center;
  color: #999999;
`;

const NewPasswordInput2 = styled.input`
  width: 532px;
  height: 60px;
  position: absolute;
  top: 461px;
  left: 444px;
  border-radius: 13px;
  padding-left: 20px;
  background-color: transparent;
  background-image: url(${newPasswordInputBg});
  background-repeat: no-repeat;
  background-position: left center;
  border: 0;
`;

const HintMessage2 = styled.span`
  width: 78px;
  height: 23px;
  position: absolute;
  top: 524px;
  left: 452px;
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  text-align: center;
  color: #999999;
`;

const ResetButton = styled.button`
  width: 552px;
  height: 63px;
  position: absolute;
  top: 583px;
  left: 444px;
  border-radius: 395.8637390136719px;
  background-image: url(${resetButtonImage});
  background-color: transparent;
  background-repeat: no-repeat;
  font-size: 24px;
  color: white;
  border: 0;
  font-weight: 700;
`;

function ResetPassword() {
  return (
    <ResetPasswordWrapper>
      <Logo src={logo} alt="로고" />
      <Title>비밀번호 재설정</Title>
      <NewPasswordInput1
        type="password"
        placeholder="새 비밀번호 입력"
      />
      <HintMessage1>힌트 메세지</HintMessage1>
      <NewPasswordInput2
        type="password"
        placeholder="새 비밀번호 확인"
      />
      <HintMessage2>힌트 메세지</HintMessage2>
      <ResetButton></ResetButton>
    </ResetPasswordWrapper>
  );
}

export default ResetPassword;
