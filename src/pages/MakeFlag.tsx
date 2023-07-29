import styled from 'styled-components';
import FormInputName from '../components/FormInputName';
import FormSelectFriends from '../components/FormSelectFriends';
import FormSelectDates from '../components/FormSelectDates';
import FormInputFlagPlace from '../components/FormInputFlagPlace';
import FormInputMemo from '../components/FormInputMemo';
import img_btn from '../contents/desktop/flag/Btn_약속만들기_Createappoint.svg';
import FormMinimumTime from '../components/FormMinimumTime';
import { useRecoilValue } from 'recoil';
import { makeFlagAtom } from '../recoil/Atoms';

const Wrapper = styled.div`
  //position: absolute;
  padding: 5px 0px 5px 0px;
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
  border: none;
  cursor: pointer;
`;

const MakeFlag = () => {
  const result = useRecoilValue(makeFlagAtom);

  const handleSubmit = () => {
    console.log(result);
  };

  return (
    <>
      <Wrapper>
        <FormInputName isFlag={true} />
        <FormSelectFriends />
        <FormSelectDates isFlag={true} />
        <FormMinimumTime />
        <FormInputFlagPlace />
        <FormInputMemo />
      </Wrapper>
      <ButtonWrapper>
        <Button onClick={handleSubmit} />
      </ButtonWrapper>
    </>
  );
};

export default MakeFlag;
