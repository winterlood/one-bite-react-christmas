import "./Gift.css";
import lecture from "./../img/lecture.png";
import { useSearchParams } from "react-router-dom";

function Gift() {
  const [params] = useSearchParams();

  const from = params.get("from");
  const to = params.get("to");

  const copyCouponNum = () => {
    window.navigator.clipboard.writeText("8063-ec7a0d99f53e").then(() => {
      alert("쿠폰이 복사되었어요");
    });
  };

  const openLectureWindow = () => {
    window.open(
      "https://www.inflearn.com/course/%ED%95%9C%EC%9E%85-%EB%A6%AC%EC%95%A1%ED%8A%B8"
    );
  };

  return (
    <div className="Gift">
      <div></div>
      <div className="top_section">
        <div className="top_item">
          <div className="label">From</div>
          <div className="value">{from}</div>
        </div>
        {/* <div className="top_item">{">"}</div> */}
        <div className="top_item">
          <div className="label">To</div>
          <div className="value">{to}</div>
        </div>
      </div>
      <div className="prize_section">
        <div className="label">🎁 선물이 도착했어요</div>
        <div>
          <a
            target={"_blank"}
            href="https://www.inflearn.com/course/%ED%95%9C%EC%9E%85-%EB%A6%AC%EC%95%A1%ED%8A%B8"
          >
            <img className="lecture_img" alt="lecture" src={lecture} />
          </a>
        </div>
        <div className="label">
          <a
            target={"_blank"}
            href="https://www.inflearn.com/course/%ED%95%9C%EC%9E%85-%EB%A6%AC%EC%95%A1%ED%8A%B8"
          >
            한입 크기로 잘라먹는 리액트
          </a>
        </div>
        <div className="label">3,000원 구입 쿠폰</div>
      </div>
      <div className="copy_section">
        <span onClick={copyCouponNum}>쿠폰 번호 복사하기</span>
        <span onClick={openLectureWindow}>강의 보러 가기</span>
      </div>
    </div>
  );
}

export default Gift;
