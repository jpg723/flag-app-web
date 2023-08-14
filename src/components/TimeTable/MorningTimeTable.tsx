import styled from 'styled-components';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { makeFlagAtom } from '../../recoil/Atoms';
import moment from 'moment';

const Timetable_day = styled.div`
  height: 18px;
  margin-top: 14px;
  display: flex;
  justify-content: center;
  margin-left: 2px;
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
    background-color: #C7B9FF;
  }
`;

const TimeTable_box = styled.div`
`;

function MorningTimeTable() {
  const {selectedDates} = useRecoilValue(makeFlagAtom);
  let selectedDates_copy = [...selectedDates];
  selectedDates_copy.sort();
  console.log(selectedDates_copy);
  const copyDates: string[] = [];
  const copyDays: string[] = [];
  const day = ['일', '월', '화', '수', '목', '금', '토'];

  selectedDates_copy.forEach((date, index) => {
    let m = moment(date, 'YYYY-MM-DD');
    let d = moment(date).day();
    let copyDate = m.format('MM.DD');
    copyDates.push(copyDate);
    copyDays.push(day[d]);
  });

  const row = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const time = [6, 7, 8, 9, 10, 11, 12];
 
  const onTimeClick = (time_col:any, time_row:any) => {
    let time_sel = 0;

    if(time_col == 1){
      time_sel = time_row;
    }

    if(time_col == 2){
      time_sel = time_row;
    }

    else {
      time_sel = time_col + time_row * 5;
    }
  };


  //클릭시 셀 데이터 값 변경
  let [rowActive, setRowActive] = useState(0);
  const rowToggleActive = (time_row:any) => {
    setRowActive(time_row);
  };

  //클릭시 색상 변경
  const [rowSelect, setRowSelect] = useState(
    [false, false, false, false, false]);

  const [isSelect1, setIsSelect1] = useState(
    [false, false, false, false, 
     false, false, false, false,
     false, false, false, false,
     false, false, false, false]);

  const [isSelect2, setIsSelect2] = useState(
    [false, false, false, false, 
      false, false, false, false,
      false, false, false, false,
      false, false, false, false]);

  const [isSelect3, setIsSelect3] = useState(
    [false, false, false, false, 
      false, false, false, false,
      false, false, false, false,
      false, false, false, false]);

  const [isSelect4, setIsSelect4] = useState(
    [false, false, false, false, 
      false, false, false, false,
      false, false, false, false,
      false, false, false, false]);

  const [isSelect5, setIsSelect5] = useState(
    [false, false, false, false, 
      false, false, false, false,
      false, false, false, false,
      false, false, false, false]);
 
  const timeSelect = (index:any, c_index:any) => {

    if(c_index === 1){
      if(isSelect1[index] === false){
        let copy = [...isSelect1];
        copy[index] = true;
        setIsSelect1(copy)
      }

      else if(isSelect1[index] === true){
        let copy = [...isSelect1];
        copy[index] = false;
        setIsSelect1(copy)
      }
    }
    
    if(c_index === 2){
      if(isSelect2[index] === false){
        let copy = [...isSelect2];
        copy[index] = true;
        setIsSelect2(copy)
      }

      else if(isSelect2[index] === true){
        let copy = [...isSelect2];
        copy[index] = false;
        setIsSelect2(copy)
      }
    }

    if(c_index === 3){
      if(isSelect3[index] === false){
        let copy = [...isSelect3];
        copy[index] = true;
        setIsSelect3(copy)
      }

      else if(isSelect3[index] === true){
        let copy = [...isSelect3];
        copy[index] = false;
        setIsSelect3(copy)
      }
    }

    if(c_index === 4){
      if(isSelect4[index] === false){
        let copy = [...isSelect4];
        copy[index] = true;
        setIsSelect4(copy)
      }

      else if(isSelect4[index] === true){
        let copy = [...isSelect4];
        copy[index] = false;
        setIsSelect4(copy)
      }
    }

    if(c_index === 5){
      if(isSelect5[index] === false){
        let copy = [...isSelect5];
        copy[index] = true;
        setIsSelect5(copy)
      }

      else if(isSelect5[index] === true){
        let copy = [...isSelect5];
        copy[index] = false;
        setIsSelect5(copy)
      }
    }
  };  

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
            <TimeTable_container_col
              className={"TimeTable_container_col" + ((selectedDates.length >= 1) ? " active" : "")}>
              {row.map((time_row, r_index) => (
                  <TimeTable_container_row
                    className={"TimeTable_container_row" + `${time_row}` +
                      (isSelect1[time_row - 1] === true ? " active" : "")}
                      onClick={() => {
                        rowToggleActive(time_row);
                        if(time_row === rowActive){
                          timeSelect(time_row - 1, 1);        
                      }
                    }}>
                  </TimeTable_container_row>
                ))}
            </TimeTable_container_col>
            <TimeTable_container_col
              className={"TimeTable_container_col" + ((selectedDates.length >= 2) ? " active" : "")}>
              {row.map((time_row, r_index) => (
                  <TimeTable_container_row
                    className={"TimeTable_container_row" + `${time_row}` +
                      (isSelect2[time_row - 1] === true  ? " active" : "")}
                    onClick={() => {
                      rowToggleActive(time_row);
                      if(time_row === rowActive){
                        timeSelect(time_row - 1, 2);        
                      }
                    }}>
                  </TimeTable_container_row>
                ))}
            </TimeTable_container_col>
            <TimeTable_container_col
              className={"TimeTable_container_col" + ((selectedDates.length >= 3) ? " active" : "")}>
              {row.map((time_row, r_index) => (
                  <TimeTable_container_row
                    className={"TimeTable_container_row" + `${time_row}` +
                      (isSelect3[time_row - 1] === true  ? " active" : "")}
                    onClick={() => {
                      rowToggleActive(time_row);
                      if(time_row === rowActive){
                        timeSelect(time_row - 1, 3);        
                      }
                    }}>
                  </TimeTable_container_row>
                ))}
            </TimeTable_container_col>
            <TimeTable_container_col
              className={"TimeTable_container_col" + ((selectedDates.length >= 4) ? " active" : "")}>
              {row.map((time_row, r_index) => (
                  <TimeTable_container_row
                    className={"TimeTable_container_row" + `${time_row}` +
                      (isSelect4[time_row - 1] === true  ? " active" : "")}
                    onClick={() => {
                      rowToggleActive(time_row);
                      if(time_row === rowActive){
                        timeSelect(time_row - 1, 4);        
                      }
                    }}>
                  </TimeTable_container_row>
                ))}
            </TimeTable_container_col>
            <TimeTable_container_col
              className={"TimeTable_container_col" + ((selectedDates.length >= 5) ? " active" : "")}>
              {row.map((time_row, r_index) => (
                  <TimeTable_container_row
                    className={"TimeTable_container_row" + `${time_row}` +
                      (isSelect5[time_row - 1] === true  ? " active" : "")}
                    onClick={() => {
                      rowToggleActive(time_row);
                      if(time_row === rowActive){
                        timeSelect(time_row - 1, 5);        
                      }
                    }}>
                  </TimeTable_container_row>
                ))}
            </TimeTable_container_col>
        </TimeTable_container>
      </TimeTable_box>
    </div>
  );
}
export default MorningTimeTable;