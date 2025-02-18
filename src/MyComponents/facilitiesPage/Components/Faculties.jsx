import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";

const staffData = [
  {
    name: "Mrs. Anindita Ghosh",
    designation: "Principal",
    description: "M.Sc (Phy), M.A(Ed) B.Ed 21 Years",
    email: "aninditaghosh27@rediffmail.com",
  },
  {
    name: "Mr. Mahesh Kumar Thakare",
    designation: "Coordinator",
    description: "B.Sc (PCM), M.A (Eng) B.Ed, 21 Years",
    email: "",
  },
  {
    name: "Mr. Vicky Sharma",
    designation: "PGT",
    description: "B.E, 06 Years",
    email: "vicky_sharma35@ymail.com",
  },
  {
    name: "Mrs. Anjali Kedia",
    designation: "PGT",
    description: "M.A (English), D.Ed, 16 Years",
    email: "anjalikedia2503@gmail.com",
  },
  {
    name: "Mr. Pankaj Kumar",
    designation: "PGT",
    description: "M.Tech, M.Sc (Physics), B.Ed, B.E , 05 Years",
    email: "pksliet05@gmail.com",
  },
  {
    name: "Ms. Tanushree Das",
    designation: "PGT",
    description: "M.Sc (Mathematics), B.Ed, 05 Years",
    email: "tanu.das@outlook.in",
  },
  {
    name: "Ms. Kanushree Verma",
    designation: "PGT",
    description: "MBA, B.Ed, 05 Years",
    email: "kanushree.nerdy@gmail.com",
  },
  {
    name: "Ms. Kritika Kochhar",
    designation: "PGT",
    description: "M.Com, B.Ed, 06 Years",
    email: "kittu10jain@gmail.com",
  },
  {
    name: "Mr. Abhishek Choube",
    designation: "PGT",
    description: "M.Com, B.Ed, 01 Year",
    email: "abhishekchoube95@gmail.com",
  },
  {
    name: "Ms. Malti Chouhan",
    designation: "PET",
    description: "MP.Ed, B.A, 1 Year",
    email: "maltichouhan029@gmail.com",
  },
  {
    name: "Mrs. Anamika Dutta",
    designation: "PGT",
    description: "M.Sc (Micro-Biology) , B.Ed, 10 Years",
    email: "anamika09d@gmail.com",
  },
  {
    name: "Mrs. Paridhi Kaushik",
    designation: "TGT",
    description: "M.Com, B.Ed 19 Years",
    email: "paridhik1710@gmail.com",
  },
  {
    name: "Mrs. Soma Dasgupta",
    designation: "TGT",
    description: "B.Sc, M.A (English), B.Ed, 16 Years",
    email: "somadasgupta27@gmail.com",
  },
  {
    name: "Mrs. K. Usha Rao",
    designation: "TGT",
    description: "B.A, B.Ed, 14 Years",
    email: "rao.kusha@gmail.com",
  },
  {
    name: "Mrs. Sandhya Sharma",
    designation: "TGT",
    description: "M.A (Hindi), B.Ed 13 Years",
    email: "sandhya.sharma00027@gmail.com",
  },
  {
    name: "Mrs. Tileshwari Sahu",
    designation: "TGT",
    description: "M.A (Sanskrit), B.Ed 13 Years",
    email: "tsahu25121985@gmail.com",
  },
  {
    name: "Mr. Siddhartha Sharma",
    designation: "TGT",
    description: "M.Sc. (Mathematics), B.Ed. 09 Years",
    email: "siddharthsbss1981@gmail.com",
  },
  {
    name: "Mrs. Sabita Mukherjee",
    designation: "PRT",
    description: "B.A, B.Ed 22 Years",
    email: "sabitamukherjee86@gmail.com",
  },
  {
    name: "Mrs. Seema Kaur",
    designation: "PRT",
    description: "B.A. , NTT, 17 Years",
    email: "seemakaur2810@gmail.com",
  },
  {
    name: "Mrs. Tapsi Gangulee",
    designation: "PRT",
    description: "B.A. , NTT, 18 Years",
    email: "tapsigangulee10@gmail.com",
  },
  {
    name: "Mrs. Ranu Saha",
    designation: "PRT",
    description: "M.A. (History), D.El.Ed, 17 Years",
    email: "ranu.saha10@gmail.com",
  },
  {
    name: "Ms. Annapurna Naidu",
    designation: "PRT",
    description: "M.A. (English), D.El.Ed. , 03 Years",
    email: "annpurnanaidu@icloud.com",
  },
  {
    name: "Mrs. Shusmita Roy",
    designation: "PRT",
    description: "B.Com, D.Ed, 22 Years",
    email: "shusmitaroy2015@gmail.com",
  },
  {
    name: "Mrs. Sunanda Dhangar",
    designation: "Librarian",
    description: "M.A. (Economics) , B.Lib. 20 Years",
    email: "sunandadhangar356@gmail.com",
  },
  { name: "Mrs. Leela Das", designation: "Music", description: "", email: "" },
];

const StaffCard = ({ name, designation, description, email }) => {
  return (
    <>
    
    <Grid item xs={12} sm={4} md={3} >
      <Card style={{maxHeight:"200px", minHeight:"150px", margin:"10px", backgroundColor:"rgba(230, 229, 229, 0.66)"}}>
        <CardContent>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="subtitle1">{designation}</Typography>
          <Typography variant="body2">{description}</Typography>
          {email && <Typography variant="body2">Email: {email}</Typography>}
        </CardContent>
      </Card>
    </Grid>
    </>
  );
};

const Faculties = () => {
  return (
    <><h3 className="text-center m-4">Out Staff</h3>
    <Grid container spacing={3} >
      {staffData.map((staff, index) => (
        <StaffCard
          key={index}
          name={staff.name}
          designation={staff.designation}
          description={staff.description}
          email={staff.email}
        />
      ))}
    </Grid>
    </>
  );
};

export default Faculties;
