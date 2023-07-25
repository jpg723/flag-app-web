import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import profile from '../contents/desktop/sign/Ic_회원가입_Profile.svg';
import nextBtn from '../contents/desktop/sign/Btn_다음.svg';
import errorImg from '../contents/desktop/sign/Ic_Error.svg';
import { SignUpIdAtom } from '../state/SignUpState';
import { SignUpPwAtom } from '../state/SignUpState';

const SignUpCover = styled.div`
  height: 910px;
  width: 1440px;
`;
const SignUpImgText = styled.span`
  height: 45px;
  width: 315px;
  display: inline-flex;
  gap: 13px;
  color: #000;
  font-family: Inter;
  font-size: 37px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 101px auto 88px 236px;
  white-space: nowrap;
`;
const SignUpInput = styled.input`
  border: none;
  width: 603px;
  border-bottom: 2px solid #000;
  outline: none;
  color: #000;
  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0px 598px 0px 244px;
`;
const SignUpHintText = styled.div`
  color: #999;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 8px auto 59px 245px;
`;
const SignUpNextBtn = styled.button`
  border: none;
  width: 355px;
  height: 41px;
  flex-shrink: 0;
  background-image: url(${nextBtn});
  background-color: transparent;
  background-repeat: no-repeat;
  margin: 12px 542.5px auto;
`;

function SignUp1() {
  const [id, setId] = useRecoilState(SignUpIdAtom);
  const [pw, setPw] = useRecoilState(SignUpPwAtom);
  const [checkPw, setCheckPw] = useState<string>();

  const updateId = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => setId(e.target.value);
  const updatePw = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => setPw(e.target.value);

  const updateCheckPw = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setCheckPw(e.target.value);
    const checkPwText =
      document.querySelector('#checkPwText');
    if (checkPwText instanceof Element) {
      if (pw !== checkPw) {
        const pwError = document.createElement('img');
        pwError.src = errorImg;
        //checkPwText.appendChild = pwError;
        checkPwText.innerHTML =
          pwError + '비밀번호가 일치하지 않습니다';
      } else {
        checkPwText.innerHTML = '비밀번호가 일치합니다';
      }
    }
  };
  const nextUserId = () =>
    console.log('id:' + id + ' pw:' + pw + ' ' + checkPw);

  return (
    <div>
      <SignUpCover>
        <SignUpImgText>
          <img src={profile} />
          회원가입
        </SignUpImgText>
        <SignUpInput
          type="email"
          id="id"
          name="id"
          placeholder="이메일"
          onChange={updateId}
        />
        <SignUpHintText>
          ex) abc123@email.com
        </SignUpHintText>
        <SignUpInput
          type="password"
          id="pw"
          name="pw"
          placeholder="비밀번호"
          onChange={updatePw}
        />
        <SignUpHintText id="pwText">
          영문/숫자 조합, 최소 8자 이상
        </SignUpHintText>
        <SignUpInput
          type="password"
          id="checkPw"
          name="checkPw"
          placeholder="비밀번호 재입력"
          onChange={updateCheckPw}
        />
        <SignUpHintText id="checkPwText">
          비밀번호를 한 번 더 입력하세요
        </SignUpHintText>
        <Link to="/SignUp2">
          <SignUpNextBtn onClick={nextUserId} />
        </Link>
      </SignUpCover>
    </div>
  );
}
export default SignUp1;
