import { React, useState,useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { Download as DownloadIcon } from "@mui/icons-material";
import Backend_Url from "../../../Config/BackendUrl";
import token from "../../../Config/Token";
import axios from "axios";

// const formData = [
//   {
//     id: 1,
//     formName: "ANNUAL EXAMINATION 2020-21",
//     downloadLink: "/forms/annual_exam_2020_21.pdf",
//   },
//   // { id: 2, formName: "tc001", downloadLink: "/forms/tc001.pdf" },
//   {
//     id: 2,
//     formName: "SCIENCE OLYMPIAD FOUNDATION RESULT",
//     downloadLink: "/forms/science_olympiad_result.pdf",
//   },
//   {
//     id: 3,
//     formName: "CCE ACTIVITY RESULT 2016-17",
//     downloadLink: "/forms/cce_activity_result_2016_17.pdf",
//   },
// ];



const Academic = () => {
  const [academic, setAcademic] = useState([]);
  const fetchAcademic = async () => {
    try {
      const response = await axios.get(`${Backend_Url}/Download/get/all`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // ✅ Extract image paths correctly
      if (Array.isArray(response.data) && response.data.length > 0) {
        setAcademic(response.data || []); // Get images from first object
      } else {
        setAcademic([]); // Fallback to empty array
      }
    } catch (error) {
      console.error("Error fetching slider images:", error);
      setAcademic([]); // Handle error by setting an empty array
    }
  };

  useEffect(() => {
    fetchAcademic();
  }, []);
  return (
    <TableContainer
      component={Paper}
      sx={{ maxWidth: 600, margin: "20px auto" }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>ID</strong>
            </TableCell>
            <TableCell>
              <strong>FORM NAME</strong>
            </TableCell>
            <TableCell>
              <strong>DOWNLOAD FORM</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {academic.map((form) => (
            <TableRow key={form.Id}>
              <TableCell>{form.Id}</TableCell>
              <TableCell>{form.Title}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<DownloadIcon />}
                  href={form.Filepath}
                  download
                >
                  Download
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Academic;
