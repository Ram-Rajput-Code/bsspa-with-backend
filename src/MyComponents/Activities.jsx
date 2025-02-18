// import React from 'react';
// import './activities.css';

// const Activities = () => {
//   return (
//     <>
//       <div className="container-fluid">
//         {/* row1 header image*/}
//         <div className="row"><img src="/images/slider-one.jpg" alt="slider-one" /> </div>
//         {/* row1 */}
//         {/* row2 header text*/}
//         <div className="row" > <h3 style={{ textAlign: 'center' }}>Activities</h3> </div>
//         {/* row2 */}

//         {/* row3 */}
//         <div className="activitiesrow3">
//           <div className="activitiesimage" style={{ padding: '10px' }}><img src="/images/gallery39.jpg" alt="" height={'250px'} width={'100%'} /> </div>
//           < div className="activitiestext">
//             <div className="row" style={{ padding: '20px' }}>
//             We celebrate the rich cultural heritage of India by organizing engaging and creative activities for our students. One such cherished event is the Rakhi Making Competition, an exciting opportunity for students to showcase their artistic talent and creativity while learning about the significance of the <b style={{ display:'contents' }}>Raksha Bandhan festival</b>.
//               </div>

//           </div>
//         </div>
//         {/* row3 */}
//         {/* row4 */}
//         <div className="activitiesrow3">
//           <div className="activitiesimage" style={{ padding: '10px' }}><img src="/images/gallery14.jpg" alt="" height={'250px'} width={'100%'} /> </div>
//           <div className="activitiestext">
//             <div className="row" style={{ padding: '20px' }}>
//             We believe that <b style={{ display:'contents' }}>sports</b> are an integral part of holistic education. Our sports program is designed to nurture physical fitness, teamwork, leadership, and discipline among students while providing them with opportunities to excel in their favorite games and activities.
//              </div>

//           </div>
//         </div>
//         {/* row4 */}
//         {/* row5 */}
//         <div className="activitiesrow3">
//           <div className="activitiesimage" style={{ padding: '10px' }}><img src="/images/infrastructure_one.jpg" alt="" height={'250px'} width={'100%'} /> </div>
//           <div className="activitiestext">
//             <div className="row" style={{ padding: '20px' }}>
//             We believe in nurturing the holistic development of our students, and <b style={{ display:'contents' }}>yoga</b> plays an integral role in achieving that goal. Yoga is not just a form of physical exercise; it’s a way of life that promotes mental clarity, emotional balance, and spiritual well-being.
//                </div>

//           </div>
//         </div>
//         {/* row5 */}

//       </div >
//     </>
//   )
// }

// export default Activities

import { React, useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Container,
} from "@mui/material";
import axios from "axios";
import Backend_Url from "../Config/BackendUrl";
import token from "../Config/Token";

const activitiesData = [
  {
    image: "/images/gallery39.jpg",
    title: "Raksha Bandhan Celebration",
    description:
      "We celebrate the rich cultural heritage of India by organizing engaging and creative activities for our students. One such cherished event is the Rakhi Making Competition, an exciting opportunity for students to showcase their artistic talent and creativity while learning about the significance of the Raksha Bandhan festival.",
  },
  {
    image: "/images/gallery14.jpg",
    title: "Sports Activities",
    description:
      "We believe that sports are an integral part of holistic education. Our sports program is designed to nurture physical fitness, teamwork, leadership, and discipline among students while providing them with opportunities to excel in their favorite games and activities.",
  },
  {
    image: "/images/infrastructure_one.jpg",
    title: "Yoga for Holistic Development",
    description:
      "We believe in nurturing the holistic development of our students, and yoga plays an integral role in achieving that goal. Yoga is not just a form of physical exercise; it’s a way of life that promotes mental clarity, emotional balance, and spiritual well-being.",
  },
];

const Activities = () => {
  const [cardData, setCardData] = useState([]);
  const fetchCard = async () => {
    try {
      const response = await axios.get(`${Backend_Url}/HPBodyCard/getall`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // ✅ Extract image paths correctly
      if (Array.isArray(response.data.data) && response.data.data.length > 0) {
        setCardData(response.data.data || []); 
      } else {
        setCardData([]); // Fallback to empty array
      }
    } catch (error) {
      console.error("Error fetching slider images:", error);
      setCardData([]); // Handle error by setting an empty array
    }
  };

  useEffect(() => {
    fetchCard();
  }, []);
  return (
    <Container>
      {/* Header Image */}
      <Card>
        <CardMedia
          component="img"
          height="300"
          image="/images/slider-one.jpg"
          alt="Activities"
        />
      </Card>

      {/* Title */}
      <Typography variant="h3" align="center" sx={{ my: 4 }}>
        Activities
      </Typography>

      {/* Activities List */}
      <Grid container spacing={3} mb={2}>
        {cardData.map((activity, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: "100%" }}>
              <CardMedia
                component="img"
                height="250"
                image={activity.CardImage}
                alt={activity.CardImage}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom fontWeight="bold">
                  {activity.Title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  textAlign="justify"
                >
                  {activity.Details}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Activities;
