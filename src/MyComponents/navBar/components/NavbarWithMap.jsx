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

  // Define your nav items and submenus
//   const navItems = [
//     {
//       label: "Home",
//       to: "/",
//     },
//     {
//       label: "About Us",
//       to: "/about",
//       submenu: [
//         {
//           label: "About School",
//           to: "/about",
//           onClick: () => scrollToSection(aboutSchoolRef),
//         },
//         {
//           label: "Founder of BSS",
//           to: "/about",
//           onClick: () => scrollToSection(founderBSSPARef),
//         },
//         {
//           label: "Founder of School",
//           to: "/about",
//           onClick: () => scrollToSection(founderSchoolRef),
//         },
//         {
//           label: "Secretary Message",
//           to: "/about",
//           onClick: () => scrollToSection(secretaryMessageRef),
//         },
//         {
//           label: "Principal Message",
//           to: "/about",
//           onClick: () => scrollToSection(principalMessageRef),
//         },
//         {
//           label: "Members",
//           to: "/about",
//           onClick: () => scrollToSection(membersRef),
//         },
//       ],
//     },
//     {
//       label: "Facilities",
//       to: "/facilities",
//       submenu: [
//         {
//           label: "Faculties",
//           to: "/facilities/faculties",
//         },
//         {
//           label: "Infrastructures and Facilities",
//           to: "/facilities/infrastructure",
//         },
//         {
//           label: "Our Praxis",
//           to: "/facilities/praxis",
//         },
//       ],
//     },
//     {
//       label: "Admission",
//       to: "/admission",
//       submenu: [
//         {
//           label: "Academic",
//           to: "/admission/academic",
//         },
//         {
//           label: "Procedure and Withdrawal",
//           to: "/admission/admission-procedure",
//         },
//         {
//           label: "School Rules",
//           to: "/admission/school-rules",
//         },
//         {
//           label: "Guideline To Parent",
//           to: "/admission/guideline-to-parent",
//         },
//         {
//           label: "Fees Deposition Rules",
//           to: "/admission/fees-deposition-rules",
//         },
//         {
//           label: "TC Issued",
//           to: "/admission/students-tc-list",
//         },
//         {
//           label: "Reg. Form Class 9 and 11",
//           to: "/admission/reg-form9and11",
//         },
//         {
//           label: "Reg. Form Class 10 and 12",
//           to: "/admission/reg-form10and12",
//         },
//         {
//           label: "Student Details",
//           to: "/admission/students-list",
//         },
//       ],
//     },
//     {
//       label: "Activities",
//       to: "/activities",
//     },
//     {
//       label: "Gallery",
//       to: "/gallery",
//     },
//     {
//       label: "Contact",
//       to: "/contact",
//     },
//   ];

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
