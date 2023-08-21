import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import profilepic from '../contents/desktop/sign/_Img_계정생성완료_Profilepic.svg';
import btnLogin from '../contents/desktop/sign/Btn_Login.svg';
import { SignUpNameAtom } from '../recoil/SignUpState';
//display: none;
//border: 2px solid #000;
//@media screen and (max-width: 500px) {}

const SignUp3Cover = styled.div`
  height: 910px;
  width: 1440px;
  @media screen and (max-width: 500px) {
    width: 100%;
    text-align: center;
  }
`;
const SignUpInputImgIc = styled.img`
  width: 118px;
  height: 118px;
  flex-shrink: 0;
  border-radius: 50%;
  margin: 183px 661px 0px;
  @media screen and (max-width: 500px) {
    width: 95px;
    height: 95px;
    margin: 68px auto 0px;
  }
`;
const SignUpAccount = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 13px auto 0px;
  text-align: center;
  @media screen and (max-width: 500px) {
    font-size: 14px;
    margin: 8px auto 0px;
  }
`;
const SignUpAccountText = styled.div`
  color: #2d2d2d;
  font-family: Inter;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 43px auto 0px;
  text-align: center;
  @media screen and (max-width: 500px) {
    font-size: 18px;
    font-weight: 700;
    margin: 20px auto 0px;
  }
`;
const SignUpBtnLogin = styled.img`
  margin: 27px 542.5px auto;
  @media screen and (max-width: 500px) {
    width: 277px;
    height: 38px;
    margin: 42px auto 0px;
  }
`;

function SignUp3() {
  const name = useRecoilValue(SignUpNameAtom);
  return (
    <SignUp3Cover>
      <SignUpInputImgIc src={profilepic} />
      <SignUpAccount>{name}</SignUpAccount>
      <SignUpAccountText>계정이 생성되었습니다.</SignUpAccountText>
      <Link to="/login">
        <SignUpBtnLogin src={btnLogin} />
      </Link>
    </SignUp3Cover>
  );
}
export default SignUp3;
