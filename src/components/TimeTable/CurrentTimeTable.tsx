import styled from 'styled-components';
import moment from 'moment';
import {
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import { CellStyle } from '../../enums';
import axios from 'axios';
import { useParams } from 'react-router-dom';

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

const TimeTable_container_row = styled.span<{
  cellStyle: CellStyle;
  isSelected: boolean;
}>`
  width: 100%;
  height: 100%;
  text-align: center;
  border: 1px solid #cdcdcd;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) =>
    props.isSelected
      ? '#FF6060'
      : props.cellStyle === CellStyle.RARE
      ? '#ddd4ff'
      : props.cellStyle === CellStyle.SOME
      ? '#bdabff'
      : props.cellStyle === CellStyle.OFTEN
      ? '#997dff'
      : props.cellStyle === CellStyle.USUALLY
      ? '#7955FE'
      : props.cellStyle === CellStyle.ALWAYS
      ? '#6439ff'
      : 'white'};
`;

const TimeTable_box = styled.div``;

interface IProps {
  cycle: string;
  ableCells: number[];
  userTotalCount: number;
  selectedDates: string[];
  selectedIndex: number;
  onClickCell: (cellIndex: number) => void;
  //flagId: string | undefined;
}

function CurrentTimeTable({
  cycle,
  ableCells,
  userTotalCount,
  selectedDates,
  selectedIndex,
  onClickCell,
}: IProps) {
  const [cellStyleTable, setCellStyleTable] = useState<
    CellStyle[][]
  >([
    [
      CellStyle.NEVER,
      CellStyle.NEVER,
      CellStyle.NEVER,
      CellStyle.NEVER,
      CellStyle.NEVER,
      CellStyle.NEVER,
      CellStyle.NEVER,
      CellStyle.NEVER,
      CellStyle.NEVER,
      CellStyle.NEVER,
      CellStyle.NEVER,
      CellStyle.NEVER,
    ],
    [
      CellStyle.NEVER,
      CellStyle.NEVER,
      CellStyle.NEVER,
      CellStyle.NEVER,
      CellStyle.NEVER,
      CellStyle.NEVER,
      CellStyle.NEVER,
      CellStyle.NEVER,
      CellStyle.NEVER,
      CellStyle.NEVER,
      CellStyle.NEVER,
      CellStyle.NEVER,
    ],
    [
      CellStyle.NEVER,
      CellStyle.NEVER,
      CellStyle.NEVER,
      CellStyle.NEVER,
      CellStyle.NEVER,
      CellStyle.NEVER,
      CellStyle.NEVER,
      CellStyle.NEVER,
      CellStyle.NEVER,
      CellStyle.NEVER,
      CellStyle.NEVER,
      CellStyle.NEVER,
    ],
    [
      CellStyle.NEVER,
      CellStyle.NEVER,
      CellStyle.NEVER,
      CellStyle.NEVER,
      CellStyle.NEVER,
      CellStyle.NEVER,
      CellStyle.NEVER,
      CellStyle.NEVER,
      CellStyle.NEVER,
      CellStyle.NEVER,
      CellStyle.NEVER,
      CellStyle.NEVER,
    ],
    [
      CellStyle.NEVER,
      CellStyle.NEVER,
      CellStyle.NEVER,
      CellStyle.NEVER,
      CellStyle.NEVER,
      CellStyle.NEVER,
      CellStyle.NEVER,
      CellStyle.NEVER,
      CellStyle.NEVER,
      CellStyle.NEVER,
      CellStyle.NEVER,
      CellStyle.NEVER,
    ],
  ]);
  console.log(cellStyleTable);

  let selectedDates_copy = [...selectedDates];
  selectedDates_copy.sort();

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

  const { flagId } = useParams();
  const token = sessionStorage.getItem('token');

  const row = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const time: number[] = [];

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

  const [currentTimeTable, setCurrentTimeTable] = useState<
    number[][]
  >([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const paintCells = async () => {
    const timeTable = JSON.parse(
      JSON.stringify(currentTimeTable),
    );

    ableCells.forEach((cell) => {
      const unit = selectedDates.length;
      const c_index = cell % unit;
      const r_index = Math.floor(cell / unit);
      timeTable[c_index][r_index - 1]++;
    });

    setCurrentTimeTable(timeTable);

    const copiedCellStyleTable = JSON.parse(
      JSON.stringify(cellStyleTable),
    );

    for (let c = 0; c < copiedCellStyleTable.length; c++) {
      for (let r = 0; r < 12; r++) {
        const ratio = timeTable[c][r] / userTotalCount;
        if (ratio >= 0.81) {
          copiedCellStyleTable[c][r] = CellStyle.ALWAYS;
        } else if (ratio >= 0.61) {
          copiedCellStyleTable[c][r] = CellStyle.USUALLY;
        } else if (ratio >= 0.41) {
          copiedCellStyleTable[c][r] = CellStyle.OFTEN;
        } else if (ratio >= 0.21) {
          copiedCellStyleTable[c][r] = CellStyle.SOME;
        } else if (ratio >= 0.01) {
          copiedCellStyleTable[c][r] = CellStyle.RARE;
        }
      }
    }

    setCellStyleTable(copiedCellStyleTable);
  };

  useLayoutEffect(() => {
    paintCells();
  }, []);

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
            {row.map((time_row, r_index) => {
              const gap = selectedDates.length;
              const start_cell = gap;
              const cellIndex =
                start_cell + gap * (time_row - 1);
              return (
                <TimeTable_container_row
                  key={'1 ' + time_row}
                  id={'1 ' + time_row}
                  cellStyle={
                    cellStyleTable[0][time_row - 1]
                  }
                  isSelected={
                    cellIndex === selectedIndex
                      ? true
                      : false
                  }
                  onClick={() => {
                    onClickCell(cellIndex);
                  }}
                  className={
                    'TimeTable_container_row' +
                    `${time_row}`
                  }
                ></TimeTable_container_row>
              );
            })}
          </TimeTable_container_col>
          <TimeTable_container_col
            className={
              'TimeTable_container_col' +
              (selectedDates.length >= 2 ? ' active' : '')
            }
          >
            {row.map((time_row, r_index) => {
              const gap = selectedDates.length;
              const start_cell = gap + 1;
              const cellIndex =
                start_cell + gap * (time_row - 1);
              return (
                <TimeTable_container_row
                  key={'2 ' + time_row}
                  id={'2 ' + time_row}
                  cellStyle={
                    cellStyleTable[1][time_row - 1]
                  }
                  isSelected={
                    cellIndex === selectedIndex
                      ? true
                      : false
                  }
                  onClick={() => {
                    onClickCell(cellIndex);
                  }}
                  className={
                    'TimeTable_container_row' +
                    `${time_row}`
                  }
                ></TimeTable_container_row>
              );
            })}
          </TimeTable_container_col>
          <TimeTable_container_col
            className={
              'TimeTable_container_col' +
              (selectedDates.length >= 3 ? ' active' : '')
            }
          >
            {row.map((time_row, r_index) => {
              const gap = selectedDates.length;
              const start_cell = gap + 2;
              const cellIndex =
                start_cell + gap * (time_row - 1);
              return (
                <TimeTable_container_row
                  key={'3 ' + time_row}
                  id={'3 ' + time_row}
                  cellStyle={
                    cellStyleTable[2][time_row - 1]
                  }
                  isSelected={
                    cellIndex === selectedIndex
                      ? true
                      : false
                  }
                  onClick={() => {
                    onClickCell(cellIndex);
                  }}
                  className={
                    'TimeTable_container_row' +
                    `${time_row}`
                  }
                ></TimeTable_container_row>
              );
            })}
          </TimeTable_container_col>
          <TimeTable_container_col
            className={
              'TimeTable_container_col' +
              (selectedDates.length >= 4 ? ' active' : '')
            }
          >
            {row.map((time_row, r_index) => {
              const gap = selectedDates.length;
              const start_cell = gap + 3;
              const cellIndex =
                start_cell + gap * (time_row - 1);
              return (
                <TimeTable_container_row
                  key={'4 ' + time_row}
                  id={'4 ' + time_row}
                  cellStyle={
                    cellStyleTable[3][time_row - 1]
                  }
                  isSelected={
                    cellIndex === selectedIndex
                      ? true
                      : false
                  }
                  onClick={() => {
                    onClickCell(cellIndex);
                  }}
                  className={
                    'TimeTable_container_row' +
                    `${time_row}`
                  }
                ></TimeTable_container_row>
              );
            })}
          </TimeTable_container_col>
          <TimeTable_container_col
            className={
              'TimeTable_container_col' +
              (selectedDates.length >= 5 ? ' active' : '')
            }
          >
            {row.map((time_row, r_index) => {
              const gap = selectedDates.length;
              const start_cell = gap + 4;
              const cellIndex =
                start_cell + gap * (time_row - 1);
              return (
                <TimeTable_container_row
                  key={'5 ' + time_row}
                  id={'5 ' + time_row}
                  cellStyle={
                    cellStyleTable[4][time_row - 1]
                  }
                  isSelected={
                    cellIndex === selectedIndex
                      ? true
                      : false
                  }
                  onClick={() => {
                    onClickCell(cellIndex);
                  }}
                  className={
                    'TimeTable_container_row' +
                    `${time_row}`
                  }
                ></TimeTable_container_row>
              );
            })}
          </TimeTable_container_col>
        </TimeTable_container>
      </TimeTable_box>
    </div>
  );
}
export default CurrentTimeTable;
