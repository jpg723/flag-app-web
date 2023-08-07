//import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import styled from 'styled-components';
import profilepic from '../contents/desktop/mypage/Img_마이페이지_Profilepic.svg';
import profilepicMobile from '../contents/mobile/mypage/Img_마이페이지_Profilepic.svg';
import profilepicEdit from '../contents/desktop/mypage/Ic_마이페이지_Edit.svg';
import btnEmailEdit from '../contents/desktop/mypage/Btn_마이페이지_Modifyemail.svg';
import btnPwEdit from '../contents/desktop/mypage/Btn_마이페이지_Modifypassword.svg';
import btnLogout from '../contents/desktop/mypage/Btn_마이페이지_Logout.svg';
import btnWithdraw from '../contents/desktop/mypage/Btn_마이페이지_Withdraw.svg';
import btnAddfriend from '../contents/desktop/mypage/Btn_마이페이지_Addfriend.svg';
import FrameFriendslist from '../contents/desktop/mypage/Frame_마이페이지_Friendslist.svg';
import CheckFriendlist from '../contents/desktop/mypage/Ic_마이페이지_Check_Friendlist.svg';
import ProfilepicChecked from '../contents/desktop/mypage/Img_약속만들기_Profilepic_Checked.svg';
//display: none;
//border: 2px solid #000;
//@media screen and (max-width: 360px) {}

const MyPageCover = styled.div`
  height: 1481px;
  width: 1440px;
  @media screen and (max-width: 360px) {
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
  @media screen and (max-width: 360px) {
    font-size: 17px;
    margin: 30px auto 0px 29px;
  }
`;
const MyPageCover2 = styled.div`
  width: 355px;
  text-align: center;
  margin: 0px auto auto 542px;
  @media screen and (max-width: 360px) {
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
  @media screen and (max-width: 360px) {
    width: 68px;
    height: 68px;
    background-image: URL(${profilepicMobile});
    margin: 23px auto 0px;
  }
`;
const MyPageAccountImgEdit = styled.img`
  margin: 74px 42px 0px;
  @media screen and (max-width: 360px) {
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
  @media screen and (max-width: 360px) {
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
  @media screen and (max-width: 360px) {
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
  @media screen and (max-width: 360px) {
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
  @media screen and (max-width: 360px) {
    width: 285px;
    background: rgba(0, 0, 0, 0.18);
    margin: 4px 0px 18px;
  }
`;
const MyPageCover3 = styled.div`
  border: 2px solid #000;
  width: 607px;
  margin: 157px auto auto 216px;
  @media screen and (max-width: 360px) {
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
`;
const MyPageFriendAdd = styled.img`
  background-color: transparent;
  padding: 0px;
  float: right;
  margin: 20px 15px 11px auto;
`;
/*
::-webkit-scrollbar : 스크롤바 영역에 대한 설정
::-webkit-scrollbar-thumb : 스크롤바 막대에 대한 설정
::-webkit-scrollbar-track  : 스크롤바 뒷 배경에 대한 설정
*/
const MyPageFriendsFrame = styled.div`
  width: 547px;
  height: 282px;
  flex-shrink: 0;
  background-image: URL(${FrameFriendslist});
  background-repeat: no-repeat;
  margin: 21px 0px 0px;
  padding: 40px 10px 40px 50px;
`;
const MyPageFriendsList = styled.div`
  border: 2px solid #000;
  width: 100%;
  height: 100%;
  row-gap: 22px;
  flex-shrink: 0;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    width: 5px;
    height: 108px; 
    border-radius: 12px;
    background: #D9D9D9;
  }
  &::-webkit-scrollbar-track {
  }
`;
const MyPageFriend = styled.div`
  border: 2px solid #000;
  display: flex;
  align-items: center;
  gap: 28px;
  margin-right: 157px;
`;
const MyPageFriendImg = styled.img`
  border: 2px solid #000;
  margin: 0px;
`;
const MyPageFriendName = styled.span`
  border: 2px solid #000;
  color: #000;
  font-family: Apple SD Gothic Neo;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0px;
`;
const MyPageFriendDel = styled.span`
  border: 2px solid #000;
  color: #F00;
  font-family: Apple SD Gothic Neo;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: auto 0px auto auto;
`;
const MyPageFriendListEnter = styled.br`
  height: 22px;
`;
const MyPageFriendEdit = styled.span`
  color: #000;
  font-family: Apple SD Gothic Neo;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  float: right;
  margin: 8px 20px auto auto;
`;

function MyPage() {
  const [userName] = useState('OO');
  function addFriends() {
    window.open("/MyPage_FriendsAdd", "_blank", 
      "width=835, height=562, toolbar=no");
  }
  function deleteFriends() {
    window.open("/MyPage_FriendsDelete", "_blank", 
      "width=500, height=500, toolbar=no");
  }
  return (
    <>
      <MyPageCover>
        <MyPageAccount>{userName}님의 계정</MyPageAccount>
        <MyPageCover2>
          <MyPageAccountImg>
            <label htmlFor="profileImg"><MyPageAccountImgEdit src={profilepicEdit} /></label>
            <MyPageAccountImgInput type="file" id="profileImg" accept="image/*"/>
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
          <MyPageFriendsListText>{userName}님의 친구목록</MyPageFriendsListText>
          <MyPageFriendAdd src={btnAddfriend} alt='img..' onClick={addFriends} />
          
          <MyPageFriendsFrame>
            <MyPageFriendsList>
              <MyPageFriend>
                <MyPageFriendImg src={CheckFriendlist} />
                <MyPageFriendImg src={ProfilepicChecked} />
                <MyPageFriendName>친구이름</MyPageFriendName>
                <MyPageFriendDel>삭제하기</MyPageFriendDel>
              </MyPageFriend>
              <MyPageFriendListEnter />
              <MyPageFriend>
                <MyPageFriendImg src={CheckFriendlist} />
                <MyPageFriendImg src={ProfilepicChecked} />
                <MyPageFriendName>친구이름</MyPageFriendName>
                <MyPageFriendDel>삭제하기</MyPageFriendDel>
              </MyPageFriend>
              <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </MyPageFriendsList>
          </MyPageFriendsFrame>
          <MyPageFriendEdit onClick={deleteFriends}>편집하기</MyPageFriendEdit>
        </MyPageCover3>
      </MyPageCover>
    </>
  );
}
export default MyPage;
