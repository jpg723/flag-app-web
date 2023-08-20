//import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import profilepic from '../contents/desktop/mypage/Img_마이페이지_Profilepic.svg';
import profilepicEdit from '../contents/desktop/mypage/Ic_마이페이지_Edit.svg';
import btnPwEdit from '../contents/desktop/mypage/Btn_마이페이지_Modifypassword.svg';
import btnLogout from '../contents/desktop/mypage/Btn_마이페이지_Logout.svg';
import btnWithdraw from '../contents/desktop/mypage/Btn_마이페이지_Withdraw.svg';
import btnAddfriend from '../contents/desktop/mypage/Btn_마이페이지_Addfriend.svg';
import MyPageFriendList from '../components/mypageFriends/MyPageFriendList';
import { SignUpFileAtom } from '../recoil/SignUpState';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Link } from 'react-router-dom';
import { emailState, userNameState } from '../recoil/Atoms';
//display: none;
//border: 2px solid #000;
//@media screen and (max-width: 500px) {}

const MyPageCover = styled.div`
  height: 1481px;
  width: 1440px;
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 100%;
    text-align: center;
  }
`;
const MyPageAccount = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 27px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 69px auto 0px 233px;
  @media screen and (max-width: 500px) {
    font-size: 17px;
    width: 200px;
    margin: 30px auto 0px 0px;
  }
`;
const MyPageCover2 = styled.div`
  width: 355px;
  text-align: center;
  margin: 0px auto auto 542px;
  @media screen and (max-width: 500px) {
    width: 100%;
    margin: 0px;
  }
`;
const MyPageAccountImg = styled.div<{img: string}>`
  width: 112px;
  height: 112px;
  border-radius: 50%;
  background-image: URL(${(props) => (props.img)});
  background-repeat: no-repeat;
  background-size: cover;
  margin: 50px auto 0px;
  @media screen and (max-width: 500px) {
    width: 68px;
    height: 68px;
    background-image: URL(${(props) => (props.img)});
    margin: 23px auto 0px;
  }
`;
const MyPageAccountImgEdit = styled.img`
  margin: 74px 42px 0px;
  @media screen and (max-width: 500px) {
    width: 18px;
    height: 18px;
    margin: 44px auto 6px;
  }
`;
const MyPageAccountImgInput = styled.input`
  display: none;
`;
const MyPageName = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: center;
  margin: 15px auto 0px;
  @media screen and (max-width: 500px) {
    font-size: 18px;
    margin: 5px auto 0px;
  }
`;
const MyPageEmail = styled.div`
  color: #8d8d8d;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: center;
  margin: 4px auto 53px;
  @media screen and (max-width: 500px) {
    font-size: 12px;
    margin: 2px auto 32px;
  }
`;
const MyPageEdit = styled.img`
  border: 0;
  background-color: transparent;
  padding: 0px;
  margin: 0px auto 14px;
  @media screen and (max-width: 500px) {
    width: 248px;
    font-size: 12px;
    margin: 0px auto 13px;
  }
`;
const MyPageLine = styled.hr`
  width: 355px;
  background: rgba(0, 0, 0, 0.29);
  margin: 2px auto 16px;
  @media screen and (max-width: 500px) {
    width: 285px;
    background: rgba(0, 0, 0, 0.18);
  }
`;
const MyPageCover3 = styled.div`
  width: 607px;
  margin: 157px auto auto 216px;
  @media screen and (max-width: 500px) {
    width: 302px;
    height: 270px;
    margin: 51px auto 18px;
    text-align: left;
  }
`;
const MyPageFriendsListText = styled.span`
  color: #000;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0px auto 0px 0px;
  @media screen and (max-width: 500px) {
    font-size: 20px;
    margin: 0px auto 0px 0px;
  }
`;
const MyPageFriendAdd = styled.img`
  background-color: transparent;
  padding: 0px;
  float: right;
  margin: 20px 15px 11px auto;
  @media screen and (max-width: 500px) {
    margin: 7px 10px 11px auto;
    width: 21px;
    height: 21px;
  }
`;

function MyPage() {
  const name = useRecoilValue(userNameState);
  const email = useRecoilValue(emailState);
  const [profileFile, setProfileFile] = useRecoilState(SignUpFileAtom);

  function addFriends() {
    window.open( '/MyPage_FriendsAdd', '_blank', 'width=835, height=375, toolbar=no' );
  }

  const updateProfile = ( e: React.ChangeEvent<HTMLInputElement> ) => {
    if (e.target.files && e.target.files[0]) {
      //const newFileURL = URL.createObjectURL(e.target.files[0]);
      setProfileFile(e.target.files[0]);
    }
    else {
      setProfileFile(null);
    }
  };
  const logout = () => {

  };
  const delUser = () => {

  };

  return (
    <>
      <MyPageCover>
        <MyPageAccount>{name}님의 계정</MyPageAccount>
        <MyPageCover2>
          <MyPageAccountImg img={profileFile ? URL.createObjectURL(profileFile) : profilepic} >
            <label htmlFor="profileImg">
              <MyPageAccountImgEdit src={profilepicEdit} />
            </label>
            <MyPageAccountImgInput type="file" id="profileImg" accept="image/*" onChange={updateProfile} />
          </MyPageAccountImg>
          <MyPageName>{name}</MyPageName>
          <MyPageEmail>{email}</MyPageEmail>
          <Link to="/password-change" ><MyPageEdit src={btnPwEdit} /></Link>
          <MyPageLine />
          <MyPageEdit src={btnLogout} onClick={logout} />
          <MyPageEdit src={btnWithdraw} onClick={delUser} />
        </MyPageCover2>
        <MyPageCover3>
          <MyPageFriendsListText> {name}님의 친구목록 </MyPageFriendsListText>
          <MyPageFriendAdd src={btnAddfriend} onClick={addFriends} />
          <MyPageFriendList />
        </MyPageCover3>
      </MyPageCover>
    </>
  );
}
export default MyPage;
