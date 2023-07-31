import styled from 'styled-components';

import logo from '../contents/grid/Logo_플래그_Small_수정.svg';
import loginButton from '../contents/Btn_Login.svg';

const Logo = styled.img`
  width: 253.662109375px;
  height: 93px;
  margin: 164px auto 0px;
  display: block;
`;

const EmailMessage = styled.p`
  width: 192px;
  font-size: 28px;
  font-weight: 600;
  line-height: normal;
  margin: 106px auto 0px;
`;

const EmailAddress = styled.p`
  width: 320px;
  font-size: 30px;
  line-height: normal;
  font-weight: 300;
  margin: 24px auto 0px;
`;

const LoginButton = styled.button`
  width: 345px;
  height: 41px;
  background-image: url(${loginButton});
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: contain;
  border: 0;
  display: block;
  margin: 34px auto;
`;

function FindEmail2() {
  return (
    <>
      <Logo src={logo} alt="로고" />
      <EmailMessage>000 님의 이메일</EmailMessage>
      <EmailAddress>khr180253@gmail.com</EmailAddress>
      <LoginButton />
    </>
  );
}

export default FindEmail2;
