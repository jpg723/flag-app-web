//import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Unsettled_icon } from '../contents/desktop/flag/Ic_전체약속뷰_Unsettled.svg';
import TimeTable from '../components/TimeTable/TimeTable';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { SelectedDatesAtom } from '../recoil/Atoms';
import GuestTimeTable from '../components/TimeTable/GuestTimeTable';

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
  //border: 1px solid black;
  width: 870px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 33px;
  display: flex;
  @media screen and (max-width: 500px) {
    margin-left: 0;
    margin-right: 0;
    flex-direction: column;
    align-items: center;
    width: 435px;
  }
`;

/*타임테이블*/
const TimeTable_box = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid red;
  width: 480px;
  height: 417.33px;

  @media screen and (max-width: 500px) {
    width: 350px;
  }
`;

/*참여자 박스*/
const Flag_Meeting_main_content = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  @media screen and (max-width: 500px) {
    margin-top: 20px;
    padding: 0px;
    align-items: center;
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
  margin-top: 47px;
  padding: 10px 45px;
  width: 208px;
  height: 49px;
  border-radius: 99px;
  background: #8e6fff;
  font-size: 18px;
  font-weight: 600;
  color: var(--background-white, #fff);

  @media screen and (max-width: 500px) {
  }
`;

function FlagMeeting() {
  const location = useLocation();
  const flagId = location.state.id;
  const flagName = location.state.name;
  const flagPlace = location.state.place;
  const token = sessionStorage.getItem('token');

  const [ableCells, setAbleCells] = useState<number[]>([]); // 가능한 셀들 번호 중복 허용해서
  const [acceptUser, setAcceptUser] = useState<string[]>(
    [],
  );
  const [dates, setDates] = useRecoilState(
    SelectedDatesAtom,
  );
  const [noneResponseUsers, setNoneResponseUsers] =
    useState<string[]>([]);
  const [timeSlot, setTimeSlot] = useState(-1);
  const [userTotalCount, setUserTotalCount] = useState(-1);

  useEffect(() => {
    axios({
      url: `/flag/${flagId}/show`,
      method: 'get',
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        console.log(response.data);
        setAbleCells(response.data.ableCells);
        setAcceptUser(response.data.acceptUsers);
        setDates(response.data.dates);
        setNoneResponseUsers(
          response.data.nonResponseUsers,
        );
        setTimeSlot(response.data.timeSlot);
        setUserTotalCount(response.data.userTotalCount);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Flag_Meeting_header>{flagName}</Flag_Meeting_header>
      <Flag_Meeting_content>
        {flagPlace}
      </Flag_Meeting_content>
      <Flag_Meeting_main_box>
        <TimeTable_box>
          {timeSlot === 6 ? (
            <GuestTimeTable
              ableCells={ableCells}
              cycle={'morning'}
            />
          ) : null}
          {timeSlot === 12 ? (
            <GuestTimeTable
              ableCells={ableCells}
              cycle={'afternoon'}
            />
          ) : null}
          {timeSlot === 18 ? (
            <GuestTimeTable
              ableCells={ableCells}
              cycle={'evening'}
            />
          ) : null}
          {timeSlot === 0 ? (
            <GuestTimeTable
              ableCells={ableCells}
              cycle={'dawn'}
            />
          ) : null}
        </TimeTable_box>
        <Flag_Meeting_main_content>
          {/*가능한 참여자 */}
          <Flag_Meeting_participants_box>
            <Participants_box_header>
              <Participants_box_icon1></Participants_box_icon1>
              응답한 참여자
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
          {/*미응답 참여자 */}
          <Flag_Meeting_non_set_box>
            <Participants_box_header>
              <Unsettled_icon></Unsettled_icon>
              <Nonset_text>아직 응답이 없어요!</Nonset_text>
            </Participants_box_header>
            <Participants_people_box>
              <Participants_people_content_box>
                <Participants_people_profile></Participants_people_profile>
                <Participants_people_id>
                  닉네임
                </Participants_people_id>
              </Participants_people_content_box>
            </Participants_people_box>
          </Flag_Meeting_non_set_box>
          {/*입력 수정하기 버튼 */}
          <Flag_Meeting_edit_btn>
            입력 수정하기
          </Flag_Meeting_edit_btn>
        </Flag_Meeting_main_content>
      </Flag_Meeting_main_box>
    </div>
  );
}
export default FlagMeeting;
