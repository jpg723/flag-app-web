//import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import profilepic from '../contents/desktop/sign/_Img_계정생성완료_Profilepic.svg';
import btnPwEdit from '../contents/desktop/mypage/Btn_마이페이지_Modifypassword.svg';
import btnLogout from '../contents/desktop/mypage/Btn_마이페이지_Logout.svg';
import btnWithdraw from '../contents/desktop/mypage/Btn_마이페이지_Withdraw.svg';
import btnAddfriend from '../contents/desktop/mypage/Btn_마이페이지_Addfriend.svg';
import MyPageFriendList from '../components/mypageFriends/MyPageFriendList';
import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';
import { addFriendAtom, emailState, friendListAtom, isLoginAtom, userNameState } from '../recoil/Atoms';
import axios from 'axios';
//display: none;
//border: 2px solid #000;
//@media screen and (max-width: 500px) {}

const MyPageCover = styled.div`
  height: 1481px;
  width: 100%;
  text-align: center;
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
  width: 300px;
  margin: 69px auto 0px 230px;
  @media screen and (max-width: 500px) {
    font-size: 17px;
    width: 200px;
    margin: 30px auto 0px 0px;
  }
`;
const MyPageCover2 = styled.div`
border: 2px solid #000;
  width: 355px;
  text-align: center;
  margin: 0px auto;
  margin-bottom: 125px;
  @media screen and (max-width: 500px) {
    width: 100%;
    margin: 0px;
    margin-bottom: 100px;
  }
`;
const MyPageAccountImg = styled.div`
  width: 112px;
  height: 112px;
  border-radius: 50%;
  background-image: URL(${profilepic});
  background-repeat: no-repeat;
  background-size: cover;
  margin: 50px auto 0px;
  @media screen and (max-width: 500px) {
    width: 68px;
    height: 68px;
    background-image: URL(${profilepic});
    margin: 23px auto 0px;
  }
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
    display: block;
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

const MyPageFriendsListText = styled.span`
  color: #000;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: auto auto -10px -170px;
  @media screen and (max-width: 500px) {
    font-size: 18px;
    margin: auto auto -10px -110px;
  }
`;
const MyPageCover3 = styled.div`
  width: 507px;
  margin: 0px auto auto;
  @media screen and (max-width: 500px) {
    width: 302px;
    height: 270px;
    margin: 0px auto 18px;
    text-align: left;
  }
`;
const MyPageFriendAdd = styled.img`
  background-color: transparent;
  padding: 0px;
  float: right;
  margin: -35px 15px 11px auto;
  @media screen and (max-width: 500px) {
    margin: -25px 10px 11px auto;
    width: 21px;
    height: 21px;
  }
`;

function MyPage() {
  const [isLogin, setIsLogin] = useRecoilState(isLoginAtom);
  const [name, setName] = useRecoilState(userNameState);
  const [email, setEmail] = useRecoilState(emailState);
  const [friendList, setFriendList] = useRecoilState(friendListAtom);
  const [addFriend, setAddFriend] = useRecoilState(addFriendAtom);

  useEffect(()=> {
    //마이페이지 axios
    console.log('마이페이지 접속');
    const token = sessionStorage.getItem('token');
    axios({
      url: '/user/mypage',
      method: 'GET',
      headers: {
        Authorization: token,
      },
    }).then((response) => {
      console.log('마이페이지 접속');
      //console.log(response.data);
      setName(response.data.name);
      setEmail(response.data.email);
      if (response.data.friends[0] !== null){
        let newList: {name: string}[] = [];
        for (let f of response.data.friends) {
          newList = [...newList, {name: f}];
        }
        //console.log(newList);
        setFriendList(newList);
      }
      //console.log(friendList);
    })
    .catch((error) => {
      console.error('AxiosError:', error);
    });
  },[addFriend]);

  const addFriends = () => {
    sessionStorage.setItem('name', name);
    window.open( '/MyPage_FriendsAdd', '_blank', 'width=835, height=375, toolbar=no' );
  }

  const logout = (e: any) => {
    // eslint-disable-next-line no-restricted-globals
    const logoutResult = confirm('로그아웃 하시겠습니까?');
    if ( logoutResult ) {
      sessionStorage.removeItem('token');
      setIsLogin(false);
    }
    else {
      e.preventDefault();
    }
  };
  
  const delUser = (e: any) => {
    // eslint-disable-next-line no-restricted-globals
    const delUserResult = confirm('계정을 삭제 하시겠습니까?');
    if ( delUserResult ) {
      const token = sessionStorage.getItem('token');
      axios({
        url: '/user/delete',
        method: 'DELETE',
        headers: {
          Authorization: token,
        },
      }).then((response) => {
        console.log(response.data);
        alert(response.data.message);
        if (response.data.isSuccess === true){
          sessionStorage.removeItem('token');
          setIsLogin(false);
        }
      }).catch((error) => {
        console.error('AxiosError:', error);
        e.preventDefault();
      });
    }
    else {
      e.preventDefault();
    }
  };

  return (
    <>
      <MyPageCover>
        <MyPageAccount>{name}님의 계정</MyPageAccount>
        <MyPageCover2>
          <MyPageAccountImg />
          <MyPageName>{name}</MyPageName>
          <MyPageEmail>{email}</MyPageEmail>
          <Link to="/password-change" ><MyPageEdit src={btnPwEdit} /></Link>
          <MyPageLine />
          <Link to="/" ><MyPageEdit src={btnLogout} onClick={logout} /></Link>
          <Link to="/" ><MyPageEdit src={btnWithdraw} onClick={delUser} /></Link>
        </MyPageCover2>
        <MyPageFriendsListText> {name}님의 친구목록 </MyPageFriendsListText>
        <MyPageCover3>
          <MyPageFriendAdd src={btnAddfriend} onClick={addFriends} />
          <MyPageFriendList />
        </MyPageCover3>
      </MyPageCover>
    </>
  );
}
export default MyPage;
