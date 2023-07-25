import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import axios from 'axios';
import profilepic from '../contents/desktop/sign/Btn_프로필생성_Profilepic.svg';
import createaccount from '../contents/desktop/sign/Btn_프로필생성_Createaccount.svg';
import { SignUpProfileAtom } from '../state/SignUpState';
import { SignUpNameAtom } from '../state/SignUpState';
import { SignUpIdAtom } from '../state/SignUpState';
import { SignUpPwAtom } from '../state/SignUpState';

const SignUp2Cover = styled.div`
  height: 910px;
  width: 1440px;
`;
const SignUpInputImgIc = styled.img`
  width: 118px;
  height: 122px;
  flex-shrink: 0;
  margin: 159px 661px 0px;
`;
const SignUpInputImg = styled.input`
  visibility: hidden;
`;
const SignUpInputName = styled.input`
  border: none;
  width: 450px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 13px;
  background: #d9d9d9;
  color: #999;
  font-family: Noto Sans KR;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 38px 494px 0px 496px;
`;
const SignUpInputHint = styled.div`
  color: #999;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 20px auto 0px 500px;
`;
const SignUpCreateaccountBtn = styled.button`
  border: none;
  width: 355px;
  height: 41px;
  flex-shrink: 0;
  background-image: url(${createaccount});
  background-color: transparent;
  background-repeat: no-repeat;
  margin: 33px 542.5px auto;
`;

function SignUp2() {
  const [userProfile, setUserProfile] = useRecoilState(
    SignUpProfileAtom,
  );
  const [userName, setUserName] =
    useRecoilState(SignUpNameAtom);
  const [id, setId] = useRecoilState(SignUpIdAtom);
  const [pw, setPw] = useRecoilState(SignUpPwAtom);

  const updateUserName = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => setUserName(e.target.value);

  const updateUserProfile = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (!e.target.files) return;
    else {
      const newFileURL = URL.createObjectURL(
        e.target.files[0],
      );
      setUserProfile(newFileURL);
    }
  };

  const nextUser = () =>{
    console.log(
      'Profile:' + userProfile + ' Name:' + userName,
    );
    /*
    if (id !== '' && pw !== '') {
      axios({
        url: '/member/login.do',
        method: 'post',
        data: {
          data1: id,
          data2: pw,
        },
        baseURL: 'http://localhost:8080',
      }).then(function (response) {
        console.log(response.data);
        console.log(response.data.user_id);
        if (response.data.user_id === undefined) {
          alert(
            'response.data.user_id === undefined',
          );
        } else if (response.data.password === undefined) {
          alert(
            'response.data.password === undefined',
          );
        } else {
          alert(response.data.user_name + '님 환영합니다!');
        }
      });
    } else {
      alert('로그인 입력폼을 확인해주세요');
    }
    */
  };
    

  return (
    <>
      <form method="post" encType="multipart/form-data">
        <SignUp2Cover>
          <label htmlFor="userProfile">
            <SignUpInputImgIc
              id="profileImg"
              src={userProfile ? userProfile : profilepic}
            />
          </label>
          <SignUpInputImg
            type="file"
            id="userProfile"
            accept="image/*"
            onChange={updateUserProfile}
          />
          <SignUpInputName
            type="text"
            id="userName"
            placeholder="닉네임"
            /* minlength="2"
            maxlength="7" */
            onChange={updateUserName}
          />
          <SignUpInputHint>
            최소 2자 최대 7자 이내
          </SignUpInputHint>
          <Link to="/SignUp3">
            <SignUpCreateaccountBtn onClick={nextUser} />
          </Link>
        </SignUp2Cover>
      </form>
    </>
  );
}
export default SignUp2;
