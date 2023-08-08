import styled from 'styled-components';
import { useState } from 'react';

const Timetable_day = styled.div`
  width: 395px;
  height: 18px;
  margin-top: 14px;
  margin-left: 415px;
  display: flex;
`;

const Timetable_day_contents = styled.span`
  width: 79px;
  font-size: 15px;
  text-align: center;
`;

const Timetable_date = styled.div`
  margin-top: 1px;
  width: 395px;
  height: 18px;
  margin-left: 415px;
  display: flex;
`;

const TimeTable_time_container = styled.div`
  height: 216px;
  margin-left: 400px;
  margin-right: 2px;
  font-size: 10px;
  font-wegiht: 500;
  text-align: center;
`;

const TimeTable_time = styled.span`
  width: 13px;
  display: grid;
  grid-template-columns: 10px;
  grid-template-rows: 35px;
`;

const TimeTable_container = styled.div`
  display: flex;
  width: 395px;
  margin-top: 7px;
  margin-left: 0;
  margin-right: auto;
`;
const TimeTable_container_col = styled.div`
  display: grid;
  grid-template-columns: 79px;
  grid-template-rows: 36px;
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
`;

function MorningTimeTable() {
  const col = [1, 2, 3, 4, 5];
  const row = [1, 2, 3, 4, 5, 6];
  const day = ['월', '화', '수', '목', '금'];
  const date = ['7.21', '7.1', '7.1', '7.55', '7.1'];
  const time = [6, 7, 8, 9, 10, 11, 12];
  const [time_col, setTime_col] = useState(0);
  const [time_row, setTime_row] = useState(0);

  const onTimeClick = (time_col:any, time_row:any) => {
    console.log(time_col, time_row);
  };  

  return (
    <div>
      <Timetable_day>
        {day.map((timeTable_day, index) => (
          <Timetable_day_contents>
            {timeTable_day}
          </Timetable_day_contents>
        ))}
      </Timetable_day>
      <Timetable_date>
        {date.map((timeTable_date, index) => (
          <Timetable_day_contents>{timeTable_date}</Timetable_day_contents>
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
        {col.map((time_col, index) => (
          <TimeTable_container_col>
            {row.map((time_row, index) => (
              <TimeTable_container_row onClick={() => {
                onTimeClick(time_col, time_row);
              }}>
              </TimeTable_container_row>
            ))}
          </TimeTable_container_col>
        ))}
      </TimeTable_container>
    </div>
  );
}
export default MorningTimeTable;
