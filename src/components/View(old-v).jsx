/** @format */

import React, { useState } from "react";
import Details from "./Details";
import Form from "./Form";
import Result from "./Result";
import Quest from "./Quest";
import Welcome from "./Welcome";

export default function View({ Route, changeRoute }) {
  const [level, setLevel] = useState(100),
    [mainCourse, setmainCourse] = useState("Chem 102"),
    [mainTime, setTime] = useState("30 mins"),
    [mainName, setName] = useState("abraham"),
    [Res, setRes] = useState(30),
    [mainTimer, setMainTimer] = useState(10 * 60),
    arr = [],
    changeName = (name) => {
      setName(name);
    },
    changeTime = (time, timer) => {
      setTime(time);
      setMainTimer(Number(timer));
    },
    changeLevel = (level) => {
      setLevel(level);
    },
    changeCourse = (course) => {
      setmainCourse(course);
    },
    incArr = (res) => {
      arr.push(res);
    },
    decArr = (pos) => {
      arr.splice(pos, 1);
    },
    setResult = (res) => {
      setRes(res);
    },
    Show = () => {
      if (Route === "welcome") {
        return <Welcome click={changeRoute} />;
      }
      if (Route === "form") {
        return (
          <Form
            click={changeRoute}
            levelHandler={changeLevel}
            nameHandler={changeName}
            timeHandler={changeTime}
            courseHandler={changeCourse}
            maincourse={mainCourse}
            mainlevel={level}
            Name={mainName}
          />
        );
      }
      if (Route === "result") {
        return (
          <Result
            click={changeRoute}
            Course={mainCourse}
            Level={level}
            Name={mainName}
            Time={mainTime}
            Grade={Res}
          />
        );
      }
      if (Route === "details") {
        return (
          <Details
            click={changeRoute}
            Level={level}
            Course={mainCourse}
            Name={mainName}
            Time={mainTime}
          />
        );
      }
      if (Route === "quest") {
        return (
          <Quest
            click={changeRoute}
            Course={mainCourse}
            send={setResult}
            IncArr={incArr}
            DecArr={decArr}
            Arr={arr}
            timer={mainTimer}
          />
        );
      }
    };
  return <>{Show()}</>;
}
