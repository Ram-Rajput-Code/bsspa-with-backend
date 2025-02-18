// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Container, Table, Input, Card, CardBody } from "reactstrap";
// import Backend_Url from "../../../Config/BackendUrl";
// import token from "../../../Config/Token";



// const StudentsTCList = () => {
//   const [search, setSearch] = useState("");
//   const [studetail, setStuDetail] = useState([]);

//   const fetchStudents = async () => {
//     try {
//       const response = await axios.get(`${Backend_Url}/TCissued/getall`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
     
//       setStuDetail(response.data); // Assuming 'email' is part of the response object
    
//     } catch (error) {
//       console.error("Error fetching menu data:", error);
//     }
//   };
//   useEffect(() => {
//     fetchStudents();
//   }, []);

//   return (
//     <Container className="mt-4 mb-4">
//       <Card className="p-3 shadow">
//         <CardBody>
//           <h4 className="text-center text-primary">
//             Student Transfer Certificate List
//           </h4>
//           <Input style={{width:"250px"}}
//             type="text"
//             placeholder="Enter Student Name"
//             className="mb-3"
//             onChange={(e) => setSearch(e.target.value)}
//           />
//           <Table bordered hover responsive>
//             <thead>
//               <tr>
//                 <th>No.</th>
//                 <th>Student Name</th>
//                 <th>Father Name</th>
//                 <th>Mother Name</th>
//                 <th>DOB</th>
//                 <th>Admission No</th>
//                 <th>Class Left</th>
//                 <th>TC No</th>
//                 <th>Date</th>
//                 <th>Remark</th>
//               </tr>
//             </thead>
//             <tbody>
             
//               {studetail.map((student, index) => (
//                   <tr key={index}>
//                     <td>{student.Id}</td>
//                     <td>{student.Studentname}</td>
//                     <td>{student.Fathersname}</td>
//                     <td>{student.Mothersname}</td>
//                     <td>{student.DOB}</td>
//                     <td>{student.AdmissionNo}</td>
//                     <td>{student.ClassLeft}</td>
//                     <td>{student.TCNo}</td>
//                     <td>{student.LeavingDate}</td>
//                     <td>{student.Remark}</td>
//                   </tr>
//                 ))} 

//             </tbody>
//           </Table>
//         </CardBody>
//       </Card>
//     </Container>
//   );
// };

// export default StudentsTCList;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Table, Input, Card, CardBody } from "reactstrap";
import Backend_Url from "../../../Config/BackendUrl";
import token from "../../../Config/Token";

const StudentsTCList = () => {
  const [search, setSearch] = useState("");
  const [studetail, setStuDetail] = useState([]);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(`${Backend_Url}/TCissued/getall`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setStuDetail(response.data); // Assuming API response is an array of students
    } catch (error) {
      console.error("Error fetching student data:", error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // **Filter students based on search query**
  const filteredStudents = studetail.filter((student) =>
    student.Studentname.toLowerCase().includes(search.toLowerCase().trim())
  );

  return (
    <Container className="mt-4 mb-4">
      <Card className="p-3 shadow">
        <CardBody>
          <h4 className="text-center text-primary">
            Student Transfer Certificate List
          </h4>
          <Input
            style={{ width: "250px" }}
            type="text"
            placeholder="Enter Student Name"
            className="mb-3"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Table bordered hover responsive>
            <thead>
              <tr>
                <th>No.</th>
                <th>Student Name</th>
                <th>Father Name</th>
                <th>Mother Name</th>
                <th>DOB</th>
                <th>Admission No</th>
                <th>Class Left</th>
                <th>TC No</th>
                <th>Date</th>
                <th>Remark</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student, index) => (
                <tr key={index}>
                  <td>{student.Id}</td>
                  <td>{student.Studentname}</td>
                  <td>{student.Fathersname}</td>
                  <td>{student.Mothersname}</td>
                  <td>{student.DOB}</td>
                  <td>{student.AdmissionNo}</td>
                  <td>{student.ClassLeft}</td>
                  <td>{student.TCNo}</td>
                  <td>{student.LeavingDate}</td>
                  <td>{student.Remark}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </Container>
  );
};

export default StudentsTCList;
