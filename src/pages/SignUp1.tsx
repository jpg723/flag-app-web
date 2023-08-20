import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import profile from '../contents/desktop/sign/Ic_회원가입_Profile.svg';
import spread from '../contents/desktop/sign/Ic_회원가입_Spread.svg';
import nextBtn from '../contents/desktop/sign/Btn_다음.svg';
import errorImg from '../contents/desktop/sign/Ic_Error.svg';
import { SignUpIdAtom } from '../recoil/SignUpState';
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
const SignUpInputEmailCover = styled.span`
  display: inline;
  white-space:nowrap;
  margin: 0px
`;
const InputLine = styled.hr`
  border: 1.5px solid #000;
  width: 603px;
  margin: 0px auto auto 0px;
  @media screen and (max-width: 500px) {
    border: 1px solid #000;
    width: 281px;
  }
`;
const SignUpInputEmail = styled.input`
  border: none;
  width: 483px;
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
const SignUpInputEmailAdd = styled.select`
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
const SignUpInput = styled.input`
  border: none;
  width: 603px;
  outline: none;
  color: #000;
  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  white-space : normal;
  margin: 0px;
  @media screen and (max-width: 500px) {
    font-size: 15px;
  }
`;
const SignUpHintImg = styled.img`
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
const SignUpHintText = styled.div`
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

  //유효성 검사
  const [inputId, setInputId] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [isId, setIsId] = useState(false);
  const [inputPw, setInputPw] = useState("");
  const [isPw, setIsPw] = useState(false);
  const [inputPwCheck, setInputPwCheck] = useState("");
  const [isPwCheck, setIsPwCheck] = useState(false);

  useEffect(() => {
    setId(inputId + inputEmail);
  }, [inputId, inputEmail]);
  useEffect(() => {
    const emailRegExp = /^[0-9a-zA-Z]+@[0-9a-zA-Z]+(\.[a-zA-Z]{2,3})+$/;
    const checkIdText = document.querySelector('#checkIdText');
    console.log('id: ' + id + '  check!!!!!!!');
    if (id !== undefined) {
      setIsId(emailRegExp.test(id));
      if (checkIdText instanceof Element) {
        console.log('id:' + id + '!== ');
        console.log('isId: ' + isId);
        if (isId) {
          checkIdText.innerHTML = '사용 가능한 이메일입니다.';
          console.log('isId: ' + isId);
        }
        else {
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
    const checkPwText = document.querySelector('#checkPwText');
    const checkPwImg = document.querySelector('#checkPwImg') as HTMLElement;
    if (checkPwText instanceof Element) {
      if (pw !== inputPwCheck) {
        if (checkPwImg !== null) { checkPwImg.style.display = "inline"; }
        checkPwText.innerHTML = '비밀번호가 일치하지 않습니다';
        setIsPwCheck(false);
      } else {
        if (checkPwImg !== null) { checkPwImg.style.display = "none"; }
        checkPwText.innerHTML = '비밀번호가 일치합니다';
        setIsPwCheck(true);
      }
    }
  }, [inputPwCheck]);

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
    }
    else {
      console.log('SignUp1 유효성 검사 통과~!');
      axios(
        {
          url: '/user/check/emailDuplicate',
          method: 'POST',
          data: {
            email: id
          } , 
          //baseURL: 'http://ec2-3-36-64-117.ap-northeast-2.compute.amazonaws.com:8080',
          //withCredentials: true,
        }
      ).then(response => {
        console.log(response.data);
        //alert(''); 이메일 중복의 경우
      }).catch(error => {
        console.error('AxiosError:', error);
        e.preventDefault();
      });
      console.log("백엔드 전달");
    }
  };

  return (
    <SignUpCover>
      <SignUpImgText> <img src={profile} alt="img..." /> 회원가입</SignUpImgText>
      <SignUpCover2>
        <SignUpInputEmailCover>
          <SignUpInputEmail type="text" id="id" placeholder="이메일" autoComplete="off" 
            onChange={ (e: React.ChangeEvent<HTMLInputElement>) => { setInputId(e.target.value); } } />
          <SignUpInputEmailAdd id="email"
            onChange={ (e: React.ChangeEvent<HTMLSelectElement>) => { setInputEmail(e.target.value); } }>
            <option value="">직접 입력</option>
            <option value="@gmail.com">@gmail.com</option>
            <option value="@naver.com">@naver.com</option>
            <option value="@daum.net">@daum.net</option>
          </SignUpInputEmailAdd>
        </SignUpInputEmailCover>
        <InputLine />
        <SignUpHintText id="checkIdText"> ex) abc123@email.com </SignUpHintText>
        <SignUpInput type="password" id="pw" name="pw" placeholder="비밀번호"
          onChange={ (e: React.ChangeEvent<HTMLInputElement>) => { setInputPw(e.target.value); } } />
        <InputLine />
        <SignUpHintText id="pwText"> 영문/숫자/특수문자 조합, 최소 8자 이상 </SignUpHintText>
        <SignUpInput type="password" id="checkPw" name="checkPw" placeholder="비밀번호 재입력"
          onChange={ (e: React.ChangeEvent<HTMLInputElement>) => { setInputPwCheck(e.target.value); } } />
        <InputLine />
        <SignUpHintText>
          <SignUpHintImg id="checkPwImg" src={errorImg} />
          <span id="checkPwText">비밀번호를 한 번 더 입력하세요</span>
        </SignUpHintText>
      </SignUpCover2>
      <Link to="/SignUp2" onClick={nextHandler}>
        <SignUpNext src={nextBtn} />
      </Link>
    </SignUpCover>
  );
}
export default SignUp1;
