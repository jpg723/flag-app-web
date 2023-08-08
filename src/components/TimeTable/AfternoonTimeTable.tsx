import styled from 'styled-components';

{/*요일 */}
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

{/*날짜 */}
const Timetable_date = styled.div`
  margin-top: 1px;
  width: 395px;
  height: 18px;
  margin-left: 415px;
  display: flex;
`;

{/*시간 */}
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

{/*시간 선택 칸 */}
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
  border: 1px solid #CDCDCD;
  font-size: 30px;
  font-weight: bold;
  font-family: "Shrikhand";
  display: flex;
  justify-content: center;
  align-items: center;
`;

function AfternoonTimeTable() {
  const col = [1, 2, 3, 4, 5];
  const row = [1, 2, 3, 4, 5, 6];
  const day = ["월", "화", "수", "목", "금"];
  const date = ["7.21", "7.1", "7.1", "7.55", "7.1"];
  const time = [12, 13, 14, 15, 16, 17, 18];

  return (
    <div>
      <Timetable_day>
        {day.map((timeTable_day, index) => (
          <Timetable_day_contents>{timeTable_day}</Timetable_day_contents>
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
            <TimeTable_time>{timeTable_time}</TimeTable_time>
          ))}
        </TimeTable_time_container>
        {col.map((c, index) => (
          <TimeTable_container_col>
            {row.map((r, index) => (
              <TimeTable_container_row>{    
              }</TimeTable_container_row>
            ))}
          </TimeTable_container_col>
        ))}
      </TimeTable_container>
    </div>
  );
}
export default AfternoonTimeTable;
