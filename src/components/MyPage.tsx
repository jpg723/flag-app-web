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
/*
::-webkit-scrollbar : 스크롤바 영역에 대한 설정
::-webkit-scrollbar-thumb : 스크롤바 막대에 대한 설정
::-webkit-scrollbar-track  : 스크롤바 뒷 배경에 대한 설정
*/
const MyPageFriendsFrame = styled.div`
  width: 605px;
  height: 362px;
  flex-shrink: 0;
  border-radius: 18px;
  border: 2px solid var(--primary-deep, #6041FF);
  background: #FFF;
  margin: 15px 0px 0px;
  padding: 40px 10px 40px 50px;
  @media screen and (max-width: 500px) {
    width: 302px;
    height: 216px;
  }
`;
const MyPageFriendsList = styled.div`
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

  .item {
    display: flex;
    align-items: center;
    gap: 28px;
    margin-right: 157px;
  }
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
  .delete {
    color: #F00;
    display: none;
  }
  .return {
    color: #000;
    display: none;
  }
  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`;
const FriendsCSS = styled.div`
  .itemCkeck {
    border-radius: 50%;
  }
  .itemProfile {
    border-radius: 50%;
    margin: 0px;
  }
  .itemName {
    color: #000;
    font-family: Apple SD Gothic Neo;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 0px;
  }
  .itemEnter {
    height: 22px;
  }
`

function MyPage() {
  const [userName] = useState('OO');
  const [onEdit, setOnEdit] = useState(false);
  const [deleteList, setDeleteList] = useState([] as any);

  // 친구 (일련번호, 이름, 프로필)
  type friend = { id : string, name : string, profile? : string };
  const friends : friend[] = [
    {id : '100', name : 'aaa', profile : 'aaa' },
    {id : '101', name : 'bbb', profile : 'bbb' },
    {id : '102', name : 'ccc', profile : 'ccc' },
    {id : '103', name : 'ddd', profile : 'ddd' },
    {id : '104', name : 'eee', profile : 'eee' },
    {id : '105', name : 'fff', profile : 'fff' }
  ]

  useEffect(() => {
    // 친구 목록 생성
    const friendsList = document.querySelector('#friendsList');
    if (friendsList instanceof Element) 
      friendsList.replaceChildren();

    for (let i of friends) {
      const friendsItem = document.createElement('div');
      friendsItem.className = 'item';

      const itemCheck = document.createElement('img');
      itemCheck.id = i.id;
      itemCheck.className = 'itemCheck';
      itemCheck.style.display = 'none';
      itemCheck.src = require('../contents/desktop/mypage/Ic_마이페이지_Check_Friendlist.svg').default;
      const itemProfile = document.createElement('img');
      itemProfile.className = 'itemProfile';
      itemProfile.src = require('../contents/desktop/mypage/Img_약속만들기_Profilepic_Checked.svg').default;
      const itemName = document.createElement('span');
      itemName.className = 'itemName';
      itemName.innerHTML = i.name;
      const itemEnter = document.createElement('br');
      itemEnter.className = 'itemEnter';

      friendsItem.appendChild(itemCheck);
      friendsItem.appendChild(itemProfile);
      friendsItem.appendChild(itemName);
      if (friendsList instanceof Element) {
        friendsList.appendChild(friendsItem);
        friendsList.appendChild(itemEnter);
      }
        
    }

    /*
    <div className='item'>
      <img className='itemCheck' />
      <img className='itemProfile' src={ProfilepicChecked} />
      <span className='itemName'>친구이름</span>
    </div>
    const checkIdText = document.querySelector('#checkIdText');
    document.createElement('h1');
    headerTag.appendChild(textNode);
    document.querySelectorAll
    console.log('  check!!!!!!!');
      if (checkIdText instanceof Element) 
        checkIdText.innerHTML = '사용 가능한 이메일입니다.'; 
    */

  }, []);

  function addFriends() {
    window.open("/MyPage_FriendsAdd", "_blank", "width=835, height=562, toolbar=no");
  }

  function editFriends() {
    setOnEdit(!onEdit);
    const itemCheck = Array.from(document.querySelectorAll<HTMLElement>('.itemCheck'));
    const itemProfile = Array.from(document.querySelectorAll<HTMLElement>('.itemProfile'));
    const deleteText = document.querySelector<HTMLElement>('#delete');
    const returnText = document.querySelector<HTMLElement>('#return');
    if (deleteText instanceof Element && returnText instanceof Element) {
      if (onEdit === true) {
        deleteText.style.display = "inline";
        returnText.style.display = "inline";
        for (let ic in itemCheck){
          itemCheck[ic].style.display = "inline";
          itemCheck[ic].onclick = function ()  {
            const clickId = itemCheck[ic].id;
            console.log('click!' + clickId);
            if (deleteList.includes(clickId) === true) {
              var newList = [];
              for (let id of deleteList){
                if (id !== clickId) {
                  newList.push(id);
                }
              }
              setDeleteList([...newList]);
              console.log('del!! ' + deleteList);
              itemProfile[ic].style.border = "none";
            }
            else {
              setDeleteList([...deleteList, clickId]); //값이 안들어감..
              console.log('add!! ' + deleteList);
              itemProfile[ic].style.border = "2px solid #6041FF"; 
            }
          }
        }
      }
      else {
        deleteText.style.display = "none";
        returnText.style.display = "none";
        for (let ic in itemCheck){
          itemCheck[ic].style.display = "none";
          itemProfile[ic].style.border = "none";
        }
      }
    }

  }

  function deleteWindow() {
    window.open("/MyPage_FriendsDelete", "_blank", "width=577, height=321, toolbar=no");
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
            
              <MyPageFriendsList ><FriendsCSS id='friendsList'></FriendsCSS></MyPageFriendsList>
            
          </MyPageFriendsFrame>
          
          <MyPageFriendEdit id='edit' onClick={editFriends}>편집하기</MyPageFriendEdit>
          <MyPageFriendEdit id='delete' className='delete' onClick={deleteWindow}>삭제하기</MyPageFriendEdit>
          <MyPageFriendEdit id='return' className='return' onClick={editFriends}>마치기</MyPageFriendEdit>
        </MyPageCover3>
      </MyPageCover>
    </>
  );
}
export default MyPage;
