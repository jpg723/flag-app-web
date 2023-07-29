import styled from 'styled-components';
import ic_step1 from '../contents/desktop/flag/Ic_약속만들기_Step1.svg';
import img_input from '../contents/desktop/flag/Box_약속만들기_Nameappoint.svg';
import { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { makeFlagAtom } from '../recoil/Atoms';

const Wrapper = styled.div`
  margin-bottom: 333px;
`;

const TitleWrapper = styled.div`
  display: inline-flex;
  padding: 5px 0px;
  align-items: flex-end;
  margin-bottom: 14px;
  gap: 13px;
`;

const Title = styled.div`
  line-height: normal;
  font-size: 22px;
  font-weight: 700;
  text-align: center;
`;

const Image = styled.img`
  width: 35px;
  height: 35px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 336px;
  margin-left: 48px;
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

interface IProps {
  isFlag: boolean;
}

const FormInputName = ({ isFlag }: IProps) => {
  const setValue = useSetRecoilState(makeFlagAtom);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setValue((v) => ({ ...v, flagName: e.target.value }));
  };
  return (
    <Wrapper>
      <TitleWrapper>
        <Image src={ic_step1} />
        {isFlag ? (
          <Title>약속 이름을 정해주세요.</Title>
        ) : (
          <Title>FLEX 이름을 정해주세요.</Title>
        )}
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

export default FormInputName;
