

import { Grid, Typography, Card, CardMedia, Paper,Container } from "@mui/material";
import React, { useEffect, useState } from "react";

import token from "../../../Config/Token";
import Backend_Url from "../../../Config/BackendUrl";


const WelcomeMessage = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        if (response.status === 403) {
          throw new Error("Access forbidden: Check token or permissions");
        }
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (
          data.groupedImages &&
          Array.isArray(data.groupedImages.HomeWelcomeImage)
        ) {
          setImages(data.groupedImages.HomeWelcomeImage);
        } else {
          throw new Error("Invalid API response format");
        }
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Typography>Loading images...</Typography>;
  if (error) return <Typography color="error">Error: {error}</Typography>;

  return (
    <Container maxWidth="lg"  sx={{marginTop:"10px"}}>
      <Paper
        sx={{
          p: 2,

          backgroundColor: "#f9f9f9",
          borderRadius: 2,
          boxShadow: 1,
        }}
      >
        <Typography variant="h5" align="center" fontWeight="bold">
          Welcome to
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="primary"
          fontWeight="bold"
          sx={{ fontSize: { xs: "1rem", md: "1.2rem" }, mb: 2 }}
        >
          Bharat Sevashram Sangha Pranavananda Academy
        </Typography>
        <Grid
          container
          spacing={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Left Side: Text Section */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="body2"
              paragraph
              sx={{
                textAlign: "justify",
                fontSize: { xs: "0.7rem", md: "0.9rem" },
              }}
            >
              Pranavananda Academy, run by Bharat Sevashram Sangha, with its
              diversified academic activities in various parts of the country,
              has come into existence in Raipur, commemorating the Centenary
              Celebrations of Swami Pranavanandaji Maharaj. At present, the
              school stands on a 5-acre plot of land donated by Shishu Shiksha
              Samiti by virtue of the relentless efforts of a devotee of “Bharat
              Sevashram Sangha,” located on VIP Road leading to Mana Airport.
              The construction of the school started in April 1996, covering an
              area of 82,200 sq. ft. to accommodate students from pre-primary to
              class XII The aim of the academy is to grow in the field of
              college education in all branches and disciplines and earn a
              reputation as a Universal Pedestal of Learning. The Bharat
              Sevashram Sangha, a philanthropic, charitable, socio-religious
              organization founded over 80 years ago by Acharya Shrimat Swami
              Parnavanandaji Maharaj, is dedicated to the well-being of mankind.
              The Sangha has a wide missionary network and education projects,
              with more than 60 branches and 600 Unity Centers across India and
              abroad, including the UK, USA, Canada, South America, Guyana,
              Trinidad, the Far-East, and Bangladesh.
            </Typography>
          </Grid>

          {/* Right Side: Image Section */}
          <Grid item xs={12} sm={6}>
            {images.length > 0 ? (
              images.map((image, index) => (
                <Card key={index} sx={{ borderRadius: 2, boxShadow: 2, mb: 1 }}>
                  <CardMedia
                    component="img"
                    image={image.Imagepath}
                    alt={`Gallery Image ${index}`}
                    sx={{
                      width: "100%",
                      height: { xs: "150px", md: "320px" },
                      objectFit: "cover",
                    }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/images/placeholder.jpg";
                    }}
                  />
                </Card>
              ))
            ) : (
              <Typography>No images available</Typography>
            )}
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default WelcomeMessage;
