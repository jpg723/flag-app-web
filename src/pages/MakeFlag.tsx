import styled from 'styled-components';
import FormInputName from '../components/FormInputName';
import FormSelectFriends from '../components/FormSelectFriends';
import FormSelectDates from '../components/FormSelectDates';
import FormInputFlagPlace from '../components/FormInputFlagPlace';
import FormInputMemo from '../components/FormInputMemo';
import img_btn from '../contents/desktop/flag/Btn_약속만들기_Createappoint.svg';
import img_btn_mobile from '../contents/mobile/flag/모바일_Btn_약속만들기_Complete.svg';
import FormMinimumTime from '../components/FormMinimumTime';
import { useRecoilValue } from 'recoil';
import { makeFlagAtom } from '../recoil/Atoms';
import { useNavigate, Link } from 'react-router-dom';

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
  //position: absolute;
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
  const result = useRecoilValue(makeFlagAtom);
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log(result);
    navigate('/makeFlagFinish');
  };

  return (
    <Container>
      <FormWrapper>
        <FormInputName />
        <FormSelectFriends />
        <FormSelectDates />
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
