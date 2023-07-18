import styled from 'styled-components';
import img_profile from '../contents/desktop/flag/Img_약속만들기_Profilepic.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const ProfilePicture = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 70%;
  margin-bottom: 4px;
  background-image: url('${img_profile}');
  // overflow: hidden;
`;

const ProfileName = styled.span`
  font-size: 18px;
  font-weight: 350;
  line-height: 26px;
  text-align: center;
`;

interface IFriendItemProps {
  name: string;
}

const AddedFriendItem = ({ name }: IFriendItemProps) => {
  return (
    <Wrapper>
      <ProfilePicture />
      <ProfileName>{name}</ProfileName>
    </Wrapper>
  );
};

export default AddedFriendItem;
