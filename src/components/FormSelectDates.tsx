import styled from 'styled-components';
import ic_step3 from '../contents/desktop/flag/Ic_약속만들기_Step3.svg';
import img_checked from '../contents/desktop/flag/icon_약속만들기_checked.svg';
import img_unchecked from '../contents/desktop/flag/icon_약속만들기_Unchecked.svg';
import img_line from '../contents/desktop/flag/Line_약속만들기.svg';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Dropdown from './Dropdown';
import moment from 'moment';
import 'moment/locale/ko';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { makeFlagAtom } from '../recoil/Atoms';

const Wrapper = styled.div`
  margin-bottom: 333px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 44px;
`;

const Title = styled.span`
  line-height: 43px;
  font-size: 30px;
  font-weight: 700;
`;

const Image = styled.img`
  width: 42px;
  height: 43px;
  margin-right: 20px;
`;

const RadioArea = styled.div`
  width: 475px;
  height: 29px;
  display: flex;
  margin-left: 62px;
  margin-bottom: 72px;
  justify-content: space-between;
`;

const RadioWrapper = styled.label`
  display: flex;
  align-items: center;
`;

const RadioButton = styled.input`
  appearance: none;
  width: 25px;
  height: 25px;
  margin-right: 22px;
  background-image: url('${img_unchecked}');
  &:checked {
    background-image: url('${img_checked}');
  }
`;

const RadioText = styled.span`
  font-size: 20px;
  font-weight: 400;
  line-height: 29px;
`;

const CalendarWrapper = styled.div`
  //border: 1px solid red;
  margin-left: 62px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  //align-items: center;
  .react-calendar {
    border: none;
  }
`;

const DropdownArea = styled.div`
  width: 419px;
  //border: 1px solid blue;
  display: flex;
  justify-content: space-between;
`;

const DropdownWrapper = styled.div`
  width: 112px;
`;

const LineWrapper = styled.div`
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Line = styled.img``;

const MyCalender = styled(Calendar)`
  margin-bottom: 63px;
  .react-calendar__tile--now {
    background: transparent;
  }
  .react-calendar__month-view__days__day {
    color: black;
    font-size: 22px;
    font-weight: 700;
    line-height: 26px;
  }
  .react-calendar__month-view__days__day--weekend {
    color: black;
    font-size: 22px;
    font-weight: 700;
    line-height: 26px;
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    border-radius: 11px;
    background-color: #e6e6e6;
  }

  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: #e6e6e6;
  }
  .react-calendar__tile--active {
    border-radius: 11px;
    background: #a98aff;
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    border-radius: 11px;
    background: #a98aff;
  }
  .react-calendar__month-view__weekdays__weekday {
    font-size: 24px;
  }
  .react-calendar__navigation button {
    font-size: 27px;
    font-weight: 700;
    line-height: 32px;
  }
  .react-calendar__month-view__days__day--weekend {
    //color: #999999;
  }
  .react-calendar__month-view__weekdays__weekday--weekend {
    color: #d10000;
  }
  .react-calendar__navigation button:disabled {
    background-color: transparent;
    color: black;
  }
  button {
    width: 33;
  }
  .react-calendar__title--inactive {
    background: none !important;
  }

  .react-calendar__tile:disabled {
    background-color: #f0f0f0 !important;
  }
`;

interface IProps {
  isFlag: boolean;
}

const FormSelectDates = ({ isFlag }: IProps) => {
  const [option, setOption] = useState('INDIVIDUAL');
  const { selectedDates } = useRecoilValue(makeFlagAtom);
  const setValue = useSetRecoilState(makeFlagAtom);

  const today = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate(),
  );

  const handleRadio = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setOption(e.target.value);
  };

  const onClickIndividual = (
    value: any,
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    const date = moment(value).format('YYYY-MM-DD');
    // clicked에 이미 있으면 삭제, 없으면 추가
    if (selectedDates.find((item) => item === date)) {
      const copied = [...selectedDates];
      const filtered = copied.filter(
        (item) => item !== date,
      );
      setValue((v) => ({ ...v, selectedDates: filtered }));
      return;
    }

    setValue((v) => {
      const newList = [...selectedDates, date];
      return { ...v, selectedDates: newList };
    });
  };

  const onClickPeriod = (
    value: any,
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    const startDate = value[0];
    const endDate = value[1];
    console.log(startDate, endDate);
    const periodList: Date[] = [startDate];

    // startDate와 endDate 사이 날짜들 구하는 부분
    while (true) {
      const date = addDays(
        periodList[periodList.length - 1],
        1,
      );
      if (date <= endDate) {
        periodList.push(date);
      } else {
        break;
      }
    }
    setValue((v) => {
      const formatted = periodList.map((date) =>
        moment(date).format('YYYY-MM-DD'),
      );
      return { ...v, selectedDates: formatted };
    });
  };

  // Date 객체 입력받아서 다음 날짜 리턴하는 함수
  const addDays = (date: Date, days: number) => {
    const clone = new Date(date);
    clone.setDate(date.getDate() + days);
    return clone;
  };

  interface IProps {
    date: Date;
  }

  return (
    <Wrapper>
      <TitleWrapper>
        <Image src={ic_step3} />
        {isFlag ? (
          <Title>약속 날짜와 시간을 정해주세요.</Title>
        ) : (
          <Title>FLEX 날짜와 시간을 정해주세요.</Title>
        )}
      </TitleWrapper>
      <RadioArea>
        <RadioWrapper>
          <RadioButton
            type="radio"
            name="select"
            value="INDIVIDUAL"
            defaultChecked={true}
            onChange={handleRadio}
          />
          <RadioText>개별 선택</RadioText>
        </RadioWrapper>
        <RadioWrapper>
          <RadioButton
            type="radio"
            name="select"
            value="PERIOD"
            defaultChecked={false}
            onChange={handleRadio}
          />
          <RadioText>기간 선택</RadioText>
        </RadioWrapper>
      </RadioArea>
      {option === 'INDIVIDUAL' ? (
        <CalendarWrapper>
          <MyCalender
            calendarType="US"
            locale="ko"
            /*formatShortWeekday={(
      locale: string | undefined,
      date: Date,
    ) =>
      ['S', 'M', 'T', 'W', 'T', 'F', 'S'][
        date.getDay()
      ]
    }*/
            formatDay={(
              locale: string | undefined,
              date: Date,
            ) =>
              date.toLocaleString('en', { day: 'numeric' })
            }
            next2Label={null}
            prev2Label={null}
            showNeighboringMonth={false}
            defaultView="month"
            minDetail="month"
            maxDetail="month"
            minDate={today}
            selectRange={false}
            onClickDay={onClickIndividual}
            tileClassName={({ date }: IProps) => {
              if (
                selectedDates!.find(
                  (x: any) =>
                    x === moment(date).format('YYYY-MM-DD'),
                )
              ) {
                return 'react-calendar__tile--active';
              } else {
                return 'react-calendar__title--inactive';
              }
            }}
          />
          <DropdownArea>
            <DropdownWrapper>
              <Dropdown />
            </DropdownWrapper>
            <LineWrapper>
              <Line src={img_line} />
            </LineWrapper>
            <DropdownWrapper>
              <Dropdown />
            </DropdownWrapper>
          </DropdownArea>
        </CalendarWrapper>
      ) : (
        <CalendarWrapper>
          <MyCalender
            calendarType="US"
            locale="ko"
            /*formatShortWeekday={(
      locale: string | undefined,
      date: Date,
    ) =>
      ['S', 'M', 'T', 'W', 'T', 'F', 'S'][
        date.getDay()
      ]
    }*/
            formatDay={(
              locale: string | undefined,
              date: Date,
            ) =>
              date.toLocaleString('en', { day: 'numeric' })
            }
            next2Label={null}
            prev2Label={null}
            showNeighboringMonth={false}
            defaultView="month"
            minDetail="month"
            maxDetail="month"
            minDate={today}
            selectRange={true}
            onChange={onClickPeriod}
          />
          <DropdownArea>
            <DropdownWrapper>
              <Dropdown />
            </DropdownWrapper>
            <LineWrapper>
              <Line src={img_line} />
            </LineWrapper>
            <DropdownWrapper>
              <Dropdown />
            </DropdownWrapper>
          </DropdownArea>
        </CalendarWrapper>
      )}
    </Wrapper>
  );
};

export default FormSelectDates;
