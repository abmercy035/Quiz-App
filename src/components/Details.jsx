/** @format */

import { useNavigate } from "react-router-dom";
import BackArrow from "./image/arrow-left.svg";
import Button from "./Button";
import "./styles/details.css";
export default function Details({ Course, Name, Time }) {
  const navigate = useNavigate();
  return (
    <div className="details-body">
      <div onClick={() => navigate("/form")} id="details-nav">
        <img src={BackArrow} alt="" />
      </div>
      <div className="details-cont">
        <h1>
          {Course} <br /> {" 50 Questions In "} {Time}
        </h1>
      </div>
      <div className="details-cont" id="details-msg">
        <p id="details-info-text">
          get ready <b style={{ color: "red" }}>"{Name}"</b>, you are to are to
          Answer all questions before the time runs out. you're to thick one
          answer or multiple when necessary. Note that you won't be given the
          correct answer to the ones you failed
        </p>
      </div>
      <div className="details-cont" id="details-foot">
        <Button
          Id="details-btn"
          nextPath="/questions"
          value={"submit"}
          func={navigate}
        />
      </div>
    </div>
  );
}
