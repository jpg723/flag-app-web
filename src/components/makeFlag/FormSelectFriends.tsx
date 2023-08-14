import styled from 'styled-components';
import ic_step2 from '../../contents/desktop/flag/Ic_약속만들기_Step2.svg';
import img_input from '../../contents/desktop/flag/Box_약속만들기_Search.svg';
import ic_search from '../../contents/desktop/flag/Ic_Search.svg';
import FriendList from './FriendList';
import AddedFriendList from './AddedFriendList';
import { useState } from 'react';

const Wrapper = styled.div`
  margin-bottom: 100px;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LeftView = styled.div`
  margin-right: 42px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 500px) {
    margin-right: 0px;
    align-items: center;
  }
`;

const RightView = styled.div`
  margin-top: 60px;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  gap: 13px;
  @media screen and (max-width: 500px) {
    gap: 8px;
  }
`;

const Title = styled.div`
  line-height: normal;
  font-size: 22px;
  font-weight: 700;
  @media screen and (max-width: 500px) {
    font-size: 17px;
  }
`;

const Image = styled.img`
  width: 28px;
  height: 28px;
  @media screen and (max-width: 500px) {
    width: 20px;
    height: 20px;
  }
`;

const InputWrapper = styled.form`
  position: relative;
  width: 336px;
  margin-left: 41px;
  margin-bottom: 24px;
  text-align: end;
  @media screen and (max-width: 500px) {
    margin-left: 0px;
    //width: 259px;
    margin-bottom: 20px;
    width: 259px;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 42px;
  border-radius: 14px;
  gap: 8px;
  font-size: 18px;
  background-image: url('${img_input}');
  background-repeat: no-repeat;
  background-color: transparent;
  border: 0;
  padding-left: 38px;
  margin-bottom: 8px;
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 500px) {
    font-size: 14px;
    height: 37px;
  }
`;

const InputImage = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
  border: 0;
  top: 11px;
  left: 12px;
  @media screen and (max-width: 500px) {
    width: 18px;
    height: 18px;
    top: 9px;
  }
`;

const Delete = styled.span`
  font-size: 13px;
  font-weight: 600;
  line-height: 17px;
  border: 0;
  background-color: transparent;
  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`;

const MobileAddedFriendsView = styled.div`
  display: none;
  @media screen and (max-width: 500px) {
    display: flex;
    margin-bottom: 20px;
  }
`;

const FriendListText = styled.div`
  margin-left: 41px;
  font-size: 17px;
  font-weight: 600;
  padding: 8px;
  @media screen and (max-width: 500px) {
    font-size: 14px;
    font-weight: 700;
    margin-left: 0px;
    width: 100%;
  }
`;

const FormSelectFriends = () => {
  const [searchName, setSearchName] = useState('');
  const onSubmit = (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
  };
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchName(e.target.value);
  };
  const onClick = (e: React.MouseEvent) => {
    setSearchName('');
  };
  return (
    <Wrapper>
      <LeftView>
        <TitleWrapper>
          <Image src={ic_step2} />
          <Title>누구와 함께하는 약속인가요?</Title>
        </TitleWrapper>
        <InputWrapper onSubmit={onSubmit}>
          <InputImage src={ic_search} />
          <Input
            onChange={onChange}
            placeholder="검색"
            value={searchName}
          />

          <Delete onClick={onClick}>모두 지우기</Delete>
        </InputWrapper>
        <MobileAddedFriendsView>
          <AddedFriendList />
        </MobileAddedFriendsView>
        <FriendListText>친구 목록</FriendListText>
        <FriendList
          isEdit={false}
          searchName={searchName}
        />
      </LeftView>
      <RightView>
        <AddedFriendList />
      </RightView>
    </Wrapper>
  );
};

export default FormSelectFriends;
