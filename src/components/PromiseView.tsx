//import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Notifications } from '../contents/desktop/flag/notification.svg';
import { ReactComponent as Arrow1 } from '../contents/desktop/flag/arrow_back_ios_new.svg';
import { ReactComponent as Flag } from '../contents/desktop/flag/flag.svg';

const PromiseView_main = styled.div`
  display: flex;
`;

const PromiseView_flag_main = styled.div`
  margin-left: 90px;
`;

const PromiseView_title1 = styled.div`
  margin-top: 102px;
  font-size: 40px;
  font-weight: 600;
`;

const PromiseView_flag_box = styled.div`
  width: 457px;
  margin-top: 80px;
`;

const PromiseView_line = styled.div`
  background: rgba(0, 0, 0, 0.61);
  width: 2px;
  height: 607px;
  margin: 203px 65px 100px;
`;

const PromiseView_promise_main = styled.div``;

const PromiseView_title2 = styled.div`
  margin-top: 102px;
  font-size: 40px;
  font-weight: 600;
  display: flex;
`;

const PromiseView_title_icon = styled.div`
  margin-right: 9px;
`;

const PromiseView_make_promise_box = styled.div`
  margin-left: 223px;
`;

const PromiseView_make_promise_btn = styled.button`
  border: none;
  border-radius: 0px 99px 99px 0px;
  width: 123px;
  height: 47px;
  background: #8e6fff;
  box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.25);
  font-size: 16px;
  font-weight: 600;
  color: white;
  display: flex;
  padding: 12px 8px 18px 10px;
  margin-top: 5px;
`;

const Arrow1_icon = styled.div`
  width: 17px;
  height: 17px;
  padding-top: 2px;
  padding-left: 3px;
`;

const Flag_box = styled.div`
  width: 457px;
  border-radius: 14px;
  border: 2px solid var(--flag, #6041ff);
  margin-bottom: 23px;
`;

const Flag_box_header = styled.div`
  margin-top: 14px;
  margin-left: 18px;
  display: flex;
`;

const Flag_box_title = styled.div`
  font-size: 21px;
  font-weight: 600;
  margin-left: 7px;
`;

const Flag_box_dday = styled.div`
  border-radius: 102px;
  background: #e2dbff;
  width: 83px;
  text-align: center;
  padding-top: 1px;
  font-size: 18px;
  font-weight: 700;
  margin-left: auto;
  margin-right: 16px;
`;

const Flag_box_content = styled.div`
  margin-top: 10px;
  margin-left: 18px;
  font-size: 20px;
  font-weight: 400;
`;

const Flag_box_people_count = styled.div`
  margin-top: 9px;
  margin-left: 18px;
  margin-bottom: 17px;
  font-size: 20px;
  font-weight: 400;
  color: #676767;
  font-size: 16px;
  font-weight: 500;
`;

function PromiseView() {
  return (
    <PromiseView_main>
      <PromiseView_flag_main>
        <PromiseView_title1>플래그</PromiseView_title1>
        <PromiseView_flag_box>
          {/*약속 박스 */}
          <Flag_box>
            <Flag_box_header>
              <Flag></Flag>
              <Flag_box_title>
                플래그 2차 회의
              </Flag_box_title>
              <Flag_box_dday>D-DAY</Flag_box_dday>
            </Flag_box_header>
            <Flag_box_content>
              2023년 7월 15일 - 2023년 7월 22일
            </Flag_box_content>
            <Flag_box_content>
              13:00 ~ 18:00
            </Flag_box_content>
            <Flag_box_people_count>
              참여인원 12명
            </Flag_box_people_count>
          </Flag_box>
        </PromiseView_flag_box>
      </PromiseView_flag_main>
      <PromiseView_line></PromiseView_line>
      <PromiseView_promise_main>
        <PromiseView_title2>
          <PromiseView_title_icon>
            <Notifications></Notifications>
          </PromiseView_title_icon>
          약속신청
          <PromiseView_make_promise_box>
            <PromiseView_make_promise_btn>
              약속 만들기
              <Arrow1_icon>
                <Arrow1></Arrow1>
              </Arrow1_icon>
            </PromiseView_make_promise_btn>
          </PromiseView_make_promise_box>
        </PromiseView_title2>
        <PromiseView_flag_box>
          {/*약속 박스 */}
          <Flag_box>
            <Flag_box_header>
              <Flag></Flag>
              <Flag_box_title>
                플래그 2차 회의
              </Flag_box_title>
              <Flag_box_dday>D-DAY</Flag_box_dday>
            </Flag_box_header>
            <Flag_box_content>
              2023년 7월 15일 - 2023년 7월 22일
            </Flag_box_content>
            <Flag_box_content>
              13:00 ~ 18:00
            </Flag_box_content>
            <Flag_box_content>
              역삼역 워크토크
            </Flag_box_content>
            <Flag_box_people_count>
              참여인원 12명
            </Flag_box_people_count>
          </Flag_box>
        </PromiseView_flag_box>
      </PromiseView_promise_main>
    </PromiseView_main>
  );
}
export default PromiseView;
