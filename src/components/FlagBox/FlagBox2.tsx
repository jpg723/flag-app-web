//import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Flag } from '../../contents/desktop/flag/flag.svg';
import { ReactComponent as Arrow } from '../../contents/desktop/flag/Ic_플래그전체약속_arrow.svg';

/*약속 박스*/
const Flag_box = styled.div`
  display: flex;
  width: 457px;
  border-radius: 14px;
  border: 1.5px solid var(--flag, #6041ff);
  margin-bottom: 23px;

  @media screen and (max-width: 500px) {
    width: 350px;
    margin: 0px auto 19px auto;
  }
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

const Flag_box_content = styled.div`
  margin-top: 10px;
  margin-left: 18px;
  font-size: 15px;
  font-weight: 400;
`;

const Flag_box_content2 = styled.div`
  margin-top: 10px;
  margin-left: 18px;
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 10px;
`;

const Flag_box1 = styled.div`
`;

const Flag_box2 = styled.div`
  margin: auto 10px auto auto;
`;

function FlagBox1() {
  return (
    <Flag_box>
      <Flag_box1>
        <Flag_box_header>
            <Flag></Flag>
            <Flag_box_title>
            플래그 2차 회의
            </Flag_box_title>
        </Flag_box_header>
        <Flag_box_content>
            2023년 7월 15일
        </Flag_box_content>
        <Flag_box_content2>
            FLAG를 진행할까요?
        </Flag_box_content2>
      </Flag_box1>
      <Flag_box2>
        <Arrow></Arrow>
      </Flag_box2>
    </Flag_box>
  );
}
export default FlagBox1;
