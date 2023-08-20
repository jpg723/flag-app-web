import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import createaccount from '../contents/desktop/sign/Btn_프로필생성_Createaccount.svg';
import { SignUpNameAtom } from '../recoil/SignUpState';
import { SignUpIdAtom } from '../recoil/SignUpState';
import { SignUpPwAtom } from '../recoil/SignUpState';
//padding
//span<{isAdd: boolean}>`
//color: ${(props) => (props.isAdd? '#f00' : '#000')};

const SignUp2Cover = styled.div`
  height: 910px;
  width: 1440px;
  @media screen and (max-width: 500px) {
    text-align: center;
    width: 100%;
  }
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
    margin: 23px auto 0px;
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
    width: 200px;
    text-align: left;
    font-size: 10px;
    margin: 4px auto;
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
    margin: 25px auto 0px;
  }
`;

function SignUp2() {
  const [name, setName] = useRecoilState(SignUpNameAtom);
  const id = useRecoilValue(SignUpIdAtom);
  const password = useRecoilValue(SignUpPwAtom);
  //유효성 검사
  const [isName, setIsName] = useState(false);


  useEffect(() => {
    const nameRegExp = /^[a-z0-9가-힣]{2,5}$/;
    if (name !== undefined)
      setIsName(nameRegExp.test(name));
  }, [name]);

  const updateName = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setName(e.target.value);
  };
  
  const signupHandler = (e: any) => {
    console.log('id:' + id + ' pw:' + password);
    console.log(' Name:' + name);
    console.log(' isName:' + isName);

    if (!isName) {
      console.log('isName === false');
    } else {
      console.log('SignUp2 유효성 검사 통과~!');
    }
    if (!isName) e.preventDefault();
    else {
      console.log('유효성 통과');
      axios({
        url: '/user/join',
        method: 'POST',
        data: {
          name: name,
          email: id,
          password: password,
        },
      }).then((response) => {
        console.log(response.data);
        //URL.revokeObjectURL(profileFile)
      })
      .catch((error) => {
        console.error('AxiosError:', error);
        e.preventDefault();
      });
      console.log('백엔드 전달');
    }
  };

  return (
    <form method="post" encType="multipart/form-data">
      <SignUp2Cover>
        <SignUpInputName
          type="text"
          id="name"
          placeholder="닉네임"
          autoComplete="off"
          onChange={updateName}
        />
        <SignUpInputHint>
          최소 2자 최대 5자 이내
        </SignUpInputHint>
        <Link to="/SignUp3" onClick={signupHandler}>
          <SignUpCreateaccount src={createaccount} />
        </Link>
      </SignUp2Cover>
    </form>
  );
}
export default SignUp2;
