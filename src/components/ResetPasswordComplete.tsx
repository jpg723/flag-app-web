import React from 'react';
import styled from 'styled-components';

import logoImage from '../contents/grid/Logo_플래그_Small_수정.svg';
import completeIcon from '../contents/Ic_비밀번호재설정완료_Complete.svg';
import loginButtonImage from '../contents/Btn_Login.svg';

const ResetPasswordCompleteWrapper = styled.div`
  position: relative;
`;

const LogoImage = styled.img`
  width: 253.662109375px;
  height: 93px;
  position: absolute;
  top: 136px;
  left: 593px;
`;

const CompleteIcon = styled.img`
  width: 183px;
  height: 183px;
  position: absolute;
  top: 337px;
  left: 628px;
  border-radius: 7px;
`;

const CompleteMessage = styled.p`
  width: 372px;
  height: 39px;
  position: absolute;
  top: 577px;
  left: 534px;
  font-family: 'Inter';
  font-size: 32px;
  font-weight: 700;
  line-height: 39px;
  letter-spacing: 0em;
  text-align: left;
`;

const LoginButton = styled.button`
  width: 552px;
  height: 63px;
  position: absolute;
  top: 673px;
  left: 444px;
  background-image: url(${loginButtonImage});
  background-color: transparent;
  background-repeat: no-repeat;
  font-size: 24px;
  color: white;
  border: 0;
  font-weight: 700;
`;

function ResetPasswordComplete() {

  return (
    <ResetPasswordCompleteWrapper>
      <LogoImage src={logoImage} alt="로고" />
      <CompleteIcon
        src={completeIcon}
        alt="비밀번호 재설정 완료 아이콘"
      />
      <CompleteMessage>
        비밀번호가 변경되었습니다!
      </CompleteMessage>
      <LoginButton>로그인</LoginButton>
    </ResetPasswordCompleteWrapper>
  );
}

export default ResetPasswordComplete;
