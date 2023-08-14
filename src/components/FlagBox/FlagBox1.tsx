//import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Flag } from '../../contents/desktop/flag/flag.svg';

/*약속 박스*/
const Flag_box = styled.div`
  width: 457px;
  border-radius: 14px;
  border: 1.5px solid var(--flag, #6041ff);
  margin-bottom: 23px;
`;

const Flag_box_header = styled.div`
  margin-top: 10px;
  margin-left: 18px;
  display: flex;
`;

const Flag_box_title = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-left: 7px;
  margin-top: 3px;
`;

const Flag_box_dday = styled.div`
  border-radius: 102px;
  background: #e2dbff;
  width: 83px;
  text-align: center;
  padding-top: 5px;
  font-size: 15px;
  font-weight: 700;
  margin-left: auto;
  margin-right: 16px;
`;

const Flag_box_content = styled.div`
  margin-top: 10px;
  margin-left: 18px;
  font-size: 15px;
  font-weight: 400;
`;

const Flag_box_people_count = styled.div`
  margin-top: 12px;
  margin-left: 18px;
  margin-bottom: 10px;
  font-size: 15px;
  font-weight: 400;
  color: #676767;
  font-weight: 500;
`;

function FlagBox1() {
  return (
    <Flag_box>
        <Flag_box_header>
            <Flag></Flag>
            <Flag_box_title>
            플래그 2차 회의
            </Flag_box_title>
            <Flag_box_dday>D-DAY</Flag_box_dday>
        </Flag_box_header>
        <Flag_box_content>
            2023년 7월 15일
        </Flag_box_content>
        <Flag_box_people_count>
            참여인원 12명
        </Flag_box_people_count>
    </Flag_box>
  );
}
export default FlagBox1;
