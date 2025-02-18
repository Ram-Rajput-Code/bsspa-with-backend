import React, { useEffect, useState } from "react";
import { Box, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import Backend_Url from "../../../Config/BackendUrl";
import token from "../../../Config/Token";
import axios from "axios";

// const sliderImages = [
//   { id: 1, src: "/images/sliderimg3.jpg", alt: "Slide 1" },
//   { id: 2, src: "/images/sliderimg2.jpg", alt: "Slide 2" },
//   { id: 3, src: "/images/sliderimg1.png", alt: "Slide 3" },
// ];

export default function Slider() {
  const [sliderImages, setSliderImages] = useState([]);

  console.log(sliderImages);

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1
    );
  };

  const fetchHomeSlider = async () => {
    try {
      const response = await axios.get(`${Backend_Url}/api/sliders/all`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // ✅ Extract image paths correctly
      if (Array.isArray(response.data) && response.data.length > 0) {
        setSliderImages(response.data[0].Imagepaths || []); // Get images from first object
      } else {
        setSliderImages([]); // Fallback to empty array
      }
    } catch (error) {
      console.error("Error fetching slider images:", error);
      setSliderImages([]); // Handle error by setting an empty array
    }
  };

  useEffect(() => {
    fetchHomeSlider();
  }, []);

  useEffect(() => {
    if (sliderImages.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
      }, 3000); // Change image every 3 seconds

      return () => clearInterval(interval);
    }
  }, [sliderImages]);

  return (
    <>
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: {
          xs:"150px",
          sm:"300px",
          md:"400px",
        },
        overflow: "hidden",
        borderRadius: "12px",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
      }}
    >
      {sliderImages.length > 0 ? (
        sliderImages.map((imageUrl, index) => (
          <Box
            key={imageUrl.id}
            component="img"
            src={imageUrl}
            alt={imageUrl.alt}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              transition: "opacity 0.5s ease-in-out",
              opacity: index === currentIndex ? 1 : 0,
            }}
          />
        ))
      ) : (
        <p>No images available</p>
      )}

      <IconButton
        onClick={prevSlide}
        sx={{
          position: "absolute",
          top: "50%",
          left: 10,
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0,0,0,0.5)",
          color: "white",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
        }}
      >
        <ArrowBackIos />
      </IconButton>

      <IconButton
        onClick={nextSlide}
        sx={{
          position: "absolute",
          top: "50%",
          right: 10,
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0,0,0,0.5)",
          color: "white",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
        }}
      >
        <ArrowForwardIos />
      </IconButton>
     
    </Box>
   
    </>
  );
}
