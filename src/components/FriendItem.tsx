import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import img_profile from '../contents/grid/Img_약속만들기_Profilepic_Friendlist.svg';
import img_checked from '../contents/grid/icon_약속만들기_checked.svg';
import img_unchecked from '../contents/grid/icon_약속만들기_Unchecked.svg';
import { useRecoilState } from 'recoil';
import { checkedFriendsAtom } from '../recoil/Atoms';
import { useState } from 'react';

const Wrapper = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 21px 0px 20px 20px;
`;

const CheckBox = styled.input`
  appearance: none;
  width: 25px;
  height: 25px;
  background-image: url('${img_unchecked}');
  &:checked {
    background-image: url('${img_checked}');
  }
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ProfilePicture = styled.div`
  width: 49px;
  height: 48px;
  border-radius: 70%;
  margin-left: 24px;
  margin-right: 13px;
  background-image: url('${img_profile}');
`;

const ProfileName = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
`;

interface IFriendItemProps {
  id: number;
  name: string;
  checked: boolean;
  handleCheck: (
    checked: boolean,
    id: number,
    name: string,
  ) => void;
}

const FriendItem = ({
  id,
  name,
  checked,
  handleCheck,
}: IFriendItemProps) => {
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    console.log(e.target.checked);
    handleCheck(e.target.checked, id, name);
  };
  return (
    <Wrapper>
      <CheckBox
        type="checkbox"
        defaultChecked={checked}
        onChange={onChange}
      />
      <ProfileWrapper>
        <ProfilePicture />
        <ProfileName>{name}</ProfileName>
      </ProfileWrapper>
    </Wrapper>
  );
};

export default FriendItem;
