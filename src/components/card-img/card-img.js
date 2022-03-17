import React from "react";
import "./card-img.css";

const CardImg = (props) => {
  return (
    <section className="section-card-img__warpper">
      <img src={props.img} alt={props.alt} className="section-card-img" />
      <div className="section-card-img__desc">
        <p>{props.description}</p>
      </div>
    </section>
  );
};
export default CardImg;
