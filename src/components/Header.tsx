//import { Link } from 'react-router-dom';
import styled from 'styled-components';
//import { Col, Row } from 'antd';

const HeaderCover = styled.div`
  height: 100px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  border: 2px solid #000000;
`;
const HeaderLogo = styled.div`
  border: 2px solid #000011;
  margin: 25px;
`;
const HeaderMenu = styled.div`
  border: 2px solid #000011;
  margin: 25px;
`;
const HeaderLogin = styled.div`
  border: 2px solid #000011;
  margin: 25px;
`;
const HeaderLine = styled.hr`
  border: 0.5px solid rgba(142, 111, 255, 0.8);
`;

function Header() {
  return (
    <div>
      <HeaderCover>
        <HeaderLogo>
          <img src="../contents/LOGO2.png" />
          <span>fleg</span>
        </HeaderLogo>
        <HeaderMenu>
          <span>서비스 안내</span>
          <span>플래그</span>
          <span>플렉스</span>
        </HeaderMenu>
        <HeaderLogin>로그인</HeaderLogin>
      </HeaderCover>
      <HeaderLine />
    </div>
  );
}
export default Header;
