import React from "react";
import {
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const AdmissionProcedure = () => {
  const procedures = [
    "The school reserves the right to grant or refuse admission. Applications for registration and admission are accepted in the month of February/March. Admission till Class I is strictly based on first come first serve.",
    "No child less than 5 years of age as on 31st March of the year of admission, is admitted to class – I.",
    "Pupils seeking admission for class II and above are tested on the syllabus of the standard below that one of which they are seeking admission. Admission is granted strictly on the basis of merit.",
    "One calendar month’s written notice and month’s fee along with T. C. fees Rs. 200/- is required to be deposited for the Transfer Certificate. A Transfer certificate will be issued after all dues are paid and Rs. 500/- will be charged for duplicate Transfer Certificate within 2 years and Rs. 1000 beyond 2 years of passing out.",
    "Pupils required to leave the school in the mid academic session, will have to pay the fees upto the month he/she has studied along with annual charges.",
    "In case of student not joining the school after taking admission, the admission fee will be forfeited.",
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p:2, borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom sx={{ color: "#1976d2", fontSize:{xs:"1rem", md:"1.8rem"}, textAlign:"center" }}>
          Procedure for Admission and Withdrawal
        </Typography>
        <List>
          {procedures.map((procedure, index) => (
            <ListItem key={index}>
              <ListItemText 
                primary={`${index + 1}. ${procedure}`}
                primaryTypographyProps={{ sx: { color: "#424242", textAlign:"justify", fontSize:"0.9rem" } }}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default AdmissionProcedure;
