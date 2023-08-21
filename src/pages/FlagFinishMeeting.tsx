//import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Unsettled_icon } from '../contents/desktop/flag/Ic_전체약속뷰_Unsettled.svg';

const Flag_Meeting_header = styled.div`
  margin-top: 44px;
  margin-left: 198px;
  margin-bottom: 9px;
  font-size: 25px;
  font-weight: 600;
  
  @media screen and (max-width: 500px) {
    margin-left: 23px;
  }
`;

const Flag_Meeting_content = styled.div`
  margin-top: 10px;
  margin-left: 198px;
  font-size: 15px;
  font-weight: 500;

  @media screen and (max-width: 500px) {
    margin-left: 23px;
  }
`;

/*타임테이블+참여자박스*/
const Flag_Meeting_main_box = styled.div`
  border: 1px solid black;
  width: 870px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 33px;
  display: flex;
  @media screen and (max-width: 500px) {
    margin-left: auto;
    margin-right: auto;
    flex-direction: column; 
    width: 435px;
  }
`;

/*타임테이블*/
const TimeTable_box = styled.div`
  border: 1px solid red;
  width: 480px;
  height: 417.33px;

  @media screen and (max-width: 500px) {
    width: 435px;
  }
`;

/*참여자 박스*/
const Flag_Meeting_main_content = styled.div`
  border: 1px solid black;
  margin-left: auto;
  margin-right: 0px;

  @media screen and (max-width: 500px) {
    margin-top: 20px;
    margin-left: 0px;
    flex-direction: column; 
  }
`;

/*가능한 참여자*/
const Flag_Meeting_participants_box = styled.div`
  width: 365px;
`;

/*불가능한 참여자*/
const Flag_Meeting_non_participants_box = styled.div`
  margin-top: 20px;
  width: 365px;
`;

/*미응답 참여자*/
const Flag_Meeting_non_set_box = styled.div`
  margin-top: 20px;
  width: 365px;
`;

const Nonset_text = styled.div`
  display: flex;
  font-size: 15px;
  font-weight: 500;
  margin-top: 3px;
  margin-left: 6px;
`;

const Participants_box_header = styled.div`
  display: flex;
  font-size: 15px;
  font-weight: 500;
`;

/*초록공*/
const Participants_box_icon1 = styled.div`
  border: none;
  background-color: #85ff72;
  width: 18px;
  height: 18px;
  border-radius: 20px;
`;

/*빨간공*/
const Participants_box_icon2 = styled.div`
  border: none;
  background-color: #ff4b4b;
  width: 18px;
  height: 18px;
  border-radius: 20px;
`;

const Participants_box_content = styled.div`
  margin-left: 10px;
  margin-right: 2px;
`;

const Participants_people_box = styled.div`
  width: 365px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Participants_people_content_box = styled.div`
  margin-left: 16px;
  margin-top: 15px;
  width: 34px;
  height: 59px;
`;

const Participants_people_profile = styled.div`
  border: none;
  width: 34px;
  height: 34px;
  border-radius: 20px;
  background-color: #d9d9d9;
`;

const Participants_people_id = styled.div`
  font-size: 10px;
  font-weight: 400;
  text-align: center;
  margin-top: 11px;
`;

/*입력 수정하기 버튼*/
const Flag_Meeting_edit_btn = styled.button`
  border: none;
  display: flex;
  margin: 47px auto 0 auto;
  padding: 10px 45px;
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

function FlagFinishMeeting() {
  return (
    <div>
      <Flag_Meeting_header>FLAG 미팅</Flag_Meeting_header>
      <Flag_Meeting_content>
        2023년 7월 15일 - 2023년 7월 22일
      </Flag_Meeting_content>
      <Flag_Meeting_content>
        09:00 ~ 22:00
      </Flag_Meeting_content>
      <Flag_Meeting_content>
        역삼역 워크토크
      </Flag_Meeting_content>
      <Flag_Meeting_main_box>
        <TimeTable_box></TimeTable_box>
        <Flag_Meeting_main_content>
          {/*가능한 참여자 */}
          <Flag_Meeting_participants_box>
            <Participants_box_header>
              <Participants_box_content>
                7월 20일
              </Participants_box_content>
              <Participants_box_content>
                12:00 - 14:00
              </Participants_box_content>
              에 가능한 참여자
            </Participants_box_header>
            <Participants_people_box>
              {/*참여자 정보*/}
              <Participants_people_content_box>
                <Participants_people_profile></Participants_people_profile>
                <Participants_people_id>
                  닉네임
                </Participants_people_id>
              </Participants_people_content_box>
            </Participants_people_box>
          </Flag_Meeting_participants_box>
          {/*입력 수정하기 버튼 */}
          <Flag_Meeting_edit_btn>
            입력 수정하기
          </Flag_Meeting_edit_btn>
        </Flag_Meeting_main_content>
      </Flag_Meeting_main_box>
    </div>
  );
}
export default FlagFinishMeeting;
