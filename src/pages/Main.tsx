import styled from 'styled-components';
import img1 from '../contents/desktop/flag/데스크탑_Text_메인1.svg';
import img2 from '../contents/desktop/flag/데스크탑_Text_메인2.svg';
import img3 from '../contents/desktop/flag/데스크탑_Img_메인1.svg';
import img4 from '../contents/desktop/flag/데스크탑_Img_메인2.svg';
import img5 from '../contents/desktop/flag/데스크탑_Img_메인3.svg';
import img_btn from '../contents/desktop/flag/데스크탑_Btn_메인_약속만들기.svg';
import img1_mobile from '../contents/mobile/flag/모바일_Text_메인1.svg';
import img2_mobile from '../contents/mobile/flag/모바일_Text_메인2.svg';
import img3_mobile from '../contents/mobile/flag/모바일_Img_메인1.svg';
import img4_mobile from '../contents/mobile/flag/모바일_Img_메인2.svg';
import img5_mobile from '../contents/mobile/flag/모바일_Img_메인3.svg';
import img_btn_mobile from '../contents/mobile/flag/모바일_Btn_메인_약속 만들기.svg';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  useRecoilState,
  useResetRecoilState,
} from 'recoil';
import { isLoginAtom, makeFlagAtom } from '../recoil/Atoms';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img1 = styled.img`
  margin-top: 78px;
  margin-bottom: 22px;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const Img2 = styled.img`
  margin-bottom: 78px;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const Img3 = styled.img`
  margin-bottom: 34px;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const Img4 = styled.img`
  margin-bottom: 34px;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const Img5 = styled.img`
  margin-bottom: 83px;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const Img1_mobile = styled.img`
  margin-top: 43px;
  margin-bottom: 14px;
  display: none;
  @media screen and (max-width: 500px) {
    display: inline;
  }
`;

const Img2_mobile = styled.img`
  margin-bottom: 43px;
  display: none;
  @media screen and (max-width: 500px) {
    display: inline;
  }
`;

const Img3_mobile = styled.img`
  margin-bottom: 27px;
  display: none;
  @media screen and (max-width: 500px) {
    display: inline;
  }
`;
const Img4_mobile = styled.img`
  margin-bottom: 27px;
  display: none;
  @media screen and (max-width: 500px) {
    display: inline;
  }
`;
const Img5_mobile = styled.img`
  margin-bottom: 52px;
  display: none;
  @media screen and (max-width: 500px) {
    display: inline;
  }
`;

const Button = styled.button`
  width: 269px;
  height: 51px;
  border: none;
  background-color: transparent;
  background-image: url('${img_btn}');
  margin-bottom: 200px;
  @media screen and (max-width: 500px) {
    width: 271px;
    height: 39px;
    background-image: url('${img_btn_mobile}');
  }
`;

const Main = () => {
  const [isLogin, setIsLogin] = useRecoilState(isLoginAtom);
  const resetValue = useResetRecoilState(makeFlagAtom);
  const navigate = useNavigate();

  const handleButton = () => {
    if (sessionStorage.getItem('token') === null) {
      // sessionStorage 에 name 라는 key 값으로 저장된 값이 없다면
      navigate('/login');
    } else {
      // sessionStorage 에 name 라는 key 값으로 저장된 값이 있다면
      // 로그인 상태 변경
      setIsLogin(true);
      resetValue();
      navigate('/makeFlag');
    }
  };
  return (
    <Wrapper>
      <Img1 src={img1} />
      <Img2 src={img2} />
      <Img3 src={img3} />
      <Img4 src={img4} />
      <Img5 src={img5} />
      <Img1_mobile src={img1_mobile} />
      <Img2_mobile src={img2_mobile} />
      <Img3_mobile src={img3_mobile} />
      <Img4_mobile src={img4_mobile} />
      <Img5_mobile src={img5_mobile} />
      <Button onClick={handleButton} />
    </Wrapper>
  );
};

export default Main;
