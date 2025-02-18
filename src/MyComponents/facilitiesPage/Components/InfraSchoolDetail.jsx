import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";

const facilities = [
  { name: "Total Area", size: "151200 sq ft" },
  { name: "Build Up Area", size: "33000 sq ft" },
  { name: "Pre-Primary Building", size: "12000 sq ft" },
  { name: "Meditation Hall", size: "60 x 24 sq ft" },
  { name: "Total Classes", size: "23 (24 x 24 sq ft)" },
  { name: "Physics Lab", size: "36 x 24 sq ft" },
  { name: "Chemistry Lab", size: "60 x 24 sq ft" },
  { name: "Biology Lab", size: "21 x 24 sq ft" },
  { name: "Library Lab", size: "48 x 24 sq ft" },
  { name: "Computer Lab", size: "24 x 24 sq ft" },
  { name: "Ground Size", size: "210 x 200 sq ft (44000 sq ft)" },
  { name: "Greenery", size: "42000 sq ft" },
  { name: "AV Room", size: "24 x 32 sq ft" },
  { name: "Pre-Primary Activity Hall", size: "24 x 32 sq ft" },
  { name: "Indoor Games Room", size: "24 x 24 sq ft" },
  { name: "Music Room", size: "24 x 20 sq ft" },
  { name: "Health & Medical Care Room", size: "12 x 24 sq ft" },
];

const otherFacilities = [
  { name: "Wash Room (Girls)", count: "2" },
  { name: "Wash Room (Boys)", count: "2" },
  { name: "Wash Room (Pre-Primary Section)", count: "1" },
  { name: "Drinking Water (Aqua Guard)", count: "Yes" },
  { name: "Drinking Water (Water Cooler)", count: "Yes" },
  { name: "Transport Facility", count: "Yes" },
];

const InfraSchoolDetail = () => {
  return (
    <Container className="mt-4">
      <Typography variant="h4" className="text-center mb-4">
        Infrastructure Details
      </Typography>
      <Grid container spacing={3}>
        {facilities.map((facility, index) => (
          <Grid item xs={6} md={3} key={index}>
            <Card className="shadow-sm border">
              <CardContent>
                <Typography variant="h6">
                  {facility.name}
                </Typography>
                <Typography variant="body1">{facility.size}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5" className="text-center mt-5">
        Other Facilities
      </Typography>
      <TableContainer component={Paper} className="mt-3">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Facility</b>
              </TableCell>
              <TableCell>
                <b>Details</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {otherFacilities.map((facility, index) => (
              <TableRow key={index}>
                <TableCell>{facility.name}</TableCell>
                <TableCell>{facility.count}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default InfraSchoolDetail;
