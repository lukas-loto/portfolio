import React from "react";
import Service from "../Items/Service";

const servicesData = [
  {
    id: 1,
    name: "Web development",
    content: "Website built using programming languages",
    icon: "icon-globe",
  },
  {
    id: 2,
    name: "WordPress Site",
    content: "Blog, ecommerce, portfolio and institutional website",
    icon: "icon-globe",
  },
  {
    id: 3,
    name: "WordPress Security",
    content: "Increase security of WordPress website",
    icon: "icon-shield",
  },
  {
    id: 4,
    name: "WordPress Plugin",
    content: "Creation of custom WordPress Plugins and themes",
    icon: "icon-bulb",
  },
  {
    id: 5,
    name: "Landing Page",
    content: "Creation of landing pages in UI/UX with animations",
    icon: "icon-directions",
  },
  {
    id: 6,
    name: "Figma Reproduction",
    content: "Faithful reproduction of screens figma in Frontend",
    icon: "icon-note",
  },
  {
    id: 7,
    name: "Design UI/UX",
    content: "Photo and vector editing building branding.",
    icon: "icon-chemistry",
  },
  {
    id: 8,
    name: "Increase site speed",
    content: "At least 95% speed in GTmetrix test",
    icon: "icon-speedometer",
  },
  {
    id: 9,
    name: "SEO",
    content: "SEO optimization to increase the index performance",
    icon: "icon-bubbles",
  },
  {
    id: 10,
    name: "API Integration",
    content: "API integration with the application used",
    icon: "icon-organization",
  },
  {
    id: 11,
    name: "SQL Database",
    content: "Query creation in MySql to integrate database",
    icon: "icon-layers",
  },
  {
    id: 12,
    name: "WhatsApp Marketing",
    content: "Automatic sending of WhatsApp messages",
    icon: "icon-envelope-letter",
  },
];

function Services() {
  return (
    <div className="row -mt-20">
      {servicesData.map((service) => (
        <div className="col-md-4 col-sm-6 mt-20" key={service.id}>
          <Service service={service} />
        </div>
      ))}
    </div>
  );
}

export default Services;
