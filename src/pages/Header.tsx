import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../contents/Logo_플래그_Small_수정.svg';
import menuBtn from '../contents/desktop/sign/Ic_Menu.svg';
import mobileLogo from '../contents/mobile/sign/Logo_플래그.svg';
import mobileMenuBtn from '../contents/mobile/sign/Btn_로그인_Menu.svg';
//display: none;
//border: 2px solid #000;
//@media screen and (max-width: 360px) {}
//<Link to="/"> </Link>

const HeaderCover = styled.div`
  height: 114px;
  display: flex;
  white-space: nowrap;
  @media screen and (max-width: 500px) {
    width: 100%;
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
  margin: auto 257px 20px 201px;
  @media screen and (max-width: 500px) {
    width: 95px;
    height: 32px;
    background-image: url(${mobileLogo});
    margin: auto 23px 14px;
  }
`;
const HeaderItem = styled.span`
  font-color: #272727;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  margin: auto 69px 26px 0px;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const HeaderLogin = styled.div`
  font-color: #272727;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  margin: auto 175px 25px auto;
  text-align: right;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const HeaderLoginMenuBtn = styled.button`
  border: none;
  width: 32px;
  height: 33px;
  flex-shrink: 0;
  background-image: url(${menuBtn});
  background-color: transparent;
  background-repeat: no-repeat;
  margin-left: 88px;
  @media screen and (max-width: 500px) {
    display: none; 
  }
`;
const HeaderMenuLine = styled.ul`
  width: 120px;
  text-align: right;
  margin: 55px 200px auto auto;
`;
const MenuItem = styled.li`
  color: #000;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 27px;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const HeaderMobileMenuBtn = styled.button`
  display: none;
  text-align: right;
  @media screen and (max-width: 500px) {
    display: inline; 
    border: none;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    background-image: url(${mobileMenuBtn});
    background-color: transparent;
    background-repeat: no-repeat;
    margin: auto 20px 15px auto; 
  }
`;
const HeaderLine = styled.hr`
border: 2px solid #000;
  border: 0.5px solid rgba(142, 111, 255, 0.8);
  width: 100%;
  @media screen and (max-width: 500px) {
    width: 100%;
    flex-shrink: 0;
    border: 1px solid #D5CBFF;
    margin: 0px;  
  }
`;
const MenuCover = styled.div`
  padding: 62px 30px 0px 0px;
  @media screen and (max-width: 500px) {
  }
`;

const SideMenuCover = styled.div`
  width: 250px;
  height: 800px;
  top: 0;
  right: -292px;
  text-align: right;
  padding: 12px;
  background-color: #FFF;
  box-shadow: -5px 4px 19px 0px rgba(0, 0, 0, 0.25);
  position: fixed;
  transition: 0.5s ease;
  &.open {
    right: 0;
    transition: 0.5s ease;
  }
`;
const HeaderMobileSideMenuBtn = styled.button`
  width: 29px;
  height: 29px; 
  text-align: right;
  flex-shrink: 0;
  background-image: url(${mobileMenuBtn});
  background-color: transparent;
  background-repeat: no-repeat;
  margin: 63px 23px 30px auto; 
`;
const SideMenuItem = styled.li`
  color: #000;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 23px;
  margin-right: 23px;
`;

 
function Header() {
  const isLogin = 0; //로그인 상태 점검
  const [menu, setMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      <HeaderCover>
        <HeaderLogo />
        <HeaderItem>서비스 안내</HeaderItem>
        <HeaderItem>플래그</HeaderItem>
        { isLogin ? (
            <HeaderMenuLine>
              <HeaderLoginMenuBtn onClick={() => setMenu(!menu)} />
              {menu && (
                <MenuCover>
                  <MenuItem><Link to="/MyPage">마이페이지</Link></MenuItem>
                  <MenuItem>이용약관</MenuItem>
                  <MenuItem>로그아웃</MenuItem>
                </MenuCover>
              )}
            </HeaderMenuLine>
          )
          : (<HeaderLogin>로그인</HeaderLogin>)
        }
        { mobileMenu ? ( 
            <SideMenuCover className={ mobileMenu ? 'open' : ''}>
              <HeaderMobileSideMenuBtn onClick={() => setMobileMenu(!mobileMenu)} />
              <ul>
                <SideMenuItem>서비스 안내</SideMenuItem>
                <SideMenuItem>플래그</SideMenuItem>
                <SideMenuItem><Link to="/MyPage" onClick={() => setMobileMenu(!mobileMenu)}>마이페이지</Link></SideMenuItem>
                <SideMenuItem>로그인/회원가입</SideMenuItem>
                <SideMenuItem>이용약관</SideMenuItem>
              </ul>
            </SideMenuCover>
          )
          : (<HeaderMobileMenuBtn onClick={() => setMobileMenu(!mobileMenu)} />)
        }      
      </HeaderCover>
      <HeaderLine />
      <Outlet />
    </>
  );
}
export default Header;
