import "./Make.css";
import gf from "./../img/gf.png";
import { useRef } from "react";

function Make() {
  const fromRef = useRef();
  const toRef = useRef();

  const makeLink = () => {
    if (fromRef.current && toRef.current) {
      const from = fromRef.current.value;
      const to = toRef.current.value;

      const link = `https://winterlood-christmas.web.app/gift?from=${from}&to=${to}`;
      window.navigator.clipboard.writeText(link).then(() => {
        alert("링크가 복사되었어요");
      });
    }
  };

  return (
    <div className="Make">
      <div></div>
      <div className="top_section">
        <div className="one">선물 보내기</div>
      </div>
      <div>
        <img className="gift_img" alt="gift" src={gf} />
      </div>

      <div className="input_section">
        <div className="input_box">
          <div className="label">누가 보낼까요?</div>
          <input ref={fromRef} maxLength={15} placeholder="From." />
        </div>
        <div className="input_box">
          <div className="label">누구에게 보낼까요?</div>
          <input ref={toRef} maxLength={15} placeholder="To." />
        </div>
        <div className="input_box">
          <span onClick={makeLink} className="button">
            선물 링크 만들기
          </span>
        </div>
      </div>
    </div>
  );
}

export default Make;
