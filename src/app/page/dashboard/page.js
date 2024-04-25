"use client";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import httpService from "../../../services/httpService";
import { API, CONTROLLER, METHODS, OPERATION } from "../../../constants/controllers";
import { ROLE } from "../../../constants/roles";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    httpService(null, METHODS.get, null, CONTROLLER.USER).then((users)=>{
      if(users){
        setUserData(users.data.body)
      }
    })
  }, []);

  return (
    <>
      Dashboard

      {userData &&
        userData.map((user) => {
          return <div>{user.email_id}</div>;
        })}
    </>
  );
};

export default Dashboard;
