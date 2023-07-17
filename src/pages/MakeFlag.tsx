import styled from 'styled-components';
import FormInputName from '../components/FormInputName';
import FormSelectFriends from '../components/FormSelectFriends';
import FormSelectDates from '../components/FormSelectDates';

const Wrapper = styled.div`
  position: absolute;
  top: 232px;
  left: 205px;
  padding: 5px 0px 5px 0px;
  @media screen and (max-width: 768px) {
    padding: 50px;
  }
`;

const MakeFlag = () => {
  return (
    <Wrapper>
      <FormInputName isFlag={true} />
      <FormSelectFriends />
      <FormSelectDates isFlag={true} />
    </Wrapper>
  );
};

export default MakeFlag;
