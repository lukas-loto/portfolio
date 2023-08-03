import React from "react";
import { Link as ScrollLink } from "react-scroll";

const aboutData = {
  cvpath: "media/CURRICULO EN.pdf",
  image: "images/logo-image.svg",
  name: "Lukas Domingos",
  location: "Rio de Janeiro, BR",
  birthday: "26 June, 2002",
  email: "lukas-domingos1@hotmail.com",
  aboutMe: (
    <>
      Do it yourself, disciplined, proactive and leader in SFL.
      Passionate about technology, I live in Rio de Janeiro. With a proactive
      and disciplined profile, I have always worked to provide the best
      experience for my clients, always focusing on results. <br /> <br /> I
      have experience in: <br /> <br />{" "}
      <strong>
        - PHP, Node, Python, C#, C++, Java, SQL, Json, Git, Docker. <br />
        - JavaScript, HTML, CSS, SASS, React, TypeScript, Bootstrap, Tailwind,
        UI/UX. <br />
        - Codeigniter 4, jQuery, Next, Nest, WordPress. <br />- Rest of API,
        Webhooks.{" "}
      </strong>
    </>
  ),
};

function About() {
  return (
    <div className="row">
      <div className="col-md-12">
        <p className="mb-0">{aboutData.aboutMe}</p>
        <div className="row my-4">
          <div className="col-md-6">
            <p className="mb-2">
              Name: <span className="text-dark">{aboutData.name}</span>
            </p>
            <p className="mb-0">
              Birthday: <span className="text-dark">{aboutData.birthday}</span>
            </p>
          </div>
          <div className="col-md-6 mt-2 mt-md-0 mt-sm-2">
            <p className="mb-2">
              Location: <span className="text-dark">{aboutData.location}</span>
            </p>
            <p className="mb-0">
              Email: <span className="text-dark">{aboutData.email}</span>
            </p>
          </div>
        </div>
        <a
          href={aboutData.cvpath}
          className="btn btn-default mr-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="icon-cloud-download"></i>Download CV
        </a>
        <ScrollLink
          activeClass="active"
          to="section-contact"
          spy={true}
          smooth={true}
          duration={500}
          offset={50}
          className="btn btn-alt mt-2 mt-md-0 mt-xs-2"
        >
          <i className="icon-envelope"></i>Contact me
        </ScrollLink>
      </div>
    </div>
  );
}

export default About;
