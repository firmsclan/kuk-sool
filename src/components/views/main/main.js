import React from "react";
import add from "../../../assets/kuk-sool-add.jpg";
import ReactPlayer from "react-player";
import meditation from "../../../assets/meditation.jpg";
import classImg from "../../../assets/class.jpg";
import medalImg from "../../../assets/medal.jpg";
import teacher from "../../../assets/teacher.jpg";
import "./main.css";

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
      <img src={meditation} alt="meditation" />
      <p>
        Students also study healing techniques, development of internal power,
        and achieving good health/physical fitness through tactics that have
        been refined throughout Kuk Sool Won’s rich 5,000 year history. Our
        unique curriculum flows well, making it seem anything but complex.
      </p>
      <img src={classImg} alt="class" />
      <p>
        All of this means that Kuk Sool Won™ is not limited to a particular
        style of martial arts, but is a well-organized, systematic study of the
        entire spectrum of Korean martial arts, dating from ancient times to the
        present.
      </p>
      <img src={medalImg} alt="medal" />
      <p>
        Visiting this site is the first step on a long journey towards personal
        development. There's something for all ages in Kuk Sool Won™.
      </p>
      <img src={teacher} alt="teacher" />
    </>
  );
};
export default Main;
