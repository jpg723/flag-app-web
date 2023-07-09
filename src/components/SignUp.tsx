//import { Link } from 'react-router-dom';
import styled from 'styled-components';
import profile from '../contents/webSign/Ic_회원가입_Profile.svg';
import nextBtn from '../contents/webSign/Btn_다음.svg';

const SignUpCover = styled.div`
  border: 2px solid #000000;
  height: 760px;
  display: flex;
  white-space: nowrap;
`;
const SignUpCover2 = styled.div`
  border: 2px solid #447777;
  width: 80%;
  margin: 74px 10% 100px 10%;
`;
const SignUpImgText = styled.span`
  border: 2px solid #119911;
  height: 75px;
  width: 315px;
  display: inline-flex;
  gap: 13px;
  color: #000;
  font-family: Inter;
  font-size: 57px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const SignUpFormCover = styled.div`
  border: 2px solid #990000;
  margin: 80px 40% 100px 88px;
`;
const SignUpInput = styled.input`
  border: none;
  width: 100%;
  border-bottom: 2px solid #000;
  background: transparent;
  outline: none;
  color: #000;
  font-family: Noto Sans KR;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const SignUpInputText = styled.div`
  color: #999;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 40px;
`;
const SignUpNextBtn = styled.button`
  border: 2px solid #000;
  margin: 30px auto auto 30px;
`;
const SignUpNextBtnImg = styled.img`
  border: 2px solid #000;
`;

function SignUp() {
  return (
    <div>
      <SignUpCover>
        <SignUpCover2>
          <SignUpImgText>
            <img src={profile} />
            회원가입
          </SignUpImgText>
          <SignUpFormCover>
            <SignUpInput
              type="email"
              defaultValue="이메일"
            />
            <SignUpInputText>
              사용 가능한 이메일 입니다.
            </SignUpInputText>
            <SignUpInput
              type="password"
              defaultValue="비밀번호"
            />
            <SignUpInputText>힌트 메세지</SignUpInputText>
            <SignUpInput
              type="password"
              defaultValue="비밀번호 재입력"
            />
            <SignUpInputText>힌트 메세지</SignUpInputText>
            <SignUpNextBtn>
              <SignUpNextBtnImg src={nextBtn} />
            </SignUpNextBtn>
          </SignUpFormCover>
        </SignUpCover2>
      </SignUpCover>
    </div>
  );
}
function SignUp2(){
  return(
    <p>페이지2</p>
  );
}
export default SignUp;
