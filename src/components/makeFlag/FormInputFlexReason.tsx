import styled from 'styled-components';
import ic_step5 from '../contents/desktop/flex/Ic_약속만들기_Step5.svg';
import img_textarea from '../contents/desktop/flex/Box_약속만들기_Explanation.svg';
import { useState } from 'react';

const Wrapper = styled.div`
  margin-bottom: 100px;
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

const InputTextInfo = styled.span`
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
`;

const FormInputFlexReason = () => {
  const [reason, setReason] = useState('');

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setReason(e.target.value);
  };
  return (
    <Wrapper>
      <TitleWrapper>
        <Image src={ic_step5} />
        <Title>FLEX 이유를 전달해주세요.</Title>
      </TitleWrapper>
      <InputWrapper>
        <TextArea maxLength={200} />
        <InputTextInfo>최대 200자</InputTextInfo>
      </InputWrapper>
    </Wrapper>
  );
};

export default FormInputFlexReason;
