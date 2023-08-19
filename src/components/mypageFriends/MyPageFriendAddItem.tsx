import React, { useState } from 'react';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { userIdState, addFriendAtom } from '../../recoil/Atoms';

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
  background-color: #D9D9D9;
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

const FriendAddBtn = styled.span<{isAdd: boolean}>`
  color: ${(props) => (props.isAdd? '#f00' : '#000')};
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
    if (isAdd === true){
      console.log("친구 추가");
      axios({
        url: '/user/'+ user +'/friends/'+ addFriend.id,
        method: 'POST',
        data: {} ,
      }).then(response => {
        console.log(response.data);
        // 친구 목록 반환 필요 -> 버튼 변화
        setIsAdd(!isAdd);
      }).catch(error => {
        console.error('AxiosError:', error);
        e.preventDefault();
      });
      console.log("백엔드 전달");
    }
    else {
      console.log("친구 삭제");
      axios({
        url: '/user/'+ user +'/friends/'+ addFriend.id,
        method: 'DELETE',
        data: {} ,
      }).then(response => {
        console.log(response.data);
        // 친구 목록 반환 필요 -> 버튼 변화
        setIsAdd(!isAdd);
      }).catch(error => {
        console.error('AxiosError:', error);
        e.preventDefault();
      });
      console.log("백엔드 전달")
    }
    
  };

  return (
    <>
      { addFriend.id === -1
        ? <FriendFrame />
        : <FriendFrame>
            <FriendProfile />
            <FriendName>{addFriend.name}</FriendName>
            <FriendAddBtn isAdd={isAdd} onClick={addFriendsList}>add+</FriendAddBtn>
          </FriendFrame>
      }
    </>
  );
};

export default MyPageFriendAddItem;