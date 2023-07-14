import styled from 'styled-components';
import ic_step1 from '../contents/grid/Ic_약속만들기_Step1.svg';
import img_input from '../contents/grid/Box_약속만들기_Nameappoint.svg';
import { useState } from 'react';

const Wrapper = styled.div`
  margin-bottom: 333px;
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

const InputWrapper = styled.div`
  width: 336px;
  margin-left: 62px;
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
  padding-left: 16px;
  margin-bottom: 8px;
  &:focus {
    outline: none;
  }
`;

const InputTextInfo = styled.span`
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
`;

const FlagFirstStep = () => {
  const [flexName, setFlexName] = useState('');

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setFlexName(e.target.value);
  };
  return (
    <Wrapper>
      <TitleWrapper>
        <Image src={ic_step1} />
        <Title>약속 이름을 정해주세요.</Title>
      </TitleWrapper>
      <InputWrapper>
        <Input
          onChange={onChange}
          placeholder="약속 이름"
          maxLength={15}
        />
        <InputTextInfo>최대 15자</InputTextInfo>
      </InputWrapper>
    </Wrapper>
  );
};

export default FlagFirstStep;
