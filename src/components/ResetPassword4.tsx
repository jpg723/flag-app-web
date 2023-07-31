import React from 'react';
import styled from 'styled-components';

import logo from '../contents/grid/Logo_플래그_Small_수정.svg';
import completeIcon from '../contents/Ic_비밀번호재설정완료_Complete.svg';
import loginButton from '../contents/Btn_Login.svg';

const Logo = styled.img`
  width: 253.662109375px;
  height: 93px;
  margin: 164px auto 0px;
  display: block;
`;

const CompleteIcon = styled.img`
  width: 108px;
  height: 108px;
  margin: 94px auto 0px;
  display: block;
`;

const CompleteMessage = styled.p`
  width: 279px;
  margin: 53px auto 0px;
  font-size: 24px;
  font-weight: 700;
  line-height: normal;
`;

const LoginButton = styled.button`
  width: 355px;
  height: 41px;
  margin: 30px auto 0px;
  background-image: url(${loginButton});
  background-color: transparent;
  background-repeat: no-repeat;
  border: 0;
  display: block;
`;

function ResetPassword4() {
  return (
    <>
      <Logo src={logo} alt="로고" />
      <CompleteIcon
        src={completeIcon}
        alt="비밀번호 재설정 완료 아이콘"
      />
      <CompleteMessage>
        비밀번호가 변경되었습니다!
      </CompleteMessage>
      <LoginButton />
    </>
  );
}

export default ResetPassword4;
