import styled from 'styled-components';
import AddedFriendItem from './AddedFriendItem';
import { makeFlagAtom } from '../../recoil/Atoms';
import { useRecoilValue } from 'recoil';

const Wrapper = styled.div`
  display: grid;
  width: 170px;
  grid-template-columns: 1fr 1fr 1fr;
  @media screen and (max-width: 500px) {
    width: 228px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }
`;

const AddedFriendList = () => {
  const { checkedFriends } = useRecoilValue(makeFlagAtom);
  return (
    <Wrapper>
      {checkedFriends.map((item, index) => (
        <AddedFriendItem key={index} name={item.name} />
      ))}
    </Wrapper>
  );
};

export default AddedFriendList;
