import React from "react";
import { Grid, Typography, Container } from "@mui/material";

const data = {
  text: "The Acharya was born in the year 1896 A.D. From the very childhood the boy would almost always remain immersed in meditation and self contemplation. As he grew older, he began to meditate profoundly on the transitoriness of the world, on the frailties and futilities of mundane existence. In his boyhood, initiated himself from Yogiraj Gambhirnathji, he passed his time always in deep meditation in the jungle adjacent to Gorakhpur Math, Akash Ganga at Gaya, and Ashighat at Varanasi. There he passed his time merged in intense meditation. Later in the year 1916, on the holy day of Poush Purnima, he started deep self-mortification, and just after one month, on the holy day of Magha Purnima, he obtained salvation (Siddhi), and hence the Bharat Sevashram Sangha was established on the basis of the ‘Atmana Mokshartham Jagat Hitaya Cha’ philosophy. The great Acharya declared that this time is an age of Universal Emancipation. Within a short period, the great Acharya started his humanitarian activities through different branches of the Sangha all over the country. Whenever there were any calamities such as floods, famine, cyclone, earthquake, or any major epidemic such as cholera, plague, etc., Sangha came forward for the rescue. Sangha started to serve the pilgrims at distant pilgrim centers based on the Tirtha Sanskar movement by the great Acharya. Lakhs of pilgrims are benefited at the time of big fairs such as Kumbha, Solar Eclipse, Godavari Pushkaram, etc.",
  image: "/images/PRANAVANANADJI.jpg",
};

const FounderOfBSSPA = () => {
  return (
    <Container className="py-4">
      <Grid container spacing={4} alignItems="center">
        {/* Right Side (Image First on Small Screens) */}
        <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }} className="text-center">
          <img
            src={data.image}
            alt="Dynamic"
            className="img-fluid rounded shadow"
            style={{ maxWidth: "100%", height: "400px", objectFit: "cover" }}
          />
        </Grid>

        {/* Left Side (Text Second on Small Screens) */}
        <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
          <Typography variant="body1" className="mb-2" textAlign="justify">
            {data.text}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FounderOfBSSPA;
