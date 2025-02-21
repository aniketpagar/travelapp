import React from "react";
import aniketImage from "../assets/public/aniket.jpeg";
import sanketImage from "../assets/public/sanket.jpeg";
import "../css/About.css"; // Import the CSS file

const founders = [
  {
    name: "Aniket Pagar",
    role: "Founder",
    bio: "Aniket completed his Masters from COEP and has over 8 years of experience in the design and development of applications, primarily in the networking industry. His expertise includes creating scalable solutions and building cutting-edge technologies.",
    image: aniketImage,
    linkedin: "https://www.linkedin.com/in/aniket-pagar-190248101/",
  },
  {
    name: "Sanket Rahane",
    role: "Founder",
    bio: "Sanket completed his Masters from COEP and brings over 8 years of experience in designing and developing innovative solutions. With deep expertise in AI, cloud computing, and scalable architectures, Sanket has contributed to several successful projects.",
    image: sanketImage,
    linkedin: "https://www.linkedin.com/in/sanket-rahane/",
  },
];

function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">
          About Us
        </h1>
        <p className="hero-text">
          We are a team of passionate innovators dedicated to building scalable
          and cutting-edge technologies that drive the future of the industry.
        </p>
      </div>

      {/* Founders Section */}
      <div className="founders-section">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          Meet Our Founders
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="founder-card"
            >
              {/* Founder Image */}
              <div className="founder-image">
                <img
                  src={founder.image}
                  alt={founder.name}
                />
              </div>

              {/* Founder Details */}
              <h3 className="founder-name">{founder.name}</h3>
              <p className="founder-role">{founder.role}</p>
              <p className="founder-bio">{founder.bio}</p>

              {/* LinkedIn Button */}
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin-btn"
              >
                Connect on LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Section */}
      <div className="mission-section">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mission-title">
            Our Mission
          </h2>
          <p className="mission-text">
            Our mission is to empower businesses with innovative and scalable
            solutions that transform industries and create lasting impact. We
            believe in the power of technology to drive change and are committed
            to delivering excellence in everything we do.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
