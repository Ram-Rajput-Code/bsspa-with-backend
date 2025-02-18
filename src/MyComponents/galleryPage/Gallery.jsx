import React, { useEffect, useState } from "react";
import token from "../../Config/Token";
import Backend_Url from "../../Config/BackendUrl";
import { Container, Grid, Typography, Box } from "@mui/material";

import GalleryImages from "./galleryComponents/GallaryImages";

const images = [
  ["/images/gallery1.jpg", "/images/gallery22.jpg"],
  ["/images/gallery3.jpg", "/images/gallery4.jpg"],
  ["/images/gallery5.jpg", "/images/gallery66.jpg"],
];

const Gallery = () => {
  const [GalleryImg, setGalleryImg] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        if (
          data.groupedImages &&
          Array.isArray(data.groupedImages.GallaryImgs)
        ) {
          setGalleryImg(data.groupedImages.GallaryImgs);
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

  if (loading) return <Typography>Loading Gallery's image...</Typography>;
  if (error) return <Typography color="error">Error: {error}</Typography>;
  return (
    <>
      {/* banner */}
      <Box
        sx={{
          height: {xs:"100px", md:"300px"},
          width: "100%",
          backgroundImage: "url(/images/our-praxis-banner.jpg)",
          backgroundSize: "cover",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
  variant="h3"
  sx={{
    fontSize:{xs:"1.5rem", md:"2rem"},
    color: "white",
    textShadow: "4px 2px 2px  rgba(0, 0, 0, 0.89)", // Adjust the values as needed
  }}
>
  Our Gallery
</Typography>
      </Box>

      <Container maxWidth="xl">
        <Grid container spacing={2} sx={{ paddingTop: 2 }}>
          {GalleryImg.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                key={index}
                component="img"
                src={image.Imagepath}
                alt={`gallery-img-${index}`}
                sx={{
                  width: "100%",
                  height: "400px",
                  objectFit: "cover",
                  boxShadow: 1,
                  borderRadius: 2,
                  mb: 2,
                }}
              />
            </Grid>
          ))}
        </Grid>
        <GalleryImages />
      </Container>
    </>
  );
};

export default Gallery;
