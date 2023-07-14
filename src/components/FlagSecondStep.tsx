import styled from 'styled-components';
import ic_step2 from '../contents/grid/Ic_약속만들기_Step2.svg';
import img_input from '../contents/grid/Box_약속만들기_Search.svg';
import ic_search from '../contents/grid/Ic_Search.svg';
import FriendList from './FriendList';
import AddedFriendList from './AddedFriendList';
import { useState } from 'react';

const Wrapper = styled.div`
  margin-bottom: 333px;
  display: flex;
  flex-direction: row;
`;

const LeftView = styled.div`
  margin-right: 42px;
`;

const RightView = styled.div`
  margin-top: 60px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 17px;
`;

const Title = styled.span`
  line-height: 43px;
  font-size: 30px;
  font-weight: 700;
`;

const Image = styled.img`
  width: 42px;
  height: 43px;
  margin-right: 20px;
`;

const InputWrapper = styled.form`
  position: relative;
  width: 336px;
  margin-left: 62px;
  margin-bottom: 39px;
  text-align: end;
`;

const Input = styled.input`
  width: 100%;
  height: 42px;
  border-radius: 14px;
  gap: 8px;
  font-size: 18px;
  background-image: url('${img_input}');
  background-repeat: no-repeat;
  border: 0;
  padding-left: 38px;
  margin-bottom: 8px;
  &:focus {
    outline: none;
  }
`;

const InputImage = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
  border: 0;
  top: 11px;
  left: 12px;
`;

const Delete = styled.button`
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  border: 0;
  background-color: transparent;
`;

const FlagSecondStep = () => {
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
        <FriendList searchName={searchName} />
      </LeftView>
      <RightView>
        <AddedFriendList />
      </RightView>
    </Wrapper>
  );
};

export default FlagSecondStep;
