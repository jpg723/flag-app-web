import styled from 'styled-components';
import {
  useRecoilValue,
  useSetRecoilState,
  useResetRecoilState,
} from 'recoil';
import {
  GuestTimeTableAtom,
  SelectedDatesAtom,
} from '../../recoil/Atoms';
import moment from 'moment';
import { useEffect } from 'react';

const Timetable_day = styled.div`
  height: 18px;
  margin-top: 14px;
  display: flex;
  justify-content: center;
`;

const Timetable_day_contents = styled.span`
  display: flex;
  width: 79px;
  font-size: 15px;
  text-align: center;
  display: flex;
  justify-content: center;
`;

const Timetable_date = styled.div`
  margin-top: 1px;
  height: 18px;
  display: flex;
  justify-content: center;
`;

const TimeTable_time_container = styled.div`
  height: 216px;
  margin-right: 2px;
  font-size: 10px;
  font-weight: 500;
  text-align: center;
`;

const TimeTable_time = styled.span`
  width: 13px;
  display: grid;
  grid-template-columns: 10px;
  grid-template-rows: 34.5px;
`;

const TimeTable_container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 7px;
  margin-right: 13px;
`;

const TimeTable_container_col = styled.div`
  display: none;

  &.active {
    display: grid;
    grid-template-columns: 79px;
    grid-template-rows: 18px;
  }
`;

const TimeTable_container_row = styled.span`
  width: 100%;
  height: 100%;
  text-align: center;
  border: 1px solid #cdcdcd;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;

  &.active {
    background-color: #c7b9ff;
  }
`;

const TimeTable_box = styled.div``;

interface IProps {
  cycle: string;
  ableCells: number[];
}

function GuestTimeTable({ cycle, ableCells }: IProps) {
  const selectedDates = useRecoilValue(SelectedDatesAtom);
  const resetTimeTable = useResetRecoilState(
    GuestTimeTableAtom,
  );
  let selectedDates_copy = [...selectedDates];
  selectedDates_copy.sort();

  const copyDates: string[] = [];
  const copyDays: string[] = [];
  const day = ['일', '월', '화', '수', '목', '금', '토'];

  const GuestTimeTable = useRecoilValue(GuestTimeTableAtom);
  const setGuestTimeTable = useSetRecoilState(
    GuestTimeTableAtom,
  );

  selectedDates_copy.forEach((date, index) => {
    let m = moment(date, 'YYYY-MM-DD');
    let d = moment(date).day();
    let copyDate = m.format('MM.DD');
    copyDates.push(copyDate);
    copyDays.push(day[d]);
  });

  const row = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const time: number[] = [];

  useEffect(() => {
    resetTimeTable();
    const timeTable = JSON.parse(
      JSON.stringify(GuestTimeTable),
    );

    ableCells.forEach((cell) => {
      const unit = selectedDates.length;
      const c_index = cell % unit;
      const r_index = Math.floor(cell / unit);
      timeTable[c_index][r_index - 1]++;
    });
    console.log(timeTable);
  }, []);

  switch (cycle) {
    case 'morning': {
      for (let i = 6; i <= 12; i++) {
        time.push(i);
      }
      break;
    }
    case 'afternoon': {
      for (let i = 12; i <= 18; i++) {
        time.push(i);
      }
      break;
    }
    case 'evening': {
      for (let i = 18; i <= 24; i++) {
        time.push(i);
      }
      break;
    }
    case 'dawn': {
      for (let i = 0; i <= 6; i++) {
        time.push(i);
      }
      break;
    }
  }

  return (
    <div>
      <TimeTable_box>
        <Timetable_day>
          {copyDays.map((timeTable_day, index) => (
            <Timetable_day_contents>
              {timeTable_day}
            </Timetable_day_contents>
          ))}
        </Timetable_day>
        <Timetable_date>
          {copyDates.map((timeTable_date, index) => (
            <Timetable_day_contents>
              {timeTable_date}
            </Timetable_day_contents>
          ))}
        </Timetable_date>
        <TimeTable_container>
          <TimeTable_time_container>
            {time.map((timeTable_time, index) => (
              <TimeTable_time>
                {timeTable_time}
              </TimeTable_time>
            ))}
          </TimeTable_time_container>
          <TimeTable_container_col
            className={
              'TimeTable_container_col' +
              (selectedDates.length >= 1 ? ' active' : '')
            }
          >
            {row.map((time_row, r_index) => (
              <TimeTable_container_row
                key={'1 ' + time_row}
                id={'1 ' + time_row}
                className={
                  'TimeTable_container_row' + `${time_row}`
                }
              ></TimeTable_container_row>
            ))}
          </TimeTable_container_col>
          <TimeTable_container_col
            className={
              'TimeTable_container_col' +
              (selectedDates.length >= 2 ? ' active' : '')
            }
          >
            {row.map((time_row, r_index) => (
              <TimeTable_container_row
                key={'2 ' + time_row}
                id={'2 ' + time_row}
                className={
                  'TimeTable_container_row' + `${time_row}`
                }
              ></TimeTable_container_row>
            ))}
          </TimeTable_container_col>
          <TimeTable_container_col
            className={
              'TimeTable_container_col' +
              (selectedDates.length >= 3 ? ' active' : '')
            }
          >
            {row.map((time_row, r_index) => (
              <TimeTable_container_row
                key={'3 ' + time_row}
                id={'3 ' + time_row}
                className={
                  'TimeTable_container_row' + `${time_row}`
                }
              ></TimeTable_container_row>
            ))}
          </TimeTable_container_col>
          <TimeTable_container_col
            className={
              'TimeTable_container_col' +
              (selectedDates.length >= 4 ? ' active' : '')
            }
          >
            {row.map((time_row, r_index) => (
              <TimeTable_container_row
                key={'4 ' + time_row}
                id={'4 ' + time_row}
                className={
                  'TimeTable_container_row' + `${time_row}`
                }
              ></TimeTable_container_row>
            ))}
          </TimeTable_container_col>
          <TimeTable_container_col
            className={
              'TimeTable_container_col' +
              (selectedDates.length >= 5 ? ' active' : '')
            }
          >
            {row.map((time_row, r_index) => (
              <TimeTable_container_row
                key={'5 ' + time_row}
                id={'5 ' + time_row}
                className={
                  'TimeTable_container_row' + `${time_row}`
                }
              ></TimeTable_container_row>
            ))}
          </TimeTable_container_col>
        </TimeTable_container>
      </TimeTable_box>
    </div>
  );
}
export default GuestTimeTable;
