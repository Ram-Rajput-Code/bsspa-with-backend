import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Grid, Typography } from "@mui/material";

const data = {
  title: "SWAMI BUDHANANDA JI MAHARAJ (FOUNDER OF SCHOOL)",
  text: "Swami Buddhananda, former General Secretary, Bharat Sevashram Sangha, expired on 26th January at 3:45 p.m.. He was 92. Swamiji came in contact with Swami Pranavananda Maharaj, the great founder of Bharat Sevashram Sangha in 1940 and renounced his life. He took Sannyas in 1952. He stayed in Gujarat, Jamshedpur, Ranchi and travelled all over India and abroad to preach the message of Swami Pranavananda. He started a movement of Leprosy eradication in the East Singhbhum tribal belt and ran 4 Leprosy Hospitals and 92 Clinics in this belt and made a successful rehabilitation of the Lepers. He also made a hectic effort for the upliftment of backward class and Tribal welfare in several districts of Jharkhand by running large number of Tribal Students Homes, Charitable Dispensaries, Mobile Medical Units, Hospitals, Schools Employment generation projects etc. His efforts for the poor and downtrodden was of exceptional quality.",
  image: "/images/SwamiBuddhananda.jpg",
};

const FounderOfSchool = () => {
  return (
    <Container className="py-4">
      <Grid container spacing={4} alignItems="center">
        {/* Left Side -  */}
        <Grid item xs={12} md={5} className="text-center">
          <img
            src={data.image}
            alt="Dynamic"
            className="img-fluid rounded shadow"
            style={{ maxWidth: "100%", height: "320px", objectFit: "cover" }}
          />
        </Grid>

        {/* Right Side */}

        <Grid item xs={12} md={7}>
          <Typography variant="h6" className="mb-2" fontWeight="bold">
            {data.title}
          </Typography>
          <Typography variant="body1" className="mb-2" textAlign="justify">
            {data.text}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FounderOfSchool;
