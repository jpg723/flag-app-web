import styled from 'styled-components';
import ic_step3 from '../contents/grid/Ic_약속만들기_Step3.svg';
import RadioButton from './RadioButton';
import { useState } from 'react';

const Wrapper = styled.div`
  margin-bottom: 150px;
`;

const RadioWrapper = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
  margin-left: 45px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Image = styled.img`
  width: 42px;
  height: 43px;
  margin-right: 5px;
`;

const FlagThirdStep = () => {
  const [select, setSelect] = useState('INDIVIDUAL');
  const handleOnChange = (value: string) => {
    setSelect(value);
    console.log(select);
  };
  return (
    <Wrapper>
      <Title>
        <Image src={ic_step3} />
        <h2>약속 날짜와 시간을 정해주세요.</h2>
      </Title>
      <RadioWrapper>
        <RadioButton
          name="select"
          value="INDIVIDUAL"
          defaultChecked={true}
          onClick={() => handleOnChange('INDIVIDUAL')}
        >
          개별 선택
        </RadioButton>
        <RadioButton
          name="select"
          value="PERIOD"
          defaultChecked={false}
          onClick={() => handleOnChange('PERIOD')}
        >
          기간 선택
        </RadioButton>
      </RadioWrapper>
    </Wrapper>
  );
};

export default FlagThirdStep;
