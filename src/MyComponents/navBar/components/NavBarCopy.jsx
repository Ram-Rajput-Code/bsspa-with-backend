

import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,

  Drawer,
  List,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import axios from "axios";
import Backend_Url from "../../../Config/BackendUrl";
import token from "../../../Config/Token";
import { Link } from "react-router-dom";

const NavBarCopy = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menumain, setmenumain] = useState([]);
  const [submain, setmenusub] = useState([]);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };



  const fetchMenu = async () => {
    try {
     
      
      const response = await axios.get(`${Backend_Url}/MenuMaster/getall`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("Hello ji..", response);
      if (response.status === 200) {
        const submenu = response?.data?.data.filter(
          (item) => item.GruopName !== null
        );
        setmenusub(submenu);
        const main = response?.data?.data
          .map((item) => {
            if (item.GruopName === "null") {
              return item;
            } else {
             
              return null;
            }
          })
          .filter((item) => item != null);
        setmenumain(main);
      }
    } catch (error) {
      console.error("Generated Error..", error);
     
    }
  };
  useEffect(() => {
    fetchMenu();
    
  }, []);

  const drawerContent = (
    <Box sx={{ width: 250 }} role="presentation">
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          backgroundColor: "blue",
          color:"red",
          py: 0.6,
        }}
      >
        <Box
          component="img"
          
          src="/images/logo.png"
          alt="School Logofooter"
          sx={{
            height: {
              xs: "53px",
              sm: "62px",
              md: "66px",
            },
            marginRight: "10px",
          }}
        />
        {/* <Divider /> */}
      </Box>
   
      {menumain?.map((item, index) => {
            if (item) {
              return (
                <Box>
                  <Link to={`/${item.URL}`} style={{ textDecoration: "none", color: "black", fontWeight: "bold", paddingLeft:"10px" }}>
                {item.Category_sub}
              </Link>
                  <Box>
                    {submain?.map((subitem, index) => {
                      if (subitem.GruopName === item.Category_sub) {
                        return <List sx={{listStyle:"none", marginLeft:"20px"}}>
                          <Link
                      key={index}
                      to={`/${subitem.URL}`}
                      style={{ display: "block", textDecoration: "none", color: "black", marginLeft: "20px" }}
                    >
                      {subitem.Category_sub}
                    </Link>
                        </List>;
                      }
                    })}
                  </Box>
                </Box>
              );
            }
          })}
    </Box>
  );

  return (
    <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: "flex", alignItems: "center", p: 1 }}
        >
          <Box
            component="img"
            // src="/Img/Logo/logo.jpg"
            src="/images/logo.png"
            alt="School Logo"
            sx={{
              height: {
                xs: "50px",
                sm: "60px",
                md: "66px",
              },
              marginRight: "10px",
            }}
          />
        </Typography>

        {/* Desktop Navigation */}
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "flex",
            },
            color:"black",
            fontWeight:"bold",
          }}
        >
          {menumain?.map((item, index) => {
            if (item) {
              return (
                <Box>
                  <Link to={`/${item.URL}`} style={{ textDecoration: "none", color: "black", fontWeight: "bold", paddingLeft:"10px" }}>
                {item.Category_sub}
              </Link>
                  <Box>
                    {submain?.map((subitem, index) => {
                      if (subitem.GruopName === item.Category_sub) {
                        return <List sx={{listStyle:"none", marginLeft:"20px"}}>
                          <Link
                      key={index}
                      to={`/${subitem.URL}`}
                      style={{ display: "block", textDecoration: "none", color: "black", marginLeft: "20px" }}
                    >
                      {subitem.Category_sub}
                    </Link>
                        </List>;
                      }
                    })}
                  </Box>
                </Box>
              );
            }
          })}
        </Box>

        {/* Mobile Navigation */}
        <IconButton
          edge="end"
          color="red"
          aria-label="menu"
          sx={{ display: { xs: "flex", sm: "flex", md: "none" } }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon sx={{color:"blue"}} />
        </IconButton>
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          {drawerContent}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default NavBarCopy;
