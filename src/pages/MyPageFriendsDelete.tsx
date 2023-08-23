import axios from 'axios';
import styled from 'styled-components';
import { friendListAtom } from '../recoil/Atoms';
import { useRecoilState } from 'recoil';
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
  margin: 34px auto 51px;
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
  background: #fff;
  box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.25);
  color: #000;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-right: 45px;
  @media screen and (max-width: 500px) {
    width: 128px;
    height: 39px;
    font-size: 16px;
    padding: 10px;
  }
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
  background: #e13333;
  color: #fff;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: 45px;
  @media screen and (max-width: 500px) {
    width: 128px;
    height: 41px;
    font-size: 16px;
    padding: 10px;
  }
`;

function FriendsDelete() {
  const [friendList, setFriendList] = useRecoilState(friendListAtom);

  var name = new URLSearchParams(window.location.search).get("name");
  console.log(name + '의 삭제 페이지');

  const delHandler = () => {
    console.log('친구 삭제');
    console.log(name + '를 삭제할 것');
    const token = sessionStorage.getItem('token');
    axios({
      url: '/friends/delete',
      method: 'delete',
      headers: {
        Authorization: token,
      },
      params: {
        name: name
      } ,
    }).then((response) => {
      console.log(response);
      if (response.data.result === "SUCCESS" ){
        window.opener.location.reload();
        window.close();
      }
      else {
        alert(response.data.result);
      }
    }).catch((error) => {
      console.error('AxiosError:', error);
    });
  }

  return (
    <Cover>
      <MainText>친구 삭제</MainText>
      <SubText>
        삭제한 친구는 복구되지 않습니다. <br />{' '}
        삭제하시겠습니까?
      </SubText>
      <ReturnBtn onClick={() => {window.close();}}>
        취소하기
      </ReturnBtn>
      <DeleteBtn onClick={delHandler}>삭제하기</DeleteBtn>
    </Cover>
  );
}
export default FriendsDelete;
