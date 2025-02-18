
// import React from "react";
// import { Container, Typography, Box, Grid } from "@mui/material";
// import { Col, Row } from "react-bootstrap";

// import "bootstrap/dist/css/bootstrap.min.css";

// const messages = [
//   {
//     question: "What is Goal?",
//     answer: "Self Realization, Universal Emancipation.",
//   },
//   {
//     question: "What is Religion?",
//     answer:
//       "Self Sacrifice, Self discipline, Adherence to truth and Continence.",
//   },
//   { question: "What is the Real Death?", answer: "Forgetfulness of self." },
//   {
//     question: "What is Real Life?",
//     answer: "Self Realization, Self remembrance and Self consciousness.",
//   },
//   {
//     question: "What is Real Virtue?",
//     answer: "Heroism, Virility, Manliness, Aspiration for Emancipation.",
//   },
//   {
//     question: "What is Real Sin?",
//     answer: "Weakness, Fear, Cowardice, Meanness, Selfishness.",
//   },
//   {
//     question: "What is Real Friend?",
//     answer: "Energy, Enthusiasm and Perseverance.",
//   },

//   {
//     question: "What is Real Asset?",
//     answer: "Self Confidence, Self reliance and Self respect.",
//   },
//   {
//     question: "What are Real Enemies?",
//     answer:
//       "Indolence, Slumber, Procrastination, Inertia, Lustful senses and Passion.",
//   },
//   {
//     question: "What is the Real Source of Strength?",
//     answer: "Patience, Fortitude and Endurance.",
//   },
// ];

// export default function TenDevineMessage() {
//   return (
//     <Grid className="position-relative p-0">
//       {/* Background Image with Dark Overlay */}
//       <Box
//         sx={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: 570, // Increased height
//           backgroundImage: `url('/images/faculty-banner.jpg')`,
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "center",
//           zIndex: -1,
//         }}
//       />
//       <Box
//         sx={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: 580, // Match background height
//           backgroundColor: "rgba(0, 0, 0, 0.6)", // Dark overlay
//           zIndex: -1,
//         }}
//       />

//       {/* Content */}
//       <Container sx={{ py: 5 }}>
//         <Typography variant="h4" sx={{ textAlign: "center", color: "white", fontWeight: "bold" }}>
//           Ten Divine Messages
//         </Typography>

//         <Row className="mt-4">
//           {messages.map((msg, index) => (
//             <Col xs={12} sm={6} md={4} lg={3} key={index} className="mb-3">
//               <Box
//                 sx={{
//                   backgroundColor: "#f8f9fa",
//                   padding: 2,
//                   borderRadius: 2,
//                   boxShadow: 2,
//                   minHeight: "120px",
//                 }}
//               >
//                 <Typography variant="h6" sx={{ fontWeight: "bold", color: "text.primary" }}>
//                   {msg.question}
//                 </Typography>
//                 <Typography variant="body1" sx={{ color: "text.secondary" }}>
//                   {msg.answer}
//                 </Typography>
//               </Box>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </Grid>
//   );
// }

import React from "react";
import { Container, Typography, Box, Grid } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const messages = [
  { question: "What is Goal?", answer: "Self Realization, Universal Emancipation." },
  { question: "What is Religion?", answer: "Self Sacrifice, Self discipline, Adherence to truth and Continence." },
  { question: "What is the Real Death?", answer: "Forgetfulness of self." },
  { question: "What is Real Life?", answer: "Self Realization, Self remembrance and Self consciousness." },
  { question: "What is Real Virtue?", answer: "Heroism, Virility, Manliness, Aspiration for Emancipation." },
  { question: "What is Real Sin?", answer: "Weakness, Fear, Cowardice, Meanness, Selfishness." },
  { question: "What is Real Friend?", answer: "Energy, Enthusiasm and Perseverance." },
  { question: "What is Real Asset?", answer: "Self Confidence, Self reliance and Self respect." },
  { question: "What are Real Enemies?", answer: "Indolence, Slumber, Procrastination, Inertia, Lustful senses and Passion." },
  { question: "What is the Real Source of Strength?", answer: "Patience, Fortitude and Endurance." },
];

export default function TenDevineMessage() {
  return (
    <Grid className="position-relative p-0">
      {/* Background Image with Dark Overlay on larger screens */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: 570, // Increased height
          backgroundImage: `url('/images/faculty-banner.jpg')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          zIndex: -1,
          display: { xs: "none", md: "block" }, // Hide image on small screens
        }}
      />
      {/* Dark Overlay for smaller screens */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%", // Match background height
          backgroundColor: "rgba(0, 0, 0, 0.62)", // Dark overlay
          zIndex: -1,
          
        }}
      />

      {/* Content */}
      <Container sx={{ py: 5 }}>
        <Typography variant="h5" sx={{ textAlign: "center", color: "white", fontWeight: "bold" }}>
          Ten Divine Messages
        </Typography>

        <Row className="mt-4">
          {messages.map((msg, index) => (
            <Col xs={12} sm={6} md={4} lg={3} key={index} className="mb-3">
              <Box
                sx={{
                  backgroundColor: "#f8f9fa",
                  padding: 2,
                  borderRadius: 2,
                  boxShadow: 2,
                  minHeight: "120px",
                  height: "100%", // Ensures all boxes are equal height
                  display: "flex",
                  flexDirection: "column",
                 
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "text.primary" }}>
                  {msg.question}
                </Typography>
                <Typography variant="body1" sx={{ color: "text.secondary" }}>
                  {msg.answer}
                </Typography>
              </Box>
            </Col>
          ))}
        </Row>
      </Container>
    </Grid>
  );
}
