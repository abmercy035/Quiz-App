/** @format */

import logo from "./image/LASU-Official-Logo.jpg";
import { useNavigate } from "react-router-dom";
import "./styles/welcome.css";
import Button from "./Button";
export default function Welcome() {
  const navigate = useNavigate();
  return (
    <div id="welcome-cont">
      <img id="logo" src={logo} alt="logo" />
      <div id="welcome-text">
        <h2>
          Welcome to
          <br />
          lagos state university student official quiz app
        </h2>
        <code> By The Faculty Of Engineering </code>
      </div>
      <div id="welcome-foot">
        <Button
          nextPath="/form"
          func={navigate}
          value={"continue"}
          Id={"welcome-btn"}
        />
        <i>Javscript Enthusiast</i>
      </div>
    </div>
  );
}
