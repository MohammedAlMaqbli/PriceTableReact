import React from "react";

const SectionHeader = ({ title, desc }) => {
  return (
    <header className="section-header">
      <h1 className="about-header">{title}</h1>
      <p className="about-body">{desc}</p>
    </header>
  );
};
export default SectionHeader;
SectionHeader.defaultProps = {
  title: "Meo Pricing Table",
  desc:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sunt voluptate alias sint delectus quas, iste incidunt quos. Sint beatae itaque deserunt. Dolorum sapiente doloremque, magni quas deleniti est voluptatibus!"
};
