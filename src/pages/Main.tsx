import styled from 'styled-components';
import img1 from '../contents/desktop/flag/데스크탑_Text_메인1.svg';
import img2 from '../contents/desktop/flag/데스크탑_Text_메인2.svg';
import img3 from '../contents/desktop/flag/데스크탑_Img_메인1.svg';
import img4 from '../contents/desktop/flag/데스크탑_Img_메인2.svg';
import img5 from '../contents/desktop/flag/데스크탑_Img_메인3.svg';
import img_btn from '../contents/desktop/flag/데스크탑_Btn_메인_약속만들기.svg';
import { useNavigate } from 'react-router-dom';
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img1 = styled.img`
  margin-top: 78px;
  margin-bottom: 22px;
`;

const Img2 = styled.img`
  margin-bottom: 78px;
`;

const Img3 = styled.img`
  margin-bottom: 34px;
`;
const Img4 = styled.img`
  margin-bottom: 34px;
`;
const Img5 = styled.img`
  margin-bottom: 83px;
`;

const Button = styled.button`
  width: 269px;
  height: 51px;
  border: none;
  background-color: transparent;
  background-image: url('${img_btn}');
  margin-bottom: 200px;
`;

const Main = () => {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate('/makeFlag');
  };
  return (
    <Wrapper>
      <Img1 src={img1} />
      <Img2 src={img2} />
      <Img3 src={img3} />
      <Img4 src={img4} />
      <Img5 src={img5} />
      <Button onClick={handleButton} />
    </Wrapper>
  );
};

export default Main;
