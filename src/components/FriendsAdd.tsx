import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import searchIc from '../contents/desktop/mypage/Ic_마이페이지 - 친구추가_Search.svg';
import btnEnd from '../contents/desktop/mypage/Btn_마이페이지 - 친구추가_Modifyemail.svg';
import profilepic from '../contents/desktop/mypage/Img_마이페이지 - 친구추가_Profilepic.svg';
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
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
  border-radius: 14px;
  background: #D9D9D9;
  display: flex;
  align-items: center;
  margin: 28px auto 0px 86px;
`;
const FriendsSearchIc = styled.img`
  margin-left: 12px;
  margin-right: 6px;
`;
const FriendsSearch = styled.input`
  border: none;
  color: #999;
  background: #D9D9D9;
  font-family: Noto Sans KR;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const FriendsDel = styled.div`
  color: #000;
  font-family: Apple SD Gothic Neo;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 8px auto 61px 430px;
`;
const FriendsListFrame = styled.div`
  border: 2px solid #000;
  gap: 17px;
  margin: 61px auto 0px 100px;
`;
const FriendsList = styled.div`
  border: 2px solid #000;
  width: 60px;
  height: 120px;
  text-align: center;
`;
const FriendsProfile = styled.img`
  border: 2px solid #000;
  border-radius: 50%;
`;
const FriendsName = styled.div`
  border: 2px solid #000;
  color: #000;
  font-family: Noto Sans KR;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const FriendsDel2 = styled.div`
  border: 2px solid #000;
  color: #F00;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const FriendsAddEnd = styled.img`
  margin: 88px 283px auto;
`;

function FriendsAdd() {
  const [inputWord, setInputWord] = useState("");
  
  useEffect(() => {
    //setInputWord(inputWord);
    // 친구 정보 전송
    // 친구 띄우기
  }, [inputWord]);
  function endFriendsAdd() {
    window.close();
  }
  return (
    <>
      <FriendsAddText>친구 추가</FriendsAddText>
      <FriendsSearchFrame>
        <FriendsSearchIc src={searchIc} />
        <FriendsSearch type='text' placeholder="검색" onChange={ (e: React.ChangeEvent<HTMLInputElement>) => { setInputWord(e.target.value); } } />
      </FriendsSearchFrame>
      <FriendsDel>모두 지우기</FriendsDel>
      <FriendsListFrame>
        <FriendsList>
          <FriendsProfile src={profilepic} />
          <FriendsName>닉네임</FriendsName>
          <FriendsDel2>삭제</FriendsDel2>
        </FriendsList>
      </FriendsListFrame>
      <FriendsAddEnd src={btnEnd} onClick={endFriendsAdd} />
    </>
  );
}
export default FriendsAdd;