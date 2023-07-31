import styled from 'styled-components';
import Header from './Header';

import errorIcon from '../contents/Ic_Error.svg';
import passwordChangeButton from '../contents/Btn_마이페이지_Modifypassword.svg';

const PasswordChangeTitle = styled.h2`
  width: 174px;
  font-size: 30px;
  font-weight: 600;
  line-height: normal;
  margin: 95px 1050px 0px 216px;
`;

const NewPasswordInput = styled.input`
  border: none;
  width: 492px;
  font-size: 20px;
  line-height: 35px;
  font-weight: 500;
  border-bottom: 2px solid #000;
  color: #000;
  outline: none;
  margin: 88px 732px 0px 216px;
`;

const ErrorIcon = styled.img`
  width: 26px;
  margin: 6px 1198px 0px 216px;
  float: left;
  margin-right: 6px;
`;

const HintMessage = styled.p`
  width: 78px;
  height: 23px;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  color: #999;
  float: left;
  margin: 11px 1114px 0px 0px;
`;

const NewPasswordInput1 = styled(NewPasswordInput)`
  margin-top: 61.5px;
`;

const ErrorIcon1 = styled(ErrorIcon)`
  width: 26px;
  height: 26px;
  top: 487px;
  legt: 216px;
`;

const HintMessage1 = styled(HintMessage)`
  width: 78px;
  height: 23px;
  top: 488.5px;
  left: 248px;
`;

const PasswordChangeButton = styled.button`
  width: 355px;
  height: 41px;
  background-color: transparent;
  background-image: url(${passwordChangeButton});
  background-repeat: no-repeat;
  background-position: left center;
  background-size: contain;
  border: 0;
  display: block;
  margin: 68px auto 0px;
`;

function PasswordChange() {
  return (
    <>
      <Header />
      <PasswordChangeTitle>
        비밀번호 변경
      </PasswordChangeTitle>
      <div>
        <NewPasswordInput
          type="password"
          placeholder="새 비밀번호"
        />
        <ErrorIcon src={errorIcon} alt="에러 아이콘" />
        <HintMessage>힌트 메세지</HintMessage>
      </div>
      <div>
        <NewPasswordInput1
          type="password"
          placeholder="새 비밀번호 재입력"
        />
        <ErrorIcon1 src={errorIcon} alt="에러 아이콘" />
        <HintMessage1>힌트 메세지</HintMessage1>
      </div>
      <PasswordChangeButton />
    </>
  );
}

export default PasswordChange;
