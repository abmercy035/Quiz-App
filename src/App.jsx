/** @format */
import React, { useEffect, useState } from "react";
import "./App.css";
import Details from "./components/Details";
import Form from "./components/Form";
import Result from "./components/Result";
import Quest from "./components/Quest";
import Welcome from "./components/Welcome";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Admin from "./components/Admin";

export default function App() {
  const [mainCourse, setmainCourse] = useState(""),
   Url =  `http://localhost:8000/${mainCourse}`,
  
  [Course, setCourse] = useState("");

 useEffect(() => {
   
   async function fetchData(){
     await fetch(Url, {
       method: 'GET'
      }
      )
      .then(res => {
        return res.json()
      })
      .then(data => {
        setCourse(data)
      })
    }
    fetchData();
  }, [Url])
  

  setTimeout(()=>console.log(Course), 2000)


   const [level, setLevel] = useState(100),
    [mainTime, setTime] = useState("30 mins"),
    [mainName, setName] = useState(""),
    [Res, setRes] = useState(30),
    [mainTimer, setMainTimer] = useState(10 * 60),
    arr = [],
    changeName = (name) => setName(name),
    changeTime = (time, timer) => {
      setTime(time);
      setMainTimer(Number(timer));
    },
    changeLevel = (level) => setLevel(level),
    changeCourse = (course) => setmainCourse(course),
    incArr = (res) => arr.push(res),
    decArr = (pos) => arr.splice(pos, 1),
    setResult = (res) => setRes(res);

  return (
    <Router>
      <React.StrictMode>
        <>
          <Routes>
            <Route exact path="/" element={<Welcome />} />
            <Route
              exact
              path="/form"
              element={
                <Form
                  levelHandler={changeLevel}
                  nameHandler={changeName}
                  timeHandler={changeTime}
                  courseHandler={changeCourse}
                  maincourse={mainCourse}
                  mainlevel={level}
                  Name={mainName}
                />
              }
            />
            <Route
              exact
              path="/result"
              element={
                mainName ? (
                  <Result
                    Course={mainCourse}
                    Level={level}
                    Name={mainName}
                    Time={mainTime}
                    Grade={Res}
                  />
                ) : (
                  <Welcome />
                )
              }
            />
            <Route
              exact
              path="/details"
              element={
                mainName ? (
                  <Details
                    Level={level}
                    Course={mainCourse}
                    Name={mainName}
                    Time={mainTime}
                  />
                ) : (
                  <Welcome />
                )
              }
            />
            <Route
              exact
              path="/questions"
              element={
                mainName ? (
                  <Quest
                    Course={mainCourse}
                    send={setResult}
                    IncArr={incArr}
                    DecArr={decArr}
                    Arr={arr}
                    timer={mainTimer}
                    mainCourse={Course}/>
                ) : (
                  <Welcome />
                )
              }
            />
            <Route exact path="/Admin" element={<Admin />} />
            <Route exact path="*" element={<NotFound />} />
          </Routes>
        </>
      </React.StrictMode>
    </Router>
  );
}
