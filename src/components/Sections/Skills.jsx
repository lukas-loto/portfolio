import React from "react";
import TrackVisibility from "react-on-screen";
import Skill from "../Items/Skill";

const skillData = {
  progressData: [
    {
      id: 1,
      name: "Good communication",
      percentage: 100,
    },
    {
      id: 2,
      name: "Proactivity",
      percentage: 100,
    },
    {
      id: 3,
      name: "Hard work",
      percentage: 100,
    },
    {
      id: 4,
      name: "Team work",
      percentage: 100,
    },
    {
      id: 5,
      name: "Meet deadline",
      percentage: 100,
    },
    {
      id: 6,
      name: "Agile and Scrum",
      percentage: 100,
    },
  ],
};

function Skills() {
  return (
    <>
      <p className="mb-0">{skillData.skillContent}</p>
      <div className="row -mt-50">
        {skillData.progressData.map((progress) => (
          <div className="col-md-6 mt-50" key={progress.id}>
            <TrackVisibility once>
              <Skill progress={progress} />
            </TrackVisibility>
          </div>
        ))}
      </div>
    </>
  );
}

export default Skills;
