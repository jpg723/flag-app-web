import styled from 'styled-components';
import { ReactComponent as Unsettled_icon } from '../contents/desktop/flag/Ic_전체약속뷰_Unsettled.svg';
import {
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import axios from 'axios';
import {
  useLocation,
  useParams,
  useNavigate,
} from 'react-router-dom';
import CurrentTimeTable from '../components/TimeTable/CurrentTimeTable';
import moment from 'moment';
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
  width: 480px;

  @media screen and (max-width: 500px) {
    width: 350px;
  }
`;

/*참여자 박스*/
const Flag_Meeting_main_content = styled.div`
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
  margin-bottom: 20px;
`;

/*미응답 참여자*/
const Flag_Meeting_non_set_box = styled.div`
  //margin-top: 20px;
  width: 365px;
`;

const Set_text = styled.div`
  display: flex;
  font-size: 15px;
  font-weight: 500;
  margin-top: 3px;
  margin-left: 6px;
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
  align-items: center;
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
  background-color: #ff6060;
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
  margin-top: 25px;
  padding: 12px 45px;
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
  const flagHost = location.state.host;
  const flag_id = location.state.id;
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

  const navigate = useNavigate();

  //약속 수정하기로 이동
  const onEdit = () => {
    navigate(`/flag-meeting/${flagId}/guestTimeInput`, {
      state: { flagName, timeSlot, dates },
    });
  };

  //약속 후보자 화면으로 이동
  const onPromiseSelect = () => {
    navigate(`/flag-people-view`);
  };

  //약속 확정 가능 여부 확인
  const [state, setState] = useState(false);
  useEffect(() => {
    axios({
      url: `/flag/${flag_id}/checkState`,
      method: 'GET',
    })
      .then((response) => {
        console.log(response.data);
        setState(response.data);
      })
      .catch((error) => {
        console.error('AxiosError:', error);
        //error.preventDefault();
      });
  }, []);

  //사용자 이름 가져오기
  const [user, setUser] = useState('');
  useEffect(() => {
    axios({
      url: `/user/mypage`,
      method: 'GET',
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        setUser(response.data.name);
      })
      .catch((error) => {
        console.error('AxiosError:', error);
        //error.preventDefault();
      });
  }, []);

  const [selectedIndex, setSelectedIndex] = useState(-1);

  interface ICellInfo {
    date: string;
    endTime: string;
    startTime: string;
    members: string[];
  }
  const [cellInfo, setCellInfo] = useState<ICellInfo>();
  const [date, setDate] = useState('');

  useEffect(() => {
    const temp = moment(cellInfo?.date);
    const month = temp.format('M');
    const day = temp.format('D');
    setDate(`${month}월 ${day}일`);
  }, [cellInfo]);

  const onClickCell = (cellIndex: number) => {
    setSelectedIndex(cellIndex);

    axios({
      url: `/flag/${flagId}/${cellIndex}`,
      method: 'get',
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        console.log(response.data);
        setCellInfo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Flag_Meeting_header>{flagName}</Flag_Meeting_header>
      <Flag_Meeting_content>
        {flagPlace}
      </Flag_Meeting_content>
      <Flag_Meeting_content></Flag_Meeting_content>
      <Flag_Meeting_main_box>
        <TimeTable_box>
          {timeSlot === 6 && isLoading ? (
            <CurrentTimeTable
              ableCells={ableCells}
              userTotalCount={userTotalCount}
              cycle={'morning'}
              selectedDates={dates}
              selectedIndex={selectedIndex}
              onClickCell={onClickCell}
            />
          ) : null}
          {timeSlot === 12 && isLoading ? (
            <CurrentTimeTable
              ableCells={ableCells}
              userTotalCount={userTotalCount}
              cycle={'afternoon'}
              selectedDates={dates}
              selectedIndex={selectedIndex}
              onClickCell={onClickCell}
            />
          ) : null}
          {timeSlot === 18 && isLoading ? (
            <CurrentTimeTable
              ableCells={ableCells}
              userTotalCount={userTotalCount}
              cycle={'evening'}
              selectedDates={dates}
              selectedIndex={selectedIndex}
              onClickCell={onClickCell}
            />
          ) : null}
          {timeSlot === 0 && isLoading ? (
            <CurrentTimeTable
              ableCells={ableCells}
              userTotalCount={userTotalCount}
              cycle={'dawn'}
              selectedDates={dates}
              selectedIndex={selectedIndex}
              onClickCell={onClickCell}
            />
          ) : null}
        </TimeTable_box>
        <Flag_Meeting_main_content>
          {/*가능한 참여자 */}
          <Flag_Meeting_participants_box>
            <Participants_box_header>
              <Participants_box_icon1 />
              <Set_text>응답한 참여자</Set_text>
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
          {selectedIndex > -1 ? (
            <Flag_Meeting_participants_box>
              <Participants_box_header>
                <Participants_box_icon2 />
                <Set_text>
                  {`${date} ${cellInfo?.startTime} ~ ${cellInfo?.endTime} 에 가능한 참여자`}
                </Set_text>
              </Participants_box_header>
              <Participants_people_box>
                {/*참여자 정보*/}
                {cellInfo?.members.map((name) => (
                  <Participants_people_content_box>
                    <Participants_people_profile></Participants_people_profile>
                    <Participants_people_id>
                      {name}
                    </Participants_people_id>
                  </Participants_people_content_box>
                ))}
              </Participants_people_box>
            </Flag_Meeting_participants_box>
          ) : null}
          {/*클릭한 셀에 가능한 참여자 */}

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
          {state === true && user === flagHost ? (
            <Flag_Meeting_edit_btn
              onClick={onPromiseSelect}
            >
              약속 확정하기
            </Flag_Meeting_edit_btn>
          ) : (
            <Flag_Meeting_edit_btn onClick={onEdit}>
              입력 수정하기
            </Flag_Meeting_edit_btn>
          )}
        </Flag_Meeting_main_content>
      </Flag_Meeting_main_box>
    </div>
  );
}
export default FlagMeeting;
