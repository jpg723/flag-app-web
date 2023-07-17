import styled from 'styled-components';
import img_checked from '../contents/grid/icon_약속만들기_checked.svg';
import img_unchecked from '../contents/grid/icon_약속만들기_Unchecked.svg';
import img_textarea from '../contents/grid/Box_약속만들기_Explanation.svg';
import React, { useState } from 'react';

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
  width: 420px;
  margin-left: 62px;
  text-align: end;
`;

const TextArea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  height: 129px;
  background-image: url('${img_textarea}');
  background-repeat: no-repeat;
  border-radius: 14px;
  padding: 16px;
  margin-bottom: 8px;
  font-size: 18px;
  border: 0;
  resize: none;
  &:focus {
    outline: none;
  }
`;

const InputTextInfo = styled.span<{ disable: boolean }>`
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  color: ${({ disable }) =>
    disable ? '#BCBCBC' : 'black'};
`;

const FormInputMemo = () => {
  const [memo, setMemo] = useState('');
  const [disable, setDisable] = useState(true);

  const toggleDisable = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (disable) {
      setDisable(false);
    } else setDisable(true);
  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setMemo(e.target.value);
  };
  return (
    <Wrapper>
      <TitleWrapper>
        <RadioButton
          type="checkbox"
          onChange={toggleDisable}
        />
        <Title disable={disable}>
          약속 메모를 입력해주세요.
        </Title>
      </TitleWrapper>
      <InputWrapper>
        <TextArea
          disabled={disable}
          placeholder="약속 장소"
          maxLength={200}
        />
        <InputTextInfo disable={disable}>
          최대 200자
        </InputTextInfo>
      </InputWrapper>
    </Wrapper>
  );
};

export default FormInputMemo;
