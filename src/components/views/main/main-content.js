import React from "react";
import add from "../../../assets/kuk-sool-add.jpg";
import ReactPlayer from "react-player";
import meditation from "../../../assets/meditation.jpg";
import classImg from "../../../assets/class.jpg";
import medalImg from "../../../assets/medal.jpg";
import teacher from "../../../assets/teacher.jpg";

export const mainContent = {
  cards: [
    {
      img: meditation,
      alt: "meditation",
      description: `Students also study healing techniques, development of internal power,
    and achieving good health/physical fitness through tactics that have
    been refined throughout Kuk Sool Won’s rich 5,000 year history. Our
    unique curriculum flows well, making it seem anything but complex.`,
    },
    {
      img: classImg,
      alt: "class",
      description: `All of this means that Kuk Sool Won™ is not limited to a particular
    style of martial arts, but is a well-organized, systematic study of the
    entire spectrum of Korean martial arts, dating from ancient times to the
    present.`,
    },
    {
      img: medalImg,
      alt: "medals",
      description: `Visiting this site is the first step on a long journey towards personal
    development. There's something for all ages in Kuk Sool Won™.`,
    },
  ],
};
