import styled from 'styled-components';
import ic_step4 from '../contents/grid/Ic_약속만들기_Step4.svg';
import img_input from '../contents/grid/Box_약속만들기_Selectplace.svg';

const Wrapper = styled.div`
  margin-bottom: 150px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Image = styled.img`
  width: 42px;
  height: 43px;
  margin-right: 5px;
`;

const Input = styled.input`
  width: 336px;
  height: 42px;
  background-image: url('${img_input}');
  background-repeat: no-repeat;
  padding-left: 20px;
  margin-left: 45px;
  border: 0;
  &:focus {
    outline: none;
  }
`;

const FlagFourthStep = () => {
  return (
    <Wrapper>
      <Title>
        <Image src={ic_step4} />
        <h2>약속 장소를 정해주세요.</h2>
      </Title>
      <div>
        <Input placeholder="약속 장소" />
      </div>
    </Wrapper>
  );
};

export default FlagFourthStep;
