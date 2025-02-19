// import React, { useEffect, useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Box,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";

// import axios from "axios";
// import Backend_Url from "../../../Config/BackendUrl";
// import token from "../../../Config/Token";
// import { Link } from "react-router-dom";

// const NavBarCopy = () => {
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [menumain, setMenumain] = useState([]);
//   const [submain, setMenusub] = useState([]);
//   const [hoveredMenu, setHoveredMenu] = useState(null); // For Desktop Hover
//   const [openMobileMenu, setOpenMobileMenu] = useState(null); // For Mobile Click

//   const toggleDrawer = (open) => () => {
//     setDrawerOpen(open);
//   };

//   const fetchMenu = async () => {
//     try {
//       const response = await axios.get(`${Backend_Url}/MenuMaster/getall`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       if (response.status === 200) {
//         const submenu = response?.data?.data.filter(
//           (item) => item.GruopName !== null
//         );
//         setMenusub(submenu);

//         const main = response?.data?.data.filter(
//           (item) => item.GruopName === "null"
//         );
//         setMenumain(main);
//       }
//     } catch (error) {
//       console.error("Error fetching menu:", error);
//     }
//   };

//   useEffect(() => {
//     fetchMenu();
//   }, []);

//   return (
//     <AppBar position="static" sx={{ backgroundColor: "white" }}>
//       <Toolbar>
//         <Typography
//           variant="h6"
//           component="div"
//           sx={{ flexGrow: 1, display: "flex", alignItems: "center", p: 1 }}
//         >
//           <Box
//             component="img"
//             src="/images/logo.png"
//             alt="School Logo"
//             sx={{
//               height: "50px",
//               marginRight: "10px",
//             }}
//           />
//         </Typography>

//         {/* Desktop Navigation */}
//         <Box
//           sx={{
//             display: {
//               xs: "none",
//               sm: "none",
//               md: "flex",
//             },
//             color: "black",
//             fontWeight: "bold",
//           }}
//         >
//           {menumain?.map((item, index) => {
//             const hasSubmenu = submain?.some(
//               (subitem) => subitem.GruopName === item.Category_sub
//             );

//             return (
//               <Box
//                 key={index}
//                 sx={{
//                   position: "relative",
//                   px: 2,
//                   ...(hasSubmenu && { cursor: "pointer" }),
//                 }}
//                 onMouseEnter={() => hasSubmenu && setHoveredMenu(item.Category_sub)}
//                 onMouseLeave={() => hasSubmenu && setHoveredMenu(null)}
//               >
//                 <Link
//                   to={`/${item.URL}`}
//                   style={{
//                     textDecoration: "none",
//                     color: "black",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   {item.Category_sub}
//                 </Link>

//                 {hasSubmenu && hoveredMenu === item.Category_sub && (
//                   <Box
//                     sx={{
//                       position: "absolute",
//                       top: "100%",
//                       left: 0,
//                       backgroundColor: "white",
//                       boxShadow: 3,
//                       minWidth: "200px",
//                       zIndex: 10,
//                       borderRadius: "5px",
//                       padding: "10px",
//                     }}
//                   >
//                     {submain
//                       ?.filter((subitem) => subitem.GruopName === item.Category_sub)
//                       ?.map((subitem, subIndex) => (
//                         <Box key={subIndex} sx={{ px: 2, py: 1 }}>
//                           <Link
//                             to={`/${subitem.URL}`}
//                             style={{ textDecoration: "none", color: "black" }}
//                           >
//                             {subitem.Category_sub}
//                           </Link>
//                         </Box>
//                       ))}
//                   </Box>
//                 )}
//               </Box>
//             );
//           })}
//         </Box>

//         {/* Mobile Navigation */}
//         <IconButton
//           edge="end"
//           color="primary"
//           aria-label="menu"
//           sx={{ display: { xs: "flex", sm: "flex", md: "none" } }}
//           onClick={toggleDrawer(true)}
//         >
//           <MenuIcon sx={{ color: "blue" }} />
//         </IconButton>
//         <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
//           <Box sx={{ width: 250 }} role="presentation">
//             <Box
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 backgroundColor: "blue",
//                 color: "white",
//                 py: 0.6,
//                 px: 2,
//               }}
//             >
//               <Box
//                 component="img"
//                 src="/images/logo.png"
//                 alt="School Logo"
//                 sx={{
//                   height: "50px",
//                   marginRight: "10px",
//                 }}
//               />
//             </Box>

//             <List>
//               {menumain?.map((item, index) => {
//                 const hasSubmenu = submain?.some(
//                   (subitem) => subitem.GruopName === item.Category_sub
//                 );

//                 return (
//                   <Box key={index}>
//                     <ListItem
//                       onClick={() =>
//                         hasSubmenu
//                           ? setOpenMobileMenu(
//                               openMobileMenu === item.Category_sub ? null : item.Category_sub
//                             )
//                           : null
//                       }
//                       sx={{
//                         fontWeight: "bold",
//                         cursor: hasSubmenu ? "pointer" : "default",
//                       }}
//                     >
//                       <Link
//                         to={`/${item.URL}`}
//                         style={{
//                           textDecoration: "none",
//                           color: "black",
//                           width: "100%",
//                         }}
//                       >
//                         {item.Category_sub}
//                       </Link>
//                     </ListItem>

//                     {/* Sub-menu for Mobile */}
//                     {hasSubmenu && openMobileMenu === item.Category_sub && (
//                       <Box sx={{ pl: 4 }}>
//                         {submain
//                           ?.filter((subitem) => subitem.GruopName === item.Category_sub)
//                           ?.map((subitem, subIndex) => (
//                             <ListItem key={subIndex}>
//                               <Link
//                                 to={`/${subitem.URL}`}
//                                 style={{
//                                   textDecoration: "none",
//                                   color: "black",
//                                 }}
//                               >
//                                 {subitem.Category_sub}
//                               </Link>
//                             </ListItem>
//                           ))}
//                       </Box>
//                     )}
//                   </Box>
//                 );
//               })}
//             </List>
//           </Box>
//         </Drawer>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default NavBarCopy;

import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"; // Dropdown Icon
import axios from "axios";
import Backend_Url from "../../../Config/BackendUrl";
import token from "../../../Config/Token";
import { Link } from "react-router-dom";

const NavBarCopy = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menumain, setMenumain] = useState([]);
  const [submain, setMenusub] = useState([]);
  const [hoveredMenu, setHoveredMenu] = useState(null); // For Desktop Hover
  const [openMobileMenu, setOpenMobileMenu] = useState(null); // For Mobile Click

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const fetchMenu = async () => {
    try {
      const response = await axios.get(`${Backend_Url}/MenuMaster/getall`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.status === 200) {
        const submenu = response?.data?.data.filter(
          (item) => item.GruopName !== null
        );
        setMenusub(submenu);

        const main = response?.data?.data.filter(
          (item) => item.GruopName === "null"
        );
        setMenumain(main);
      }
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);

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
            src="/images/logo.png"
            alt="School Logo"
            sx={{
              height: "50px",
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
            color: "black",
            fontWeight: "bold",
          }}
        >
          {menumain?.map((item, index) => {
            const hasSubmenu = submain?.some(
              (subitem) => subitem.GruopName === item.Category_sub
            );

            return (
              <Box
                key={index}
                sx={{
                  position: "relative",
                  px: 2,
                  display: "flex",
                  alignItems: "center",
                  ...(hasSubmenu && { cursor: "pointer" }),
                }}
                onMouseEnter={() =>
                  hasSubmenu && setHoveredMenu(item.Category_sub)
                }
                onMouseLeave={() => hasSubmenu && setHoveredMenu(null)}
              >
                <Link
                  to={`/${item.URL}`}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {item.Category_sub}
                  {hasSubmenu && <ArrowDropDownIcon sx={{ ml: 0.5 }} />}
                </Link>

                {hasSubmenu && hoveredMenu === item.Category_sub && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      backgroundColor: "rgba(245, 242, 242, 0.3)",
                      boxShadow: 3,
                      minWidth: "200px",
                      zIndex: 10,
                      borderRadius: "5px",
                      padding: "10px",
                    }}
                  >
                    {submain
                      ?.filter(
                        (subitem) => subitem.GruopName === item.Category_sub
                      )
                      ?.map((subitem, subIndex) => (
                        <Box key={subIndex} sx={{ px: 2, py: 1 }}>
                          <Link
                            to={`/${subitem.URL}`}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            {subitem.Category_sub}
                          </Link>
                        </Box>
                      ))}
                  </Box>
                )}
              </Box>
            );
          })}
        </Box>

        {/* Mobile Navigation */}
        <IconButton
          edge="end"
          color="primary"
          aria-label="menu"
          sx={{ display: { xs: "flex", sm: "flex", md: "none" } }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon sx={{ color: "blue" }} />
        </IconButton>
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          sx={{
            "& .MuiDrawer-paper": {
              backgroundColor: "rgba(255, 255, 255, 0.7)", // Makes drawer background transparent
            },
          }}
        >
          <Box sx={{ width: 250 }} role="presentation">
            <IconButton
              edge="end"
             
              onClick={toggleDrawer(false)}
              sx={{
                position: "absolute",
                top: 10,
                right: 10,
                color: "black",
                zIndex:22,
              }}
            >
              <CloseIcon />
            </IconButton>
            {/* logo on top of the drawer */}
            {/* <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "blue",
                color: "white",
                py: 0.6,
                px: 2,
              }}
            >
              <Box
                component="img"
                src="/images/logo.png"
                alt="School Logo"
                sx={{
                  height: "50px",
                  marginRight: "10px",
                }}
              />
            </Box> */}

            <List>
              {menumain?.map((item, index) => {
                const hasSubmenu = submain?.some(
                  (subitem) => subitem.GruopName === item.Category_sub
                );

                return (
                  <Box key={index}>
                    <ListItem
                      onClick={() =>
                        hasSubmenu
                          ? setOpenMobileMenu(
                              openMobileMenu === item.Category_sub
                                ? null
                                : item.Category_sub
                            )
                          : null
                      }
                      sx={{
                        fontWeight: "bold",
                        cursor: hasSubmenu ? "pointer" : "default",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Link
                        to={`/${item.URL}`}
                        style={{
                          textDecoration: "none",
                          color: "black", //text color on mobile view
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {item.Category_sub}
                        {hasSubmenu && <ArrowDropDownIcon />}
                      </Link>
                    </ListItem>

                    {/* Sub-menu for Mobile */}
                    {hasSubmenu && openMobileMenu === item.Category_sub && (
                      <Box sx={{ pl: 2 }}>
                        {submain
                          ?.filter(
                            (subitem) => subitem.GruopName === item.Category_sub
                          )
                          ?.map((subitem, subIndex) => (
                            <ListItem key={subIndex}>
                              <Link
                                to={`/${subitem.URL}`}
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
                              >
                                {subitem.Category_sub}
                              </Link>
                            </ListItem>
                          ))}
                      </Box>
                    )}
                  </Box>
                );
              })}
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default NavBarCopy;
