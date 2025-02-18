
import React, { useEffect, useState } from "react";
import "../App.css";
import { Box, Typography, Link, Grid, IconButton } from "@mui/material";
import { FaSquareFacebook, FaTwitter, FaPinterestP, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import axios from "axios";
import Backend_Url from "../Config/BackendUrl";
import token from "../Config/Token";


export default function Footer() {
  const [email, setEmail] = useState([]);
  const [address, setAddress] = useState([]);
  

  const fetchGeneral = async () => {
    try {
      const response = await axios.get(`${Backend_Url}/GeneralSetting/1`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = response.data;
      setEmail(data.Email); // Assuming 'email' is part of the response object
      setAddress(data.Address1); // Assuming 'address' is part of the response object
  
    } catch (error) {
      console.error("Error fetching menu data:", error);
    }
  };
  useEffect(() => {
    fetchGeneral();
  }, []);
  return (
    <Box sx={{ backgroundColor: "#2f2f2f", color: "white", p: 4 }}>
      <Grid container spacing={3} justifyContent="space-between" alignItems="center">
        {/* Logo and About Section */}
        <Grid item xs={12} md={4} textAlign={{ xs: "center", md: "left" }}>
          <Box display="flex" alignItems="center" justifyContent={{ xs: "center", md: "start" }}>
            <img src="/images/logofooter.png" alt="Logo" style={{ height: 70, marginRight: 10 }} />
            <div className="footerlogo" style={{fontSize:"0.8rem"}}>
              BHARAT Sevashram Sangha <br /> Pranavananda Academy
            </div>
          </Box>
          <Typography variant="body2" mt={2} margin="auto" maxWidth={400} sx={{textAlign:"justify"}}>
            Pranavananda Academy, run by Bharat Sevashram Sangha, with its diversified academic activities in various parts of the country, has come into existence in Raipur commemorating the Centenary Celebrations of Swami Pranavanandaji Maharaj.
          </Typography>
        </Grid>
        
        {/* Links Section */}
        <Grid item xs={12} md={3} textAlign={{ xs: "center", md: "left" }}>
          <Typography variant="h6" color="orange">Links</Typography>
          <Box display="flex" flexDirection="column" gap={1}>
            <Link href="/about" color="inherit" underline="none">About Us</Link>
            <Link href="/admission" color="inherit" underline="none">Admission</Link>
            <Link href="/facilities" color="inherit" underline="none">Facilities</Link>
            <Link href="/activities" color="inherit" underline="none">Activities</Link>
            <Link href="/contact" color="inherit" underline="none">Contact Us</Link>
          </Box>
        </Grid>
        
        {/* Contact Section */}
        <Grid item xs={12} md={4} textAlign={{ xs: "center", md: "left" }}>
          <Typography variant="h6" color="orange">Our Office</Typography>
          <Typography variant="body2">
            Bharat Sevashram Sangha Pranavananda Academy<br />
            {/* VIP Road, Raipur (C.G) */}
            {address || "loading..."}
          </Typography>
          <Typography variant="body2">{email || "Loading..."}</Typography>
          <Box display="flex" justifyContent={{ xs: "center", md: "start" }} gap={1} mt={2}>
            <IconButton color="inherit"><FaSquareFacebook /></IconButton>
            <IconButton color="inherit"><FaTwitter /></IconButton>
            <IconButton color="inherit"><FaPinterestP /></IconButton>
            <IconButton color="inherit"><FaInstagram /></IconButton>
            <IconButton color="inherit"><FaLinkedinIn /></IconButton>
          </Box>
        </Grid>
      </Grid>
      
      {/* Footer Bottom */}
      <Box textAlign="center" mt={3} pt={2} borderTop={1} borderColor="gray">
        <Typography variant="body2">Copyrights © 2024 Bharat Sevashram Sangha Pranavananda Academy | All Rights Reserved.</Typography>
      </Box>
    </Box>
  );
}
