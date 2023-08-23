import axios from 'axios';
import moment from 'moment';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import img_btn from '../contents/desktop/flag/Btn_약속현황_Modify.svg';
import { ReactComponent as MemoIcon } from '../contents/desktop/flag/Group 377.svg';
import { ReactComponent as PlaceIcon } from '../contents/desktop/flag/Group 378.svg';
import { ReactComponent as TimeIcon } from '../contents/desktop/flag/Group.svg';
import { ReactComponent as TitleIcon } from '../contents/desktop/flag/Group 422.svg';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

//약속 이름 박스
const Flag_Title = styled.div`
  margin-top: 31px;
  text-align: center;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  display: flex;
`;

const Flag_Title_Content = styled.div`
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  display: flex;
`;

const ContentWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 400px;
  border: 2px solid #D9D9D9;
  border-radius: 14px;

  @media screen and (max-width: 500px) {
    width: 320px;
  }
`;

const Flag_Content = styled.div`
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  margin-left: 50px;
  margin-top: 15px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  width: 208px;
  height: 49px;
  background-image: url('${img_btn}');
  background-color: white;
  border: none;
  margin-top: 30px;
`;

//아이콘 박스
const IconBox = styled.div`
  margin-left: 20px;
  margin-right: 10px;
`;

//구분선
const Box_inline = styled.div`
  border: 1px solid #D9D9D9;
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
  margin-bottom: 15px;
  width: 350px;

  @media screen and (max-width: 500px) {
    width: 300px;
  }
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
          <ContentWrapper>
            <Flag_Title>
              <IconBox><TitleIcon></TitleIcon></IconBox>{data?.name}
            </Flag_Title>
            <Box_inline></Box_inline>
            <Flag_Title_Content><IconBox><TimeIcon></TimeIcon></IconBox>일시</Flag_Title_Content>
            <Flag_Content>{`${year}년 ${month}월 ${day}일`}&nbsp;&nbsp;
            {`${data?.startTime} ~ ${data?.endTime}`}</Flag_Content>
            <Box_inline></Box_inline>
            <Flag_Title_Content><IconBox><PlaceIcon></PlaceIcon></IconBox>장소</Flag_Title_Content>
            <Flag_Content>{`${data?.place}`}</Flag_Content>
            <Box_inline></Box_inline>
            <Flag_Title_Content><IconBox><MemoIcon></MemoIcon></IconBox>메모</Flag_Title_Content>
            <Flag_Content>{`${data?.memo}`}</Flag_Content>
          </ContentWrapper>
          <Button onClick={onClick} />
        </>
      )}
    </Container>
  );
};

export default FlagFixedMeeting;
