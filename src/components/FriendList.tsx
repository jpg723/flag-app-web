import React, {
  useCallback,
  useEffect,
  useState,
} from 'react';
import styled from 'styled-components';
import img_wrapper from '../contents/grid/Frame_약속만들기_Friendslist.svg';
import FriendItem from './FriendItem';
import { useRecoilValue, useRecoilState } from 'recoil';
import {
  friendListAtom,
  checkedFriendsAtom,
  IFriendTypes,
} from '../recoil/Atoms';

const Wrapper = styled.div`
  width: 336px;
  height: 362px;
  margin-left: 62px;
  background-image: url('${img_wrapper}');
  background-repeat: no-repeat;
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
`;

interface IFriendListProps {
  searchName: string;
}

const FriendList = ({ searchName }: IFriendListProps) => {
  const friendList = useRecoilValue(friendListAtom);
  const [checkedFriends, setCheckedFriends] =
    useRecoilState(checkedFriendsAtom);

  const handleCheck = useCallback(
    (checked: boolean, id: number, name: string) => {
      if (checked) {
        setCheckedFriends((prev) => {
          const newList = [...prev, { id, name }];
          return newList;
        });
      } else {
        setCheckedFriends((prev) => {
          const newList = prev.filter(
            (item) => item.id !== id,
          );
          return newList;
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
