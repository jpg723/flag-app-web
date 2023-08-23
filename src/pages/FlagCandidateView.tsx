import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import icon_people from '../contents/desktop/flag/데스크탑_Icon_약속확정_People.svg';
import icon_flag from '../contents/desktop/flag/데스크탑_Icon_약속확정_Flag.svg';
import img_btn from '../contents/desktop/flag/데스크탑_Btn_후보지확정.svg';
import moment from 'moment';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Flag_Candiadate_Title = styled.div`
  margin-top: 31px;
  text-align: center;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
`;

const Flag_Candiadate_SubTitle = styled.div`
  margin-top: 10px;
  text-align: center;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  color: #999;
  font-size: 23px;
`;

const Candidate_Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 587px;
  height: 450px;
`;

const Frame = styled.div`
  //margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  row-gap: 22px;
  flex-shrink: 0;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    width: 5px;
    height: 108px;
    border-radius: 12px;
    background: #d9d9d9;
  }
`;

const MemberCountArea = styled.div`
  display: flex;
  width: 457px;
  align-items: center;
  justify-content: flex-start;
  margin-top: 25px;
  padding: 15px 15px 0px 15px;
`;

const PeopleIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const CountText = styled.span`
  font-size: 20px;
`;

const CandidateWrapper = styled.div<{
  isSelected: boolean;
}>`
  display: flex;
  flex-direction: column;
  width: 457px;
  height: 111px;
  border-radius: 14px;
  border: 2px solid
    ${(props) => (props.isSelected ? '#6041FF' : '#9c9c9c')};
  background: #fff;
  margin-bottom: 17px;
`;

const CandidateInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

const FlagIcon = styled.img`
  width: 27px;
  height: 27px;
  margin-right: 7px;
`;

const DatesAndTime = styled.span`
  font-size: 16px;
`;

const MemberList = styled.div`
  display: flex;
  margin-top: 8px;
  padding-left: 20px;
  margin-bottom: 15px;
  gap: 10px;
`;

const MemberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImgProfile = styled.div`
  width: 25px;
  height: 25px;
  border: none;
  border-radius: 20px;
  background-color: #d9d9d9;
  margin-bottom: 5px;
`;

const TextMemberName = styled.span`
  font-size: 10px;
`;

const Button = styled.button`
  width: 355px;
  height: 41px;
  background-image: url('${img_btn}');
  background-color: white;
  border: none;
  margin-top: 20px;
  margin-bottom: 20px;
`;

interface ICandiates {
  candidates: string[];
  cnt: number;
  date: string;
  endTime: string;
  startTime: string;
  //timeSize: number;
}

function FlagCandiadateView() {
  const { flagId } = useParams();
  const [selected, setSelected] = useState<number>(-1);
  const token = sessionStorage.getItem('token');
  const [candidates, setCandidates] = useState<
    ICandiates[]
  >([]);

  const getData = () => {
    axios({
      url: `/flag/${flagId}/candidate`,
      method: 'get',
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        console.log(response.data);
        setCandidates(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const memberCnt: number[] = [];
  candidates.forEach((item) => {
    if (!memberCnt.includes(item.cnt)) {
      memberCnt.push(item.cnt);
    }
  });

  const navigate = useNavigate();

  const onSubmit = () => {
    console.log(selected);

    axios({
      url: `/flag/${flagId}/candidate/fix`,
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      data: selected,
    })
      .then((response) => {
        console.log(response);
        navigate('/promise-view', { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <Flag_Candiadate_Title>
        가능한 일정 목록이에요!
      </Flag_Candiadate_Title>
      <Flag_Candiadate_SubTitle>
        약속을 확정해주세요.
      </Flag_Candiadate_SubTitle>
      <Candidate_Container>
        <Frame>
          {memberCnt.map((count) => (
            <>
              <MemberCountArea>
                <PeopleIcon src={icon_people} />
                <CountText>{`${count}명`}</CountText>
              </MemberCountArea>
              {candidates.map((item, index) => {
                if (item.cnt === count) {
                  const date = moment(item.date);
                  const year = date.format('YYYY');
                  const month = date.format('M');
                  const day = date.format('D');
                  return (
                    <CandidateWrapper
                      key={index}
                      onClick={() => {
                        setSelected(index);
                      }}
                      isSelected={
                        selected === index ? true : false
                      }
                    >
                      <CandidateInfoWrapper>
                        <FlagIcon src={icon_flag} />
                        <DatesAndTime>{`${year}년 ${month}월 ${day}일 ${item.startTime} ~ ${item.endTime}`}</DatesAndTime>
                      </CandidateInfoWrapper>
                      <MemberList>
                        {item.candidates.map((name) => (
                          <MemberWrapper>
                            <ImgProfile />
                            <TextMemberName>
                              {name}
                            </TextMemberName>
                          </MemberWrapper>
                        ))}
                      </MemberList>
                    </CandidateWrapper>
                  );
                }
              })}
            </>
          ))}
        </Frame>
      </Candidate_Container>
      <Button onClick={onSubmit} />
    </Container>
  );
}
export default FlagCandiadateView;
