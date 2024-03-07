"use client";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import httpService from "../../../services/httpService";
import { API, CONTROLLER, METHODS, OPERATION } from "../../../constants/controllers";
import { ROLE } from "../../../constants/roles";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  useEffect(() => {
    httpService(null, METHODS.get, null, CONTROLLER.USER).then((users)=>{
      if(users){
        setUserData(users.data.body)
      }
    })
  }, []);

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

  return (
    <>
      <div>
        <input
          onChange={(e) => setUsername(e.target.value)}
          placeholder="user name"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button onClick={handleClick}>submit</button>
      </div>
      {userData &&
        userData.map((user) => {
          return <div>{user.email_id}</div>;
        })}
    </>
  );
};

export default Dashboard;
