

import React, { useState } from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "bootstrap/dist/css/bootstrap.min.css";

const principalMessages = [
  {
    id: 1,
    message1:
      "Parnavananda Academy, run by Bharat Sevashram Sangha, with its diversified academic activities in the various parts of the country has come into existence into the region of RAIPUR  commemorating the Centenary Celebrations of Swami Pranavanandaji Maharaj scince 1997. At present the school stands on a 9392 sq. meter plot of land donated by Shishu Shiksha Samiti to “Bharat Sevashram sangha” located on VIP Road leading to Mana Airport. The construction of the school which started in the month of April, 1996 on an area of 45000 sq.ft. (out of 102080 sq. ft.) to accommodate the students from pre-primary to class XII. The aim of the academy is to earn repute as a Universal Pedestal of Learning. The Bharat Sevashram Sangha, a philanthropic, a charitable, a socio-religious organization was founded more than 100 years ago by illustrious patriot saint Acharya Shrimat Swami Pranavanandaji Maharaj with non political character for the well being of mankind. Today Sangha is a wide missionary network running educational project in more than 60 branches and 600 Unity Centre’s in almost all the major parts of India and abroad like U.K., U.S.A., Canada, South America, Guyana, Trinidad, Far-East and Bangladesh.",
    message2:
      "The Bharat Sevashram Sangha is a spiritual brotherhood of monks and selfless workers, disciples and devotees, serving the distressed, caused by natural calamities like earth-quake, flood, drought / famine and epidemics. Sangha aims at alleviating the misery prevailing among the poorer and residual sections of the community. From its very inception, the Sangha has laid special emphasis on spreading of making education as a highway to the goal of all round development with the building of character based on a strong mind in conformity with the ages  eternal human values as enshrined in gurukul system. The Sangha has a chain of educational institutions primary, secondary and higher secondary with a sincere endeavor through personalized individualistic attention, to discover and promote the talent and potentialities of the students in such a way that he / she may be well groomed to the of Guru – Shisya - Parampara and our cultural heritage on the basis of universal ideas, to grow as a worthy Citizen.",

    image: "images/school-image.jpg", // Replace with actual image URL
  },
];

const AboutSchool = () => {
  return (
    <div className="container-fluid my-4">
      {principalMessages.map((item) => (
        <Card key={item.id} className="mb-4 shadow-lg" sx={{ backgroundColor: "rgba(231, 229, 229, 0.4)" }}>
          <CardContent>
            <Grid container spacing={3} alignItems="center">
              {/* Left Side - Image */}
              <Grid
                item
                xs={12}
                md={6}
                display="flex"
                justifyContent="center"
              >
                <img
                  src={item.image}
                  alt="about school"
                  className="img-fluid rounded"
                  style={{
                    width: "65%",
                    height: "auto",
                    border: "1px solid rgba(184, 184, 184, 0.62)",
                  }}
                />
              </Grid>

              {/* Right Side - Content */}
              <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
                <Typography variant="h5" component="h2" gutterBottom fontWeight="bold">
                  About School
                </Typography>
                <CustomAccordion text={item.message1} />
              </Grid>
            </Grid>
            <CustomAccordion text={item.message2} />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

// Custom Accordion Component
const CustomAccordion = ({ text }) => {
  const [expanded, setExpanded] = useState(false);

  // Split text into lines and get first 4 lines for preview
  const lines = text.split(", ");
  const previewText =
    lines.slice(0, 3).join(", ") + (lines.length > 4 ? "..." : "");

  return (
    <Accordion elevation={0} sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
      <AccordionSummary
        expandIcon={
          <IconButton onClick={() => setExpanded(!expanded)}>
            <ExpandMoreIcon />
          </IconButton>
        }
        sx={{ textAlign: "center", width: "100%" }}
      >
        <Typography variant="body1" color="textSecondary" sx={{ textAlign: "justify", width: "100%" }}>
          {expanded ? text : previewText}
        </Typography>
      </AccordionSummary>
    </Accordion>
  );
};

export default AboutSchool;
