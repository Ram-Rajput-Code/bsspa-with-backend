import React from "react";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { MdOutlineMonitor } from "react-icons/md";

const AboutVisionMission = () => {
  return (
    <>
      <div className="maindiv">
        <div className="body3row1">
          <div className="body3col1 mytextdiv">
            <MdOutlineMonitor className="icon" /> <h2>Our Vision</h2> Our vision
            is to enable the learners not only to acquire knowledge but wisdom
            which will make this world worth habitable with complete peace and
            harmony without violence, jealousy, intolerance, hatred and enimity.
          </div>
          <div className="body3col1 mytextdiv">
            <FaHeartCircleCheck className="icon" />
            <h2>Our Mission</h2>Our mission is to spread man making education at
            all level irrespective of cast, creed and religion by making life's
            journey from animality to humanity & ultimately to divinity
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutVisionMission;
