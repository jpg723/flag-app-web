import styled from 'styled-components';
import FormUpdateName from '../components/makeFlag/FormUpdateName';
import FormUpdateFlagPlace from '../components/makeFlag/FormUpdateFlagPlace';
import FormUpdateMemo from '../components/makeFlag/FormUpdateMemo';
import {
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from 'recoil';
import { makeFlagAtom } from '../recoil/Atoms';
import {
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

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
  const { name, place, memo } = useLocation().state;
  const { flagId } = useParams();
  const { flagName, flagPlace, flagMemo } =
    useRecoilValue(makeFlagAtom);
  const setValue = useSetRecoilState(makeFlagAtom);
  const navigate = useNavigate();
  const resetValue = useResetRecoilState(makeFlagAtom);
  const token = sessionStorage.getItem('token');

  useEffect(() => {
    resetValue();
    setValue((v) => ({
      ...v,
      flagName: name,
      flagPlace: {
        content: place,
        isChecked: place !== '' ? true : false,
      },
      flagMemo: {
        content: memo,
        isChecked: memo !== '' ? true : false,
      },
    }));
  }, []);

  const sendData = () => {
    axios({
      url: `/flag/${flagId}`,
      method: 'patch',
      headers: {
        Authorization: token,
      },
      data: {
        name: flagName,
        place: flagPlace.content,
        memo: flagMemo.content,
      },
    })
      .then((response) => {
        console.log(response);
        navigate('/promise-view');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = () => {
    if (flagName !== '') {
      sendData();
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
