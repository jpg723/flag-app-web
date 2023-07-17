import React, { useState } from 'react';
import styled from 'styled-components';
import img_button from '../contents/grid/Btn_약속만들기_Undefined.svg';

const Button = styled.button`
  width: 112px;
  height: 44px;
  background-color: white;
  background-image: url('${img_button}');
  border: none;
  cursor: pointer;
`;

const SelectWrapper = styled.div`
  box-sizing: border-box;
  width: 112px;
  display: flex;
  background-color: #e6e6e6;
  border-radius: 10px;
`;

const ItemWrapper = styled.select`
  appearance: none;
  width: 50%;
  border: 1px solid #e6e6e6;
  border-radius: 6px;
  text-align: center;
  outline: none;
  padding: 6px 10px;
  cursor: pointer;
  &::-webkit-scrollbar {
    width: 5px;
    background-color: transparent;
  }
`;
const Item = styled.option`
  border: 1px solid #e6e6e6;
  text-align: center;
`;

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [hour, setHour] = useState('00');
  const [minute, setMinute] = useState('00');

  const hourOptions: string[] = [
    '00',
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
  ];

  const minuteOptions: string[] = [
    '00',
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
    '31',
    '32',
    '33',
    '34',
    '35',
    '36',
    '37',
    '38',
    '39',
    '40',
    '41',
    '42',
    '43',
    '44',
    '45',
    '46',
    '47',
    '48',
    '49',
    '50',
    '51',
    '52',
    '53',
    '54',
    '55',
    '56',
    '57',
    '58',
    '59',
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleHour = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setHour(e.target.value);
    console.log(hour);
  };

  const handleMinute = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setMinute(e.target.value);
    console.log(minute);
  };
  return (
    <>
      <div>
        <Button onClick={toggleDropdown}>
          {hour} : {minute}
        </Button>
      </div>
      {isOpen && (
        <SelectWrapper>
          <ItemWrapper onChange={handleHour} value={hour}>
            {hourOptions.map((item) => (
              <Item key={item} value={item}>
                {item}
              </Item>
            ))}
          </ItemWrapper>
          :
          <ItemWrapper
            onChange={handleMinute}
            value={minute}
          >
            {minuteOptions.map((item) => (
              <Item key={item} value={item}>
                {item}
              </Item>
            ))}
          </ItemWrapper>
        </SelectWrapper>
      )}
    </>
  );
}

export default Dropdown;
