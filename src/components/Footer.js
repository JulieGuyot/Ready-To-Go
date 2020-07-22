import React from "react";
const Footer = (props) => {
  return (
    <div>
      Made with <strong>{props.tech}</strong> at <strong>{props.lieu}</strong>{" "}
      by <strong>{props.name}</strong>
    </div>
  );
};

export default Footer;
