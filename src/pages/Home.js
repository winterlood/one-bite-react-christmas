import "./Home.css";
import gf from "./../img/gf.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const nav = useNavigate();

  const goMake = () => {
    nav("/make");
  };

  return (
    <div className="Home">
      <div></div>
      <div className="img_section">
        <img className="gift_img" alt="gift" src={gf} />
      </div>
      <div className="top_section">
        <div className="one">🎄 Merry Christmas 🎄</div>
        <div className="two">수강생 감사 이벤트</div>
        <div className="three">주변 사람에게 제 강의를 선물해주세요</div>
      </div>
      <div className="letter_section">
        안녕하세요 이정환입니다 🙋‍♂️
        <br />
        <br />
        크리스마스를 맞이하여
        <br />
        이번에는 수강생 분들께 작은 선물을 하고 싶어
        <br />
        이렇게 이벤트 페이지를 만들어 보았어요
        <br />
        <br />
        아래의 ‘선물 보내기' 버튼을 누르면
        <br />제 강의를 1,225원에 구입할 수 있는
        <br />
        특별 할인 쿠폰을 선물할 수 있어요
        <br />
        <br />
        주위에 개발자 친구들에게 마구마구 뿌려주세요 🎉
      </div>
      <div className="button_section">
        <span onClick={goMake} className="button">
          선물 보내기
        </span>
      </div>
    </div>
  );
}

export default Home;
