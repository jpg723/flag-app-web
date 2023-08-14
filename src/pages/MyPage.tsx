//import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import profilepic from '../contents/desktop/mypage/Img_마이페이지_Profilepic.svg';
import profilepicMobile from '../contents/mobile/mypage/Img_마이페이지_Profilepic.svg';
import profilepicEdit from '../contents/desktop/mypage/Ic_마이페이지_Edit.svg';
import btnEmailEdit from '../contents/desktop/mypage/Btn_마이페이지_Modifyemail.svg';
import btnPwEdit from '../contents/desktop/mypage/Btn_마이페이지_Modifypassword.svg';
import btnLogout from '../contents/desktop/mypage/Btn_마이페이지_Logout.svg';
import btnWithdraw from '../contents/desktop/mypage/Btn_마이페이지_Withdraw.svg';
import btnAddfriend from '../contents/desktop/mypage/Btn_마이페이지_Addfriend.svg';
import MyPageFriendList from '../components/mypageFriends/MyPageFriendList';
//display: none;
//border: 2px solid #000;
//@media screen and (max-width: 500px) {}

const MyPageCover = styled.div`
  height: 1481px;
  width: 1440px;
  @media screen and (max-width: 500px) {
    width: 360px;
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
    margin: 30px auto 0px 29px;
  }
`;
const MyPageCover2 = styled.div`
  width: 355px;
  text-align: center;
  margin: 0px auto auto 542px;
  @media screen and (max-width: 500px) {
    width: 285px;
    margin: 0px 37px;
  }
`;
const MyPageAccountImg = styled.div`
  width: 112px;
  height: 112px;
  background-image: URL(${profilepic});
  background-repeat: no-repeat;
  margin: 50px auto 0px;
  @media screen and (max-width: 500px) {
    width: 68px;
    height: 68px;
    background-image: URL(${profilepicMobile});
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
  align: center;
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
  align: center;
  @media screen and (max-width: 500px) {
    width: 285px;
    background: rgba(0, 0, 0, 0.18);
    margin: 4px 0px 18px;
  }
`;
const MyPageCover3 = styled.div`
  width: 607px;
  margin: 157px auto auto 216px;
  @media screen and (max-width: 500px) {
    width: 302px;
    height: 270px;
    margin: 51px auto 18px;
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
    font-size: 17px;
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
const MyPageFriendEditText = styled.span<{ isEdit: boolean }>`
  display: ${(props) => (props.isEdit ? 'none' : 'inline')};
  color: #000;
  font-family: Apple SD Gothic Neo;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  float: right;
  margin: 8px 20px auto auto;
  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`;


function MyPage() {
  const [userName] = useState('OO');
  const [isEdit, setIsEdit] = useState(false);

  function addFriends() {
    window.open( '/MyPage_FriendsAdd', '_blank', 'width=835, height=562, toolbar=no' );
  }

  function deleteWindow() {
    window.open( '/MyPage_FriendsDelete', '_blank', 'width=577, height=321, toolbar=no');
  }

  return (
    <>
      <MyPageCover>
        <MyPageAccount>{userName}님의 계정</MyPageAccount>
        <MyPageCover2>
          <MyPageAccountImg>
            <label htmlFor="profileImg">
              <MyPageAccountImgEdit src={profilepicEdit} />
            </label>
            <MyPageAccountImgInput type="file" id="profileImg" accept="image/*" />
          </MyPageAccountImg>
          <MyPageName>{userName}</MyPageName>
          <MyPageEmail>Email</MyPageEmail>
          <MyPageEdit src={btnEmailEdit} />
          <MyPageEdit src={btnPwEdit} />
          <MyPageLine />
          <MyPageEdit src={btnLogout} />
          <MyPageEdit src={btnWithdraw} />
        </MyPageCover2>
        <MyPageCover3>
          <MyPageFriendsListText> {userName}님의 친구목록 </MyPageFriendsListText>
          <MyPageFriendAdd src={btnAddfriend} onClick={addFriends} />
          <MyPageFriendList searchName=""/>
        </MyPageCover3>
      </MyPageCover>
    </>
  );
}
export default MyPage;
