import styled from 'styled-components';
import { ReactComponent as Unsettled_icon } from '../contents/desktop/flag/Ic_전체약속뷰_Unsettled.svg';
import TimeTable from '../components/TimeTable/TimeTable';
import {
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';
import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from 'recoil';

import GuestTimeTable from '../components/TimeTable/GuestTimeTable';
import { CellStyle } from '../enums';

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
  const { flagId } = useParams();
  const flagName = location.state.name;
  const flagPlace = location.state.place;
  const token = sessionStorage.getItem('token');
  const [isLoading, setIsLoading] = useState(true);

  const [ableCells, setAbleCells] = useState<number[]>([]); // 가능한 셀들 번호 중복 허용해서
  const [acceptUser, setAcceptUser] = useState<string[]>(
    [],
  );
  const [dates, setDates] = useState<string[]>([]);
  const [noneResponseUsers, setNoneResponseUsers] =
    useState<string[]>([]);
  const [timeSlot, setTimeSlot] = useState(-1);
  const [userTotalCount, setUserTotalCount] = useState(-1);

  const getData = async () => {
    await axios({
      url: `/flag/${flagId}/show`,
      method: 'get',
      headers: {
        Authorization: token,
      },
    }).then((response) => {
      console.log(response.data);
      setAbleCells(response.data.ableCells);
      setAcceptUser(response.data.acceptUsers);
      setDates(response.data.dates);
      setNoneResponseUsers(response.data.nonResponseUsers);
      setTimeSlot(response.data.timeSlot);
      setUserTotalCount(response.data.userTotalCount);
    });

    setIsLoading(true);
  };

  useLayoutEffect(() => {
    getData();
  }, [flagId]);

  return (
    <div>
      <Flag_Meeting_header>{flagName}</Flag_Meeting_header>
      <Flag_Meeting_content>
        {flagPlace}
      </Flag_Meeting_content>
      <Flag_Meeting_main_box>
        <TimeTable_box>
          {timeSlot === 6 && isLoading ? (
            <GuestTimeTable
              ableCells={ableCells}
              userTotalCount={userTotalCount}
              cycle={'morning'}
              selectedDates={dates}
            />
          ) : null}
          {timeSlot === 12 && isLoading ? (
            <GuestTimeTable
              ableCells={ableCells}
              userTotalCount={userTotalCount}
              cycle={'afternoon'}
              selectedDates={dates}
            />
          ) : null}
          {timeSlot === 18 && isLoading ? (
            <GuestTimeTable
              ableCells={ableCells}
              userTotalCount={userTotalCount}
              cycle={'evening'}
              selectedDates={dates}
            />
          ) : null}
          {timeSlot === 0 && isLoading ? (
            <GuestTimeTable
              ableCells={ableCells}
              userTotalCount={userTotalCount}
              cycle={'dawn'}
              selectedDates={dates}
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
              {acceptUser.map((name) => (
                <Participants_people_content_box>
                  <Participants_people_profile></Participants_people_profile>
                  <Participants_people_id>
                    {name}
                  </Participants_people_id>
                </Participants_people_content_box>
              ))}
            </Participants_people_box>
          </Flag_Meeting_participants_box>
          {/*미응답 참여자 */}
          <Flag_Meeting_non_set_box>
            <Participants_box_header>
              <Unsettled_icon></Unsettled_icon>
              <Nonset_text>아직 응답이 없어요!</Nonset_text>
            </Participants_box_header>
            <Participants_people_box>
              {noneResponseUsers.map((name) => (
                <Participants_people_content_box>
                  <Participants_people_profile></Participants_people_profile>
                  <Participants_people_id>
                    {name}
                  </Participants_people_id>
                </Participants_people_content_box>
              ))}
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
