import styled from 'styled-components';
import ic_step3 from '../contents/desktop/flag/Ic_약속만들기_Step3.svg';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../Calandar.css';
import moment from 'moment';
import 'moment/locale/ko';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { makeFlagAtom } from '../recoil/Atoms';

const Wrapper = styled.div`
  margin-bottom: 100px;
  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 18px;
  gap: 13px;
  @media screen and (max-width: 500px) {
    gap: 8px;
  }
`;

const Title = styled.span`
  font-size: 22px;
  font-weight: 700;
  @media screen and (max-width: 500px) {
    font-size: 17px;
  }
`;

const Image = styled.img`
  width: 35px;
  height: 35px;
  @media screen and (max-width: 500px) {
    width: 20px;
    height: 20px;
  }
`;

const CalendarWrapper = styled.div`
  //border: 1px solid red;
  margin-left: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  //align-items: center;
  .react-calendar {
    border: none;
  }
  @media screen and (max-width: 500px) {
    margin-left: 0px;
  }
`;

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
    border-radius: 18px;
    background: #a98aff;
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    border-radius: 18px;
    background: #a98aff;
  }
  .react-calendar__month-view__weekdays__weekday {
    font-size: 18px;
    abbr {
      text-decoration: none;
    }
  }
  .react-calendar__month-view__days__day--weekend {
    //color: #999999;
  }
  .react-calendar__month-view__weekdays__weekday--weekend {
    color: #d10000;
  }
  .react-calendar__navigation button {
    font-size: 18px;
    font-weight: 700;
    line-height: 32px;
  }

  .react-calendar__navigation button:disabled {
    background-color: transparent;
    color: black;
  }

  .react-calendar__title--inactive {
    background: none !important;
  }

  .react-calendar__tile:disabled {
    background-color: #f0f0f0 !important;
  }

  .react-calendar__tile {
    font-size: 18px;
    padding: 10px;
  }
`;

const FormSelectDates = () => {
  const { selectedDates } = useRecoilValue(makeFlagAtom);
  const setValue = useSetRecoilState(makeFlagAtom);

  const today = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate(),
  );

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

  interface IProps {
    date: Date;
  }

  return (
    <Wrapper>
      <TitleWrapper>
        <Image src={ic_step3} />
        <Title>약속 날짜와 시간을 정해주세요.</Title>
      </TitleWrapper>
      <CalendarWrapper>
        <MyCalender
          calendarType="US"
          locale="ko"
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
      </CalendarWrapper>
    </Wrapper>
  );
};

export default FormSelectDates;
