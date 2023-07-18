import { Link } from 'react-router-dom';
import styled from 'styled-components';
import profilepic from '../contents/desktop/webSign/_Img_계정생성완료_Profilepic.svg';
//import nickname from '../contents/desktop/webSign/Box_프로필생성_Nickname.svg';
import btnLogin from '../contents/desktop/webSign/Btn_Login.svg';

const SignUp3Cover = styled.div`
  height: 910px;
  width: 1440px;
`;
const SignUpInputImgIc = styled.img`
  margin: 215px 645px 0px;
`;
const SignUpAccount = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 17px auto 0px;
  text-align: center;
`;
const SignUpAccountText = styled.div`
  color: #2d2d2d;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 50px auto 0px;
  text-align: center;
`;
const SignUpBtnLogin = styled.img`
  margin: 58px 444px auto;
`;

function SignUp3() {
  return (
    <>
      <SignUp3Cover>
        <SignUpInputImgIc src={profilepic} />
        <SignUpAccount>닉네임</SignUpAccount>
        <SignUpAccountText>
          계정이 생성되었습니다.
        </SignUpAccountText>
        <Link to="/">
          <SignUpBtnLogin src={btnLogin} />
        </Link>
      </SignUp3Cover>
    </>
  );
}
export default SignUp3;
