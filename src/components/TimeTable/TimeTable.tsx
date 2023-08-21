import styled from 'styled-components';
import Selecto from 'react-selecto';
import {
  useRecoilValue,
  useSetRecoilState,
  useResetRecoilState,
} from 'recoil';
import {
  SelectedDatesAtom,
  makeFlagAtom,
  timeTableAtom,
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
}

function TimeTable({ cycle }: IProps) {
  const selectedDates = useRecoilValue(SelectedDatesAtom);
  const resetTimeTable = useResetRecoilState(timeTableAtom);
  let selectedDates_copy = [...selectedDates];
  selectedDates_copy.sort();

  const copyDates: string[] = [];
  const copyDays: string[] = [];
  const day = ['일', '월', '화', '수', '목', '금', '토'];

  const { selectedCell } = useRecoilValue(makeFlagAtom);
  const timeTable = useRecoilValue(timeTableAtom);
  const setValue = useSetRecoilState(makeFlagAtom);
  const setTimeTable = useSetRecoilState(timeTableAtom);

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
    setValue((v) => ({ ...v, selectedCell: [] }));
  }, [selectedDates.length]);

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

  const timeSelect = (
    index: any,
    c_index: any,
    gap: number,
  ) => {
    if (c_index === 1) {
      const start_cell = gap;
      const result_cell = start_cell + gap * index;
      if (timeTable[c_index - 1][index] === false) {
        let copy = JSON.parse(JSON.stringify(timeTable));
        copy[c_index - 1][index] = true;
        setTimeTable(copy);
        const newList = [...selectedCell, result_cell];
        setValue((v) => ({ ...v, selectedCell: newList }));
      } else {
        let copy = JSON.parse(JSON.stringify(timeTable));
        copy[c_index - 1][index] = false;
        setTimeTable(copy);
        const copied = [...selectedCell];
        const filtered = copied.filter(
          (target) => target !== result_cell,
        );
        setValue((v) => ({ ...v, selectedCell: filtered }));
      }
    }
    if (c_index === 2) {
      const start_cell = gap + 1;
      const result_cell = start_cell + gap * index;
      if (timeTable[c_index - 1][index] === false) {
        let copy = JSON.parse(JSON.stringify(timeTable));
        copy[c_index - 1][index] = true;
        setTimeTable(copy);
        const newList = [...selectedCell, result_cell];
        setValue((v) => ({ ...v, selectedCell: newList }));
      } else {
        let copy = JSON.parse(JSON.stringify(timeTable));
        copy[c_index - 1][index] = false;
        setTimeTable(copy);
        const copied = [...selectedCell];
        const filtered = copied.filter(
          (target) => target !== result_cell,
        );
        setValue((v) => ({ ...v, selectedCell: filtered }));
      }
    }
    if (c_index === 3) {
      const start_cell = gap + 2;
      const result_cell = start_cell + gap * index;
      if (timeTable[c_index - 1][index] === false) {
        let copy = JSON.parse(JSON.stringify(timeTable));
        copy[c_index - 1][index] = true;
        setTimeTable(copy);
        const newList = [...selectedCell, result_cell];
        setValue((v) => ({ ...v, selectedCell: newList }));
      } else {
        let copy = JSON.parse(JSON.stringify(timeTable));
        copy[c_index - 1][index] = false;
        setTimeTable(copy);
        const copied = [...selectedCell];
        const filtered = copied.filter(
          (target) => target !== result_cell,
        );
        setValue((v) => ({ ...v, selectedCell: filtered }));
      }
    }
    if (c_index === 4) {
      const start_cell = gap + 3;
      const result_cell = start_cell + gap * index;
      if (timeTable[c_index - 1][index] === false) {
        let copy = JSON.parse(JSON.stringify(timeTable));
        copy[c_index - 1][index] = true;
        setTimeTable(copy);
        const newList = [...selectedCell, result_cell];
        setValue((v) => ({ ...v, selectedCell: newList }));
      } else {
        let copy = JSON.parse(JSON.stringify(timeTable));
        copy[c_index - 1][index] = false;
        setTimeTable(copy);
        const copied = [...selectedCell];
        const filtered = copied.filter(
          (target) => target !== result_cell,
        );
        setValue((v) => ({ ...v, selectedCell: filtered }));
      }
    }
    if (c_index === 5) {
      const start_cell = gap + 4;
      const result_cell = start_cell + gap * index;
      if (timeTable[c_index - 1][index] === false) {
        let copy = JSON.parse(JSON.stringify(timeTable));
        copy[c_index - 1][index] = true;
        setTimeTable(copy);
        const newList = [...selectedCell, result_cell];
        setValue((v) => ({ ...v, selectedCell: newList }));
      } else {
        let copy = JSON.parse(JSON.stringify(timeTable));
        copy[c_index - 1][index] = false;
        setTimeTable(copy);
        const copied = [...selectedCell];
        const filtered = copied.filter(
          (target) => target !== result_cell,
        );
        setValue((v) => ({ ...v, selectedCell: filtered }));
      }
    }
    //console.log(selectedCell);
  };

  return (
    <div>
      <Selecto
        dragContainer={'.TimeTable_container_col'}
        selectableTargets={[
          '.TimeTable_container_row1',
          '.TimeTable_container_row2',
          '.TimeTable_container_row3',
          '.TimeTable_container_row4',
          '.TimeTable_container_row5',
          '.TimeTable_container_row6',
          '.TimeTable_container_row7',
          '.TimeTable_container_row8',
          '.TimeTable_container_row9',
          '.TimeTable_container_row10',
          '.TimeTable_container_row11',
          '.TimeTable_container_row12',
        ]}
        hitRate={100}
        selectByClick={true}
        selectFromInside={true}
        continueSelect={true}
        onSelect={(e) => {
          e.added.forEach((el) => {
            const keys = el.getAttribute('id')?.split(' ');
            const c_index = Number(keys![0]);
            const r_index = Number(keys![1]);
            timeSelect(
              r_index - 1,
              c_index,
              selectedDates.length,
            );
          });
          e.removed.forEach((el) => {
            const keys = el.getAttribute('id')?.split(' ');
            const c_index = Number(keys![0]);
            const r_index = Number(keys![1]);
            timeSelect(
              r_index - 1,
              c_index,
              selectedDates.length,
            );
          });
        }}
      />
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
                  'TimeTable_container_row' +
                  `${time_row}` +
                  (timeTable[0][time_row - 1] === true
                    ? ' active'
                    : '')
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
                  'TimeTable_container_row' +
                  `${time_row}` +
                  (timeTable[1][time_row - 1] === true
                    ? ' active'
                    : '')
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
                  'TimeTable_container_row' +
                  `${time_row}` +
                  (timeTable[2][time_row - 1] === true
                    ? ' active'
                    : '')
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
                  'TimeTable_container_row' +
                  `${time_row}` +
                  (timeTable[3][time_row - 1] === true
                    ? ' active'
                    : '')
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
                  'TimeTable_container_row' +
                  `${time_row}` +
                  (timeTable[4][time_row - 1] === true
                    ? ' active'
                    : '')
                }
              ></TimeTable_container_row>
            ))}
          </TimeTable_container_col>
        </TimeTable_container>
      </TimeTable_box>
    </div>
  );
}
export default TimeTable;
