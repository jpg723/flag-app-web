import styled from 'styled-components';
import img_checked from '../contents/desktop/flag/icon_약속만들기_checked.svg';
import img_unchecked from '../contents/desktop/flag/icon_약속만들기_Unchecked.svg';
import React, { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { makeFlagAtom } from '../recoil/Atoms';

const Wrapper = styled.div`
  margin-bottom: 333px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 17px;
`;

const Title = styled.span<{ disable: boolean }>`
  line-height: 43px;
  font-size: 30px;
  font-weight: 700;
  color: ${({ disable }) =>
    disable ? '#BCBCBC' : 'black'};
`;

const RadioButton = styled.input`
  appearance: none;
  width: 42px;
  height: 42px;
  margin-right: 20px;
  background-image: url('${img_unchecked}');
  &:checked {
    background-image: url('${img_checked}');
  }
  background-size: cover;
  background-repeat: none;
`;

const InputWrapper = styled.div`
  margin-left: 62px;
`;

const Info = styled.span<{ disable: boolean }>`
  font-size: 22px;
  font-weight: 400;
  line-height: 32px;
  color: ${({ disable }) =>
    disable ? '#BCBCBC' : 'black'};
`;

const Select = styled.select`
  //width: Fixed(53px);
  //height: Fixed(35px);
  padding: 3px 14px 3px 14px;
  border-radius: 9px;
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
  margin-left: 17px;
  margin-right: 17px;
`;

const FormMinimumTime = () => {
  const { minimumTime } = useRecoilValue(makeFlagAtom);
  const setValue = useSetRecoilState(makeFlagAtom);
  const [disable, setDisable] = useState(true);

  const toggleDisable = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (disable) {
      setDisable(false);
    } else setDisable(true);
  };

  const onChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setValue((v) => ({
      ...v,
      minimumTime: Number(e.target.value),
    }));
  };
  return (
    <Wrapper>
      <TitleWrapper>
        <RadioButton
          type="checkbox"
          onChange={toggleDisable}
        />
        <Title disable={disable}>
          약속의 최소 시간을 정해주세요.
        </Title>
      </TitleWrapper>
      <InputWrapper>
        <Info disable={disable}>최소</Info>
        <Select
          disabled={disable}
          value={minimumTime}
          onChange={onChange}
        >
          <option value={'1'}>1</option>
          <option value={'2'}>2</option>
          <option value={'3'}>3</option>
          <option value={'4'}>4</option>
          <option value={'5'}>5</option>
        </Select>
        <Info disable={disable}>시간은 만나야 해요!</Info>
      </InputWrapper>
    </Wrapper>
  );
};

export default FormMinimumTime;
