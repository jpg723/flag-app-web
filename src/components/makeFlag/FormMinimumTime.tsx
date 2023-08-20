import styled from 'styled-components';
import ic_step5 from '../../contents/desktop/flag/Ic_약속만들기_Step5.svg';
import React, { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { makeFlagAtom } from '../../recoil/Atoms';

const Wrapper = styled.div`
  margin-bottom: 100px;
  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    //align-items: center;
  }
`;

const TitleWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  gap: 13px;
  @media screen and (max-width: 500px) {
    gap: 8px;
  }
`;

const Title = styled.span`
  font-size: 22px;
  font-weight: 700;
  line-height: normal;
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

const InputWrapper = styled.div`
  margin-left: 41px;
  @media screen and (max-width: 500px) {
    //width: 259px;
    margin-left: 0px;
    padding-left: 24px;
  }
`;

const Info = styled.span`
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;

const Select = styled.select`
  padding: 3px 14px 3px 14px;
  border-radius: 9px;
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
  margin-left: 14px;
  margin-right: 14px;
  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;

const FormMinimumTime = () => {
  const { minimumTime } = useRecoilValue(makeFlagAtom);
  const setValue = useSetRecoilState(makeFlagAtom);

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
        <Image src={ic_step5} />
        <Title>약속의 최소 시간을 정해주세요.</Title>
      </TitleWrapper>
      <InputWrapper>
        <Info>최소</Info>
        <Select
          value={minimumTime.toString()}
          onChange={onChange}
        >
          <option value={'1'}>1</option>
          <option value={'2'}>2</option>
          <option value={'3'}>3</option>
          <option value={'4'}>4</option>
          <option value={'5'}>5</option>
          <option value={'6'}>6</option>
        </Select>
        <Info>시간은 만나야 해요!</Info>
      </InputWrapper>
    </Wrapper>
  );
};

export default FormMinimumTime;
