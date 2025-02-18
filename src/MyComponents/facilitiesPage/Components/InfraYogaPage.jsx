import React from "react";
import { Container, Grid, Typography, Card, CardMedia } from "@mui/material";

const InfraYogaPage = () => {
  return (
    <Container sx={{ py: 4 }}>
        <Grid item xs={12} md={4} display="flex" justifyContent="center" padding="10px" >

        <h4>Sports, Yoga & Karate</h4>
        </Grid>
      <Grid container spacing={4} alignItems="center">
      
        {/* Left Text */}
        <Grid item xs={12} md={4}>
          <Typography variant="body1" gutterBottom>
            Yoga, as a disciplined method for attaining a goal.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Yoga, as techniques of controlling the body and the mind.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Yoga, as a name of one of the schools or systems of philosophy
            (darśana).
          </Typography>
          <Typography variant="body1" gutterBottom>
            Yoga, in connection with other words, such as "hatha-, mantra-, and
            laya-," referring to traditions specializing in particular
            techniques of yog
          </Typography>
        </Grid>

        {/* Center Image */}
        <Grid item xs={12} md={4}>
          <Card sx={{ boxShadow: 3 }}>
            <CardMedia
              component="img"
              height="250"
              image="/images/infrastructure_one.jpg"
              alt="Yoga and Sports"
            />
          </Card>
        </Grid>

        {/* Right Text */}
        <Grid item xs={12} md={4}>
          <Typography variant="body1" gutterBottom>
            A Hindu spiritual and ascetic discipline, a part of which, including
            breath control, simple meditation, and the adoption of specific
            bodily postures, is widely practiced for health and relaxation.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Pollution-free vast campus adorned with a flower garden. The school
            extends an extensive platform and space for indoor and outdoor
            sports like table tennis, chess, carom, basketball, cricket,
            football, volleyball, etc.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default InfraYogaPage;
