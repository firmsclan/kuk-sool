import React from "react";
import Introduction from "../../introduction/introduction";
import Card from "../../card/card";
import { aboutContent } from "./about-content.js";
import "./about.css";

const About = () => {
  return (
    <section className="cards-wrapper">
      <Introduction />
      <div className="cards">
        <div className="cards-left">
          {aboutContent.slice(0, 5).map((card) => (
            <Card
              key={card.title}
              header={card.header}
              footer={card.footer}
              title={card.title}
              items={card.items}
              optional={card.optional}
            />
          ))}
        </div>
        <div className="cards-right">
          {aboutContent.slice(5, 10).map((card) => (
            <Card
              key={card.title}
              header={card.header}
              footer={card.footer}
              title={card.title}
              items={card.items}
              optional={card.optional}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default About;
