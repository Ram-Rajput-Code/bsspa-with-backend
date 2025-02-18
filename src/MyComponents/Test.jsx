// import "./test.css";

// function Test() {
//   return (
//     <>
    

//       <div className="container">
//         <div className="collapsible">
//           This div collapses on smaller screens!
//         </div>
//         <div className="content">This content always remains visible.</div>
//       </div>
//     </>
//   );
// }

// export default Test;

import React, { useState } from "react";
import { jsPDF } from "jspdf";

const Test = () => {
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "", state: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const doc = new jsPDF();
    doc.text("Form Data", 20, 20);
    doc.text(`Name: ${formData.name}`, 20, 30);
    doc.text(`Email: ${formData.email}`, 20, 40);
    doc.text(`Mobile: ${formData.mobile}`, 20, 50);
    doc.text(`State: ${formData.state}`, 20, 60);
    doc.text(`Message: ${formData.message}`, 20, 70);
    doc.save("form-data.pdf");
  };

  return (
    <div className="max-w-md mx-auto p-4 shadow-lg rounded-lg bg-white">
      <h2 className="text-xl font-bold mb-4">Fill the Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="mobile"
          placeholder="Enter your mobile number"
          value={formData.mobile}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <select
          name="state"
          value={formData.state}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select your state</option>
          <option value="California">California</option>
          <option value="Texas">Texas</option>
          <option value="New York">New York</option>
          <option value="Florida">Florida</option>
        </select>
        <textarea
          name="message"
          placeholder="Enter your message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Save as PDF
        </button>
      </form>
    </div>
  );
};

export default Test;
