import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import emailChangeButton from '../contents/desktop/mypage/Btn_마이페이지_Modifyemail.svg';
import errorIcon from '../contents/desktop/sign/Ic_Error.svg';

const Wrapper = styled.div`
  width: 100%;
  height: 1024px;
  margin: 0 auto;

  @media screen and (max-width: 500px) {
  }
`;

const EmailChangeTitle = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: normal;
  font-family: Inter;
  margin: 95px auto 0px 216px;

  @media screen and (max-width: 500px) {
    font-size: 22px;
    margin: 57px auto 0px 75px; //margin-top
  }
`;

const InputWrapper = styled.div`
  margin: 0 auto 0px 216px;

  @media screen and (max-width: 500px) {
    width: 350px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const EmailInput = styled.input`
  width: 492px;
  font-size: 20px;
  font-weight: 500;
  font-family: Noto Sans KR;
  line-height: 35px;
  border: none;
  border-bottom: 2px solid #000;
  outline: none;
  margin-top: 88px;
  text-align: left;
  padding-left: 10px;

  @media screen and (max-width: 500px) {
    width: 350px;
    font-size: 15px;
    margin: 108px auto 0;
  }
`;

// const EmailSelect = styled.select`
//   border: 0;
//   font-size: 20px;
//   font-style: normal;
//   font-weight: 500;
//   margin: -5px;
//   border-bottom: 2px solid #000;
//   line-height: normal;
//   outline: none;
//   width: 200px;
//   height: 40px;
//   float: left;
//   position: absolute;
//   text-align: right;

//   @media (max-width: 768px) {
//     height: 7.194px;
//   }
// `;

const Message = styled.p<{
  isValid: boolean;
}>`
  color: #999999;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  font-family: Noto Sans KR;
  margin: 8px auto 0 0;
  display: flex;
  align-items: center;

  @media screen and (max-width: 500px) {
    font-size: 12px;
    margin: 5px auto 0px 0px;
  }
`;

const ErrorIcon = styled.img`
  width: 23px;
  height: 23px;
  margin-right: 8px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EmailChangeButton = styled.img`
  width: 355px;
  height: 41px;
  margin: 68px auto 0px;

  @media screen and (max-width: 768px) {
    width: 300px;
    margin-top: 41px;
  }
`;

function EmailChange1() {
  const [inputEmail, setInputEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);

  const emailValid = (inputEmail: string) => {
    const emailRegExp =
      /^[0-9a-zA-Z]+@[0-9a-zA-Z]+(\.[a-zA-Z]{2,3})+$/;
    return emailRegExp.test(inputEmail);
  };

  const handleEmailChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const newEmail = e.target.value;
    setInputEmail(newEmail);
    setIsValidEmail(emailValid(newEmail));
  };

  const handleEmailChangeButtonClick = () => {
    if (isValidEmail) {
      return <Link to="/email-change-complete" />;
    } else {
      window.alert('이메일을 제대로 입력해주세요.');
    }
  };

  return (
    <Wrapper>
      <EmailChangeTitle>이메일 변경</EmailChangeTitle>
      <InputWrapper>
        <EmailInput
          type="email"
          placeholder="이메일"
          value={inputEmail}
          onChange={handleEmailChange}
        />
        {/* <EmailSelect>
          <option value="">직접 입력</option>
          <option value="@naver.com">@naver.com</option>
          <option value="@gmail.com">@gmail.com</option>
        </EmailSelect> */}
        <Message isValid={isValidEmail}>
          {isValidEmail ? (
            '사용 가능한 이메일입니다.'
          ) : (
            <>
              <ErrorIcon
                src={errorIcon}
                alt="에러 아이콘"
              />
              올바른 형식이 아닙니다.
            </>
          )}
        </Message>
      </InputWrapper>
      <ButtonWrapper>
        <Link
          to={isValidEmail ? '/email-change-complete' : '#'}
        >
          <EmailChangeButton
            src={emailChangeButton}
            alt="이메일 변경하기 버튼"
            onClick={handleEmailChangeButtonClick}
          />
        </Link>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default EmailChange1;
