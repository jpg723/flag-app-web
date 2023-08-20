//import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Arrow1 } from '../contents/desktop/flag/arrow_back_ios_new.svg';
import { ReactComponent as Flag } from '../contents/desktop/flag/flag.svg';
import { Link } from 'react-router-dom';
import FlagBox1 from '../components/FlagBox/FlagBox1';
import FlagBox2 from '../components/FlagBox/FlagBox2';

const PromiseView_main = styled.div`
  display: flex;
  justify-content: center;
`;

/*플래그*/
const PromiseView_flag_main = styled.div`
`;
/*플래그 제목*/
const PromiseView_title1 = styled.div`
  margin-top: 40px;
  height: 42px;
  font-size: 32px;
  font-weight: 600;
`;
/*플래그 약속 박스*/
const PromiseView_flag_box = styled.div`
  margin-top: 40px;
`;
/*가운데 구분선*/
const PromiseView_line = styled.div`
  background: rgba(0, 0, 0, 0.61);
  width: 2px;
  height: 607px;
  margin: 80px 65px 100px;
`;
/*알림 박스*/
const PromiseView_promise_main = styled.div``;
/*알림 제목*/
const PromiseView_title2 = styled.div`
  margin-top: 40px;
  font-size: 32px;
  font-weight: 600;
  display: flex;
`;
/*약속 만들기 버튼 박스*/
const PromiseView_make_promise_box = styled.div`
  margin-left: 223px;
`;
/*약속 만들기 버튼*/
const PromiseView_make_promise_btn = styled.button`
  border: none;
  border-radius: 0px 99px 99px 0px;
  width: 123px;
  height: 42px;
  background: #8e6fff;
  box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.25);
  font-size: 16px;
  font-weight: 600;
  color: white;
  display: flex;
  padding: 10px 8px 10px 10px;
  z-index: 1;
  position: relative;
`;
/*약속 만들기 버튼 안 화살표*/
const Arrow1_icon = styled.div`
  width: 17px;
  height: 17px;
  padding-top: 2px;
  padding-left: 3px;
`;

function PromiseView() {
  return (
    <PromiseView_main>
      <PromiseView_flag_main>
        <PromiseView_title1>플래그</PromiseView_title1>
        <PromiseView_flag_box>
          {/*약속 확정 박스*/}
          <FlagBox1></FlagBox1>
        </PromiseView_flag_box>
      </PromiseView_flag_main>
      {/*구분선*/}
      <PromiseView_line></PromiseView_line>
      <PromiseView_promise_main>
        <PromiseView_title2>
          약속신청
          <PromiseView_make_promise_box>
            <Link to="/makeFlag">
              <PromiseView_make_promise_btn>
                약속 만들기
                <Arrow1_icon>
                  <Arrow1></Arrow1>
                </Arrow1_icon>
              </PromiseView_make_promise_btn>
            </Link>
          </PromiseView_make_promise_box>
        </PromiseView_title2>
        <PromiseView_flag_box>
          {/*약속 진행중 박스*/}
          <FlagBox1></FlagBox1>
          <FlagBox2></FlagBox2>
        </PromiseView_flag_box>
      </PromiseView_promise_main>
    </PromiseView_main>
  );
}
export default PromiseView;
