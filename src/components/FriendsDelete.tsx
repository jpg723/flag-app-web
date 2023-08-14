import styled from 'styled-components';
//display: none;
//border: 2px solid #000;
//@media screen and (max-width: 360px) {}

const Cover = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`;
const MainText = styled.div`
  color: #000;
  text-align: center;
  font-family: Apple SD Gothic Neo;
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin: 34px 243px 51px;
`;
const SubText = styled.div`
  color: #000;
  text-align: center;
  font-family: Apple SD Gothic Neo;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0px auto 62px;
`;
const ReturnBtn = styled.button`
  display: inline;
  padding: 10px 58px 9px 58px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: none;
  background: #FFF;
  box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.25);
  color: #000;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-right: 45px;
`;
const DeleteBtn = styled.button`
  display: inline;
  width: 183px;
  height: 47px;
  padding: 10px 50px 9px 50px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  border: none;
  background: #E13333;
  color: #FFF;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: 45px;
`;

function FriendsDelete() {
  function delHandler() {
    // 삭제 목록 전송
    window.close();
  }
  return (
    <Cover >
      <MainText>친구 삭제</MainText>
      <SubText>
        삭제한 친구는 복구되지 않습니다. <br /> 삭제하시겠습니까?
      </SubText>
      <ReturnBtn onClick={ () => {window.close();} } >취소하기</ReturnBtn>
      <DeleteBtn onClick={delHandler} >삭제하기</DeleteBtn>
    </Cover >
  );
}
export default FriendsDelete;
