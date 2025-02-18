import React, { useState } from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "bootstrap/dist/css/bootstrap.min.css";

const principalMessages = [
  {
    id: 1,
    message1:
      "This world was not built in a day. It took many years of sacrifices and uphill struggle to construct this, yet after overcoming all those hardships, this world is still to be perfected. We, mankind, are the best creation of God, but an ideal world is still very alien to us. Well, the reason is very simple, 'we forgot what our ancestors went through'. We forgot those sacrifices in world wars, we forgot the struggles of freedom and independence, but most of all, we forgot the true meaning of being human.",
    message2:
      "But as Einstein said, 'The world will not be destroyed by those who do evil, but by those who watch them without doing anything'. So the aim of BSS Pranavananda Academy is not only to build a man of success but a man of wisdom, who knows to owe his forefathers for giving such a magnificent world. He understands the true meaning of being human. As we believe, they can and they will create a perfect ideal world. ",
    message3: "Tomorrow - better than today.",
    principal: "Dr. A. P. Sharma",
    image: "images/principal-desk.jpg", // Replace with actual image URL
  },
];

const PrincipalMessage = () => {
  return (
    <div className="container-fluid my-4">
      {principalMessages.map((item) => (
        <Card key={item.id} className="mb-4 shadow-lg">
          <CardContent>
            <Grid container spacing={3} alignItems="center">
              {/* Left Side - Image */}
              <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
                <img
                  src={item.image}
                  alt="Principal"
                  className="img-fluid rounded"
                  style={{ width: "60%", height: "auto", border: "1px solid white"}}
                />
              </Grid>

              {/* Right Side - Principal's Message */}
              <Grid item xs={12} md={6}>
                <Typography variant="h5" component="h2" gutterBottom>
                  Principal's Message
                </Typography>

                {/* Accordion for Message 1 */}
                <CustomAccordion text={item.message1} />

                {/* Accordion for Message 2 */}
                <CustomAccordion text={item.message2} />

                <Typography variant="body1"  sx={{ fontWeight: "bold", mt: 2 }}>
                  {item.message3}
                </Typography>

                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "bold", mt: 2 }}
                >
                  - {item.principal}
                </Typography>
              </Grid>
            </Grid>
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
    <Accordion
      elevation={0}
      sx={{ backgroundColor: "transparent", boxShadow: "none" }}
    >
      <AccordionSummary
        expandIcon={
          <IconButton onClick={() => setExpanded(!expanded)}>
            <ExpandMoreIcon />
          </IconButton>
        }
      >
        <Typography variant="body1" color="textSecondary">
          {expanded ? text : previewText}
        </Typography>
      </AccordionSummary>
    </Accordion>
  );
};

export default PrincipalMessage;
