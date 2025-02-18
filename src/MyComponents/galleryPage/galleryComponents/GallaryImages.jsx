import React, { useEffect, useState } from "react";
import token from "../../../Config/Token";
import Backend_Url from "../../../Config/BackendUrl";
import { Container, Grid, Card, CardMedia, Typography } from "@mui/material";

const GalleryImages = () => {
  const [EyeAndDental, setEyeAndDental] = useState(null);
  const [EyeTestCamp, setEyeTestCamp] = useState(null);
  const [FireMockDrill, setFireMockDrill] = useState(null);
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
          setEyeAndDental(data.groupedImages.EyeAndDental);
          setEyeTestCamp(data.groupedImages.EyeTestCamp);
          setFireMockDrill(data.groupedImages.FireMockDrill);
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

  if (loading) return <Typography>Loading image...</Typography>;
  if (error) return <Typography color="error">Error: {error}</Typography>;
  return (
    <Container className="mt-4">
      {/* Eye and Dental Section */}
      <section className="mb-5">
        <Typography
          variant="h3"
          style={{ textAlign: "center", color: "#007bff", fontWeight: "bold", fontSize:"1.8rem" }}
          className="mb-4"
        >
          Eye and Dental
        </Typography>
        <Grid container spacing={3}>
          {EyeAndDental.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card
                className="shadow-sm"
                style={{ borderRadius: "3px", border: "0px solid #ccc" }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={image.Imagepath}
                  alt="Eye and Dental"
                  style={{ objectFit: "cover" }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </section>

      {/* Eye Test Camp Section */}
      <section className="mb-5">
        <Typography
          variant="h3"
          style={{ textAlign: "center", color: "#28a745", fontWeight: "bold", fontSize:"1.8rem" }}
          className="mb-4"
        >
          Eye Test Camp
        </Typography>
        <Grid container spacing={3}>
          {EyeTestCamp.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card
                className="shadow-sm"
                style={{ borderRadius: "3px", border: "0px solid #ccc" }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={image.Imagepath}
                  alt="Eye Test Camp"
                  style={{ objectFit: "cover", borderRadius: "0" }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </section>

      {/* Fire Mock Drill Section */}
      <section className="mb-5">
        <Typography
          variant="h3"
          style={{ textAlign: "center", color: "#dc3545", fontWeight: "bold", fontSize:"1.8rem" }}
          className="mb-4"
        >
          Fire Mock Drill
        </Typography>
        <Grid container spacing={3}>
          {FireMockDrill.map((src, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card
                className="shadow-sm"
                style={{ borderRadius: "3px", border: "0px solid #ccc" }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={src.Imagepath}
                  alt="Fire Mock Drill"
                  style={{ objectFit: "cover", borderRadius: "0px" }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </section>
    </Container>
  );
};

export default GalleryImages;
