/** @format */

import { useEffect, useState } from "react";
import Clock from "../image/clock.svg";

export default function Timer({ func, time }) {
  const [ques, setQues] = useState(time);
  useEffect(() => {
    setInterval(() => {
      setQues((prev) => {
        if (0 >= prev)func("result");
        else return prev - 1;
      });
    }, 1000);
  }, []);

  const timing = () => {
    return (
      <span
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
        id="timer">
        <img
          style={{
            height: "28px",
            width: "20px",
          }}
          src={Clock}
          alt="clock"
        />
        <span
          style={{
            color: "black",
            fontSize: "18px",
            fontWeight: " 800",
          }}>
          &nbsp;: {ques}
        </span>
      </span>
    );
  };

  return timing();
}
