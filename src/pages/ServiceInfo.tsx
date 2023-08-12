import styled from 'styled-components';
import img_background from '../contents/desktop/flag/데스크탑_Rec_서비스안내_배경.svg';
import ic_step1 from '../contents/desktop/flag/데스크탑_Ic_서비스안내_1.svg';
import ic_step2 from '../contents/desktop/flag/데스크탑_Ic_서비스안내_2.svg';
import ic_step3 from '../contents/desktop/flag/데스크탑_Ic_서비스안내_3.svg';
import text_step1_title from '../contents/desktop/flag/데스크탑_Text_서비스안내_step1_title.svg';
import text_step1_description from '../contents/desktop/flag/데스크탑_Text_서비스안내_step1_description.svg';
import img_step1 from '../contents/desktop/flag/데스크탑_Img_서비스안내_단계1.svg';
import text_step2_title from '../contents/desktop/flag/데스크탑_Text_서비스안내_step2_title.svg';
import text_step2_description from '../contents/desktop/flag/데스크탑_Text_서비스안내_step2_description.svg';
import img_step2 from '../contents/desktop/flag/데스크탑_Img_서비스안내_단계2.svg';
import text_step3_title from '../contents/desktop/flag/데스크탑_Text_서비스안내_step3_title.svg';
import text_step3_description from '../contents/desktop/flag/데스크탑_Text_서비스안내_step3_description.svg';
import img_step3 from '../contents/desktop/flag/데스크탑_Img_서비스안내_단계3.svg';
import img_btn from '../contents/desktop/flag/데스크탑_Btn_서비스안내_약속만들기.svg';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Background = styled.div`
  width: 667px;
  margin-top: 59px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('${img_background}');
  background-size: cover;
`;

const Ic_Step1 = styled.img`
  margin-top: 59px;
`;

const TitleStep1 = styled.img`
  margin-top: 20px;
`;

const DescriptionStep1 = styled.img`
  margin-top: 23px;
`;

const Img_Step1 = styled.img`
  margin-top: 24px;
`;

const Ic_Step2 = styled.img`
  margin-top: 200px;
`;

const TitleStep2 = styled.img`
  margin-top: 20px;
`;

const DescriptionStep2 = styled.img`
  margin-top: 23px;
`;

const Img_Step2 = styled.img`
  margin-top: 24px;
`;

const Ic_Step3 = styled.img`
  margin-top: 200px;
`;

const TitleStep3 = styled.img`
  margin-top: 20px;
`;

const DescriptionStep3 = styled.img`
  margin-top: 23px;
`;

const Img_Step3 = styled.img`
  margin-top: 24px;
`;

const Button = styled.button`
  width: 269px;
  height: 51px;
  border: none;
  background-color: transparent;
  background-image: url('${img_btn}');
  margin-top: 170px;
  margin-bottom: 150px;
`;

const ServiceInfo = () => {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate('/makeFlag');
  };
  return (
    <Wrapper>
      <Background>
        <Ic_Step1 src={ic_step1} />
        <TitleStep1 src={text_step1_title} />
        <DescriptionStep1 src={text_step1_description} />
        <Img_Step1 src={img_step1} />
        <Ic_Step2 src={ic_step2} />
        <TitleStep2 src={text_step2_title} />
        <DescriptionStep2 src={text_step2_description} />
        <Img_Step2 src={img_step2} />
        <Ic_Step3 src={ic_step3} />
        <TitleStep3 src={text_step3_title} />
        <DescriptionStep3 src={text_step3_description} />
        <Img_Step3 src={img_step3} />
        <Button onClick={handleButton} />
      </Background>
    </Wrapper>
  );
};

export default ServiceInfo;
