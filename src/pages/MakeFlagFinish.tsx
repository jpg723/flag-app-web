import styled from 'styled-components';
import btn_modify from '../contents/mobile/flag/모바일_btn_약속만들기완료_Modify.svg';
import btn_share from '../contents/desktop/flag/Btn_약속만들기완료_Sharelink.svg';
import btn_share_mobile from '../contents/mobile/flag/모바일_Btn_약속만들기완료_Sharelink.svg';
import background_info from '../contents/desktop/flag/Rec_약속만들기완료_Undefined.svg';
import background_info_mobile from '../contents/mobile/flag/모바일_Frame_약속만들기완료_Summary.svg';
import { useRecoilValue } from 'recoil';
import { makeFlagAtom } from '../recoil/Atoms';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 382px;
  height: 184px;
  background-image: url('${background_info}');
  background-size: cover;
  margin-bottom: 20px;
  @media screen and (max-width: 500px) {
    background-image: url('${background_info_mobile}');
    width: 307px;
    height: 161px;
  }
`;

const DateArea = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 8px;
  @media screen and (max-width: 500px) {
    margin-top: 18px;
  }
`;

const Date = styled.span`
  font-size: 12px;
`;

const Time = styled.div`
  font-size: 14px;
  margin-top: 26px;
  @media screen and (max-width: 500px) {
    margin-top: 24px;
  }
`;

const Place = styled.div`
  font-size: 14px;
  margin-top: 26px;
  @media screen and (max-width: 500px) {
    margin-top: 24px;
  }
`;

const FriendsArea = styled.div`
  margin-top: 42px;
  width: 250px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  @media screen and (max-width: 500px) {
    margin-top: 24px;
    width: 200px;
  }
`;

const Friend = styled.span`
  font-size: 12px;
`;

const Message = styled.div`
  margin-bottom: 20px;
  font-weight: 600;
`;

const Btn_modify = styled.button`
  display: none;
  @media screen and (max-width: 500px) {
    display: inline;
    width: 285px;
    height: 39px;
    border: none;
    background-color: transparent;
    background-image: url('${btn_modify}');
    background-size: cover;
    margin-bottom: 14px;
  }
`;

const Btn_share = styled.button`
  width: 355px;
  height: 41px;
  border: none;
  background-color: transparent;
  background-image: url('${btn_share}');
  background-size: cover;
  @media screen and (max-width: 500px) {
    width: 285px;
    height: 39px;
    background-image: url('${btn_share_mobile}');
  }
`;

const MakeFlagFinish = () => {
  const {
    flagName,
    selectedDates,
    flagPlace,
    checkedFriends,
  } = useRecoilValue(makeFlagAtom);

  const navigate = useNavigate();

  const handleModify = () => {
    navigate(-1);
  };
  return (
    <Wrapper>
      <Title>{flagName}</Title>
      <Info>
        <DateArea>
          {selectedDates.map((date) => (
            <Date>{date}</Date>
          ))}
        </DateArea>
        <Time>미정</Time>
        <Place>
          {flagPlace.content ? flagPlace.content : '미정'}
        </Place>
        <FriendsArea>
          {checkedFriends.map((friend) => (
            <Friend>
              {friend.name ? friend.name : '미정'}
            </Friend>
          ))}
        </FriendsArea>
      </Info>
      <Message>약속을 만들었습니다!</Message>
      <Btn_modify onClick={handleModify} />
      <Btn_share />
    </Wrapper>
  );
};

export default MakeFlagFinish;
