import React, { useState } from "react";
import { Container, Table, Input, Card, CardBody } from "reactstrap";

const students = [
  {
    no: 1,
    name: "DOMINIC REANG",
    fatherName: "HEBI RAM REANG",
    motherName: "SUMITA REANG",
    dob: "2017-01-04",
    admissionNo: "A-2036",
    classLeft: "PP-II",
    tcNo: "378",
    date: "2024-06-20",
    remark: "TC 2024-25",
  },
  {
    no: 2,
    name: "NITISH KUMAR SAHU",
    fatherName: "KOMAL RAM SAHU",
    motherName: "BUDHWANTIN SAHU",
    dob: "2005-12-01",
    admissionNo: "A-930",
    classLeft: "X PASS",
    tcNo: "377",
    date: "2024-06-19",
    remark: "TC 2024-25",
  },
];

const StudentsTCList = () => {
  const [search, setSearch] = useState("");

  return (
    <Container className="mt-4 mb-4">
      <Card className="p-3 shadow">
        <CardBody>
          <h4 className="text-center text-primary">
            Student Transfer Certificate List
          </h4>
          <Input style={{width:"250px"}}
            type="text"
            placeholder="Enter Student Name"
            className="mb-3"
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
              {students
                .filter((student) =>
                  student.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((student, index) => (
                  <tr key={index}>
                    <td>{student.no}</td>
                    <td>{student.name}</td>
                    <td>{student.fatherName}</td>
                    <td>{student.motherName}</td>
                    <td>{student.dob}</td>
                    <td>{student.admissionNo}</td>
                    <td>{student.classLeft}</td>
                    <td>{student.tcNo}</td>
                    <td>{student.date}</td>
                    <td>{student.remark}</td>
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
