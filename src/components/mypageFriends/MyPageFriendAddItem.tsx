import axios from 'axios';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { addFriendAtom } from '../../recoil/Atoms';
import btnAddfriend1 from '../../contents/desktop/mypage/Btn_friendAdd.svg';
import btnAddfriend2 from '../../contents/desktop/mypage/Btn_friendAdd2.svg';

const FriendFrame = styled.div`
  width: 400px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 18px auto auto 100px;
  @media screen and (max-width: 500px) {
    width: 280px;
    margin: 18px auto auto 40px;
  }
`;

const FriendProfile = styled.span`
  width: 31px;
  height: 31px;
  flex-shrink: 0;
  border-radius: 50%;
  margin-right: 25px;
  background-color: #d9d9d9;
  background-size: cover;
  @media screen and (max-width: 500px) {
    width: 23px;
    height: 23px;
  }
`;

const FriendName = styled.span`
  color: #000;
  font-family: Noto Sans KR;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const FriendAddBtn = styled.span<{ isAdd: boolean }>`
  width: 27px;
  height: 27px;
  background-image: url(${(props) => (props.isAdd? btnAddfriend2 : btnAddfriend1)});
  background-size: cover;
  font-size: 18px;
  font-weight: 400;
  line-height: 17px;
  margin: auto 0px auto auto;
  @media screen and (max-width: 500px) {
    margin: auto 0px auto auto;
  }
`;

interface IFriendItemProps {
  name: string;
  existFriend: boolean;
}


const MyPageFriendAddItem = ({name, existFriend}: IFriendItemProps) => {
  const [addFriend, setAddFriend] = useRecoilState(addFriendAtom);

  const addFriendsList = () => {
    const token = sessionStorage.getItem('token');
    if (addFriend.isFriend === false) {
      console.log('친구 추가');
      console.log(addFriend.name);
      console.log(name);
      axios({
        url: '/friends/add',
        method: 'POST',
        headers: {
          Authorization: token,
        },
        params: {
          friendName: name,
        },
      }).then((response) => {
        console.log(response.data);
        alert(response.data.message);
        window.opener.location.reload();
        if (response.data.isSuccess){
          setAddFriend({name: name, isFriend: true}); //버튼 변화
        }
      }).catch((error) => {
        console.error('AxiosError:', error);
      });
    } else {
      alert('이미 친구인 사용자 입니다.');
    }
  };

  return (
    <>
      {name === '' ? (
        <FriendFrame />
      ) : (
        <FriendFrame>
          <FriendProfile />
          <FriendName>{name}</FriendName>
          <FriendAddBtn
            isAdd={existFriend}
            onClick={addFriendsList}
          />
        </FriendFrame>
      )}
    </>
  );
};

export default MyPageFriendAddItem;
