/** @format */

import React from "react";

export default function Button({ func, ClassName, Id, nextPath, value }) {
  return (
    <button
      className={ClassName}
      id={Id}
      onClick={() => {
        func(nextPath);
      }}>
      {" "}
      {value}
    </button>
  );
}
