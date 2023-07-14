import styled from 'styled-components';
import FlagFirstStep from '../components/FlagFirstStep';
import FlagSecondStep from '../components/FlagSecondStep';
import FlagThirdStep from '../components/FlagThirdStep';
import FlagFourthStep from '../components/FlagFourthStep';

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
      <FlagFirstStep />
      <FlagSecondStep />
      <FlagThirdStep />
      <FlagFourthStep />
    </Wrapper>
  );
};

export default MakeFlag;
