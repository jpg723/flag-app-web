import { Link } from 'react-router-dom';
import styled from 'styled-components';
import profilepic from '../contents/desktop/webSign/_Img_계정생성완료_Profilepic.svg';
//import nickname from '../contents/desktop/webSign/Box_프로필생성_Nickname.svg';
import createaccount from '../contents/desktop/webSign/Btn_프로필생성_Createaccount.svg';

const SignUp2Cover = styled.div`
  height: 910px;
  width: 1440px;
`;
const SignUpInputImgIc = styled.img`
  margin: 227px 645px 0px;
`;
const SignUpInputImg = styled.input`
  visibility: hidden;
`;
const SignUpInputName = styled.input`
  width: 433px;
  height: 60px;
  border: none;
  border-radius: 13px;
  flex-shrink: 0;
  background: #d9d9d9;
  font-family: Inter;
  font-size: 20px;
  margin: 57px 503.5px 0px;
`;
const SignUpInputText = styled.div`
  color: #999;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 5px auto 0px 509px;
`;
const SignUpCreateaccountBtn = styled.button`
  border: none;
  width: 552px;
  height: 63px;
  flex-shrink: 0;
  background-image: url(${createaccount});
  background-color: transparent;
  background-repeat: no-repeat;
  margin: 38px 444px auto;
`;

function SignUp2() {
  /*
  onchange="loadProfile(this)"
  function loadProfile(input) {
    var file = input.files[0];	//선택된 파일 가져오기

    //미리 만들어 놓은 div에 text(파일 이름) 추가
    var name = document.getElementById('fileName');
    name.textContent = file.name;

  	//새로운 이미지 div 추가
    var newImage = document.createElement("img");
    newImage.setAttribute("class", 'img');

    //이미지 source 가져오기
    newImage.src = URL.createObjectURL(file);   

    newImage.style.width = "70%";
    newImage.style.height = "70%";
    //newImage.style.visibility = "hidden";   //버튼을 누르기 전까지는 이미지를 숨긴다
    newImage.style.objectFit = "contain";

    //이미지를 image-show div에 추가
    var container = document.getElementById('image-show');
    container.appendChild(newImage);
  };
  var submit = document.getElementById('submitButton');
  submit.onclick = showImage;     //Submit 버튼 클릭시 이미지 보여주기
  function showImage() {
    var newImage = document.getElementById('image-show').lastElementChild;
  
    //이미지는 화면에 나타나고
    newImage.style.visibility = "visible";
  
    //이미지 업로드 버튼은 숨겨진다
    document.getElementById('image-upload').style.visibility = 'hidden';

    document.getElementById('fileName').textContent = null;     //기존 파일 이름 지우기
  }
  */

  return (
    <>
      <form method="post" encType="multipart/form-data">
        <SignUp2Cover>
          <label htmlFor="profileImg">
            <SignUpInputImgIc src={profilepic} />
          </label>
          <SignUpInputImg
            type="file"
            id="profileImg"
            accept="image/*"
          />
          <SignUpInputName
            type="text"
            id="nickname"
            placeholder="닉네임"
          />
          <SignUpInputText>
            최소 2자 최대 7자 이내
          </SignUpInputText>
          <Link to="/SignUp3">
            <SignUpCreateaccountBtn />
          </Link>
        </SignUp2Cover>
      </form>
    </>
  );
}
export default SignUp2;
