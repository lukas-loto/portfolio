import React from "react";
import Experience from "../Items/Experience";

const experiencesData = [
  {
    id: 1,
    year: "jan 2022 - Present",
    degree: "Full Stack and WordPress Developer at Webera",
    content:
      "As a mid-level Full Stack Developer, I was responsible for creating the website for Webera, an American DevOps company. In this project I was responsible for reproducing figma's UI/UX screens that were created by the company's Designer on the frontend, so that they were responsive and exactly the same as the prototype. My main focus was WordPress, HTML5, CSS3, jQuery, JavaScript and PHP. I optimized the website's SEO. I was also responsible for creating the Beer With the Boss website on WordPress for the company, which was one of Webera's products, a podcast made with the owner of the company in which he talked about technology and DevOps topics. Several marketing landing pages were created, using TypeScript, React.js and Tailwind CSS and image design in PhotoShop, Illustrator and Canva. Even editing small videos in After Effects was carried out. We use agile methodology in Notion, GitHub and GitLab to manage codes.",
  },
  {
    id: 2,
    year: "fev 2022 - Present",
    degree: "Full Stack Developer at Greenmainframe",
    content:
      "As a mid-level Full Stack Developer, I was responsible for creating the e-commerce of Green Mainframe, a hosting and domain sales company that does not harm the environment. In this project I was responsible for reproducing figma's UI/UX screens that were created by the company's Designer on the frontend, so that they were responsive and exactly the same as the prototype and connecting the backend with the frontend, we used microservices and microfrontends to manage resources. My main focus was React, Next.js, Tailwind CSS, TypeScript, Nest and Node. I optimized SEO on the site. I was also responsible for creating the Green Mainframe blog using Elementor on WordPress.",
  },
  {
    id: 3,
    year: "jul 2022 - dez 2022",
    degree: "Full Stack Developer at Mototalk",
    content:
      "As a Mid-Level WordPress Developer, I was responsible for creating the e-commerce for one of Motorola's products, which is one of the largest telephone companies in the world, called Mototalk. In this project, I was responsible for reproducing figma's UI/UX screens that were created by the company's Designer on the WordPress frontend, so that they were responsive and exactly the same as the prototype and developing a plugin and a custom theme for provisioning the Mototalk service, when a purchase was made on the website so that the customer could use the application. My main focus was PHP, Rest API, MySQL, HTML5, CSS3, JavaScript and jQuery. We also use Elementor, Woocommerce, Yoast SEO for ranking in search indexes and WP Rocket for performance optimization.",
  },
  {
    id: 4,
    year: "jan 2022 - dez 2022",
    degree: "Full Stack Developer at SIB Impact",
    content:
      "As a Mid-Level WordPress Developer, I was responsible for creating the website for SIB Impact, an American company, which has an ESG game to raise environmental awareness for companies. In this project, I was responsible for reproducing figma's UI/UX screens that were created by the company's Designer on the WordPress frontend, so that they were responsive and exactly the same as the prototype. My main focus was PHP, MySQL, HTML5, CSS3, JavaScript and jQuery. We also use Elementor, WPML, to translate the site into Portuguese and Spanish, Yoast SEO for ranking in search indexers and WP Rocket for performance optimization.",
  },
  {
    id: 5,
    year: "jan 2021 - apr 2022",
    degree: "Full Stack Developer at Full Time",
    content:
      "As a Fulltime Jr. Full-Stack Developer, I was responsible for creating the Loto Robot Digital Marketing product and its algorithm that, working with probability, generated Lotofácil numbers that would have a greater chance of being winners. In this project, in addition to the backend, I was also responsible for reproducing figma's UI/UX screens that were created by the company's Designer on the frontend, so that they were responsive and exactly the same as the prototype. My main focus was PHP, CodeIgniter 4, MySQL, HTML5, CSS3, JavaScript, jQuery and Bootstrap. We use Trello and agile methodology techniques.",
  },
  {
    id: 6,
    year: "jan 2021 - jan 2022",
    degree: "WordPress Developer at Freelancer.com",
    content:
      "As a WordPress Developer on the freelancer.com platform, I was responsible for offering services for creating landing pages, blogs, e-commerce and institutional websites. My main focus was PHP, MySQL, HTML5, CSS3, JavaScript and jQuery.",
  },
  {
    id: 7,
    year: "jan 2021 - jan 2022",
    degree: "WhatsApp Marketing at Freelancer.com",
    content:
      "As a Full Stack Developer on the freelancer.com platform, I was responsible for offering WhatsApp Marketing services using the Baileys API. My main focus was Node.js, Webhooks, Rest API, AWS and MySQL.",
  },
  {
    id: 7,
    year: "jan 2020 - jan 2021",
    degree: "Backend Developer at Cefet/RJ",
    content:
      "As a Jr. Full-Stack Developer at Cefet/RJ, I was responsible for managing the federal college's databases as well as developing full-stack solutions. My main focus was Node.js, MySQL, HTML5, CSS3, jQuery and Bootstrap. Furthermore, I was responsible for writing advanced queries for data processing in a system that recorded the electronic time of the institution's employees. I also used Python to generate reports and pdfs of electronic timesheets using SQL Server.",
  },
  {
    id: 8,
    year: "jan 2018 - dez 2021",
    degree: "Technical Software Education at CEFET/RJ",
    content:
      "I studied for 3 years at Cefet/RJ, an excellent federal technical college, where I was able to learn several programming languages ​​such as Java, Python, PHP, HTML5, CSS3, JavaScript, jQuery, MySQL, C, C#, Node, Bootstrap and Git. During the federal institute I got high grades, performing very well. Categorizing as one of the best students in my class. I collected friends and teachers and learned to program.",
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
