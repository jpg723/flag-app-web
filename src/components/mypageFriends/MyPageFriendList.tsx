import React, { useCallback } from 'react';
import styled from 'styled-components';
import MyPageFriendItem from './MyPageFriendItem';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  friendListAtom,
  IFriendTypes,
  makeFlagAtom,
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

interface IFriendListProps {
  searchName: string;
}

const MyPageFriendList = ({
  searchName,
}: IFriendListProps) => {
  const friendList = useRecoilValue(friendListAtom);
  const { checkedFriends } = useRecoilValue(makeFlagAtom);
  const setValue = useSetRecoilState(makeFlagAtom);

  const handleCheck = useCallback(
    (checked: boolean, id: number, name: string) => {
      window.open( '/MyPage_FriendsDelete', '_blank', 'width=577, height=321, toolbar=no');
      if (checked) {
        setValue((v) => {
          const copied = [...v.checkedFriends];
          const newList = [...copied, { id, name }];
          return { ...v, checkedFriends: newList };
        });
      } else {
        setValue((v) => {
          const copied = [...v.checkedFriends];
          const newList = copied.filter(
            (item) => item.id !== id,
          );
          return { ...v, checkedFriends: newList };
        });
      }
    },
    [checkedFriends],
  );

  return (
    <Wrapper>
      <FriendsListFrame>
        {searchName === ''
          ? friendList.map((item: IFriendTypes) => (
              <MyPageFriendItem
                key={item.id}
                id={item.id}
                name={item.name}
                handleCheck={handleCheck}
              />
            ))
          : friendList
              .filter((item) =>
                item.name.includes(searchName),
              )
              .map((item: IFriendTypes) => (
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
