/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import Home from "./image/house-solid.svg";
import "./styles/result.css";

export default function Result({ click, Course, Level, Name, Time, Grade }) {
  const navigator = useNavigate(),
    DateTime = () => {
      var date = new Date();
      return date.toDateString();
    };
  return (
    <div className="result-body">
      <div id="result-nav">
        <span onClick={() => navigator("/")}>
          <img
            onClick={() => navigator("/")}
            style={{
              height: "30px",
              width: "30px",
              pointerEvents: "none",
            }}
            src={Home}
            alt="Home"
          />
        </span>{" "}
        {DateTime()}
      </div>
      <div className="result-cont">
        <h1>
          <b
            style={{
              color: "gold",
            }}>
            {Course}
          </b>
          , For {Level} Level <br />
          50 Questions In {Time}
        </h1>
      </div>
      <div className="result-cont" id="result-msg">
        <div id="result-info-text">
          <span> Name : </span> <b>{Name}</b>
          <br />
          <span> Passed : </span> <b>{Grade}</b>
          <br />
          <span> Failed : </span> <b> {50 - Grade}</b>
          <br />
          <span> Status : </span>{" "}
          <b>
            {Grade > 45
              ? "Excellent "
              : Grade > 40
              ? "Very Good "
              : Grade > 30
              ? "Good "
              : Grade > 20
              ? "Credit "
              : Grade > 10
              ? "Fair "
              : "Fail "}
          </b>
        </div>
      </div>
      <div className="result-cont" id="result-foot">
        <button onClick={() => window.print()} id="result-btn">
          download
        </button>
      </div>
    </div>
  );
}

// history.back();  onClick={()=>click('quest')}   // equivalent to clicking back button
// history.go(-1);     // equivalent to history.back();
