import React from "react";
import Experience from "../Items/Experience";

const experiencesData = [
  {
    id: 1,
    year: "jan 2022 - Present",
    degree: "Full Stack and WordPress Developer at Webera",
    content: "Remote Work - EUA",
  },
  {
    id: 2,
    year: "fev 2022 - Present",
    degree: "Full Stack Developer at Greenmainframe",
    content: "Remote Work - EUA",
  },
  {
    id: 3,
    year: "jul 2022 - dez 2022",
    degree: "Full Stack Developer at Mototalk",
    content: "Remote Work - EUA",
  },
  {
    id: 4,
    year: "jan 2022 - dez 2022",
    degree: "Full Stack Developer at SIB Impact",
    content: "Remote Work - EUA",
  },
  {
    id: 5,
    year: "jan 2021 - apr 2022",
    degree: "Full Stack Developer at Full Time",
    content: "Remote Work - BR/RJ",
  },
  {
    id: 6,
    year: "jan 2021 - jan 2022",
    degree: "Freelance",
    content: "Remote Work - Brazil",
  },
  {
    id: 7,
    year: "jan 2020 - jan 2021",
    degree: "Back-end Developer at CEFET/RJ",
    content:
      "Face-to-face Work - BR/RJ",
  },
  {
    id: 8,
    year: "jan 2018 - dez 2021",
    degree: "Technical Software Education at CEFET/RJ",
    content:
      "Study - BR",
  },
];

function Experiences() {
  return (
    <div className="timeline">
      {experiencesData.map((experience) => (
        <Experience experience={experience} key={experience.id} />
      ))}
      <span className="timeline-line"></span>
    </div>
  );
}

export default Experiences;
