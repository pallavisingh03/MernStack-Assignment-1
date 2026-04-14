import React, { useState } from "react";

const ProfileCard = ({ name }) => {
  const [status, setStatus] = useState("Available");

  const parthDevSkillSet = ["React", "Node", "MongoDB"];

  return (
    <div style={{ border: "2px solid black", padding: "15px" }}>
      <h2>{name}</h2>

      <p>Status: {status}</p>

      <button onClick={() => setStatus("Busy")}>
        Change Status
      </button>

      <h3>Skills:</h3>
      <ul>
        {parthDevSkillSet.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileCard;