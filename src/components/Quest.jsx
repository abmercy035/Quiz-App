/** @format */

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import QuestList from "./options/QuestList";
import Forward from "./options/Forward";
import Timer from "./options/Timer";
import Back from "./options/Back";
import Option from "./Option";
import "./styles/quest.css";
export default function Quest({mainCourse, Course, send, IncArr, DecArr, Arr, timer }) {

  const main = mainCourse;
    const navigate = useNavigate(),
  
  // setting the "NO" question to be display eg (5th question from chem101)
 [quest, setQuest] = useState(1),
  // url for question"./question.json" depending the selected course;
  
  //  authenticating answer then push answer to the arr if correct by calling "IncArr()" or
  // if answer is changed from right to wrong splice answer out from arr
  // and reducing the length by calling "DecArr()"
  sender = (e) => {
    const elem = e.target,
    pos = Arr.indexOf(elem.name);
    if (elem.value === elem.name) {
      if (Arr.indexOf(elem.value) === -1) IncArr(elem.name);
    } else if (elem.value !== elem.name)
    if (Arr.indexOf(elem.name) !== -1) DecArr(pos);
  },
  // function for changing route and upadating current user's score.
  mult = (path) => {
    navigate(path);
    // Getting Array of Answers Length and
    send(Arr.length);
  },
  // function for moving to next question.
  nextQuest = () => {
    setQuest((prev) => {
      var num = Number(prev) + 1;
      return num;
    });
  },
  // function for moving to previous question.
  prevQuest = () => {
    setQuest((prev) => {
      var num = Number(prev) - 1;
      return num;
    });
  },
  header = (s) => {
    if (s.id === quest) {
   return (
        <>     <div key={s.id} id="quest-no"> 
               Q. {s.id} 
             </div> 
             <div key={s.id+1} className="quest-cont"> 
               <p  key={s.id+2} id="question">{s.question}</p> 
             </div> 
           </> 
        );
      }
    },
    display = (e) => {
      var arr = [],
      i = 1;
      for (i; arr.length < e.length; ++i) {
        arr.push(i);
      }
      // component displaying question's {number}.
      ////////////////////////////////////////////////////////////
      return (
        <QuestList
        key={Math.floor(Math.random() * 1000)}
        list={arr}
        Func={setQuest}
        />
      );
    };
  return (
    <div className="quest-body">
        {/* Displaying Timer for question */}
        <Timer time={timer} func={mult} />

         {main.map((s) => {
           // Displaying header { timer, question number and questions }
           return header(s);
         })}

       <div>
         <div className="quest-cont">
           <p id="quest-info">Please select your answer</p>
           <form id="options">
             {/* Displaying Option */}
             <Option func={sender} Value={quest} Decourse={Course} url={mainCourse} />
           </form>
         </div>
       </div>
       <div className="quest-cont">{display(main)}</div>
       {/* NAVIGATION BLOCK / SUBMIT BUTTON */}
       <div className="quest-cont" id="quest-foot">
         {quest < 2 ? "" : <Back func={prevQuest} />}
         <button id={"quest-btn"} onClick={() => mult("/result")}>
           {"submit"}
         </button>
         {/*  displaying forward button when  */}
         {quest > 4 /*main.length*/ ? "" : <Forward func={nextQuest} />}
       </div>
     </div>
  )
}
