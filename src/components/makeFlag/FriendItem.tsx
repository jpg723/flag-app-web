import React from 'react';
import styled from 'styled-components';
import img_profile from '../../contents/desktop/flag/Img_약속만들기_Profilepic_Friendlist.svg';
import img_profile_mobile from '../../contents/mobile/flag/모바일_Img_약속만들기_Profilepic.svg';
import img_checked from '../../contents/desktop/flag/icon_약속만들기_checked.svg';
import img_unchecked from '../../contents/desktop/flag/icon_약속만들기_Unchecked.svg';

const Wrapper = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 21px 0px 20px 20px;
  @media screen and (max-width: 500px) {
    margin: 21px 0px 20px 16px;
  }
`;

const CheckBox = styled.input`
  appearance: none;
  width: 25px;
  height: 25px;
  background-image: url('${img_unchecked}');
  background-size: cover;
  &:checked {
    background-image: url('${img_checked}');
  }
  @media screen and (max-width: 500px) {
    width: 20px;
    height: 20px;
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
  background-size: cover;
  @media screen and (max-width: 500px) {
    width: 23px;
    height: 23px;
    background-image: url('${img_profile}');
  }
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
