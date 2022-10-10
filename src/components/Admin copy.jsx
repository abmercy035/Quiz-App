/** @format */

import "./styles/admin.css";
// import courses from "../courses.json";
import BackArrow from "./image/arrow-left.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Admin({ maincourse, mainlevel, Name }) {
  const navigate = useNavigate(),
    [courseName, setCourseName] = useState("Phy104"),
    [level, setLevel] = useState(),
    [options, setOptions] = useState(),
    [data, setData] = useState(),
    [Course, setCourse] = useState(""),
    // Url = 'http://localhost:8080/Courses',
    
    // obj = {
    //   b: "gut",
    // },
    // handleCourseChange = (e) => {
    //   setCourseName({
    //     [e.target.name]: e.target.value,
    //   });
    //   console.log(courseName);
    // },
    // handleLevelChange = (e) => {
    //   setLevel({
    //     [e.target.name]: e.target.value,
    //   });
    // },
    // handleOptChange = (e) => {
    //   setOptions({
    //     ...options,
    //     [e.target.name]: e.target.value,
    //   });
    // },
    // handleDataChange = (e) => {
    //   setData({
    //     ...data,
    //     [e.target.name]: e.target.value,
    //   });
    // },
    //
    // submit = (e) => {
    //   e.preventDefault();
      
    //   if (
    //     courseName &&
    //     level &&
    //     options &&
    //     data.question &&
    //     data.answer &&
    //     options
    //     ) {
    //       if (!data.opt.includes(data.answer)) {
    //         e.target.children["msg"].textContent =
    //         "Sorry You did not include the answer in the options";
    //         return;
    //       } else {
    //         e.target.children["msg"].textContent = "Correct!!!";
    //       }
    //     } else {
    //       e.target.children["msg"].textContent =
    //       "Please fill in the form completely";
    //       return;
    //     }
    //     seturl("");
    //   },
      [url, seturl] = useState("http://localhost:8080/Phy104");
      
      useEffect(() => {
        async function fetchData() {
          await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Course),
      }).then(() => {
        // setCourse(data);
      });
    }
    fetchData();
  }, [url]);

  // useEffect(() => {
  //   {
  //     options &&
  //       setData({
  //         ...data,
  //         opt: [options.optA, options.optB, options.optC, options.optD],
  //       });
  //   }
  // }, [options]);

  // return (
  //   <div className="admin-body">
  //     <div onClick={() => navigate("/")} id="admin-nav">
  //       <img src={BackArrow} alt="BackArrow" />
  //     </div>
  //     <div>
  //     <div className="admin-cont" id="admin-info-text">
  //       <p>
  //          Set your question Appopriately
  //         </p>
  //     </div>
  //       <div className="admin-cont" id="admin-foot">
  //         <form onSubmit={submit}>
  //         <input
  //           onChange={handleCourseChange}
  //           className="admin-input"
  //           placeholder="Course name"
  //           type="text"
  //           name="course"
  //         />
  //         <input
  //           onChange={handleLevelChange}
  //           className="admin-input"
  //           placeholder="Level"
  //           type="text"
  //         name="level"
  //         />
  //       <textarea
  //         required
  //         name="question"
  //         className="admin-textarea"
  //         onChange={handleDataChange}
  //         >
  //         </textarea>
  //           <input
  //             onChange={handleOptChange}
  //             className="admin-input"
  //             placeholder="Option a"
  //             type="text"
  //             name="optA"
  //             />
  //           <input
  //             onChange={handleOptChange}
  //             className="admin-input"
  //             placeholder="Option b"
  //             type="text"
  //             name="optB"
  //             />
  //           <input
  //             onChange={handleOptChange}
  //             className="admin-input"
  //             placeholder="Option c"
  //             type="text"
  //             name="optC"
  //             />
  //           <input
  //             onChange={handleOptChange}
  //             className="admin-input"
  //             placeholder="Option d"
  //             type="text"
  //             name="optD"
  //             />
  //           <input
  //             onChange={handleDataChange}
  //             className="admin-input"
  //             placeholder="right answer"
  //             type="text"
  //             name="answer"
  //           />
  //           <p id="msg" style={{ color: "red", textAlign: "center" }}></p>
  //           <input className="admin-input" type="submit" id="admin-btn" />
  //         </form>
  //       </div>
  //     </div>
  //   </div>
  // );
}
