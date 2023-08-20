//import { Link } from 'react-router-dom';
import styled from 'styled-components';
import TimeTable from '../components/TimeTable/TimeTable';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { makeFlagAtom } from '../recoil/Atoms';

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
`;

function ComfirmedPromise() {
  const { cycle, selectedCell } =
    useRecoilValue(makeFlagAtom);

  const handleSubmit = () => {
    console.log(selectedCell);
  };

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
      {cycle === 6 ? <TimeTable cycle={'morning'} /> : null}
      {cycle === 12 ? (
        <TimeTable cycle={'afternoon'} />
      ) : null}
      {cycle === 18 ? (
        <TimeTable cycle={'evening'} />
      ) : null}
      {cycle === 0 ? <TimeTable cycle={'dawn'} /> : null}
      <Comfirmed_promise_footer>
        <Comfirmed_promise_btn_box>
          <Link to="/makeFlagFinish">
            <Comfirmed_promise_btn onClick={handleSubmit}>
              완료하기
            </Comfirmed_promise_btn>
          </Link>
        </Comfirmed_promise_btn_box>
      </Comfirmed_promise_footer>
    </div>
  );
}
export default ComfirmedPromise;
