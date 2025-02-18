// import React from "react";
// import {
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
// } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// const cardData = [
//   {
//     cardImage: "/images/infrastructure_2.jpg",
//     cardHeading: "Lab Facilities",
//     cardDescription: `Well maintained and equipped labs (physics, chemistry & biology) enhance Childs practical understanding of the subject.\n
// Computer lab is equipped with latest systems, system software and other relevant academic software.\n
// A fully fledged library facility facilitates the best of reading materials published may it be in the form of journals, periodicals, magazines or reference books`,
//   },
//   {
//     cardImage: "/images/infrastructure_3.jpg",
//     cardHeading: "Smart Class-Room",
//     cardDescription: `For better understanding and learning of concepts smart classrooms are provided for all.
// A separate activity room equipped with audio visual facility toys & rides are provided for the prepatory classes along with a well developed nursery garden to play, enjoy and learn.\n
// Well lighted and ventilated classrooms.`,
//   },
//   {
//     cardImage: "/images/infrastructure_4.jpg",
//     cardHeading: "School Bus",
//     cardDescription: `The transport facility provided by the school covers the majority of areas within Raipur.
//      The fleet of well-maintained buses is equipped with GPS tracking, and first-aid kits to ensure the safety and security of students.
//       Each bus is manned by a trained driver and a dedicated attendant to assist children during their journey.
//        The school follows strict safety protocols and ensures timely pickup and drop-off at designated stops.`,
//   },
// ];

// const LabFacilities = () => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         gap: "20px",
//         justifyContent: "center",
//         flexWrap: "wrap",
//         padding: "20px",
//       }}
//     >
//       {cardData.map((card, index) => (
//         <Card key={index} sx={{ maxWidth: 400 }}>
//           <CardMedia
//             component="img"
//             height="220"
//             image={card.cardImage}
//             alt={card.cardHeading}
//           />
//           <CardContent>
//             <Typography variant="h6" gutterBottom className="text-center">
//               {card.cardHeading}
//             </Typography>
//             <Accordion>
//               <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//                 <Typography>Details</Typography>
//               </AccordionSummary>
//               <AccordionDetails>
//                 <Typography style={{ whiteSpace: "pre-line" }}>
//                   {card.cardDescription}
//                 </Typography>
//               </AccordionDetails>
//             </Accordion>
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   );
// };

// export default LabFacilities;
