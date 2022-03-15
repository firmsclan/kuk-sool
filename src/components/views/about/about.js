import React from "react";
import Introduction from "../../introduction/introduction";
import Card from "../../card/card";
import { aboutContent } from "./about-content.js";
import "./about.css";

const About = () => {
  return (
    <section>
      <Introduction />
      {aboutContent.map((card) => (
        <Card
          key={card.title}
          header={card.header}
          footer={card.footer}
          title={card.title}
          items={card.items}
          optional={card.optional}
        />
      ))}
    </section>
  );
};
export default About;
