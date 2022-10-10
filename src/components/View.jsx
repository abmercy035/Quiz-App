/** @format */

import React, { useState } from "react";
import Details from "./Details";
import Form from "./Form";
import Result from "./Result";
import Quest from "./Quest";
import Welcome from "./Welcome";
// import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';



export default function View({ Route, changeRoute }) {
  const [level, setLevel] = useState(100);
  const [mainCourse, setmainCourse] = useState('Chem 102');
  const [mainTime, setTime] = useState("30 mins");
  const [mainName, setName] = useState('abraham');
  const [Res, setRes] = useState(30);
  const [mainTimer, setMainTimer] = useState((10*60));
const arr =[]
  const changeName = (name) => {
    setName(name);
  };
  const changeTime = (time, timer) => {
    setTime(time);
    setMainTimer(Number(timer));
  };
  const changeLevel = (level) => {
    setLevel(level);
  };
  const changeCourse = (course) => {
    setmainCourse(course);
  };
  const incArr = (res) => {
    arr.push(res);
  };
  const decArr = (pos) => {
    arr.splice(pos, 1);
  };
  const setResult = (res) => {
    setRes(res);
  };

  const Show = () => {
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
  return <>
  {Show()}
  </>;
}
