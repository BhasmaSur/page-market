"use client";

import { useState } from "react";
import httpService from "../../../services/httpService";
import { CONTROLLER, METHODS, OPERATION } from "../../../constants/controllers";
import { ROLE } from "../../../constants/roles";
import { setCookieDetails } from "../../../utility/loginUtils";

const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const handleClick = () => {
    const userPayload = {
      email_id: username,
      password: password,
      role: ROLE.USER,
      active: 1,
    };
    httpService(OPERATION.ADD, METHODS.post, userPayload, CONTROLLER.USER).then(
      (user) => {
        if (user) {
          alert("User added successfully")
        }
      }
    );

  };
  const hendleLogging = () =>{
    const userPayload = {
      email_id: username,
      password: password,
    };
    httpService(OPERATION.LOGIN, METHODS.post, userPayload, CONTROLLER.USER).then(
      (user) => {
        if (user) {
          alert("User logged in successfully", user)
          setCookieDetails({
            username: username,
            jwtToken: user.data.jwtToken,
            type: "PROFILE",
          });
        }
      }
    );
  }

  return (
    <>
      <div>
        ========Sign Up=============
        <input
          onChange={(e) => setUsername(e.target.value)}
          placeholder="user name"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button onClick={handleClick}>submit</button>
        =================================================
      </div>
      <div>
        =================Login===========================
        <input
          onChange={(e) => setUsername(e.target.value)}
          placeholder="user name"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button onClick={hendleLogging}>submit</button>
        ================================================
      </div>
    </>
  );
};

export default Login