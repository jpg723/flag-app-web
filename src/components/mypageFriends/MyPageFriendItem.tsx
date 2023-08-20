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

const ProfileWrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ProfilePicture = styled.div`
  width: 49px;
  height: 48px;
  border-radius: 70%;
  margin-left: 24px;
  margin-right: 28px;
  background-image: url('${img_profile}');
  background-size: cover;
  @media screen and (max-width: 500px) {
    width: 23px;
    height: 23px;
    background-image: url('${img_profile}');
  }
`;

const ProfileName = styled.span`
  font-size: 18px;
  font-weight: 400;
  line-height: 17px;
`;

const ProfileDel = styled.span`
  color: #f00;
  font-size: 18px;
  font-weight: 400;
  line-height: 17px;
  margin: auto 0px auto auto;
`;

interface IFriendItemProps {
  id: number;
  name: string;
  handleCheck: (
    id: number,
    name: string,
  ) => void;
}

const MyPageFriendItem = ({id,name, handleCheck}: IFriendItemProps) => {
  const onClick = (e: any) => 
    { handleCheck(id, name); };
  return (
    <Wrapper>
      <ProfileWrapper>
        <ProfilePicture />
        <ProfileName>{name}</ProfileName>
        <ProfileDel onClick={onClick}>삭제</ProfileDel>
      </ProfileWrapper>
    </Wrapper>
  );
};

export default MyPageFriendItem;