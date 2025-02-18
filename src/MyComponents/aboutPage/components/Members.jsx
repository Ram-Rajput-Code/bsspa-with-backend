import React from "react";

const members = [
  {
    id: 1,
    name: "SHRI RAJ KUMAR CHATURVEDI",
    description: "GUARDIAN’S REPRESENTATIVE",
    contact: "",
  },
  {
    id: 2,
    name: "DR. SHANKAR GAYEN",
    description: "GUARDIAN’S REPRESENTATIVE",
    contact: "9300665574",
  },
  {
    id: 3,
    name: "SRI MAHESH THAKARE",
    description: "TEACHER’S REPRESENTATIVE",
    contact: "9617986834",
  },
  { id: 4, name: "SRI PRABIR SENSHARMA", description: "PATRON", contact: "" },
  {
    id: 5,
    name: "SHRI MAHADEV MAHATO",
    description: "SUPERVISOR BSSPA",
    contact: "8871012220",
  },
  {
    id: 6,
    name: "SMT. ANINDITA GHOSH",
    description: "EX. OFFICIO- PRINCIPAL, BSSPA",
    contact: "9752630285",
  },
  {
    id: 7,
    name: "SRI K. C. MITRA",
    description: "CHIEF ADMINISTRATOR BSSPA",
    contact: "9303039331",
  },
  {
    id: 8,
    name: "SRI R. K. BANERJEE",
    description: "EX. OFFICIO- RECTOR, BSSPA",
    contact: "9893065176",
  },
  {
    id: 9,
    name: "SMT. RADHA BOSE",
    description: "PATRON",
    contact: "7714269338",
  },
  {
    id: 10,
    name: "SRI NILAY BURMAN (PRINCIPAL GOVT. SCHOOL MANA)",
    description: "EDUCATIONIST",
    contact: "9301629252",
  },
];

const Members = () => {
  return (
    <div className="p-4 container">
      <h2 className="text-xl font-bold mb-4 text-center">Member List</h2>
      <ul className="list-group">
        {members.map((member) => (
          <li
            key={member.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <strong>{member.name}</strong> - {member.description}
            </div>
            <span className="badge bg-info rounded-pill w-25 text-center">
              {member.contact || "N/A"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Members;
