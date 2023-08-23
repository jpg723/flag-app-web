//import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Flag } from '../../contents/desktop/flag/flag.svg';
import { useState, useEffect } from 'react';
import { ReactComponent as Arrow } from '../../contents/desktop/flag/Ic_플래그전체약속_arrow.svg';
import axios from 'axios';

/*약속 박스*/
const Flag_box = styled.div`
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
  margin-top: 5px;
`;

const Flag_box_dday = styled.div`
  border-radius: 102px;
  background: #e2dbff;
  width: 83px;
  text-align: center;
  padding-top: 6px;
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

const Flag_box_content2 = styled.div`
  margin-top: 10px;
  margin-left: 18px;
  width: 250px;
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 10px;
`;

const Flag_box2_content = styled.div`
  display: flex;
`;

const Flag_box2_content2 = styled.div`
`;

const Flag_box1 = styled.div`
`;

//host 박스 안 화살표
const Flag_box2 = styled.div`
  margin: 0 20px auto auto;
`;

interface IProps {
  id: number;
  name: string;
  place: string;
  host: string;
  count: number;
}

function FlagBox1({
  id,
  name,
  place,
  host,
  count,
}: IProps) {

  //약속 완료 상태 확인
  const token = sessionStorage.getItem('token');
  const [state, setState] = useState(false);
  useEffect(() => {
    axios({
      url: `/flag/${id}/checkState`,
      method: 'GET',
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        setState(response.data);
      })
      .catch((error) => {
        console.error('AxiosError:', error);
        //error.preventDefault();
      });
  }, []);

  //사용자 이름 가져오기
  const [user, setUser] = useState("");
  useEffect(() => {
    axios({
      url: `/user/mypage`,
      method: 'GET',
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        setUser(response.data.name);
      })
      .catch((error) => {
        console.error('AxiosError:', error);
        //error.preventDefault();
      });
  }, []);

  return (
    <div>
      {state === true && host === user ? (
        <Flag_box>
          <Flag_box1>
            <Flag_box_header>
                <Flag></Flag>
                <Flag_box_title>
                {name}
                </Flag_box_title>
            </Flag_box_header>
            <Flag_box2_content>
              <Flag_box2_content2>
                <Flag_box_content2>
                    모든 친구들이 수락했어요!
                </Flag_box_content2>
                <Flag_box_content2>
                    FLAG를 진행할까요?
                </Flag_box_content2>
              </Flag_box2_content2>
              <Flag_box2>
                <Arrow></Arrow>
              </Flag_box2>
            </Flag_box2_content>
          </Flag_box1>
        </Flag_box>):
      (<Flag_box>
        <Flag_box_header>
          <Flag></Flag>
          <Flag_box_title>{name}</Flag_box_title>
          <Flag_box_dday>진행중</Flag_box_dday>
        </Flag_box_header>
          <Flag_box_content>{place}</Flag_box_content>
          <Flag_box_people_count>
            {host}외 {count}명
          </Flag_box_people_count>
        </Flag_box>
      )}
    </div>
  );
}
export default FlagBox1;
