import styled from 'styled-components';
import TimeTable from '../components/TimeTable/TimeTable';
import {
  Link,
  useParams,
  useLocation,
} from 'react-router-dom';
import {
  useRecoilValue,
  useSetRecoilState,
  useResetRecoilState,
} from 'recoil';
import { makeFlagAtom } from '../recoil/Atoms';
import axios from 'axios';
import { useEffect } from 'react';

const Comfirmed_promise_main1 = styled.div`
  margin-top: 44px;
`;

const Comfirmed_promise_main1_text = styled.text`
  font-size: 28px;
  font-weight: 600;
  margin-left: 198px;

  @media screen and (max-width: 500px) {
    margin-left: 23px;
  }
`;

const Comfirmed_promise_main2 = styled.div`
  margin-top: 7px;

  @media screen and (max-width: 500px) {
    margin-bottom: 50px;
  }
`;

const Comfirmed_promise_main2_text = styled.text`
  font-size: 16px;
  font-weight: 400;
  margin-left: 198px;
  color: #999;

  @media screen and (max-width: 500px) {
    margin-left: 23px;
  }
`;

const Comfirmed_promise_footer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const Comfirmed_promise_btn_box = styled.div`
  width: 208px;
  height: 49px;
  display: flex;
  justify-content: center;
`;

const Comfirmed_promise_btn = styled.button`
  border: none;
  width: 208px;
  height: 49px;
  border-radius: 99px;
  background: #8e6fff;
  text-align: center;
  font-weight: 600;
  font-size: 18px;
  color: white;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 500px) {
    margin-bottom: 78px;
  }
`;

function GuestTimeInput() {
  const { flagId } = useParams();
  const { flagName, timeSlot, dates } = useLocation().state;
  //const setDates = useSetRecoilState(SelectedDatesAtom);
  //const resetDates = useResetRecoilState(SelectedDatesAtom);
  const { selectedDates } = useRecoilValue(makeFlagAtom);
  const setValue = useSetRecoilState(makeFlagAtom);
  const resetValue = useResetRecoilState(makeFlagAtom);

  useEffect(() => {
    setValue((v) => ({ ...v, selectedDates: dates }));
  }, []);

  const { selectedCell } = useRecoilValue(makeFlagAtom);
  const token = sessionStorage.getItem('token');

  const onSubmit = () => {
    console.log(selectedCell);
    axios({
      url: `/flag/guest/${flagId}`,
      method: 'post',
      headers: {
        Authorization: token,
      },
      data: {
        possibleDates: selectedCell,
      },
    })
      .then((response) => {
        {
          console.log(response);
          resetValue();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Comfirmed_promise_main1>
        <Comfirmed_promise_main1_text>
          {flagName}
        </Comfirmed_promise_main1_text>
      </Comfirmed_promise_main1>
      <Comfirmed_promise_main2>
        <Comfirmed_promise_main2_text>
          가능한 시간대를 스크롤해 입력해주세요.
        </Comfirmed_promise_main2_text>
      </Comfirmed_promise_main2>
      {timeSlot === 6 ? (
        <TimeTable cycle={'morning'} />
      ) : null}
      {timeSlot === 12 ? (
        <TimeTable cycle={'afternoon'} />
      ) : null}
      {timeSlot === 18 ? (
        <TimeTable cycle={'evening'} />
      ) : null}
      {timeSlot === 0 ? <TimeTable cycle={'dawn'} /> : null}
      <Comfirmed_promise_footer>
        <Comfirmed_promise_btn_box>
          <Link to="/promise-view">
            <Comfirmed_promise_btn onClick={onSubmit}>
              완료하기
            </Comfirmed_promise_btn>
          </Link>
        </Comfirmed_promise_btn_box>
      </Comfirmed_promise_footer>
    </div>
  );
}
export default GuestTimeInput;
