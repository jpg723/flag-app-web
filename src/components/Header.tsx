//import { Link } from 'react-router-dom';
import styled from 'styled-components';
//import { Col, Row } from 'antd';

const HeaderCover = styled.div`
  position: relative;
  height: 80px;
  margin: 0 auto;
  display: flex;
  border: 2px solid #000000;
  padding: 5% auto 5%;
`;
const HeaderLogo = styled.div`
  border: 2px solid #000011;
  margin: 20px;
`;
const HeaderMenuCover = styled.div`
  position: relative;
  width: 40%;
  border: 2px solid #000011;
  margin: 20px;
`;
const HeaderMenu = styled.span`
  position: absolute;
  right: 0;
  border: 2px solid #000011;
  margin: 5%;
`;
const HeaderLogin = styled.div`
  position: absolute;
  right: 0;
  border: 2px solid #000011;
  margin: 20px;
`;
const HeaderLine = styled.hr`
  border: 0.5px solid rgba(142, 111, 255, 0.8);
`;

function Header() {
  return (
    <div>
      <HeaderCover>
        <HeaderLogo>
          <img
            src="./../contents/grid/LOGO_플래그_Small_수정.svg"
            alt="img_not_found..."
          />
        </HeaderLogo>
        <HeaderMenuCover>
          <HeaderMenu>서비스 안내</HeaderMenu>
          <HeaderMenu>플래그</HeaderMenu>
          <HeaderMenu>플렉스</HeaderMenu>
        </HeaderMenuCover>
        <HeaderLogin>로그인</HeaderLogin>
      </HeaderCover>
      <HeaderLine />
    </div>
  );
}
export default Header;
