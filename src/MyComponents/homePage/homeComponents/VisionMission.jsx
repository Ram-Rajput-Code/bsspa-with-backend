import React from "react";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import { MdOutlineMonitor } from "react-icons/md";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function VisionMission() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundImage: "url('/images/body3bg.jpg')",
        padding: "40px 10px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "auto",
      }}
    >
      <Grid container justifyContent="center" spacing={2}>
        {[
          {
            icon: (
              <MdOutlineMonitor
                style={{
                  fontSize: "50px",
                  color: "orange",
                  marginBottom: "10px",
                }}
              />
            ),
            title: "Our Vision",
            description:
              "Our vision is to enable the learners not only to acquire knowledge but wisdom which will make this world worth habitable with complete peace and harmony without violence, jealousy, intolerance, hatred, and enmity.",
          },
          {
            icon: (
              <FaHeartCircleCheck
                style={{
                  fontSize: "50px",
                  color: "orange",
                  marginBottom: "10px",
                }}
              />
            ),
            title: "Our Mission",
            description:
              "Our mission is to spread man-making education at all levels irrespective of caste, creed, and religion by making life's journey from animality to humanity & ultimately to divinity.",
          },
        ].map((item, index) => (
          <Grid item xs={12} sm={4} md={3} key={index}>
            <motion.div
              whileHover={{
                backgroundImage:
                  "linear-gradient(to top, #03438f, transparent)",
                transition: { duration: 0.4 },
              }}
              style={{
                height: "300px",
                width: "95%",
                border: "1px solid whitesmoke",
                margin: "10px",
                color: "white",
                padding: "10px",
                textAlign: "justify",
                overflow: "hidden",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundImage:
                  "linear-gradient(to top, transparent, #03438f)",
              }}
            >
              {item.icon}
              <Typography
                variant="h5"
                sx={{ color: "#fdfdfd", textAlign: "center" }}
              >
                {item.title}
              </Typography>
              <Typography sx={{ color: "#fdfdfd" }}>
                {item.description}
              </Typography>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
