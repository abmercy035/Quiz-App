/** @format */

import "./styles/admin.css";
// import courses from "../courses.json";
import BackArrow from "./image/arrow-left.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "./Input";
export default function Admin({ maincourse, mainlevel, Name }) {
  const navigate = useNavigate(),
    [courseName, setCourseName] = useState(),
    [options, setOptions] = useState({}),
    [data, setData] = useState(),
    [Course, setCourse] = useState({});
  const [url, seturl] = useState("http://localhost:8005/" + courseName);

  useEffect(() => {
    seturl("http://localhost:8005/" + courseName);
  }, [courseName]);

  const handleCourseChange = (e) => {
      setCourseName(e.target.value);
    },
    handleOptChange = (e) => {
      setOptions({
        ...options,
        [e.target.name]: e.target.value,
      });
    },
    handleDataChange = (e) => {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    },
    submit = (e) => {
      e.preventDefault();
      console.log(data)
      if (courseName && data.opt && data.question && data.answer ) {
        if (!data.opt.includes(data.answer)) {
          e.target.children["msg"].textContent =
            "Sorry You did not include the answer in the options";
          return;
        } else {
          e.target.children["msg"].textContent = "Correct!!!";
          setCourse(data);
          return;
        }
      }
       else {
        e.target.children["msg"].textContent =
          "Please fill in the form completely";
      }
      return  setData('');
    };

  useEffect(() => {
    async function fetchData() {
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Course),
      }).then(() => {});
    }
    {
      data && fetchData();
    }
  }, [Course]);

  useEffect(() => {
    {
      options &&
        setData({
          ...data,
          opt: [options.optA, options.optB, options.optC, options.optD],
        });
    }
  }, [options]);

  return (
    <div className="admin-body">
      <div onClick={() => navigate("/")} id="admin-nav">
        <img src={BackArrow} alt="BackArrow" />
      </div>
      <div>
        <div className="admin-cont" id="admin-info-text">
          <p>Set your question Appopriately</p>
        </div>
        <div className="admin-cont" id="admin-foot">
          <form onSubmit={submit}>
            <Input handleChange={handleCourseChange} Type='text' placeHolder='Course name (e.g: Phy104)' Cls='admin-input' Name='courseName'
            />
            <textarea
              required
              name="question"
              className="admin-textarea"
              onChange={handleDataChange}>
              </textarea>
            <Input handleChange={handleOptChange} Type='text' placeHolder='Option A' Cls='admin-input' Name='optA' />
            <Input
             handleChange={handleOptChange} Type='text' 
              Cls='admin-input'
              placeHolder="Option B"
              Name="optB"
            />
            <Input
             handleChange={handleOptChange} Type='text' 
             Cls='admin-input'
             placeHolder="Option C"
             Name="optC"
            />
            <Input
             handleChange={handleOptChange} Type='text' 
             Cls='admin-input'
             placeHolder="Option D"
             Name="optD"
            />
            <Input
              handleChange={handleDataChange}
              Cls='admin-input'
              placeHolder="right answer"
              Name="answer"
              Type="text"
            />
            <p id="msg" style={{ color: "red", textAlign: "center" }}></p>
            <input className="admin-input" type="submit" id="admin-btn" />
          </form>
        </div>
      </div>
    </div>
  );
}
