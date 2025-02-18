import React from "react";
import { Card, CardMedia, Typography, Box } from "@mui/material";

const cardData = [
  {
    cardImage: "/images/infrastructure_2.jpg",
    cardHeading: "Lab Facilities",
    cardDescription: `Well maintained and equipped labs enhance child's practical understanding of the subject.\n
Computer lab is equipped with the latest systems and academic software.\n
A fully-fledged library facilitates the best reading materials in the form of journals, periodicals, and reference books.`,
  },
  {
    cardImage: "/images/infrastructure_3.jpg",
    cardHeading: "Smart Class-Room",
    cardDescription: `For better understanding, smart classrooms are provided for all.\n
A separate activity room equipped with audiovisual facilities, toys & rides is available for preparatory classes.\n
Well-lighted and ventilated classrooms.`,
  },
  {
    cardImage: "/images/infrastructure_4.jpg",
    cardHeading: "School Bus",
    cardDescription: `The transport facility covers the majority of areas within Raipur.\n
Well-maintained buses are equipped with GPS tracking and first-aid kits.\n
Each bus has a trained driver and a dedicated attendant for safety.`,
  },
];

const LabFacilities2 = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        flexWrap: "wrap",
        padding: "20px",
      }}
    >
      {cardData.map((card, index) => (
        <Card
          key={index}
          sx={{
            maxWidth: 400,
            position: "relative",
            overflow: "hidden",
            "&:hover .overlay": { opacity: 1, transform: "translateY(0%)" },
          }}
        >
          <CardMedia
            component="img"
            height="220"
            image={card.cardImage}
            alt={card.cardHeading}
            sx={{
              transition: "0.5s",
              "&:hover": { filter: "brightness(0.3)" },
            }}
          />
          <Box
            className="overlay"
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              padding: "10px",
              opacity: 0,
              transform: "translateY(100%)",
              transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
            }}
          >
            <Typography variant="h6">{card.cardHeading}</Typography>
            <Typography variant="body2" style={{ whiteSpace: "pre-line" }}>
              {card.cardDescription}
            </Typography>
          </Box>
        </Card>
      ))}
    </div>
  );
};

export default LabFacilities2;
