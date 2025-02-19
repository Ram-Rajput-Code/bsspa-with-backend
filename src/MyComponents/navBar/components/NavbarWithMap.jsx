import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  Box,
  Container,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import axios from "axios";
import Backend_Url from "../../../Config/BackendUrl";
import token from "../../../Config/Token";
const NavBarWithMap = ({
  aboutBannerRef,
  aboutSchoolRef,
  founderBSSPARef,
  founderSchoolRef,
  secretaryMessageRef,
  principalMessageRef,
  membersRef,
  visionMissionRef,
  tenDevineMessageRef,
}) => {
  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  // Mobile Drawer state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Desktop dropdown state (one at a time)
  const [desktopMenu, setDesktopMenu] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleDesktopMenuOpen = (e, label) => {
    // prevent navigation if there is a submenu
    e.preventDefault();
    setAnchorEl(e.currentTarget);
    setDesktopMenu(label);
  };

  const handleDesktopMenuClose = () => {
    setAnchorEl(null);
    setDesktopMenu(null);
  };

  // Mobile dropdown state for each nav item with submenu
  const [mobileDropdowns, setMobileDropdowns] = useState({});
  const toggleMobileDropdown = (label) => {
    setMobileDropdowns((prev) => ({ ...prev, [label]: !prev[label] }));
  };


  const [menuData, setMenuData] = useState([]);
  const fetchGeneral = async () => {
    try {
      const response = await axios.get(`${Backend_Url}/MenuMaster/getall`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = response.data;
      setMenuData(data.data); // Assuming 'email' is part of the response object

    } catch (error) {
      console.error("Error fetching menu data:", error);
    }
  };
  useEffect(() => {
    fetchGeneral();
  }, []);
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{ background: "rgba(255, 255, 255, 0.81)", color:"black" }}
    >
      <Container>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <img src="/images/logo.png" alt="404" width="250px" />
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Box sx={{ display: "flex", gap: 2 }}>
            {menuData.map((menu) => (
          <li key={menu.Id} style={{listStyle:"none"}}>
            <strong>{menu.Category_sub}</strong> 
            {menu.GruopName !== "null" && <span> (Group: {menu.GruopName})</span>}
          </li>
        ))}
              {/* {menuData.map((item, index) => {
                if (item.submenu) {
                  return (
                    <div key={index}>
                      <NavLink
                        to={item.to}
                        className="nav-link"
                        style={({ isActive }) => ({
                          color: isActive ? "orange" : "inherit",
                          textDecoration: "none",
                          padding: "5px",
                        })}
                        onClick={(e) => handleDesktopMenuOpen(e, item.label)}
                      >
                        {item.label} <ArrowDropDownIcon />
                      </NavLink>
                      <Menu
                        anchorEl={anchorEl}
                        open={desktopMenu === item.label}
                        onClose={handleDesktopMenuClose}
                      >
                        {item.submenu.map((sub, subIndex) => (
                          <NavLink
                            key={subIndex}
                            to={sub.to}
                            className="nav-link"
                            style={{
                              color: "inherit",
                              textDecoration: "none",
                              padding: "5px",
                            }}
                            onClick={() => {
                              if (sub.onClick) sub.onClick();
                              handleDesktopMenuClose();
                            }}
                          >
                            <MenuItem>{sub.label}</MenuItem>
                          </NavLink>
                        ))}
                      </Menu>
                    </div>
                  );
                } else {
                  return (
                    <NavLink
                      key={index}
                      to={item.to}
                      className="nav-link"
                      style={({ isActive }) => ({
                        color: isActive ? "orange" : "inherit",
                        textDecoration: "none",
                        padding: "5px",
                      })}
                    >
                      {item.label}
                    </NavLink>
                  );
                }
              })} */}
            </Box>
          </Box>

          {/* Mobile Menu Button */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              color="inherit"
              onClick={toggleMobileMenu}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={isMobileMenuOpen}
        onClose={closeMenu}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            width: "300px",
            color: "white",
          },
        }}
        className="hide"
      >
        <List>
          {menuData.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem
                button
                onClick={
                  item.submenu
                    ? () => toggleMobileDropdown(item.label)
                    : closeMenu
                }
              >
                {item.submenu ? (
                  <span
                    style={{ color: "white", padding: "5px", cursor: "pointer" }}
                  >
                    {item.label} <ArrowDropDownIcon />
                  </span>
                ) : (
                  <NavLink
                    to={item.to}
                    className="nav-link"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      padding: "5px",
                    }}
                  >
                    {item.label}
                  </NavLink>
                )}
              </ListItem>
              {item.submenu && mobileDropdowns[item.label] && (
                <List sx={{ position: "relative", left: "50px" }}>
                  {item.submenu.map((sub, subIndex) => (
                    <NavLink
                      key={subIndex}
                      to={sub.to}
                      className="nav-link"
                      style={{
                        color: "inherit",
                        textDecoration: "none",
                        padding: "5px",
                      }}
                      onClick={() => {
                        if (sub.onClick) sub.onClick();
                        closeMenu();
                      }}
                    >
                      <ListItem button>{sub.label}</ListItem>
                    </NavLink>
                  ))}
                </List>
              )}
            </React.Fragment>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default NavBarWithMap;
