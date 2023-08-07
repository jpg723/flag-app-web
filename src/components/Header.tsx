import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import logo from '../contents/Logo_플래그_Small_수정.svg';
import mobileLogo from '../contents/mobile/sign/Logo_플래그.svg';
import menuBtn from '../contents/mobile/sign/Btn_로그인_Menu.svg';
//const logo = require('../contents/grid/Logo_플래그_Small_수정.svg');
//display: none;
//border: 2px solid #000;
//@media screen and (max-width: 360px) {}

const HeaderCover = styled.div`
  height: 114px;
  width: 1440px;
  display: flex;
  white-space: nowrap;
  @media screen and (max-width: 360px) {
    width: 360px;
    height: 63px;
    margin: 41px 0px 0px;
  }
`;
const HeaderLogo = styled.span`
  width: 166px;
  height: 57px;
  flex-shrink: 0;
  background-color: transparent;
  background-repeat: no-repeat;
  background-image: url(${logo});
  margin: auto 169px 20px 197px;
  @media screen and (max-width: 360px) {
    width: 95px;
    height: 32px;
    background-image: url(${mobileLogo});
    margin: auto 23px 14px;
  }
`;
const HeaderMenu = styled.span`
  font-color: #272727;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  margin: auto 59px 26px 0px;
  @media screen and (max-width: 360px) {
    display: none;
  }
`;
const HeaderLogin = styled.span`
  font-color: #272727;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  margin: auto 207px 25px 261px;
  @media screen and (max-width: 360px) {
    display: none;
  }
`;
const HeaderMenuBtn = styled.button`
  display: none;  
  @media screen and (max-width: 360px) {
    display: inline; 
    border: none;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    background-image: url(${menuBtn});
    background-color: transparent;
    background-repeat: no-repeat;
    margin: auto 20px 15px auto; 
  }
`;
const HeaderLine = styled.hr`
  border: 0.5px solid rgba(142, 111, 255, 0.8);
  width: 1440px;
  @media screen and (max-width: 360px) {
    width: 360px;
    flex-shrink: 0;
    border: 1px solid #D5CBFF;
    margin: 0px;  
  }
`;

function Header() {
  return (
    <>
      <HeaderCover>
        <HeaderLogo />
        <HeaderMenu>서비스 안내</HeaderMenu>
        <HeaderMenu>플래그</HeaderMenu>
        <HeaderMenu>플렉스</HeaderMenu>
        <HeaderLogin>로그인</HeaderLogin>
        <HeaderMenuBtn />
      </HeaderCover>
      <HeaderLine />
      <Outlet />
    </>
  );
}
export default Header;
