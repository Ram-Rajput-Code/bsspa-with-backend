import React, { useEffect, useState } from "react";
import "./SessionAdmission.css";
import axios from "axios";
import Backend_Url from "../../../Config/BackendUrl";
import token from "../../../Config/Token";

export default function SessionAdmission() {
  const [email, setEmail] = useState([]);
  const [phone, setPhone] = useState([]);

  const fetchGeneral = async () => {
    try {
      const response = await axios.get(`${Backend_Url}/GeneralSetting/1`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = response.data;
      setEmail(data.Email); // Assuming 'email' is part of the response object
      setPhone(data.Phone); // Assuming 'name' is part of the response object
    } catch (error) {
      console.error("Error fetching menu data:", error);
    }
  };
  useEffect(() => {
    fetchGeneral();
  }, []);
  return (
    <div className="container-fluid" style={{ padding: "0" }}>
      <div class="background-image">
        <div class="overlay"></div>
        <h4> Admissions Open for Upcoming Session - 2024-2025</h4>
        
        <h1>Any Enquiry call us : 
        {phone || "0771-6996222..."} </h1>
        <p>{email || "Loading..."}</p>
      </div>
    </div>
  );
}
