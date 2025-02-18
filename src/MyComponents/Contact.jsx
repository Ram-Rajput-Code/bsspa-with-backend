import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  Paper,
  Card,
  CardContent,
} from "@mui/material";

const Contact = () => {
  return (
    <><Box mb={3}>
    <img
      src="/images/principal-message-banner.jpg"
      alt="Principal Message"
      width="100%"
      
    />
  </Box>
    <Container maxWidth="lg" sx={{ py: 4, bgcolor: "whitesmoke" }}>
      

      <Typography variant="h4" align="center" gutterBottom>
        Contact Us
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12}>
          <Paper sx={{ border: "1px solid", overflow: "hidden" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.101183130066!2d81.72516341441958!3d21.188139087695216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28c37a659e0e85%3A0x9471f51d1f031fe7!2sBSS+Pranavananda+Academy!5e0!3m2!1sen!2sin!4v1464244894150"
              width="100%"
              height="290"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={4} mt={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Card elevation={3} sx={{ p: 3 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Send Us a Message
              </Typography>
              <Box component="form" noValidate autoComplete="off">
                <TextField
                  fullWidth
                  label="First Name"
                  variant="outlined"
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Mobile"
                  variant="outlined"
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={3}
                  margin="normal"
                />
                <Button variant="contained" color="primary" fullWidth>
                  Submit
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card elevation={3} sx={{ p: 3 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Get in Touch with Us
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>LOCATION:</strong> Bharat Sevashram Sangha Pranavananda
                Academy VIP Road Raipur. (C.G)
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>PHONE:</strong> 07712971219, 07712971220
              </Typography>
              <Typography variant="body1" sx={{fontSize:"0.8rem"}}>
                <strong >EMAIL:</strong> bsspranavanandaacademy10@gmail.com
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
    </>
  );
};

export default Contact;
