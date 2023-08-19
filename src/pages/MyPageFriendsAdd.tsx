import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import searchIc from '../contents/desktop/mypage/Ic_마이페이지 - 친구추가_Search.svg';
import btnEnd from '../contents/desktop/mypage/Btn_마이페이지 - 친구추가_Modifyemail.svg';
import profilepic from '../contents/desktop/mypage/Img_마이페이지 - 친구추가_Profilepic.svg';
import { addFriendAtom } from '../recoil/Atoms';
import MyPageFriendAddItem from '../components/mypageFriends/MyPageFriendAddItem';

//display: none;
//border: 2px solid #000;
const FriendsAddText = styled.div`
  color: #000;
  font-family: Apple SD Gothic Neo;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 54px auto 0px 86px;
`;
const FriendsSearchFrame = styled.div`
  width: 423px;
  height: 42px;
  gap: 6px;
  flex-shrink: 0;
  border-radius: 14px;
  background: #D9D9D9;
  display: flex;
  align-items: center;
  margin: 28px auto 0px 86px;
  padding-left: 13px;
`;
const FriendsSearch = styled.input`
  border: none;
  outline: none;
  color: #999;
  background: #D9D9D9;
  font-family: Noto Sans KR;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const FriendsSearchIc = styled.img`
  margin-left: 160px;
  margin-right: 13px;
`;


function FriendsAdd() {
  const [inputWord, setInputWord] = useState("");
  const [addFriend, setAddFriend] = useRecoilState(addFriendAtom);
  
  useEffect(() => {
  }, [inputWord]);
  function endFriendsAdd() {
    window.close();
  }
  const friendSearch = () => {
    //찾는 친구 닉네임 백엔드로 전달
    //친구 id, profile, name, 친구 여부 
    //setAddFriend

  }
  return (
    <>
      <FriendsAddText>친구 추가</FriendsAddText>
      <FriendsSearchFrame>
        <FriendsSearch type='text' id='searchFriend' placeholder="검색" onChange={ (e: React.ChangeEvent<HTMLInputElement>) => { setInputWord(e.target.value); } } />
        <FriendsSearchIc src={searchIc} onClick={friendSearch}/>
      </FriendsSearchFrame>
      <MyPageFriendAddItem />
    </>
  );
}
export default FriendsAdd;