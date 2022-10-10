import React from 'react'

export default function QuestList({list, Func}) {
  return (
    
   <div key={Math.floor(Math.random() * 500)} id='question-list'>
{
 list.map((num, id)=>
  <button value={num} key={id} className="question-num" onClick={()=>Func((num))} >{num}</button>)
}
</div>
)}