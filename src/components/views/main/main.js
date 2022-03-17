import React from "react";
import add from "../../../assets/kuk-sool-add.jpg";
import ReactPlayer from "react-player";
import teacher from "../../../assets/teacher.jpg";
import "./main.css";
import { mainContent } from "./main-content";
import CardImg from "../../card-img/card-img";

const Main = () => {
  return (
    <>
      <h1>“어서오세요”</h1>
      <img className="add" src={add} alt="add" />
      <div className="video-main">
        <ReactPlayer url="https://www.youtube.com/watch?v=i1fzT0CtbZ8&t=2s" />
      </div>
      <div className="main-benifit">
        <p>
          Kuk Sool Won™ is a traditional Korean Martial Art which provides many
          benefits to its students:
        </p>
        <ul>
          <li>Body Conditioning</li>
          <li>Mental Toughness</li>
          <li>Self-Defense</li>
          <li>Self-Awareness</li>
          <li>Discipline</li>
          <li>Confidence</li>
          <li>Calm Self-Assurance</li>
          <li>Perseverance</li>
        </ul>
      </div>
      {mainContent.cards.map((card) => (
        <CardImg
          key={card.alt}
          img={card.img}
          alt={card.alt}
          description={card.description}
        />
      ))}
      <img src={teacher} alt="teacher" />
    </>
  );
};
export default Main;
