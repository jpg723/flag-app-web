import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import profilepic from '../contents/desktop/sign/Btn_프로필생성_Profilepic.svg';
import createaccount from '../contents/desktop/sign/Btn_프로필생성_Createaccount.svg';
import { SignUpProfileAtom } from '../state/SignUpState';
import { SignUpNameAtom } from '../state/SignUpState';
import { SignUpIdAtom } from '../state/SignUpState';
import { SignUpPwAtom } from '../state/SignUpState';
//padding

const SignUp2Cover = styled.div`
  height: 910px;
  width: 1440px;
  @media screen and (max-width: 500px) {
    width: 360px;
  }
`;
const SignUpInputImgIc = styled.img`
  width: 118px;
  height: 122px;
  flex-shrink: 0;
  margin: 159px 661px 0px;
  @media screen and (max-width: 500px) {
    width: 95px;
    height: 98px;
    margin: 68px 132.5px 0px;
  }
`;
const SignUpInputImg = styled.input`
  display: none;
`;
const SignUpInputName = styled.input`
  border: none;
  width: 450px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 13px;
  background: #d9d9d9;
  color: #999;
  font-family: Noto Sans KR;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 38px 494px 0px 496px;
  @media screen and (max-width: 500px) {
    width: 212px;
    height: 43px;
    font-size: 13px;
    margin: 23px auto 0px 74px;
  }
`;
const SignUpInputHint = styled.div`
  width: 450px;
  color: #999;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 20px auto 0px 500px;
  @media screen and (max-width: 500px) {
    width: 212px;
    font-size: 10px;
    margin: 4px auto 0px 79px;
  }
`;
const SignUpCreateaccount = styled.img`
  border: none;
  width: 355px;
  height: 41px;
  flex-shrink: 0;
  margin: 33px 542.5px auto;
  @media screen and (max-width: 500px) {
    width: 285px;
    height: 38px;
    margin: 25px auto 0px 37px;
  }
`;

function SignUp2() {
  const [profile, setProfile] = useRecoilState(SignUpProfileAtom);
  const [name, setName] = useRecoilState(SignUpNameAtom);
  const id = useRecoilValue(SignUpIdAtom);
  const pw = useRecoilValue(SignUpPwAtom);
  //유효성 검사
  const [isName, setIsName] = useState(false);
  useEffect(() => {
    const nameRegExp = /^[a-z0-9가-힣]{2,5}$/;
    if (name !== undefined) setIsName(nameRegExp.test(name));
  }, [name]);

  const updateName = ( e: React.ChangeEvent<HTMLInputElement> ) => {
    setName(e.target.value)
  };
  const updateProfile = ( e: React.ChangeEvent<HTMLInputElement> ) => {
    if (e.target.files) {
      const newFileURL = URL.createObjectURL(e.target.files[0]);
      setProfile(newFileURL);
    }
  };
  const signupHandler = (e: any) => {
    console.log('id:' + id + ' pw:' + pw);
    console.log('Profile:' + profile + ' Name:' + name);
    console.log(' isName:' + isName);
    if (!isName) {
      console.log('isName === false');
    } else {
      console.log('SignUp2 유효성 검사 통과~!');
    }
    if (!isName) e.preventDefault();
    else {
      //백엔드로 데이터 전달
    }
  };
    
  return (
    <form method="post" encType="multipart/form-data">
      <SignUp2Cover>
        <label htmlFor="profile">
          <SignUpInputImgIc id="profileImg" src={profile ? profile : profilepic} />
        </label>
        <SignUpInputImg type="file" id="profile" accept="image/*" onChange={updateProfile} />
        <SignUpInputName type="text" id="name" placeholder="닉네임" autoComplete="off" onChange={updateName} />
        <SignUpInputHint>최소 2자 최대 5자 이내</SignUpInputHint>
        <Link to="/SignUp3" onClick={signupHandler}>
          <SignUpCreateaccount src={createaccount} />
        </Link>
      </SignUp2Cover>
    </form>
  );
}
export default SignUp2;
