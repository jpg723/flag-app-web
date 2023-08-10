import styled from 'styled-components';
import img_checked from '../../contents/desktop/flag/icon_약속만들기_checked.svg';
import img_unchecked from '../../contents/desktop/flag/icon_약속만들기_Unchecked.svg';
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

const Title = styled.span<{ disable: boolean }>`
  font-size: 22px;
  font-weight: 700;
  line-height: normal;
  color: ${({ disable }) =>
    disable ? '#BCBCBC' : 'black'};
  @media screen and (max-width: 500px) {
    font-size: 17px;
  }
`;

const RadioButton = styled.input`
  appearance: none;
  width: 28px;
  height: 28px;
  margin: 0px;
  background-image: url('${img_unchecked}');
  &:checked {
    background-image: url('${img_checked}');
  }
  background-size: cover;
  background-repeat: none;
  @media screen and (max-width: 500px) {
    width: 22px;
    height: 22px;
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

const Info = styled.span<{ disable: boolean }>`
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
  color: ${({ disable }) =>
    disable ? '#BCBCBC' : 'black'};
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

  const toggleDisable = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (minimumTime.isChecked) {
      setValue((v) => ({
        ...v,
        minimumTime: {
          content: minimumTime.content,
          isChecked: false,
        },
      }));
    } else {
      setValue((v) => ({
        ...v,
        minimumTime: {
          content: minimumTime.content,
          isChecked: true,
        },
      }));
    }
  };

  const onChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setValue((v) => ({
      ...v,
      minimumTime: {
        content: Number(e.target.value),
        isChecked: minimumTime.isChecked,
      },
    }));
  };
  return (
    <Wrapper>
      <TitleWrapper>
        <RadioButton
          type="checkbox"
          checked={minimumTime.isChecked}
          onChange={toggleDisable}
        />
        <Title disable={!minimumTime.isChecked}>
          약속의 최소 시간을 정해주세요.
        </Title>
      </TitleWrapper>
      <InputWrapper>
        <Info disable={!minimumTime.isChecked}>최소</Info>
        <Select
          disabled={!minimumTime.isChecked}
          value={minimumTime.content.toString()}
          onChange={onChange}
        >
          <option value={'1'}>1</option>
          <option value={'2'}>2</option>
          <option value={'3'}>3</option>
          <option value={'4'}>4</option>
          <option value={'5'}>5</option>
        </Select>
        <Info disable={!minimumTime.isChecked}>
          시간은 만나야 해요!
        </Info>
      </InputWrapper>
    </Wrapper>
  );
};

export default FormMinimumTime;
