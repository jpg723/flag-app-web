import styled from 'styled-components';
import FormInputName from '../components/makeFlag/FormInputName';
import FormSelectFriends from '../components/makeFlag/FormSelectFriends';
import FormSelectDates from '../components/makeFlag/FormSelectDates';
import FormSelectCycle from '../components/makeFlag/FormSelectCycle';
import FormInputFlagPlace from '../components/makeFlag/FormInputFlagPlace';
import FormInputMemo from '../components/makeFlag/FormInputMemo';
import img_btn from '../contents/desktop/flag/Btn_약속만들기_Createappoint.svg';
import img_btn_mobile from '../contents/mobile/flag/모바일_Btn_약속만들기_Complete.svg';
import FormMinimumTime from '../components/makeFlag/FormMinimumTime';
import { useRecoilValue } from 'recoil';
import { makeFlagAtom } from '../recoil/Atoms';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 500px) {
    align-items: center;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  @media screen and (max-width: 500px) {
    align-items: center;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 49px;
`;

const Button = styled.button`
  width: 208px;
  height: 49px;
  background-image: url('${img_btn}');
  background-color: transparent;
  border: none;
  cursor: pointer;
  @media screen and (max-width: 500px) {
    width: 223px;
    height: 39px;
    background-image: url('${img_btn_mobile}');
  }
`;

const MakeFlag = () => {
  const { flagName, checkedFriends, selectedDates, cycle } =
    useRecoilValue(makeFlagAtom);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (
      flagName !== '' &&
      checkedFriends.length > 0 &&
      selectedDates.length > 0 &&
      cycle > -1
    ) {
      navigate('/comfirmed-promise', { replace: true });
    } else console.log('필수 입력을 채워주세요');
  };

  return (
    <Container>
      <FormWrapper>
        <FormInputName />
        <FormSelectFriends />
        <FormSelectDates />
        <FormSelectCycle />
        <FormMinimumTime />
        <FormInputFlagPlace />
        <FormInputMemo />
      </FormWrapper>
      <ButtonWrapper>
        <Button onClick={handleSubmit} />
      </ButtonWrapper>
    </Container>
  );
};

export default MakeFlag;
