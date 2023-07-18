import { Link } from 'react-router-dom';
//import React, { useState } from 'react';
import styled from 'styled-components';
import profile from '../contents/desktop/webSign/Ic_회원가입_Profile.svg';
import nextBtn from '../contents/desktop/webSign/Btn_다음.svg';

const SignUpCover = styled.div`
  height: 910px;
  width: 1440px;
`;
const SignUpImgText = styled.span`
  height: 75px;
  width: 315px;
  display: inline-flex;
  gap: 13px;
  color: #000;
  font-family: Inter;
  font-size: 57px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 74px 993px 109px 156px;
  white-space: nowrap;
`;
const SignUpInput = styled.input`
  border: none;
  width: 603px;
  border-bottom: 2px solid #000;
  outline: none;
  color: #000;
  font-family: Noto Sans KR;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0px 598px 0px 239px;
`;
const SignUpHintText = styled.div`
  color: #999;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 8px auto 50px 242px;
`;
const SignUpNextBtn = styled.button`
  border: none;
  width: 552px;
  height: 63px;
  flex-shrink: 0;
  background-image: url(${nextBtn});
  background-color: transparent;
  background-repeat: no-repeat;
  margin: 55px 444px auto;
`;

function SignUp1() {
  /*
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');

  const updateUserId = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => setUserId(e.target.value);

  const updateUserPw = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => setUserPw(e.target.value);
  onChange={updateUserId}
  onChange={updateUserPw}
  */

  return (
    <div>
      <SignUpCover>
        <SignUpImgText>
          <img src={profile} />
          회원가입
        </SignUpImgText>
        <SignUpInput
          type="email"
          id="userId"
          name="userId"
          placeholder="이메일"
        />
        <SignUpHintText>
          ex) abc123@email.com
        </SignUpHintText>
        <SignUpInput
          type="password"
          id="userPw"
          name="userPw"
          placeholder="비밀번호"
        />
        <SignUpHintText>힌트 메세지</SignUpHintText>
        <SignUpInput
          type="password"
          name="signUp_pw2"
          placeholder="비밀번호 재입력"
        />
        <SignUpHintText>힌트 메세지</SignUpHintText>
        <Link to="/SignUp2">
          <SignUpNextBtn />
        </Link>
      </SignUpCover>
    </div>
  );
}
export default SignUp1;
