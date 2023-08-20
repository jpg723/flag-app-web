import React from 'react';
import styled from 'styled-components';
import img_profile from '../../contents/desktop/flag/Img_약속만들기_Profilepic_Friendlist.svg';
import btnDelfriend from '../../contents/desktop/mypage/Btn_friendDelete.svg';

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
  width: 370px;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (max-width: 500px) {
    width: 230px;
  }
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
    width: 38px;
    height: 38px;
    background-image: url('${img_profile}');
  }
`;

const ProfileName = styled.span`
  font-size: 18px;
  font-weight: 400;
  line-height: 17px;
  @media screen and (max-width: 500px) {
    font-size: 15px;
  }
`;

const ProfileDel = styled.span`
  width: 24px;
  height: 24px;
  color: #f00;
  font-size: 18px;
  font-weight: 400;
  line-height: 17px;
  background-image: url('${btnDelfriend}');
  background-size: cover;
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
        <ProfileDel onClick={onClick} />
      </ProfileWrapper>
    </Wrapper>
  );
};

export default MyPageFriendItem;