//import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import styled from 'styled-components';
import profilepic from '../contents/desktop/mypage/Img_마이페이지_Profilepic.svg';
import profilepicEdit from '../contents/desktop/mypage/Ic_마이페이지_Edit.svg';
import btnEmailEdit from '../contents/desktop/mypage/Btn_마이페이지_Modifyemail.svg';
import btnPwEdit from '../contents/desktop/mypage/Btn_마이페이지_Modifypassword.svg';
import btnLogout from '../contents/desktop/mypage/Btn_마이페이지_Logout.svg';
import btnWithdraw from '../contents/desktop/mypage/Btn_마이페이지_Withdraw.svg';
import btnAddfriend from '../contents/desktop/mypage/Btn_마이페이지_Addfriend.svg';
import FrameFriendslist from '../contents/desktop/mypage/Frame_마이페이지_Friendslist.svg';
import CheckFriendlist from '../contents/desktop/mypage/Ic_마이페이지_Check_Friendlist.svg';
import ProfilepicChecked from '../contents/desktop/mypage/Img_약속만들기_Profilepic_Checked.svg';

const MyPageCover = styled.div`
  height: 1481px;
  width: 1440px;
`;
const MyPageCover2 = styled.div`
  width: 355px;
  margin: 0px auto auto 542px;
`;
const MyPageAccount = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 27px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 69px auto 0px 233px;
`;
const MyPageAccountImg = styled.div`
  height: 112px;
  background-image: URL(${profilepic});
  background-repeat: no-repeat;
  margin: 50px auto 0px 122px;
`;
const MyPageAccountImgEdit = styled.img`
  margin: 74px 42px 0px;
`;
const MyPageAccountImgInput = styled.input`
  visibility: hidden;
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
`;
const MyPageEdit = styled.button`
  border: 0;
  background-color: transparent;
  padding: 0px;
  margin: 0px auto 14px;
`;
const MyPageLine = styled.hr`
  width: 355px;
  height: 1px;
  background: rgba(0, 0, 0, 0.29);
  margin: 2px auto 16px;
`;
const MyPageCover3 = styled.div`
  border: 2px solid #000;
  width: 607px;
  margin: 157px auto auto 216px;
`;
const MyPageFriendsListText = styled.span`
  border: 2px solid #000;
  color: #000;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0px auto 0px 0px;
`;
const MyPageAddFriend = styled.button`
  border: 2px solid #000;
  border: 0;
  background-color: transparent;
  padding: 0px;
  float: right;
  margin: auto 10px 9px auto;
`;
const MyPageFriendsList = styled.div`
  border: 2px solid #090;
  width: 607px;
  height: 362px;
  flex-shrink: 0;
  background-image: URL(${FrameFriendslist});
  background-repeat: no-repeat;
  margin: 0px;
`;
const MyPageFriend = styled.div`
  border: 2px solid #000;
  margin: 42px 75px 9px 35px;
`;
const MyPageFriendImg = styled.img`
  border: 2px solid #000;
  margin: auto 37px auto 0px;
`;

function MyPage() {
  const [userName] = useState('OO');
  return (
    <>
      <MyPageCover>
        <MyPageAccount>{userName}님의 계정</MyPageAccount>
        <MyPageCover2>
          <MyPageAccountImg>
            <label htmlFor="profileImg">
              <MyPageAccountImgEdit src={profilepicEdit} />
            </label>
            <MyPageAccountImgInput
              type="file"
              id="profileImg"
              accept="image/*"
            />
          </MyPageAccountImg>
          <MyPageName>{userName}</MyPageName>
          <MyPageEmail>Email</MyPageEmail>
          <MyPageEdit>
            <img src={btnEmailEdit} />
          </MyPageEdit>
          <MyPageEdit>
            <img src={btnPwEdit} />
          </MyPageEdit>
          <MyPageLine />
          <MyPageEdit>
            <img src={btnLogout} />
          </MyPageEdit>
          <MyPageEdit>
            <img src={btnWithdraw} />
          </MyPageEdit>
        </MyPageCover2>
        <MyPageCover3>
          <MyPageFriendsListText>
            {userName}님의 친구목록
          </MyPageFriendsListText>
          <MyPageAddFriend>
            <img src={btnAddfriend} />
          </MyPageAddFriend>
          <MyPageFriendsList>
            <MyPageFriend>
              <MyPageFriendImg src={CheckFriendlist} />
              <MyPageFriendImg src={ProfilepicChecked} />
            </MyPageFriend>
          </MyPageFriendsList>
        </MyPageCover3>
      </MyPageCover>
    </>
  );
}
export default MyPage;
