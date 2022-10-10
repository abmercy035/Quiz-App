/** @format */

import "./styles/form.css";
import Level from "./options/Level";
import Course from "./options/Course";
import courses from "../courses.json";
import BackArrow from "./image/arrow-left.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Form({
  levelHandler,
  courseHandler,
  timeHandler,
  nameHandler,
  maincourse,
  mainlevel,
  Name,
}) {



  const navigate = useNavigate(),
    [level, setLevel] = useState("levelOne"),
    [semester, setSemester] = useState("one"),
    [courseList, setCourseList] = useState(courses[semester][0][level]),
    submit = (e) => {
      e.preventDefault();
      if (maincourse && mainlevel && Name) navigate("/details");
      e.target.children["msg"].textContent =
        "Please fill in the form completely";
    },
    selectSemester = (e) => {
      setSemester(e.target.value);
    },
    selectLevel = (e) => {
      if (e.target.value === "100") setLevel("levelOne");
      else if (e.target.value === "200") setLevel("levelTwo");
      levelHandler(e.target.value);
    },
    
    selectCourse = (e) => courseHandler(e.target.value),
    selectTime = (e) => {
      var time = 0;
      if (e.target.value.includes("10 mins")) time = 10 * 60;
      else if (e.target.value.includes("5 mins")) time = 5 * 60;
      timeHandler(e.target.value, time);
    },
    selectName = (e) => nameHandler(e.target.value);
  useEffect(
    () => setCourseList(courses[semester][0][level]),
    [level, semester],
  );
  return (
    <div className="form-body">
      <div onClick={() => navigate("/")} id="form-nav">
        <img src={BackArrow} alt="BackArrow" />
      </div>
      <div className="form-cont">
        <h1> user's details </h1>
        <span>please fill in the inputs below</span>
        <p id="form-info-text">
          note that your information are secured as they are not been saved in
          any server anywhere, only used for the purpose of the quiz and result
          display.
        </p>
      </div>
      <div>
        <div className="form-cont" id="form-foot">
          <form onSubmit={submit}>
            <input
              onChange={selectName}
              className="form-input"
              placeholder="Enter your Name"
              type="text"
            />
            <select onChange={selectLevel} defaultValue={"Select"} name="level">
              <Level Disabled={true} Value={"Select"} />
              <Level Value={100} setLevel={levelHandler} />
            </select>
            <select
              onChange={selectSemester}
              defaultValue={"one"}
              name="semester">
              <option value="one">1st Semester</option>
            </select>
            <select
              onChange={selectCourse}
              defaultValue={"Select Course Code"}
              name="course">
              <Course
                Disabled={true}
                Value={"Select Course Code"}
                setCourse={selectCourse}
              />
              {courseList.map((course, id) => {
                return <Course Id={id} key={id} Value={course} />;
              })}
            </select>
            <select onChange={selectTime} defaultValue={"5 mins"} name="time">
              <option value="5 mins">5 mins</option>
              <option value="10 mins">10 mins</option>
            </select>
            <p id="msg" style={{ color: "red", textAlign: "center" }}></p>
            <input className="form-input" type="submit" id="form-btn" />
          </form>
        </div>
      </div>
    </div>
  );
}
