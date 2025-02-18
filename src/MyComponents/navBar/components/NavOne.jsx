

import React, { useEffect, useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";
import { Box, Typography, Stack, Grid, Button } from "@mui/material";
import Backend_Url from "../../../Config/BackendUrl";
import token from "../../../Config/Token";
import axios from "axios";

export default function NavOne() {
  const [email, setEmail] = useState([]);
 

  const fetchGeneral = async () => {
    try {
      const response = await axios.get(`${Backend_Url}/GeneralSetting/1`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = response.data;
      setEmail(data.Email); // Assuming 'email' is part of the response object
    
    } catch (error) {
      console.error("Error fetching menu data:", error);
    }
  };
  useEffect(() => {
    fetchGeneral();
  }, []);

  return (
    <Box sx={{ backgroundColor: "#f68a15", width: "100%", py: 1 }}>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        sx={{ maxWidth: "1200px", mx: "auto", px: 2 }}
      >
        {/* Email Section */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <MdOutlineMail
            size={24}
            style={{ marginRight: "10px", color: "white" }}
          />
          <Typography
            variant="body1"
            sx={{ color: "white", fontSize: { xs: "0.9rem", md: "1rem" } }}
          >
            {/* bsspranavanandaacademy10@gmail.com */}
            {email || "Loading..."}
         
          </Typography>
        </Grid>

        {/* Navigation Links */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end" },
          }}
        >
          <Stack direction="row" spacing={2}>
            <Button
              component={Link}
              to="/MandatoryDisclosure"
              sx={{
                color: "white",
                textTransform: "none",
                fontSize: { xs: "0.8rem", md: "1rem" },
              }}
            >
              Mandatory Disclosure
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
