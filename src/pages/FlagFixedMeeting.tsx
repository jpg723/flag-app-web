import axios from 'axios';
import moment from 'moment';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import img_btn from '../contents/desktop/flag/Btn_약속현황_Modify.svg';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Flag_Title = styled.div`
  margin-top: 31px;
  text-align: center;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
`;

const ContentWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 587px;
  border: 2px solid #9c9c9c;
  border-radius: 14px;

  @media screen and (max-width: 500px) {
    width: 320px;
  }
`;

const Flag_Content = styled.div`
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  padding: 20px;
`;

const Button = styled.button`
  width: 208px;
  height: 49px;
  background-image: url('${img_btn}');
  background-color: white;
  border: none;
  margin-top: 30px;
`;

const FlagFixedMeeting = () => {
  const { flagId } = useParams();
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/finish-flag-update/${flagId}`, {
      state: {
        name: data?.name,
        place: data?.place,
        memo: data?.memo,
      },
    });
  };

  interface IData {
    fixedDate: string[];
    fixedMembers: string[];
    memo: string;
    name: string;
    place: string;
    startTime: string;
    endTime: string;
  }

  const [data, setData] = useState<IData>();
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    await axios({
      url: `/flag/info/${flagId}`,
      method: 'get',
    })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, []);

  const date = moment(data?.fixedDate);
  const year = date.format('YYYY');
  const month = date.format('M');
  const day = date.format('D');

  return (
    <Container>
      {isLoading ? null : (
        <>
          <Flag_Title>{data?.name}</Flag_Title>
          <ContentWrapper>
            <Flag_Content>{`- ${year}년 ${month}월 ${day}일`}</Flag_Content>
            <Flag_Content>
              {`- ${data?.startTime} ~ ${data?.endTime}`}
            </Flag_Content>
            <Flag_Content>{`- ${data?.place}`}</Flag_Content>
            <Flag_Content>{`- ${data?.memo}`}</Flag_Content>
          </ContentWrapper>
          <Button onClick={onClick} />
        </>
      )}
    </Container>
  );
};

export default FlagFixedMeeting;
