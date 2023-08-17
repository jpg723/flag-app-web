import React, { useCallback } from 'react';
import styled from 'styled-components';
import FriendItem from './FriendItem';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  friendListAtom,
  IFriendTypes,
  makeFlagAtom,
} from '../../recoil/Atoms';

const Wrapper = styled.div`
  width: 336px;
  height: 362px;
  margin: 0px 0px 0px 41px;
  border-radius: 18px;
  border: 1.5px solid #000;
  padding: 21px 8px 21px 0px;

  @media screen and (max-width: 500px) {
    margin-left: 0px;
    width: 253px;
    height: 200px;
    border: 1.5px solid #6041ff;
    padding: 21px 8px 21px 0px;
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
              <FriendItem
                key={item.id}
                id={item.id}
                name={item.name}
                checked={
                  checkedFriends.find(
                    (it) => it.id === item.id,
                  )
                    ? true
                    : false
                }
                handleCheck={handleCheck}
              />
            ))
          : friendList
              .filter((item) =>
                item.name.includes(searchName),
              )
              .map((item: IFriendTypes) => (
                <FriendItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  checked={
                    checkedFriends.find(
                      (it) => it.id === item.id,
                    )
                      ? true
                      : false
                  }
                  handleCheck={handleCheck}
                />
              ))}
      </FriendsListFrame>
    </Wrapper>
  );
};

export default MyPageFriendList;
