/** @format */

import React from "react";
import "./styles/welcome.css";
import logo from "./image/LASU-Official-Logo.jpg";
import { useNavigate } from "react-router-dom";
export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div id="welcome-cont">
      <img id="logo" src={logo} alt="logo" />
      <div id="welcome-text">
        <h3>Ops.......!!!&nbsp; That page does not exist on this site...</h3>
        <h4
          style={{
            color: "red",
            textDecoration: "underline",
            fontSize: "25px",
          }}
          onClick={() => navigate("/")}>
          {"Go back to HomePage"}
        </h4>
      </div>
      <div id="welcome-foot">
        <i>Javscript Enthusiast</i>
      </div>
    </div>
  );
}
