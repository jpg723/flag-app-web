import styled from 'styled-components';
import FormUpdateName from '../components/makeFlag/FormUpdateName';
import FormSelectFriends from '../components/makeFlag/FormSelectFriends';
import FormSelectDates from '../components/makeFlag/FormSelectDates';
import FormSelectCycle from '../components/makeFlag/FormSelectCycle';
import FormUpdateFlagPlace from '../components/makeFlag/FormUpdateFlagPlace';
import FormUpdateMemo from '../components/makeFlag/FormUpdateMemo';
import { useRecoilValue } from 'recoil';
import { makeFlagAtom } from '../recoil/Atoms';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 500px) {
    align-items: center;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  align-items: start;
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

/*입력 수정하기 버튼*/
const Flag_Meeting_edit_btn = styled.button`
  border: none;
  display: flex;
  margin: 10px auto 0 auto;
  padding: 12px 45px 10px 45px;
  width: 208px;
  height: 49px;
  border-radius: 99px;
  background: #8e6fff;
  font-size: 18px;
  font-weight: 600;
  color: var(--background-white, #fff);

  @media screen and (max-width: 500px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const FinishFlagUpdate = () => {
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
        <FormUpdateName />
        <FormUpdateFlagPlace />
        <FormUpdateMemo />
      </FormWrapper>
      <ButtonWrapper>
        <Flag_Meeting_edit_btn onClick={handleSubmit}>
            입력 수정하기
        </Flag_Meeting_edit_btn>
      </ButtonWrapper>
    </Container>
  );
};

export default FinishFlagUpdate;
