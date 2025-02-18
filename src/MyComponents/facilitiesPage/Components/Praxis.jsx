import React from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Card,
  CardContent,
} from "@mui/material";

const praxisPoints = [
  "The cordial and friendly ambience of the institution makes each and every member of the school fraternity go an extra mile for achievement of our goal.",
  "Every formal and informal information of the child is collected for better diagnosis followed by remedial instructions.",
  "Regular assemblies containing a social message are conducted class-wise and house-wise to imbibe good thoughts among the pupils.",
  "Various inter-house and inter-school competitions are held around the year to develop a healthy competitive spirit and leadership.",
  "Regular study tours and picnics are organized to develop self-management, cooperation, and adjustments with peers.",
  "Teaching through smart classes.",
  "Periodical medical checkups.",
];

const Praxis = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Card sx={{ p: 2, boxShadow: 2, borderRadius: 2 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom align="center">
            Our Praxis
          </Typography>
          <List>
            {praxisPoints.map((point, index) => (
              <ListItem
                key={index}
                sx={{ borderBottom: 1, borderColor: "divider" }}
              >
                <ListItemText primary={`${index + 1}. ${point}`} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Praxis;
