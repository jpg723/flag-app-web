import React, { useCallback } from 'react';
import styled from 'styled-components';
import MyPageFriendItem from './MyPageFriendItem';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  delFriendAtom,
  friendListAtom,
  IFriendTypes,
} from '../../recoil/Atoms';

const Wrapper = styled.div`
  width: 605px;
  height: 362px;
  margin: 20px 0px 0px 0px;
  border-radius: 18px;
  border: 2px solid var(--primary-deep, #6041ff);
  padding: 20px 10px 20px 25px;

  @media screen and (max-width: 500px) {
    margin-left: 0px;
    width: 302px;
    height: 216px;
    border: 2px solid var(--primary-deep, #6041ff);
    padding: 10px 10px 20px 10px;
    margin-top: 10px;
  }
`;
const FriendsListFrame = styled.div`
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
    background: #d9d9d9;
  }
`;


const MyPageFriendList = () => {
  const friendList = useRecoilValue(friendListAtom);
  const [delFriend, setDelFriend] = useRecoilState(delFriendAtom);

  const handleCheck = (id: number, name: string) => {
    console.log('id? ' + id);
    setDelFriend({id: id, name: name});
    window.open( '/MyPage_FriendsDelete', '_blank', 'width=577, height=321, toolbar=no');
  };

  return (
    <Wrapper>
      <FriendsListFrame>
        { friendList.map((item: IFriendTypes) => (
            <MyPageFriendItem
              key={item.id}
              id={item.id}
              name={item.name}
              handleCheck={handleCheck}
            />
        ))}
    </FriendsListFrame>        
    </Wrapper>
  );
};

export default MyPageFriendList;
