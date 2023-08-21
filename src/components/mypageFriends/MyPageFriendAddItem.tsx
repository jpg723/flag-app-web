import React, { useState } from 'react';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import {
  userIdState,
  addFriendAtom,
} from '../../recoil/Atoms';
import btnAddfriend1 from '../../contents/desktop/mypage/Btn_friendAdd.svg';
import btnAddfriend2 from '../../contents/desktop/mypage/Btn_friendAdd2.svg';

//const FriendFrame = styled.div<{ id: number, name: string }>`
//display: ${(props) => (props.id === -1 ? 'none' : 'inline')};

const FriendFrame = styled.div`
  width: 400px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 18px auto auto 100px;
  @media screen and (max-width: 500px) {
  }
`;

const FriendProfile = styled.span`
  width: 31px;
  height: 31px;
  flex-shrink: 0;
  border-radius: 50%;
  margin-right: 25px;
  background-color: #d9d9d9;
  background-size: cover;
  @media screen and (max-width: 500px) {
    width: 23px;
    height: 23px;
  }
`;

const FriendName = styled.span`
  color: #000;
  font-family: Noto Sans KR;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const FriendAddBtn = styled.span<{ isAdd: boolean }>`
  width: 27px;
  height: 27px;
  background-image: url(${(props) => (props.isAdd? btnAddfriend1 : btnAddfriend2)});
  background-size: cover;
  font-size: 18px;
  font-weight: 400;
  line-height: 17px;
  margin: auto 0px auto auto;
`;

const MyPageFriendAddItem = () => {
  const [isAdd, setIsAdd] = useState(true);
  const user = useRecoilValue(userIdState);
  const addFriend = useRecoilValue(addFriendAtom);

  const addFriendsList = (e: any) => {
    const token = sessionStorage.getItem('token');
    if (isAdd === true) {
      console.log('친구 추가');
      axios({
        url: '/friends/add',
        method: 'POST',
        headers: {
          Authorization: token,
        },
        data: {
          name: addFriend,
        },
      }).then((response) => {
        console.log(response.data);
        // 친구 목록 반환 필요
        setIsAdd(!isAdd); //버튼 변화
      }).catch((error) => {
        console.error('AxiosError:', error);
        e.preventDefault();
      });
      console.log('백엔드 전달');
    } else {
      console.log('친구 삭제');
      axios({
        url: '/friends/delete',
        method: 'DELETE',
        headers: {
          Authorization: token,
        },
        data: {
          name: addFriend,
        },
      })
        .then((response) => {
          console.log(response.data);
          // 친구 목록 반환 필요 -> 버튼 변화
          setIsAdd(!isAdd);
        })
        .catch((error) => {
          console.error('AxiosError:', error);
          e.preventDefault();
        });
      console.log('백엔드 전달');
    }
  };

  return (
    <>
      {addFriend === '' ? (
        <FriendFrame />
      ) : (
        <FriendFrame>
          <FriendProfile />
          <FriendName>{addFriend}</FriendName>
          <FriendAddBtn
            isAdd={isAdd}
            onClick={addFriendsList}
          />
        </FriendFrame>
      )}
    </>
  );
};

export default MyPageFriendAddItem;
