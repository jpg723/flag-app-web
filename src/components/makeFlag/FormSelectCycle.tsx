import styled from 'styled-components';
import ic_step4 from '../../contents/desktop/flag/데스크탑_Ic_약속만들기_Step4.svg';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { makeFlagAtom } from '../../recoil/Atoms';

const Wrapper = styled.div`
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  margin-bottom: 27px;
  gap: 13px;
  @media screen and (max-width: 500px) {
    gap: 8px;
  }
`;

const Title = styled.div`
  line-height: normal;
  font-size: 22px;
  font-weight: 700;
  text-align: center;
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

const SelectWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 41px;
  gap: 12px;
  @media screen and (max-width: 500px) {
    margin-left: 0px;
  }
`;

const Select = styled.button<{ isSelected: boolean }>`
  display: flex;
  width: 332px;
  height: 42px;
  padding: 8px 57px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 14px;
  border: ${(props) =>
    props.isSelected ? `1.5px solid #6041FF` : 'none'};
  background: #fff;
  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.25);
  font-size: 18px;
  font-weight: 500;
  @media screen and (max-width: 500px) {
    width: 259px;
    height: 37px;
    font-size: 14px;
    padding: 0px;
  }
`;

const FormSelectCycle = () => {
  const { cycle } = useRecoilValue(makeFlagAtom);
  const setValue = useSetRecoilState(makeFlagAtom);

  const onClick = (value: number) => {
    setValue((v) => ({
      ...v,
      cycle: value,
    }));
  };
  return (
    <Wrapper>
      <TitleWrapper>
        <Image src={ic_step4} />
        <Title>약속 시간을 정해주세요.</Title>
      </TitleWrapper>
      <SelectWrapper>
        <Select
          isSelected={cycle === 6 ? true : false}
          onClick={() => onClick(6)}
        >{`오전 (6:00 ~ 11:59)`}</Select>
        <Select
          isSelected={cycle === 12 ? true : false}
          onClick={() => onClick(12)}
        >{`오후 (12:00 ~ 17:59)`}</Select>
        <Select
          isSelected={cycle === 18 ? true : false}
          onClick={() => onClick(18)}
        >{`저녁 (18:00 ~ 23:59)`}</Select>
        <Select
          isSelected={cycle === 0 ? true : false}
          onClick={() => onClick(0)}
        >{`새벽 (24:00 ~ 5:59)`}</Select>
      </SelectWrapper>
    </Wrapper>
  );
};

export default FormSelectCycle;
