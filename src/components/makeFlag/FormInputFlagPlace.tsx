import styled from 'styled-components';
import img_checked from '../../contents/desktop/flag/icon_약속만들기_checked.svg';
import img_unchecked from '../../contents/desktop/flag/icon_약속만들기_Unchecked.svg';
import img_input from '../../contents/desktop/flag/Box_약속만들기_Selectplace.svg';
import React, { useState } from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
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
  width: 336px;
  margin-left: 41px;
  text-align: end;
  @media screen and (max-width: 500px) {
    margin-left: 0px;
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
  padding-left: 16px;
  margin-bottom: 8px;
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 500px) {
    height: 37px;
    font-size: 14px;
  }
`;

const InputTextInfo = styled.span<{ disable: boolean }>`
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  color: ${({ disable }) =>
    disable ? '#BCBCBC' : 'black'};
  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`;

const FormInputFlagPlace = () => {
  const { flagPlace } = useRecoilValue(makeFlagAtom);
  const setValue = useSetRecoilState(makeFlagAtom);
  const [isChecked, setIsChecked] = useState(false);

  const toggleDisable = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (flagPlace.isChecked) {
      setValue((v) => ({
        ...v,
        flagPlace: {
          content: flagPlace.content,
          isChecked: false,
        },
      }));
    } else {
      setValue((v) => ({
        ...v,
        flagPlace: {
          content: flagPlace.content,
          isChecked: true,
        },
      }));
    }
  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setValue((v) => ({
      ...v,
      flagPlace: {
        content: e.target.value,
        isChecked: flagPlace.isChecked,
      },
    }));
  };
  return (
    <Wrapper>
      <TitleWrapper>
        <RadioButton
          type="checkbox"
          checked={flagPlace.isChecked}
          onChange={toggleDisable}
        />
        <Title disable={!flagPlace.isChecked}>
          약속 장소를 정해주세요.
        </Title>
      </TitleWrapper>
      <InputWrapper>
        <Input
          disabled={!flagPlace.isChecked}
          onChange={onChange}
          placeholder="약속 장소"
          maxLength={15}
          value={flagPlace.content}
        />
        <InputTextInfo disable={!flagPlace.isChecked}>
          최대 15자
        </InputTextInfo>
      </InputWrapper>
    </Wrapper>
  );
};

export default FormInputFlagPlace;
