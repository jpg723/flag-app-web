import styled from 'styled-components';
import logo from '../contents/Logo_플래그_Small_수정.svg';
//const logo = require('../contents/grid/Logo_플래그_Small_수정.svg');

const HeaderCover = styled.div`
  height: 114px;
  width: 1440px;
  display: flex;
  white-space: nowrap;
`;
const HeaderLogo = styled.span`
  margin: auto 169px 20px 197px;
`;
const HeaderMenu = styled.span`
  font-color: #272727;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  margin: auto 59px 26px 0px;
`;
const HeaderLogin = styled.span`
  font-color: #272727;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  margin: auto 207px 25px 261px;
`;
const HeaderLine = styled.hr`
  border: 0.5px solid rgba(142, 111, 255, 0.8);
`;

function Header() {
  return (
    <>
      <HeaderCover>
        <HeaderLogo>
          <img src={logo} alt="img_not_found..." />
        </HeaderLogo>
        <HeaderMenu>서비스 안내</HeaderMenu>
        <HeaderMenu>플래그</HeaderMenu>
        <HeaderMenu>플렉스</HeaderMenu>
        <HeaderLogin>로그인</HeaderLogin>
      </HeaderCover>
      <HeaderLine />
    </>
  );
}
export default Header;
