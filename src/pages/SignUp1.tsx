import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import profile from '../contents/desktop/sign/Ic_회원가입_Profile.svg';
import spread from '../contents/desktop/sign/Ic_회원가입_Spread.svg';
import nextBtn from '../contents/desktop/sign/Btn_다음.svg';
import errorImg from '../contents/desktop/sign/Ic_Error.svg';
import { SignUpIdAtom, SignUpNameAtom } from '../recoil/SignUpState';
import { SignUpPwAtom } from '../recoil/SignUpState';
import axios from 'axios';

const SignUpCover = styled.div`
  height: 910px;
  width: 1440px;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
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
  @media screen and (max-width: 500px) {
    height: 42px;
    width: 147px;
    gap: 5px;
    font-size: 27px;
    margin: 42px auto 65px 37px;
    align-items: center;
  }
`;
const SignUpCover2 = styled.div`
  width: 610px;
  margin: 0px auto 0px 245px;
  @media screen and (max-width: 500px) {
    margin: 0px auto 0px 45px;
  }
`;
const InputEmailCover = styled.span`
  display: inline;
  white-space: nowrap;
  margin: 0px;
`;
const InputLine = styled.hr`
  border: 1.5px solid #000;
  width: 603px;
  margin: 2px auto auto 0px;
  @media screen and (max-width: 500px) {
    border: 1px solid #000;
    width: 281px;
  }
`;
const InputEmail = styled.input`
  border: none;
  width: 353px;
  outline: none;
  color: #000;
  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media screen and (max-width: 500px) {
    width: 181px;
    font-size: 15px;
  }
`;
const InputEmailAdd = styled.select`
  border: none;
  outline: none;
  width: 120px;
  background: url(${spread}) no-repeat 95% 50%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  color: #505050;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  padding: auto 25px 19px 0px;
  @media screen and (max-width: 500px) {
    width: 100px;
    font-size: 15px;
  }
`;
const EmailBtn = styled.button`
  width: 100px;
  margin-left: 30px
`
const InputPw = styled.input`
  border: none;
  width: 603px;
  outline: none;
  color: #000;
  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  white-space: normal;
  margin: 0px;
  @media screen and (max-width: 500px) {
    font-size: 15px;
  }
`;
const HintImg = styled.img`
  display: none;
  width: 28px;
  height: 28px;
  vertical-align: middle;
  margin-right: 5px;
  @media screen and (max-width: 500px) {
    width: 14px;
    height: 14px;
    margin-right: 3px;
  }
`;
const HintText = styled.div`
  width: 503px;
  height: 28px;
  color: #999;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 8px auto 59px 0px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 500px) {
    width: 281px;
    font-size: 10px;
    margin: 5px auto 24px 0px;
  }
`;
const InputNameCover = styled.span`
  display: inline;
  white-space: nowrap;
  margin: 0px;
`;
const InputName = styled.input`
  border: none;
  width: 473px;
  outline: none;
  color: #000;
  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  white-space: normal;
  margin: 0px;
  @media screen and (max-width: 500px) {
    font-size: 15px;
  }
`;
const NameBtn = styled.button`
  width: 100px;
  margin-left: 30px
`

const SignUpNext = styled.img`
  width: 355px;
  height: 41px;
  margin: 12px 542.5px auto;
  @media screen and (max-width: 500px) {
    width: 285px;
    height: 38px;
    margin: 12px auto auto 37px;
  }
`;



function SignUp1() {
  const [id, setId] = useRecoilState(SignUpIdAtom);
  const [pw, setPw] = useRecoilState(SignUpPwAtom);
  const [name, setName] = useRecoilState(SignUpNameAtom);

  //유효성 검사
  const [inputId, setInputId] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [isId, setIsId] = useState(false);
  const [inputPw, setInputPw] = useState('');
  const [isPw, setIsPw] = useState(false);
  const [inputPwCheck, setInputPwCheck] = useState('');
  const [isPwCheck, setIsPwCheck] = useState(false);
  const [isName, setIsName] = useState(false);

  useEffect(() => {
    setId(inputId + inputEmail);
  }, [inputId, inputEmail]);
  useEffect(() => {
    const emailRegExp =
      /^[0-9a-zA-Z]+@[0-9a-zA-Z]+(\.[a-zA-Z]{2,3})+$/;
    const checkIdText =
      document.querySelector('#checkIdText');
    console.log('id: ' + id + '  check!!!!!!!');
    if (id !== undefined) {
      setIsId(emailRegExp.test(id));
      if (checkIdText instanceof Element) {
        console.log('id:' + id + '!== ');
        console.log('isId: ' + isId);
        if (isId) {
          checkIdText.innerHTML =
            '사용 가능한 이메일입니다.';
          console.log('isId: ' + isId);
        } else {
          checkIdText.innerHTML = 'ex) abc123@email.com';
          console.log('isId: ' + isId);
        }
      }
    }
  }, [id]);
  useEffect(() => {
    setPw(inputPw)
    const pwRegExp = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[#?!@$%^&*-]).{8,25}$/;
    if (pw !== undefined) setIsPw(pwRegExp.test(pw)); 
  }, [inputPw]);
  useEffect(() => {
    const checkPwText =
      document.querySelector('#checkPwText');
    const checkPwImg = document.querySelector(
      '#checkPwImg',
    ) as HTMLElement;
    if (checkPwText instanceof Element) {
      if (pw !== inputPwCheck) {
        if (checkPwImg !== null) {
          checkPwImg.style.display = 'inline';
        }
        checkPwText.innerHTML =
          '비밀번호가 일치하지 않습니다';
        setIsPwCheck(false);
      } else {
        if (checkPwImg !== null) {
          checkPwImg.style.display = 'none';
        }
        checkPwText.innerHTML = '비밀번호가 일치합니다';
        setIsPwCheck(true);
      }
    }
  }, [inputPwCheck]);
  useEffect(() => {
    const nameRegExp = /^[a-z0-9가-힣]{2,5}$/;
    if (name !== undefined)
      setIsName(nameRegExp.test(name));
  }, [name]);

  const nextHandler = (e: any) => {
    console.log('id:' + id + ' pw:' + pw);
    console.log('isId:' + isId + ' isPw:' + isPw);
    console.log('isPwCheck: ' + isPwCheck);
    const pwRegExp = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[#?!@$%^&*-]).{8,25}$/;
    if (pw !== undefined) setIsPw(pwRegExp.test(pw)); 

    if (!isId) {
      console.log('isId === false');
    } else if (!isPw) {
      console.log('isPw === false');
    } else if (!isPwCheck) {
      console.log('isPwCheck === false');
    }

    if (!(isId && isPw && isPwCheck)) {
      e.preventDefault();
    } else {
      console.log('SignUp1 유효성 검사 통과~!');
      //이메일 중복 검사
      /*
      axios({
        url: '/user/check/emailDuplicate',
        method: 'POST',
        data: {
          email: id,
        },
      })
        .then((response) => {
          console.log(response.data);
          //alert(''); 이메일 중복의 경우
        })
        .catch((error) => {
          console.error('AxiosError:', error);
          e.preventDefault();
        });
      console.log('백엔드 전달');
      */
    }
  };

  /* 
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
  */

  return (
    <SignUpCover>
      <SignUpImgText>
        <img src={profile} alt="img..." /> 회원가입
      </SignUpImgText>
      <SignUpCover2>
        <InputEmailCover>
          <InputEmail type="text" id="id" placeholder="이메일" autoComplete="off"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setInputId(e.target.value); }} />
          <InputEmailAdd id="email"
            onChange={( e: React.ChangeEvent<HTMLSelectElement>) => { setInputEmail(e.target.value); }} >
            <option value="">직접 입력</option>
            <option value="@gmail.com">@gmail.com</option>
            <option value="@naver.com">@naver.com</option>
            <option value="@daum.net">@daum.net</option>
          </InputEmailAdd>
          <EmailBtn>중복확인</EmailBtn>
        </InputEmailCover>
        <InputLine />
        <HintText id="checkIdText">
          {' '}ex) abc123@email.com{' '}
        </HintText>
        <InputPw type="password" id="pw" name="pw" placeholder="비밀번호"
          onChange={( e: React.ChangeEvent<HTMLInputElement> ) => { setInputPw(e.target.value); }} />
        <InputLine />
        <HintText id="pwText">
          {' '}영문/숫자/특수문자 조합, 최소 8자 이상{' '}
        </HintText>
        <InputPw type="password" id="checkPw" name="checkPw" placeholder="비밀번호 재입력"
          onChange={( e: React.ChangeEvent<HTMLInputElement> ) => { setInputPwCheck(e.target.value); }} />
        <InputLine />
        <HintText>
          <HintImg id="checkPwImg" src={errorImg} />
          <span id="checkPwText">
            비밀번호를 한 번 더 입력하세요
          </span>
        </HintText>
        <InputName type="text" id="name" placeholder="닉네임" autoComplete="off" 
          onChange={( e: React.ChangeEvent<HTMLInputElement> ) => { setName(e.target.value); }} />
        <NameBtn>중복확인</NameBtn>
        <InputLine />
        <HintText>최소 2자 최대 5자 이내</HintText>
      </SignUpCover2>
      <Link to="/SignUp3" onClick={nextHandler}>
        <SignUpNext src={nextBtn} />
      </Link>
    </SignUpCover>
  );
}
export default SignUp1;
