import React from "react";
import { Link as ScrollLink } from "react-scroll";

const aboutData = {
  cvpath: "media/Resume-Lukas-Domingos.pdf",
  image: "images/logo-image.svg",
  name: "Lukas Domingos",
  location: "Rio de Janeiro, BR",
  birthday: "26 June, 2002",
  email: "lukas-domingos1@hotmail.com",
  aboutMe: (
    <>
      I'm proficient in React, TypeScript and WordPress, but my technology
      history is diverse and comprehensive - check out my professional
      experience section for more information. <br />
      <br />
      Currently based in Rio de Janeiro, I'm actively seeking a new Software
      Development position in a company that offers remote work. <br />
      <br />
      I specialize in PHP, WordPress, React, Node, TypeScript, JavaScript,
      HTML5, CSS3, SASS, Bootstrap, Tailwind, CodeIgniter 4, jQuery, Docker,
      MySQL, Git, Next and Node, and I'm passionate about creating software that
      is robust, scalable, and user-friendly. <br />
      <br />
      If you're interested in connecting or have any opportunities that may be a
      good fit, feel free to get in touch. I'd love to chat!
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
