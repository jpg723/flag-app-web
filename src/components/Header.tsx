//import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../contents/Logo_플래그_Small_수정.svg';

const HeaderCover = styled.div`
  height: 114px;
  margin: 0 auto;
  display: flex;
  padding: 5% auto auto;
  white-space: nowrap;
`;
const HeaderLogo = styled.span`
  margin: auto 10% 20px 8%;
`;
const HeaderMenu = styled.span`
  font-color: #272727;
  font-size: 22px;
  font-style: normal;
  margin: auto 50px 20px 0px;
`;
const HeaderLogin = styled.span`
  font-color: #272727;
  font-size: 22px;
  font-style: normal;
  margin: auto 10% 20px auto;
`;
const HeaderLine = styled.hr`
  border: 0.5px solid rgba(142, 111, 255, 0.8);
`;

function Header() {
  return (
    <div>
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
    </div>
  );
}
export default Header;
