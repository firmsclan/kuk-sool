import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <section className="section-card">
      <h2>{props.title}</h2>
      {props.header && <p>{props.header}</p>}
      <ul>
        {props.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {props.footer && <p>{props.footer}</p>}
    </section>
  );
};
export default Card;
