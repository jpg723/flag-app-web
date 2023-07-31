import React from 'react';
import styled from 'styled-components';

import logo from '../contents/grid/Logo_플래그_Small_수정.svg';
import newPasswordInput from '../contents/Box_비밀번호재설정_Newpassoword_Unentered.svg';
import resetButton from '../contents/Btn_비밀번호재설정_passwordrenew.svg'; // 비밀번호 재설정 버튼

const Logo = styled.img`
  width: 253.662109375px;
  height: 93px;
  margin: 164px auto 0px;
  display: block;
`;

const ResetPasswordTitle = styled.h2`
  width: 134px;
  margin: 52px auto 0px 500px;
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
`;

const NewPasswordInput = styled.input`
  width: 450px;
  height: 50px;
  margin: 10px 495px 0px;
  background-color: transparent;
  background-image: url(${newPasswordInput});
  background-repeat: no-repeat;
  background-size: contain;
  border: 0;
  padding-left: 20px;
  outline: none;
  font-size: 18px;
  font-weight: 400;
  display: block;
`;

const HintMessage = styled.p`
  color: rgba(153, 153, 153, 0.6);
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  margin: 10px auto 0px 500px;
`;

const NewPasswordCheckInput = styled(NewPasswordInput)``;

const ResetButton = styled.button`
  width: 355px;
  height: 41px;
  margin: 34px 542.5px 0px;
  background-image: url(${resetButton});
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: contain;
  border: 0;
`;

function ResetPassword3() {
  return (
    <>
      <Logo src={logo} alt="로고" />
      <ResetPasswordTitle>
        비밀번호 재설정
      </ResetPasswordTitle>
      <div>
        <NewPasswordInput
          type="password"
          placeholder="새 비밀번호 입력"
        />
        <HintMessage>힌트 메세지</HintMessage>
      </div>
      <div>
        <NewPasswordCheckInput
          type="password"
          placeholder="새 비밀번호 확인"
        />
        <HintMessage>힌트 메세지</HintMessage>
      </div>
      <ResetButton />
    </>
  );
}

export default ResetPassword3;
