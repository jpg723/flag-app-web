import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import searchIc from '../contents/desktop/mypage/Ic_마이페이지 - 친구추가_Search.svg';
import { addFriendAtom } from '../recoil/Atoms';
import MyPageFriendAddItem from '../components/mypageFriends/MyPageFriendAddItem';
import btnBack from '../contents/mobile/mypage/Btn_back.svg';
import mobileLogo from '../contents/mobile/sign/Logo_플래그.svg';
import mobileMenuBtn from '../contents/mobile/sign/Btn_로그인_Menu.svg';
import axios from 'axios';

//display: none;
//border: 2px solid #000;
const FriendsAddHeaderFrame = styled.div`
  display: none;
  @media screen and (max-width: 500px) {
    border-bottom: 1px solid #D5CBFF;
    display: flex;
    width: 100%;
    height: 63px;
    margin-top: 41px;
  }
`;
const FriendsAddHeaderBack = styled.button`
  display: none;
  @media screen and (max-width: 500px) {
    border: none;
    display: inline; 
    width: 28px;
    height: 28px;
    background-image: url(${btnBack});
    background-color: transparent;
    background-repeat: no-repeat;
    margin: auto auto 11px 12px;
  }
`;
const FriendsAddHeaderLogo = styled.img`
  display: none;
  @media screen and (max-width: 500px) {
    display: inline; 
    margin: auto 20% 10px;
  }
`;
const FriendsAddHeaderMenuBtn = styled.button`
  display: none;
  @media screen and (max-width: 500px) {
    display: inline; 
    text-align: right;
    border: none;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    background-image: url(${mobileMenuBtn});
    background-color: transparent;
    background-repeat: no-repeat; 
    margin: auto 20px 15px auto;
  }
`;

const FriendsAddText = styled.div`
  color: #000;
  font-family: Apple SD Gothic Neo;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 54px auto 0px 86px;
  @media screen and (max-width: 500px) {
    font-size: 20px;
    margin: 30px auto 0px 29px;
  }
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
  @media screen and (max-width: 500px) {
    width: 310px;
    height: 35px;
    padding: 13px;
    margin: 15px auto 0px 28px;
  }
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
  @media screen and (max-width: 500px) {
    margin-left: 45px;
  }
`;


function FriendsAdd() {
  const [inputWord, setInputWord] = useState('');
  const [addFriend, setAddFriend] = useRecoilState(addFriendAtom);
  
  useEffect(() => {
  }, [inputWord]);

  const friendSearch = () => {
    console.log("친구 조회");
    console.log("친구이름: " + inputWord);
    const token = sessionStorage.getItem('token');
    axios({
      url: '/friends/List',
      method: 'POST',
      headers: {
        Authorization: token,
      },
      params: {
        name: inputWord,
      },
    }).then(response => {
      console.log(response.data);
      if (response.data.isSuccess === true) {
        console.log(response.data.result);
        //친구 name, 친구 여부 (true, false)
        const text = response.data.result.UserResponse;
        console.log('text' + text);
        setAddFriend({name: inputWord, isFriend: false});
      } else {
        alert(response.data.message);
      }
    }).catch(error => {
      console.error('AxiosError:', error);
    });
    console.log("백엔드 전달");
  }
  return (
    <>
      <FriendsAddHeaderFrame>
        <FriendsAddHeaderBack onClick={() => {window.close();}} />
        <FriendsAddHeaderLogo src={mobileLogo} />
        <FriendsAddHeaderMenuBtn />
      </FriendsAddHeaderFrame>
      <FriendsAddText>친구 추가</FriendsAddText>
      <FriendsSearchFrame>
        <FriendsSearch type='text' id='searchFriend' placeholder="검색" onChange={ (e: React.ChangeEvent<HTMLInputElement>) => { setInputWord(e.target.value); } } />
        <FriendsSearchIc src={searchIc} onClick={friendSearch}/>
      </FriendsSearchFrame>
      <MyPageFriendAddItem name={addFriend.name} existFriend={addFriend.isFriend} />
    </>
  );
}
export default FriendsAdd;