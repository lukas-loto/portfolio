import React from "react";
import Experience from "../Items/Experience";

const experiencesData = [
  {
    id: 1,
    year: "2022 - Present",
    degree: "Full Stack and WordPress Developer at the American Webera company",
    content: "Full Stack Developer at the American Webera company",
  },
  {
    id: 2,
    year: "2022 - 2018",
    degree: "WordPress Freelance",
    content: "Freelancer at Workana",
  },
  {
    id: 3,
    year: "2021-2020",
    degree: "PHP and Full Stack Developer at Full Time Solutions company",
    content: "PHP and Full Stack Developer at Full Time Solutions company",
  },
  {
    id: 4,
    year: "2021",
    degree: "Back-end Developer at CEFET/RJ",
    content:
      "API development in Node.Js and Python to generate electronic timesheets for Colégio e Faculdade Federal.",
  },
  {
    id: 5,
    year: "2021 - 2018",
    degree: "Technical education in Software Development",
    content:
      "Study of programming languages ​​and IT in Federal Center for Technological Education of Rio de Janeiro",
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
