//import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DawnTimeTable from '../components/TimeTable/DawnTimeTable';
import MorningTimeTable from '../components/TimeTable/MorningTimeTable';
import AfternoonTimeTable from '../components/TimeTable/AfternoonTimeTable';
import NightTimeTable from '../components/TimeTable/NightTimeTable';

const Comfirmed_promise_main1 = styled.div`
  margin-top: 44px;
`;

const Comfirmed_promise_main1_text = styled.text`
  font-size: 28px;
  font-weight: 600;
  margin-left: 198px;
`;

const Comfirmed_promise_main2 = styled.div`
  margin-top: 7px;
`;

const Comfirmed_promise_main2_text = styled.text`
  font-size: 18px;
  font-weight: 400;
  margin-left: 198px;
  color: #999;
`;

const Comfirmed_promise_footer = styled.div`
  margin-top: 20px;
`;

const Comfirmed_promise_btn_box = styled.div`
  width: 208px;
  height: 49px;
  margin-left: 510px;
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
`;

function ComfirmedPromise() {
  return (
    <div>
      <Comfirmed_promise_main1>
        <Comfirmed_promise_main1_text>
          FLAG 미팅
        </Comfirmed_promise_main1_text>
      </Comfirmed_promise_main1>
      <Comfirmed_promise_main2>
        <Comfirmed_promise_main2_text>
          가능한 시간대를 스크롤해 입력해주세요.
        </Comfirmed_promise_main2_text>
      </Comfirmed_promise_main2>
      <MorningTimeTable></MorningTimeTable>
      <Comfirmed_promise_footer>
        <Comfirmed_promise_btn_box>
          <Comfirmed_promise_btn>
            완료하기
          </Comfirmed_promise_btn>
        </Comfirmed_promise_btn_box>
      </Comfirmed_promise_footer>
    </div>
  );
}
export default ComfirmedPromise;