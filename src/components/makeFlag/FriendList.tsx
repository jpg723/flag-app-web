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
  margin-left: 41px;
  border-radius: 18px;
  border: 1.5px solid #000;
  &::-webkit-scrollbar {
    width: 5px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    height: 108px;
    border-radius: 12px;
    background-color: #d9d9d9;
  }

  overflow: scroll;
  overflow-x: hidden;
  @media screen and (max-width: 500px) {
    margin-left: 0px;
    width: 253px;
    height: 200px;
    border: 1.5px solid #6041ff;
  }
`;

interface IFriendListProps {
  searchName: string;
}

const FriendList = ({ searchName }: IFriendListProps) => {
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
    </Wrapper>
  );
};

export default FriendList;
