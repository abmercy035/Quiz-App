/** @format */

import React from "react";

export default function Input({handleChange, placeHolder, Type, Name, Cls}) {
  return (
    <div>
      <input
        onChange={handleChange}
        className={Cls}
        placeholder={placeHolder}
        type={Type}
        name={Name}
      />
    </div>
  );
}
