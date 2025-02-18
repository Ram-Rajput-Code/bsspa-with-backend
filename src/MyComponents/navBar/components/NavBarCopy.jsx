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
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import axios from "axios";
import Backend_Url from "../../../Config/BackendUrl";
import token from "../../../Config/Token";

const NavBarCopy = ({
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [anchorElAbout, setAnchorElAbout] = useState(null);
  const [anchorElFacilities, setAnchorElFacilities] = useState(null);
  const [anchorElAdmission, setAnchorElAdmission] = useState(null);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isFacilitiesOpen, setIsFacilitiesOpen] = useState(false);
  const [isAdmissionOpen, setIsAdmissionOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleMenuOpen = (event, setAnchorEl) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorElAbout(null);
    setAnchorElFacilities(null);
    setAnchorElAdmission(null);
  };

  // Mobile dropdown toggle handlers
  const toggleAboutDropdown = () => setIsAboutOpen(!isAboutOpen);
  const toggleFacilitiesDropdown = () => setIsFacilitiesOpen(!isFacilitiesOpen);
  const toggleAdmissionDropdown = () => setIsAdmissionOpen(!isAdmissionOpen);

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
      color=""
      elevation={0}
      sx={{ background: "rgba(255, 255, 255, 0.81)" }}
    >
      <Container>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <img src="/images/logo.png" alt="404" width="250px" />
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Box sx={{ display: "flex", gap: 2 }}>
              {/* Home link */}
              <NavLink
                to="/"
                className="nav-link"
                style={({ isActive }) => ({
                  color: isActive ? "orange" : "inherit",
                  textDecoration: "none",
                  padding: "5px",
                })}
              >
                home
                
                <ul>
        {menuData.map((menu) => (
          <li key={menu.Id}>
            <strong>{menu.Category_sub}</strong> 
            {menu.GruopName !== "null" && <span> (Group: {menu.GruopName})</span>}
          </li>
        ))}
      </ul>
              </NavLink>

              {/* About Us dropdown for desktop */}
              <div
                onMouseEnter={(e) => handleMenuOpen(e, setAnchorElAbout)}
                onMouseLeave={handleMenuClose}
              >
                <NavLink
                  to="/about"
                  className="nav-link"
                  style={({ isActive }) => ({
                    color: isActive ? "orange" : "inherit",
                    textDecoration: "none",
                    padding: "5px",
                  })}
                >
                  About Us
                  <ArrowDropDownIcon />
                </NavLink>
                <Menu
                  anchorEl={anchorElAbout}
                  open={Boolean(anchorElAbout)}
                  onClose={handleMenuClose}
                  MenuListProps={{
                    onMouseLeave: handleMenuClose,
                  }}
                >
                  <NavLink
                    to="/about"
                    className="nav-link"
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                      padding: "5px",
                    }}
                    onClick={() => scrollToSection(aboutSchoolRef)}
                  >
                    {" "}
                    <MenuItem onClick={handleMenuClose}>About School</MenuItem>
                  </NavLink>
                  <NavLink
                    to="/about"
                    className="nav-link"
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                      padding: "5px",
                    }}
                    onClick={() => scrollToSection(founderBSSPARef)}
                  >
                    <MenuItem onClick={handleMenuClose}>
                      Founder of BSS
                    </MenuItem>
                  </NavLink>
                  <NavLink
                    to="/about"
                    className="nav-link"
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                      padding: "5px",
                    }}
                    onClick={() => scrollToSection(founderSchoolRef)}
                  >
                    <MenuItem onClick={handleMenuClose}>
                      Founder of School
                    </MenuItem>
                  </NavLink>
                  <NavLink
                    to="/about"
                    className="nav-link"
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                      padding: "5px",
                    }}
                    onClick={() => scrollToSection(secretaryMessageRef)}
                  >
                    <MenuItem onClick={handleMenuClose}>
                      Secretary Message
                    </MenuItem>
                  </NavLink>

                  <NavLink
                    to="/about"
                    className="nav-link"
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                      padding: "5px",
                    }}
                    onClick={() => scrollToSection(principalMessageRef)}
                  >
                    <MenuItem>Principal Message</MenuItem>
                  </NavLink>
                  <NavLink
                    to="/about"
                    className="nav-link"
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                      padding: "5px",
                    }}
                    onClick={() => scrollToSection(membersRef)}
                  >
                    <MenuItem onClick={handleMenuClose}>Members</MenuItem>{" "}
                  </NavLink>
                </Menu>
              </div>

              {/* Facilities dropdown for desktop */}
              <div
                onMouseEnter={(e) => handleMenuOpen(e, setAnchorElFacilities)}
                onMouseLeave={handleMenuClose}
              >
                <NavLink
                  to="/facilities"
                  className="nav-link"
                  style={({ isActive }) => ({
                    color: isActive ? "orange" : "inherit",
                    textDecoration: "none",
                    padding: "5px",
                  })}
                >
                  Facilities
                  <ArrowDropDownIcon />
                </NavLink>
                <Menu
                  anchorEl={anchorElFacilities}
                  open={Boolean(anchorElFacilities)}
                  onClose={handleMenuClose}
                  MenuListProps={{
                    onMouseLeave: handleMenuClose,
                  }}
                >
                  <NavLink
                    to="/facilities/faculties"
                    className="nav-link"
                    style={({ isActive }) => ({
                      color: isActive ? "orange" : "inherit",
                      textDecoration: "none",
                      padding: "5px",
                    })}
                  >
                    <MenuItem onClick={handleMenuClose}>Faculties</MenuItem>
                  </NavLink>
                  <NavLink
                    to="/facilities/infrastructure"
                    className="nav-link"
                    style={({ isActive }) => ({
                      color: isActive ? "orange" : "inherit",
                      textDecoration: "none",
                      padding: "5px",
                    })}
                  >
                    <MenuItem onClick={handleMenuClose}>
                      Infrastructures and Facilities
                    </MenuItem>
                  </NavLink>
                  <NavLink
                    to="/facilities/praxis"
                    className="nav-link"
                    style={({ isActive }) => ({
                      color: isActive ? "orange" : "inherit",
                      textDecoration: "none",
                      padding: "5px",
                    })}
                  >
                    <MenuItem onClick={handleMenuClose}>Our Praxis</MenuItem>
                  </NavLink>
                </Menu>
              </div>

              {/* Admission dropdown for desktop */}
              <div
                onMouseEnter={(e) => handleMenuOpen(e, setAnchorElAdmission)}
                onMouseLeave={handleMenuClose}
              >
                <NavLink
                  to="/admission"
                  className="nav-link"
                  style={({ isActive }) => ({
                    color: isActive ? "orange" : "inherit",
                    textDecoration: "none",
                    padding: "5px",
                  })}
                >
                  Admission
                  <ArrowDropDownIcon />
                </NavLink>
                <Menu
                  anchorEl={anchorElAdmission}
                  open={Boolean(anchorElAdmission)}
                  onClose={handleMenuClose}
                  MenuListProps={{
                    onMouseLeave: handleMenuClose,
                  }}
                >
                  <NavLink
                    to="/admission/academic"
                    className="nav-link"
                    style={({ isActive }) => ({
                      color: isActive ? "orange" : "inherit",
                      textDecoration: "none",
                      padding: "5px",
                    })}
                  >
                    <MenuItem onClick={handleMenuClose}>Academic</MenuItem>
                  </NavLink>
                  <NavLink
                    to="/admission/admission-procedure"
                    className="nav-link"
                    style={({ isActive }) => ({
                      color: isActive ? "orange" : "inherit",
                      textDecoration: "none",
                      padding: "5px",
                    })}
                  >
                    <MenuItem onClick={handleMenuClose}>
                      Procedure and Withdrawal
                    </MenuItem>
                  </NavLink>
                  <NavLink
                    to="/admission/school-rules"
                    className="nav-link"
                    style={({ isActive }) => ({
                      color: isActive ? "orange" : "inherit",
                      textDecoration: "none",
                      padding: "5px",
                    })}
                  >
                    <MenuItem onClick={handleMenuClose}>School Rules</MenuItem>
                  </NavLink>
                  <NavLink
                    to="/admission/guideline-to-parent"
                    className="nav-link"
                    style={({ isActive }) => ({
                      color: isActive ? "orange" : "inherit",
                      textDecoration: "none",
                      padding: "5px",
                    })}
                  >
                    <MenuItem onClick={handleMenuClose}>
                      Guideline To Parent
                    </MenuItem>
                  </NavLink>
                  <NavLink
                    to="/admission/fees-deposition-rules"
                    className="nav-link"
                    style={({ isActive }) => ({
                      color: isActive ? "orange" : "inherit",
                      textDecoration: "none",
                      padding: "5px",
                    })}
                  >
                    <MenuItem onClick={handleMenuClose}>
                      Fees Deposition Rules
                    </MenuItem>
                  </NavLink>
                  <NavLink
                    to="/admission/students-tc-list"
                    className="nav-link"
                    style={({ isActive }) => ({
                      color: isActive ? "orange" : "inherit",
                      textDecoration: "none",
                      padding: "5px",
                    })}
                  >
                    <MenuItem onClick={handleMenuClose}>TC Issued</MenuItem>
                  </NavLink>
                  <NavLink
                    to="/admission/reg-form9and11"
                    className="nav-link"
                    style={({ isActive }) => ({
                      color: isActive ? "orange" : "inherit",
                      textDecoration: "none",
                      padding: "5px",
                    })}
                  >
                    <MenuItem onClick={handleMenuClose}>
                      Reg. Form Class 9 and 11
                    </MenuItem>
                  </NavLink>
                  <NavLink
                    to="/admission/reg-form10and12"
                    className="nav-link"
                    style={({ isActive }) => ({
                      color: isActive ? "orange" : "inherit",
                      textDecoration: "none",
                      padding: "5px",
                    })}
                  >
                    <MenuItem onClick={handleMenuClose}>
                      Reg. Form Class 10 and 12
                    </MenuItem>
                  </NavLink>
                  <NavLink
                    to="/admission/students-list"
                    className="nav-link"
                    style={({ isActive }) => ({
                      color: isActive ? "orange" : "inherit",
                      textDecoration: "none",
                      padding: "5px",
                    })}
                  >
                    <MenuItem onClick={handleMenuClose}>
                      Student Details
                    </MenuItem>
                  </NavLink>
                </Menu>
              </div>

              {/* Other links */}
              <NavLink
                to="/activities"
                className="nav-link"
                style={({ isActive }) => ({
                  color: isActive ? "orange" : "inherit",
                  textDecoration: "none",
                  padding: "5px",
                })}
              >
                Activities
              </NavLink>
              
              <NavLink
                to="/gallery"
                className="nav-link"
                style={({ isActive }) => ({
                  color: isActive ? "orange" : "inherit",
                  textDecoration: "none",
                  padding: "5px",
                })}
              >
               Gallery
              </NavLink>
              <NavLink
                to="/contact"
                className="nav-link"
                style={({ isActive }) => ({
                  color: isActive ? "orange" : "inherit",
                  textDecoration: "none",
                  padding: "5px",
                })}
              >
                Contact
              </NavLink>
            </Box>
          </Box>
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

      {/* Drawer for mobile view */}
      <Drawer
        anchor="right"
        open={isMobileMenuOpen}
        onClose={closeMenu}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "rgba(0, 0, 0, 0.3)", // Transparent dark background
            width: "300px",
            color: "white", // White text inside drawer
          },
        }}
        className="hide"
      >
        <List>
          <ListItem button onClick={closeMenu}>
            <NavLink
              to="/"
              className="nav-link"
              style={{
                color: "white",
                textDecoration: "none",
                padding: "5px",
              }}
            >
              Home
            </NavLink>
          </ListItem>

          {/* About Us dropdown for mobile */}
          <ListItem button onClick={toggleAboutDropdown}>
            <span style={{ color: "white", padding: "5px", cursor: "pointer" }}>
              About Us
              <ArrowDropDownIcon />
            </span>
          </ListItem>
          {isAboutOpen && (
            <List sx={{ position: "relative", left: "50px" }}>
              <NavLink
                to="/about"
                className="nav-link"
                style={{
                  color: "inherit",
                  textDecoration: "none",
                  padding: "5px",
                }}
                onClick={() => scrollToSection(aboutSchoolRef)}
              >
                <ListItem button onClick={closeMenu}>
                  About School
                </ListItem>
              </NavLink>
              <NavLink
                    to="/about"
                    className="nav-link"
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                      padding: "5px",
                    }}
                    onClick={() => scrollToSection(founderBSSPARef)}
                  >
                    <MenuItem onClick={handleMenuClose}>
                      Founder of BSS
                    </MenuItem>
                  </NavLink>
                  <NavLink
                    to="/about"
                    className="nav-link"
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                      padding: "5px",
                    }}
                    onClick={() => scrollToSection(founderSchoolRef)}
                  >
                    <MenuItem onClick={handleMenuClose}>
                      Founder of School
                    </MenuItem>
                  </NavLink>
                  <NavLink
                    to="/"
                    className="nav-link"
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                      padding: "5px",
                    }}
                    onClick={() => scrollToSection(secretaryMessageRef)}
                  >
                    <MenuItem onClick={handleMenuClose}>
                      Secretary Message
                    </MenuItem>
                  </NavLink>

                  <NavLink
                    to="/about"
                    className="nav-link"
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                      padding: "5px",
                    }}
                    onClick={() => scrollToSection(principalMessageRef)}
                  >
                    <MenuItem>Principal Message</MenuItem>
                  </NavLink>
                  <NavLink
                    to="/about"
                    className="nav-link"
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                      padding: "5px",
                    }}
                    onClick={() => scrollToSection(membersRef)}
                  >
                    <MenuItem onClick={handleMenuClose}>Members</MenuItem>{" "}
                  </NavLink>
            </List>
          )}

          {/* Facilities dropdown for mobile */}
          <ListItem button onClick={toggleFacilitiesDropdown}>
            <span style={{ color: "white", padding: "5px", cursor: "pointer" }}>
              Facilities
              <ArrowDropDownIcon />
            </span>
          </ListItem>
          {isFacilitiesOpen && (
            <List sx={{ position: "relative", left: "50px" }}>
              <NavLink
                    to="/facilities/faculties"
                    className="nav-link"
                    style={({ isActive }) => ({
                      color: isActive ? "orange" : "inherit",
                      textDecoration: "none",
                      padding: "5px",
                    })}
                  >
                    <MenuItem onClick={closeMenu}>Faculties</MenuItem>
                  </NavLink>
                  <NavLink
                    to="/facilities/infrastructure"
                    className="nav-link"
                    style={({ isActive }) => ({
                      color: isActive ? "orange" : "inherit",
                      textDecoration: "none",
                      padding: "5px",
                    })}
                  >
                    <MenuItem onClick={closeMenu}>
                      Infrastructures and Facilities
                    </MenuItem>
                  </NavLink>
                  <NavLink
                    to="/facilities/praxis"
                    className="nav-link"
                    style={({ isActive }) => ({
                      color: isActive ? "orange" : "inherit",
                      textDecoration: "none",
                      padding: "5px",
                    })}
                  >
                    <MenuItem onClick={closeMenu}>Our Praxis</MenuItem>
                  </NavLink>
            </List>
          )}

          {/* Admission dropdown for mobile */}
          <ListItem button onClick={toggleAdmissionDropdown}>
            <span style={{ color: "white", padding: "5px", cursor: "pointer" }}>
              Admission
              <ArrowDropDownIcon />
            </span>
          </ListItem>
          {isAdmissionOpen && (
            <List sx={{ position: "relative", left: "50px" }}>
              
                
                 
                  <NavLink
                    to="/admission/academic"
                    className="nav-link"
                    style={({ isActive }) => ({
                      color: isActive ? "orange" : "inherit",
                      textDecoration: "none",
                      padding: "5px",
                    })}
                  >
                    <MenuItem onClick={closeMenu}>Academic</MenuItem>
                  </NavLink>
                  <NavLink
                    to="/admission/admission-procedure"
                    className="nav-link"
                    style={({ isActive }) => ({
                      color: isActive ? "orange" : "inherit",
                      textDecoration: "none",
                      padding: "5px",
                    })}
                  >
                    <MenuItem onClick={closeMenu}>
                      Procedure and Withdrawal
                    </MenuItem>
                  </NavLink>
                  <NavLink
                    to="/admission/school-rules"
                    className="nav-link"
                    style={({ isActive }) => ({
                      color: isActive ? "orange" : "inherit",
                      textDecoration: "none",
                      padding: "5px",
                    })}
                  >
                    <MenuItem onClick={closeMenu}>School Rules</MenuItem>
                  </NavLink>
                  <NavLink
                    to="/admission/guideline-to-parent"
                    className="nav-link"
                    style={({ isActive }) => ({
                      color: isActive ? "orange" : "inherit",
                      textDecoration: "none",
                      padding: "5px",
                    })}
                  >
                    <MenuItem onClick={closeMenu}>
                      Guideline To Parent
                    </MenuItem>
                  </NavLink>
                  <NavLink
                    to="/admission/fees-deposition-rules"
                    className="nav-link"
                    style={({ isActive }) => ({
                      color: isActive ? "orange" : "inherit",
                      textDecoration: "none",
                      padding: "5px",
                    })}
                  >
                    <MenuItem onClick={closeMenu}>
                      Fees Deposition Rules
                    </MenuItem>
                  </NavLink>
                  <NavLink
                    to="/admission/students-tc-list"
                    className="nav-link"
                    style={({ isActive }) => ({
                      color: isActive ? "orange" : "inherit",
                      textDecoration: "none",
                      padding: "5px",
                    })}
                  >
                    <MenuItem onClick={closeMenu}>TC Issued</MenuItem>
                  </NavLink>
                  <NavLink
                    to="/admission/reg-form9and11"
                    className="nav-link"
                    style={({ isActive }) => ({
                      color: isActive ? "orange" : "inherit",
                      textDecoration: "none",
                      padding: "5px",
                    })}
                  >
                    <MenuItem onClick={closeMenu}>
                      Reg. Form Class 9 and 11
                    </MenuItem>
                  </NavLink>
                  <NavLink
                    to="/admission/reg-form10and12"
                    className="nav-link"
                    style={({ isActive }) => ({
                      color: isActive ? "orange" : "inherit",
                      textDecoration: "none",
                      padding: "5px",
                    })}
                  >
                    <MenuItem onClick={closeMenu}>
                      Reg. Form Class 10 and 12
                    </MenuItem>
                  </NavLink>
                  <NavLink
                    to="/admission/students-list"
                    className="nav-link"
                    style={({ isActive }) => ({
                      color: isActive ? "orange" : "inherit",
                      textDecoration: "none",
                      padding: "5px",
                    })}
                  >
                    <MenuItem onClick={closeMenu}>
                      Student Details
                    </MenuItem>
                  </NavLink>
               
            </List>
          )}

          <ListItem button onClick={closeMenu}>
            <NavLink
              to="/activities"
              className="nav-link"
              style={{
                color: "white",
                textDecoration: "none",
                padding: "5px",
              }}
            >
              Activities
            </NavLink>
          </ListItem>
          <ListItem button onClick={closeMenu}>
            <NavLink
              to="/gallery"
              className="nav-link"
              style={{
                color: "white",
                textDecoration: "none",
                padding: "5px",
              }}
            >
              Gallery
            </NavLink>
          </ListItem>
          <ListItem button onClick={closeMenu}>
            <NavLink
              to="/contact"
              className="nav-link"
              style={{
                color: "white",
                textDecoration: "none",
                padding: "5px",
              }}
            >
              Contact
            </NavLink>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default NavBarCopy;
