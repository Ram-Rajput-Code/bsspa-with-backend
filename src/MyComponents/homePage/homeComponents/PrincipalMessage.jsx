import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  Container,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "bootstrap/dist/css/bootstrap.min.css";
import token from "../../../Config/Token";
import Backend_Url from "../../../Config/BackendUrl";

const PrincipalMessage = () => {
  const [principalImage, setPrincipalImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Principal's Message Data
  const principalMessages = {
    id: 1,
    message1:
      "This world was not built in a day. It took many years of sacrifices and uphill struggle to construct this, yet after overcoming all those hardships, this world is still to be perfected...",
    message2:
      "But as Einstein said, 'The world will not be destroyed by those who do evil, but by those who watch them without doing anything'...",
    message3: "Tomorrow - better than today.",
    principal: "Dr. A. P. Sharma",
  };

  // Fetch images from backend
  useEffect(() => {
    fetch(`${Backend_Url}/gallery/images/all`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched Principal Image Data:", data);
        if (data.groupedImages && Array.isArray(data.groupedImages.principal)) {
          setPrincipalImage(data.groupedImages.principal); // Use first image or fallback
        } else {
          throw new Error("Invalid API response format");
        }
      })
      .catch((err) => {
        console.error("Error fetching principal image:", err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Typography>Loading principal's image...</Typography>;
  if (error) return <Typography color="error">Error: {error}</Typography>;

  return (
    <Container sx={{marginTop:"10px"}}>
      <Card className="mb-4 shadow-lg">
        <CardContent>
          <Grid
            container
            spacing={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            {/* Left Side - Image */}
            {principalImage.length > 0 ? (
              principalImage.map((image, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  
                  key={index}
                  sx={{ width: "100%" }}
                >
                  <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
                    <CardMedia
                      component="img"
                      image={image.Imagepath} // ✅ Corrected image path
                      alt={`Gallery Image ${index}`}
                      sx={{
                        width: "100%",
                        height: {xs:"150px",
                          sm:"200px",
                          md:"250px",
                          lg:"300px",
                        },
                        objectFit: "cover",
                      }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/images/placeholder.jpg";
                      }}
                    />
                  </Card>
                </Grid>
              ))
            ) : (
              <Typography>No images available</Typography>
            )}

            {/* Right Side - Principal's Message */}
            <Grid item xs={12} md={6}>
              <Typography variant="h5" component="h2" gutterBottom sx={{fontWeight:"bold", fontSize:{xs:"1rem", sm:"1.1rem", md:"1.2rem"}}}>
                Principal's Message
              </Typography>

              <CustomAccordion variant="body1" text={principalMessages.message1} />
              <CustomAccordion variant="body1" text={principalMessages.message2} />

              <Typography variant="body1" sx={{ fontWeight: "bold", mt: 2 }}>
                {principalMessages.message3}
              </Typography>

              <Typography
                variant="body1"
                sx={{ fontWeight: "bold", mt: 2 }}
              >
                - {principalMessages.principal}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

// Custom Accordion Component
const CustomAccordion = ({ text }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Accordion
      elevation={0}
      sx={{ backgroundColor: "transparent", boxShadow: "none" }}
    >
      <AccordionSummary
        expandIcon={
          <IconButton onClick={() => setExpanded(!expanded)}>
            <ExpandMoreIcon />
          </IconButton>
        }
      >
        <Typography variant="body1" color="textSecondary">
          {/* Show shortened text when collapsed, and full text when expanded */}
          {expanded ? text : text.substring(0, 90) + "..."}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        {/* Only show the full text when expanded */}
        {expanded && <Typography>{text}</Typography>}
      </AccordionDetails>
    </Accordion>
  );
};


export default PrincipalMessage;

