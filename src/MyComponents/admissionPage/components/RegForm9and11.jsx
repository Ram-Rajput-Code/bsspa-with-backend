import React, { useState } from "react";
import { jsPDF } from "jspdf";
import FormInstruction from "./FormInstruction";
import {
  Grid,
  TextField,
  MenuItem,
  Button,
  Paper,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormControl,
  FormLabel,
} from "@mui/material";

const RegForm9and11 = () => {
  const [formData, setFormData] = useState({
    class: "",
    section: "",
    candidatename: "",
    mothername: "",
    fathername: "",
    gender: "",
    cast: "",
    religion: "",
    disabilities: "",
    subjects: [],
    annualincome: "",
    dob: "",
    onlychildofparent: "",
    admissionsn: "",
    dateofadmission: "",
    minority: "",
    aadharnumber: "",
    bankaccnumber: "",
    ifsccode: "",
    bankbranch: "",
    mathematicsbs: "",
    date: "",
    studentmobilenumber: "",
    studentemail: "",
    fathermobilenumber: "",
    fatheremail: "",
    mothermobilenumber: "",
    motheremail: "",
    guardianmobilenumber: "",
    guardianemail: "",
    fatheroccupation: "",
    fatherservice: "",
    fatherother: "",
    motheroccupation: "",
    motherservice: "",
    motherother: "",
    guardianoccupation: "",
    guardianservice: "",
    guardianother: "",
    firstsiblingname: "",
    firstsiblingclass: "",
    secondsiblingname: "",
    secondsiblingclass: "",
    thirdtsiblingname: "",
    thirdsiblingclass: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //for checkbox data
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setFormData({
        ...formData,
        subjects: [...formData.subjects, name],
      });
    } else {
      setFormData({
        ...formData,
        subjects: formData.subjects.filter((subject) => subject !== name),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;
    doc.setFontSize(11); // Chhota font size set karna (Default: 16)
    doc.setLineWidth(0.05); // Bohot patli line ke liye (0.05 ya aur kam try karein)
    doc.setDrawColor(150, 150, 150); // Gray color (RGB format)
    doc.text(`Reg Form Class : ${formData.class} `, 70, 20);
    doc.line(10, 22, pageWidth - 10, 22); // Horizontal line
    doc.line(10, 23, pageWidth - 10, 23); // Horizontal line

    // Personal Details
    doc.text(`Class :`, 20, 30);
    doc.text(`${formData.class}`, 100, 30);

    doc.text(`Section :`, 20, 40);
    doc.text(`${formData.section}`, 100, 40);

    doc.text(`Candidate Name :`, 20, 50);
    doc.text(`${formData.candidatename}`, 100, 50);

    doc.text(`Mother's Name :`, 20, 60);
    doc.text(`${formData.mothername}`, 100, 60);

    doc.text(`Father's Name :`, 20, 70);
    doc.text(`${formData.fathername}`, 100, 70);

    doc.text(`Gender :`, 20, 80);
    doc.text(`${formData.gender}`, 100, 80);

    doc.text(`Caste :`, 20, 90);
    doc.text(`${formData.cast}`, 100, 90);

    doc.text(`Religion :`, 20, 100);
    doc.text(`${formData.religion}`, 100, 100);

    doc.text(`Disabilities :`, 20, 110);
    doc.text(`${formData.disabilities}`, 100, 110);

    doc.text(`Subjects :`, 20, 120);
    doc.text(`${formData.subjects.join(", ")}`, 100, 120);

    doc.text(`Annual Income :`, 20, 130);
    doc.text(`${formData.annualincome}`, 100, 130);

    doc.text(`Date of Birth :`, 20, 140);
    doc.text(`${formData.dob}`, 100, 140);

    doc.text(`Only Child of Parent :`, 20, 150);
    doc.text(`${formData.onlychildofparent}`, 100, 150);

    doc.text(`Admission SN :`, 20, 160);
    doc.text(`${formData.admissionsn}`, 100, 160);

    doc.text(`Date of Admission :`, 20, 170);
    doc.text(`${formData.dateofadmission}`, 100, 170);

    doc.text(`Minority :`, 20, 180);
    doc.text(`${formData.minority}`, 100, 180);

    doc.text(`Aadhar Number :`, 20, 190);
    doc.text(`${formData.aadharnumber}`, 100, 190);

    doc.text(`Bank Account Number :`, 20, 200);
    doc.text(`${formData.bankaccnumber}`, 100, 200);

    doc.text(`IFSC Code :`, 20, 210);
    doc.text(`${formData.ifsccode}`, 100, 210);

    doc.text(`Bank Branch :`, 20, 220);
    doc.text(`${formData.bankbranch}`, 100, 220);

    // Second Page
    doc.addPage();

    // Contact Details
    doc.text(`Student Mobile Number :`, 20, 30);
    doc.text(`${formData.studentmobilenumber}`, 100, 30);

    doc.text(`Student Email :`, 20, 40);
    doc.text(`${formData.studentemail}`, 100, 40);

    doc.text(`Father's Mobile Number :`, 20, 50);
    doc.text(`${formData.fathermobilenumber}`, 100, 50);

    doc.text(`Father's Email :`, 20, 60);
    doc.text(`${formData.fatheremail}`, 100, 60);

    doc.text(`Mother's Mobile Number :`, 20, 70);
    doc.text(`${formData.mothermobilenumber}`, 100, 70);

    doc.text(`Mother's Email :`, 20, 80);
    doc.text(`${formData.motheremail}`, 100, 80);

    doc.text(`Guardian's Mobile Number :`, 20, 90);
    doc.text(`${formData.guardianmobilenumber}`, 100, 90);

    doc.text(`Guardian's Email :`, 20, 100);
    doc.text(`${formData.guardianemail}`, 100, 100);

    // Occupation Details
    doc.text(`Father's Occupation :`, 20, 110);
    doc.text(`${formData.fatheroccupation}`, 100, 110);

    doc.text(`Father's Service :`, 20, 120);
    doc.text(`${formData.fatherservice}`, 100, 120);

    doc.text(`Father's Other :`, 20, 130);
    doc.text(`${formData.fatherother}`, 100, 130);

    doc.text(`Mother's Occupation :`, 20, 140);
    doc.text(`${formData.motheroccupation}`, 100, 140);

    doc.text(`Mother's Service :`, 20, 150);
    doc.text(`${formData.motherservice}`, 100, 150);

    doc.text(`Mother's Other :`, 20, 160);
    doc.text(`${formData.motherother}`, 100, 160);

    doc.text(`Guardian's Occupation :`, 20, 170);
    doc.text(`${formData.guardianoccupation}`, 100, 170);

    doc.text(`Guardian's Service :`, 20, 180);
    doc.text(`${formData.guardianservice}`, 100, 180);

    doc.text(`Guardian's Other :`, 20, 190);
    doc.text(`${formData.guardianother}`, 100, 190);

    // Sibling Details
    doc.text(`First Sibling Name :`, 20, 200);
    doc.text(`${formData.firstsiblingname}`, 100, 200);

    doc.text(`First Sibling Class :`, 20, 210);
    doc.text(`${formData.firstsiblingclass}`, 100, 210);

    doc.text(`Second Sibling Name :`, 20, 220);
    doc.text(`${formData.secondsiblingname}`, 100, 220);

    doc.text(`Second Sibling Class :`, 20, 230);
    doc.text(`${formData.secondsiblingclass}`, 100, 230);

    doc.text(`Third Sibling Name :`, 20, 240);
    doc.text(`${formData.thirdsiblingname}`, 100, 240);

    doc.text(`Third Sibling Class :`, 20, 250);
    doc.text(`${formData.thirdsiblingclass}`, 100, 250);

    // Save PDF
    doc.save("student_details.pdf");
  };

  return (
    <div maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <h3 className="text-center">
          CBSE REGISTERATION FORM (CLASS 9 AND 11)
        </h3>
        <hr />
        <FormInstruction />
        <Grid
          container
          spacing={2}
          mt={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "80px",
            maxHeight: "150px",
            textAlign: "center",
            backgroundColor: "whitesmoke",
            maxWidth: "80%",
            padding: "0",
            margin: "auto", // center grid
            marginBottom: "20px",
            fontWeight: "650",
          }}
        >
          <Grid item xs={12} md={4} p={0}>
            SCHOOL CODE: 15026
          </Grid>
          <Grid item xs={12} md={4}>
            CBSE AFFL NO. : 3330050
          </Grid>
          <Grid item xs={12} md={4}>
            UDISE CODE: 22110408708
          </Grid>
        </Grid>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                select
                fullWidth
                label="Class"
                name="class"
                value={formData.class}
                onChange={handleChange}
                required
                // sx={{ width: 300 }}
              >
                <MenuItem value="">Select Class</MenuItem>
                <MenuItem value="9th">9th</MenuItem>
                <MenuItem value="11th">11th</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6} md={4.01}>
              <TextField
                fullWidth
                label="Section"
                name="section"
                value={formData.section}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                label="Candidate's Name"
                name="candidatename"
                value={formData.candidatename}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                label="Mother's Name"
                name="mothername"
                value={formData.mothername}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                label="Father's Name"
                name="fathername"
                value={formData.fathername}
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TextField
                select
                fullWidth
                label="Gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <MenuItem value="">Select Genter</MenuItem>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Trans">Trans</MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TextField
                select
                fullWidth
                label="Cast"
                name="cast"
                value={formData.cast}
                onChange={handleChange}
                required
              >
                <MenuItem value="">Select Cast</MenuItem>
                <MenuItem value="GEN">GEN</MenuItem>
                <MenuItem value="ST">ST</MenuItem>
                <MenuItem value="SC">SC</MenuItem>
                <MenuItem value="OBC">OBC</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                label="Religion"
                name="religion"
                value={formData.religion}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                select
                fullWidth
                label="Disabilities"
                name="disabilities"
                value={formData.disabilities}
                onChange={handleChange}
                required
              >
                <MenuItem value="">Select</MenuItem>
                <MenuItem value="NA">NA</MenuItem>
                <MenuItem value="Blind">Blind</MenuItem>
                <MenuItem value="Deaf">Deaf</MenuItem>
                <MenuItem value="Handicapped">Handicapped</MenuItem>
                <MenuItem value="Dyslexis">Dyslexis</MenuItem>
              </TextField>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              sx={{
                border: "1px solid rgb(182, 182, 182)",
                borderRadius: "5px",
                margin: "15px",
              }}
            >
              <FormControl component="fieldset" required>
                <FormLabel component="legend">Subjects</FormLabel>
                <FormGroup row>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.subjects.includes("Math")}
                        onChange={handleCheckboxChange}
                        name="Math"
                      />
                    }
                    label="Math"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.subjects.includes("Science")}
                        onChange={handleCheckboxChange}
                        name="Science"
                      />
                    }
                    label="Science"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.subjects.includes("English")}
                        onChange={handleCheckboxChange}
                        name="English"
                      />
                    }
                    label="English"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.subjects.includes("History")}
                        onChange={handleCheckboxChange}
                        name="History"
                      />
                    }
                    label="History"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.subjects.includes("Computer")}
                        onChange={handleCheckboxChange}
                        name="Computer"
                      />
                    }
                    label="Computer"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.subjects.includes("Additional")}
                        onChange={handleCheckboxChange}
                        name="Additional"
                      />
                    }
                    label="Additional"
                  />
                </FormGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                label="Annual Income of Father & Mother"
                name="annualincome"
                value={formData.annualincome}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                label="Date Of Birth"
                name="dob"
                type="date"
                value={formData.dob}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                select
                fullWidth
                label="Only Child of the Parent"
                name="onlychildofparent"
                value={formData.onlychildofparent}
                onChange={handleChange}
              >
                <MenuItem value="">Select</MenuItem>
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                label="Admission Serial Number"
                name="admissionsn"
                value={formData.admissionsn}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                label="Date Of Admission"
                name="dateofadmission"
                type="date"
                value={formData.dateofadmission}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                select
                fullWidth
                label="Minority"
                name="minority"
                value={formData.minority}
                onChange={handleChange}
              >
                <MenuItem value="">Select</MenuItem>
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                label="Aadhar Number"
                name="aadharnumber"
                value={formData.aadharnumber}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                label="Bank Acc Number"
                name="bankaccnumber"
                value={formData.bankaccnumber}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                label="IFSC Code"
                name="ifsccode"
                value={formData.ifsccode}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                label="Bank Branch Name"
                name="bankbranch"
                value={formData.bankbranch}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                label="Option for Mathematics Basic / Standard"
                name="mathematicsbs"
                value={formData.mathematicsbs}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                label="Date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                required
              />
            </Grid>
            <Grid item xs={12}>
              Contact Details:
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TextField
                fullWidth
                label="Student's Mobile Number"
                name="studentmobilenumber"
                value={formData.studentmobilenumber}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TextField
                fullWidth
                label="Student's Email"
                name="studentemail"
                value={formData.studentemail}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TextField
                fullWidth
                label="Father's Mobile Number"
                name="fathermobilenumber"
                value={formData.fathermobilenumber}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TextField
                fullWidth
                label="Father's Email"
                name="fatheremail"
                value={formData.fatheremail}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TextField
                fullWidth
                label="Mother's Mobile Number"
                name="mothermobilenumber"
                value={formData.mothermobilenumber}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TextField
                fullWidth
                label="Mother's Email"
                name="motheremail"
                value={formData.motheremail}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TextField
                fullWidth
                label="Guardian's Mobile Number"
                name="guardianmobilenumber"
                value={formData.guardianmobilenumber}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TextField
                fullWidth
                label="Guardian's Email"
                name="guardianemail"
                value={formData.guardianemail}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} className="text-danger">
              NOTE: PLEASE PROVIDE THE WHATS APP NUMBER. MENTION THE NUMBER
              WHICH WILL BE VALID FOR ATLEAST 6 MONTHS. SCHOOL WILL NOT TAKE THE
              RESPONSIBILITY OF FREQUENTLY UPDATING THE CONTACT NUMBER.
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                select
                fullWidth
                label="Father's Occupation"
                name="fatheroccupation"
                value={formData.fatheroccupation}
                onChange={handleChange}
              >
                <MenuItem value="">Select</MenuItem>
                <MenuItem value="Yes">Service</MenuItem>
                <MenuItem value="No">Business</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                select
                fullWidth
                label="Father's Service"
                name="fatherservice"
                value={formData.fatherservice}
                onChange={handleChange}
              >
                <MenuItem value="">Select</MenuItem>

                <MenuItem value="NA">NA</MenuItem>
                <MenuItem value="Govt">Govt.</MenuItem>
                <MenuItem value="Private">Private</MenuItem>
                <MenuItem value="Public">Public</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TextField
                fullWidth
                label="Specify if any Other"
                name="fatherother"
                value={formData.fatherother}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                select
                fullWidth
                label="Mother's Occupation"
                name="motheroccupation"
                value={formData.motheroccupation}
                onChange={handleChange}
              >
                <MenuItem value="">Select</MenuItem>
                <MenuItem value="Yes">Service</MenuItem>
                <MenuItem value="No">Business</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                select
                fullWidth
                label="Mother's Service"
                name="motherservice"
                value={formData.motherservice}
                onChange={handleChange}
              >
                <MenuItem value="">Select</MenuItem>

                <MenuItem value="NA">NA</MenuItem>
                <MenuItem value="Govt">Govt.</MenuItem>
                <MenuItem value="Private">Private</MenuItem>
                <MenuItem value="Public">Public</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TextField
                fullWidth
                label="Specify if any Other"
                name="motherother"
                value={formData.motherother}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                select
                fullWidth
                label="Guardian's Occupation"
                name="guardianoccupation"
                value={formData.guardianoccupation}
                onChange={handleChange}
              >
                <MenuItem value="">Select</MenuItem>
                <MenuItem value="Yes">Service</MenuItem>
                <MenuItem value="No">Business</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                select
                fullWidth
                label="Guardian's Service"
                name="guardianservice"
                value={formData.guardianservice}
                onChange={handleChange}
              >
                <MenuItem value="">Select</MenuItem>

                <MenuItem value="NA">NA</MenuItem>
                <MenuItem value="Govt">Govt.</MenuItem>
                <MenuItem value="Private">Private</MenuItem>
                <MenuItem value="Public">Public</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TextField
                fullWidth
                label="Specify if any Other"
                name="guardianother"
                value={formData.guardianother}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              NAME OF YOUR SIBLING(S) IF ANY, STUDYING IN THE SCHOOL :
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First Sibling Name"
                name="firstsiblingname"
                value={formData.firstsiblingname}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First Sibling Class"
                name="firstsiblingclass"
                value={formData.firstsiblingclass}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Second Sibling Name"
                name="secondsiblingname"
                value={formData.secondsiblingname}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Second Sibling Class"
                name="secondsiblingclass"
                value={formData.secondsiblingclass}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Third Sibling Name"
                name="thirdtsiblingname"
                value={formData.thirdtsiblingname}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Third Sibling Class"
                name="thirdsiblingclass"
                value={formData.thirdsiblingclass}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                type="file"
                label="Photocopy of Marksheet (8th for 9th Reg / 10th for 11th Reg"
                name="marksheet"
                value={formData.marksheet}
                InputLabelProps={{ shrink: true }}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                type="file"
                label="Upload Caste Certificate"
                name="casteCertificate"
                value={formData.casteCertificate}
                InputLabelProps={{ shrink: true }}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                type="file"
                label="Upload Passport Size Photo"
                name="passportPhoto"
                value={formData.passportPhoto}
                InputLabelProps={{ shrink: true }}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              width: 200,
              display: "flex",
              margin: "auto",
              marginTop: "10px",
            }}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default RegForm9and11;
