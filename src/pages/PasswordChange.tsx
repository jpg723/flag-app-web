import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { confirmPasswordValidState } from '../recoil/Atoms';
import axios from 'axios';

import errorIcon from '../contents/desktop/sign/Ic_Error.svg';
import passwordChangeButton from '../contents/desktop/mypage/Btn_마이페이지_Modifypassword.svg';

const Wrapper = styled.div`
  width: 100%;
  height: 1024px;
  margin: 0 auto;

  @media screen and (max-width: 500px) {
  }
`;

const TitleWrapper = styled.div`
  width: 492px;
  text-align: left;
  margin: 95px auto 0 216px;

  @media screen and (max-width: 500px) {
    width: 300px;
    margin: 57px auto 0;
  }
`;

const PasswordChangeTitle = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: normal;
  font-family: Inter;

  @media screen and (max-width: 500px) {
    font-size: 22px;
  }
`;

const InputWrapper = styled.div`
  margin: 0 auto 0 216px;

  @media screen and (max-width: 500px) {
    width: 350px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const NewPasswordInput = styled.input`
  border: none;
  width: 492px;
  font-size: 20px;
  line-height: 35px;
  font-weight: 500;
  font-family: Noto Sans KR;
  border-bottom: 2px solid #000;
  outline: none;
  margin-top: 88px;

  @media screen and (max-width: 500px) {
    width: 300px;
    font-size: 15px;
    margin: 50px auto 0;
  }
`;

const ErrorIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 6px;

  @media screen and (max-width: 500px) {
    width: 20px;
    height: 20px;
  }
`;

const MessageWrapper = styled.div`
  width: 492px;

  @media screen and (max-width: 500px) {
    width: 300px;
  }
`;

const Message = styled.div`
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
  }
`;

const ConfirmPasswordInput = styled(NewPasswordInput)`
  margin: 60px auto 0;

  @media screen and (max-width: 500px) {
    margin-top: 24px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PasswordChangeButton = styled.img`
  width: 355px;
  height: 41px;
  margin: 68px auto 0px;

  @media screen and (max-width: 500px) {
    width: 300px;
    margin-top: 28px;
  }
`;

function PasswordChange() {
  const [newPassword, setNewPassword] = useState('');
  //const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] =
    useRecoilState(confirmPasswordValidState);
  const token = sessionStorage.getItem('token');

  const handleNewPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const newPasswordValue = e.target.value;
    setNewPassword(newPasswordValue);

    const newPasswordRegExp =
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*?[#?!@$%^&*-]).{8,25}$/;
    setPasswordValid(
      newPasswordRegExp.test(newPasswordValue),
    );
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const confirmPasswordValue = e.target.value;

    setConfirmPasswordValid(
      confirmPasswordValue === newPassword,
    );
  };

  const handlePasswordChangeButtonClick = () => {
    if (passwordValid && confirmPasswordValid) {
      const requestData = {
        newPassword: newPassword,
      };
      axios({
        url: '/user/password/change',
        method: 'PATCH',
        headers: {
          Authorization: token,
        },
        data: {
          newPassword: requestData.newPassword,
        },
      })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error('AxiosError:', error);
          console.log('비밀번호 변경 실패');
        });
      return <Link to="/password-change-complete" />;
    } else {
      window.alert('비밀번호 재설정을 완료해주세요.');
    }
  };

  return (
    <>
      <Wrapper>
        <TitleWrapper>
          <PasswordChangeTitle>
            비밀번호 변경
          </PasswordChangeTitle>
        </TitleWrapper>
        <InputWrapper>
          <NewPasswordInput
            type="password"
            placeholder="새 비밀번호"
            onChange={handleNewPasswordChange}
          />
          <MessageWrapper>
            {!passwordValid && (
              <Message>
                {/* <ErrorIcon
                  src={errorIcon}
                  alt="에러 아이콘"
                /> */}
                영문/숫자/특수문자 조합, 최소 8자 이상
              </Message>
            )}
            {passwordValid && (
              <Message>올바른 형식입니다.</Message>
            )}
          </MessageWrapper>
        </InputWrapper>
        <InputWrapper>
          <ConfirmPasswordInput
            type="password"
            placeholder="새 비밀번호 재입력"
            onChange={handleConfirmPasswordChange}
          />
          <MessageWrapper>
            {!confirmPasswordValid && (
              <Message>
                <ErrorIcon
                  src={errorIcon}
                  alt="에러 아이콘"
                />
                동일한 비밀번호가 아닙니다.
              </Message>
            )}
            {confirmPasswordValid && (
              <Message>비밀번호가 동일합니다.</Message>
            )}
          </MessageWrapper>
        </InputWrapper>
        <ButtonWrapper>
          <Link
            to={
              passwordValid && confirmPasswordValid
                ? '/reset-password-complete'
                : '#'
            }
          >
            <PasswordChangeButton
              src={passwordChangeButton}
              alt="비밀번호 변경 버튼"
              onClick={handlePasswordChangeButtonClick}
            />
          </Link>
        </ButtonWrapper>
      </Wrapper>
    </>
  );
}

export default PasswordChange;
