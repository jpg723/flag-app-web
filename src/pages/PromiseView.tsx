//import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Arrow1 } from '../contents/desktop/flag/arrow_back_ios_new.svg';
import { ReactComponent as Arrow2 } from '../contents/mobile/flag/모바일_Ic_플래그메인_Go.svg';
import { Link } from 'react-router-dom';
import FlagBox1 from '../components/FlagBox/FlagBox1';
import FlagBox2 from '../components/FlagBox/FlagBox2';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { isLoginAtom } from '../recoil/Atoms';
import { useNavigate } from 'react-router-dom';

const PromiseView_main = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

/*플래그*/
const PromiseView_flag_main = styled.div``;
/*플래그 제목*/
const PromiseView_title1 = styled.div`
  margin-top: 40px;
  height: 42px;
  font-size: 27px;
  font-weight: 600;
  display: flex;

  @media screen and (max-width: 500px) {
    margin-left: 35px;
  }
`;
/*플래그 약속 박스*/
const PromiseView_flag_box = styled.div`
  margin-top: 40px;

  @media screen and (max-width: 500px) {
    margin-top: 20px;
  }
`;
/*가운데 구분선*/
const PromiseView_line = styled.div`
  background: rgba(0, 0, 0, 0.61);
  width: 2px;
  height: 607px;
  margin: 80px 65px 100px;

  @media screen and (max-width: 500px) {
    width: 360px;
    height: 2px;
    margin: 30px auto 10px auto;
  }
`;
/*알림 박스*/
const PromiseView_promise_main = styled.div`
  @media screen and (max-width: 500px) {
    margin-bottom: 50px;
  }
`;
/*진행중 약속 제목*/
const PromiseView_title2 = styled.div`
  margin-top: 40px;
  font-size: 27px;
  font-weight: 600;
  display: flex;
  @media screen and (max-width: 500px) {
    margin-left: 35px;
  }
`;
/*약속 만들기 버튼 박스*/
const PromiseView_make_promise_box = styled.div`
  margin-left: 223px;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;
/*약속 만들기 버튼*/
const PromiseView_make_promise_btn = styled.button`
  border: none;
  border-radius: 0px 99px 99px 0px;
  width: 123px;
  height: 42px;
  background: #8e6fff;
  box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.25);
  font-size: 16px;
  font-weight: 600;
  color: white;
  display: flex;
  padding: 10px 8px 10px 10px;
  z-index: 1;
  position: relative;
`;
/*약속 만들기 버튼 안 화살표*/
const Arrow1_icon = styled.div`
  width: 17px;
  height: 17px;
  padding-top: 2px;
  padding-left: 3px;
`;

const Promise_make_btn2 = styled.div`
  display: none;

  @media screen and (max-width: 500px) {
    display: flex;
  }
`;
const Promise_make_btn2_text = styled.div`
  @media screen and (max-width: 500px) {
    display: flex;
    color: var(--primary-light, #a98aff);
    font-size: 15px;
    margin-left: 135px;
    margin-top: 17px;
    margin-right: 5px;
  }
`;

const Arrow2_icon = styled.div`
  @media screen and (max-width: 500px) {
    display: flex;
    margin-top: 15px;
  }
`;

const Promise_none = styled.div`
  color: #999;
  font-family: Inter;
  font-size: 20px;
  width: 458.33px;
  line-height: 130%;

  @media screen and (max-width: 500px) {
    display: flex;
    margin-top: 15px;
    margin-left: 35px;
  }
`;

function PromiseView() {
  const my_promising_count = 3; //내가 만든 진행중 약속
  const [promiselist, SetpromiseList] = useState<IList[]>(
    [],
  ); //진행 중 약속 리스트
  const [progresslist, SetprogressList] = useState<IList[]>(
    [],
  ); //진행 중 약속 리스트
  const promise_count = promiselist.length; //확정된 약속 개수
  const progress_count = progresslist.length; //진행중 약속 개수
  const promising_total_count =
    progress_count + my_promising_count; //총 진행중 약속
  const token = sessionStorage.getItem('token');

  interface IList {
    name: string;
    place: string;
    dates: string[];
    userCount: number;
    id: number;
    state: boolean;
  }

  /*진행중 약속 값 받아오기*/
  useEffect(() => {
    axios({
      url: '/flag/progresslist',
      method: 'GET',
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        //console.log(response.data);
        SetprogressList(response.data);
      })
      .catch((error) => {
        console.error('실패');
        console.error('AxiosError:', error);
        //error.preventDefault();
      });
  }, []);

  useEffect(() => {
    axios({
      url: '/flag/fixedlist',
      method: 'GET',
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        //console.log(response.data);
        SetpromiseList(response.data);
      })
      .catch((error) => {
        console.error('실패');
        console.error('AxiosError:', error);
        //error.preventDefault();
      });
  }, []);

  const [isLogin, setIsLogin] = useRecoilState(isLoginAtom);
  const navigate = useNavigate();

  //약속 만들기 버튼 클릭 시
  const makeFlagButton = () => {
    if (isLogin === false) {
      navigate('/login');
    } else {
      // sessionStorage 에 name 라는 key 값으로 저장된 값이 있다면
      navigate('/makeFlag');
    }
  };

  return (
    <PromiseView_main>
      <PromiseView_flag_main>
        <PromiseView_title1>
          확정된 약속
          <Promise_make_btn2 onClick={makeFlagButton}>
            <Promise_make_btn2_text>
              약속만들기
            </Promise_make_btn2_text>
            <Arrow2_icon>
              <Arrow2></Arrow2>
            </Arrow2_icon>
          </Promise_make_btn2>
        </PromiseView_title1>
        <PromiseView_flag_box>
          {/*약속 확정 박스*/}
          {promiselist.map((item, index) => (
            <Link
              to={`/flag-meeting`}
              state={{
                id: item.id,
                name: item.name,
                place: item.place,
              }}
            >
              <FlagBox1
                name={item.name}
                place={item.place}
                dates={item.dates}
                userCount={item.userCount}
                id={item.id}
              ></FlagBox1>
            </Link>
          ))}
          {promise_count > 0 ? (
            ''
          ) : (
            <Promise_none>
              확정된 약속이 없습니다.
            </Promise_none>
          )}
        </PromiseView_flag_box>
      </PromiseView_flag_main>
      {/*구분선*/}
      <PromiseView_line></PromiseView_line>
      <PromiseView_promise_main>
        <PromiseView_title2>
          진행 중 약속
          <PromiseView_make_promise_box>
            <PromiseView_make_promise_btn
              onClick={makeFlagButton}
            >
              약속 만들기
              <Arrow1_icon>
                <Arrow1></Arrow1>
              </Arrow1_icon>
            </PromiseView_make_promise_btn>
          </PromiseView_make_promise_box>
        </PromiseView_title2>
        <PromiseView_flag_box>
          {/*약속 진행중 박스*/}
          {progresslist.map((item, index) =>
            item.state === true ? (
              <FlagBox2
                name={item.name}
                place={item.place}
                dates={item.dates}
                userCount={item.userCount}
                id={item.id}
              ></FlagBox2>
            ) : (
              <Link
                to={`/flag-meeting/${item.id}`}
                state={{
                  name: item.name,
                  place: item.place,
                }}
              >
                <FlagBox1
                  name={item.name}
                  place={item.place}
                  dates={item.dates}
                  userCount={item.userCount}
                  id={item.id}
                ></FlagBox1>
              </Link>
            ),
          )}
          {progress_count > 0 ? (
            ''
          ) : (
            <Promise_none>
              현재 확정된 약속이 없어요!
              <br />
              지금 바로 약속 신청 어때요?
            </Promise_none>
          )}
        </PromiseView_flag_box>
      </PromiseView_promise_main>
    </PromiseView_main>
  );
}
export default PromiseView;
