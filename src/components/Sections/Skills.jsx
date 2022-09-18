import React from "react";
import TrackVisibility from "react-on-screen";
import Skill from "../Items/Skill";

const skillData = {
  skillContent:
    "I am passionate about technology and these are my main skills.",
  progressData: [
    {
      id: 1,
      name: "Sr. Wordpress",
      percentage: 100,
    },
    {
      id: 2,
      name: "HTML & CSS",
      percentage: 100,
    },
    {
      id: 3,
      name: "Backend",
      percentage: 90,
    },
    {
      id: 4,
      name: "Frontend",
      percentage: 90,
    },
    {
      id: 5,
      name: "UI/UX",
      percentage: 80,
    },
    {
      id: 6,
      name: "Agile",
      percentage: 80,
    },
  ],
};

function Skills() {
  return (
    <>
      <p className="mb-0">{skillData.skillContent}</p>
      <div className="mt-5">
        <div className="row -mt-50">
          {skillData.progressData.map((progress) => (
            <div className="col-md-6 mt-50" key={progress.id}>
              <TrackVisibility once>
                <Skill progress={progress} />
              </TrackVisibility>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
