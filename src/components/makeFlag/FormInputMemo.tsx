import styled from 'styled-components';
import img_checked from '../../contents/desktop/flag/icon_약속만들기_checked.svg';
import img_unchecked from '../../contents/desktop/flag/icon_약속만들기_Unchecked.svg';
import img_textarea from '../../contents/desktop/flag/Box_약속만들기_Memo_Unchecked.svg';
import React from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { makeFlagAtom } from '../../recoil/Atoms';

const Wrapper = styled.div`
  margin-bottom: 50px;
  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    //align-items: center;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
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
  width: 420px;
  margin-left: 41px;
  text-align: end;
  @media screen and (max-width: 500px) {
    margin-left: 0px;
    width: 259px;
  }
`;

const TextArea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  height: 129px;
  background-image: url('${img_textarea}');
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 14px;
  padding: 16px;
  margin-bottom: 8px;
  font-size: 18px;
  border: 0;
  resize: none;
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 500px) {
    font-size: 14px;
    height: 144px;
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

const FormInputMemo = () => {
  const { flagMemo } = useRecoilValue(makeFlagAtom);
  const setValue = useSetRecoilState(makeFlagAtom);

  const toggleDisable = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (flagMemo.isChecked) {
      setValue((v) => ({
        ...v,
        flagMemo: {
          content: flagMemo.content,
          isChecked: false,
        },
      }));
    } else {
      setValue((v) => ({
        ...v,
        flagMemo: {
          content: flagMemo.content,
          isChecked: true,
        },
      }));
    }
  };

  const onChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setValue((v) => ({
      ...v,
      flagMemo: {
        content: e.target.value,
        isChecked: flagMemo.isChecked,
      },
    }));
  };
  return (
    <Wrapper>
      <TitleWrapper>
        <RadioButton
          type="checkbox"
          checked={flagMemo.isChecked}
          onChange={toggleDisable}
        />
        <Title disable={!flagMemo.isChecked}>
          약속 메모를 입력해주세요.
        </Title>
      </TitleWrapper>
      <InputWrapper>
        <TextArea
          onChange={onChange}
          disabled={!flagMemo.isChecked}
          placeholder="약속 장소"
          maxLength={200}
          value={flagMemo.content}
        />
        <InputTextInfo disable={!flagMemo.isChecked}>
          최대 200자
        </InputTextInfo>
      </InputWrapper>
    </Wrapper>
  );
};

export default FormInputMemo;
