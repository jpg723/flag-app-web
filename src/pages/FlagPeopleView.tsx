//import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Group } from '../contents/desktop/flag/notification.svg';

const Flag_People_header = styled.div`
  margin-top: 31px;
  text-align: center;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
`;

const Flag_People_weaper = styled.div`
  margin-top: 10px;
  text-align: center;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  color: #999;
  font-size: 23px;
`;

function FlagPeopleView() {
  return (
    <div>
      <Flag_People_header>가능한 일정 목록이에요!</Flag_People_header>
      <Flag_People_weaper>약속을 확정해주세요.</Flag_People_weaper>
     
    </div>
  );
}
export default FlagPeopleView;
