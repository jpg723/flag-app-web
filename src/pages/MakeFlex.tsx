import styled from 'styled-components';
import FormInputName from '../components/FormInputName';
import FormSelectFriends from '../components/FormSelectFriends';
import FormSelectDates from '../components/FormSelectDates';
import FormInputFlexPlace from '../components/FormInputFlexPlace';
import FormInputFlexReason from '../components/FormInputFlexReason';
import img_btn from '../contents/grid/Btn_약속만들기_Createappoint.svg';

const Wrapper = styled.div`
  //position: absolute;
  margin-top: 232px;
  margin-left: 205px;
  padding: 5px 0px 5px 0px;
  @media screen and (max-width: 768px) {
    padding: 50px;
  }
`;

const ButtonWrapper = styled.div`
  //position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 49px;
`;

const Button = styled.button`
  width: 208px;
  height: 49px;
  background-image: url('${img_btn}');
  border: none;
  cursor: pointer;
`;

const MakeFlex = () => {
  return (
    <>
      <Wrapper>
        <FormInputName isFlag={false} />
        <FormSelectFriends />
        <FormSelectDates isFlag={false} />
        <FormInputFlexPlace />
        <FormInputFlexReason />
      </Wrapper>
      <ButtonWrapper>
        <Button />
      </ButtonWrapper>
    </>
  );
};

export default MakeFlex;
