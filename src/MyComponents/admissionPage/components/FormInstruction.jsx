import React from "react";

const FormInstruction = () => {
  const instructions = [
    "PLEASE FILL IN ALL THE DETAILS CORRECTLY.",
    "ONCE THE FORM IS SUBMITTED, FURTHER CHANGES WILL NOT BE ALLOWED ONLINE.",
    "KINDLY SAVE THE FORM FOR FUTURE REFERENCE.",
    "IN CASE OF ANY RECTIFICATION IN THE DETAILS FILLED IN, THE SAVED FORM NEEDS TO BE BROUGHT TO SCHOOL BY THE PARENT IN HARD COPY.",
    "ANY MODIFICATIONS/CORRECTIONS IN THE FORM MUST BE DONE BY THE PARENTS WITHIN 15 DAYS OF SUBMISSION OF THE FORM ONLINE. WITHOUT PARENTS' APPROVAL, NO MODIFICATION/CORRECTION WILL BE DONE.",
    "AFTER 15 DAYS OF SUBMISSION OF THE FORM, NO CORRECTION WILL BE POSSIBLE.",
    "CLASS 9 TO 12 WILL SUBMIT A HARD COPY OF THE FORM IN SCHOOL DULY SIGNED BY THE STUDENT AS WELL AS PARENT.",
    // "TO RE-SUBMIT/EDIT YOUR FORM.",
  ];

  return (
    <>
    
    <div style={styles.container}>
      <h2 style={styles.heading}>Instructions</h2>
      <ol style={styles.list}>
        {instructions.map((instruction, index) => (
          <li key={index} style={styles.listItem}>
            {instruction}
          </li>
        ))}
      </ol>
    </div>
    <hr />
    </>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "90%",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    
  },
  heading: {
    textAlign: "center",
    color: "#333",
  },
  list: {
    padding: "10px",
    color: "#444",
  },
  listItem: {
    marginBottom: "10px",
  },
};

export default FormInstruction;
