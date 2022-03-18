import React from "react";
import ReactPlayer from "react-player";
import pirate from "../../../assets/pirate.jpg";
import CardImg from "../../card-img/card-img";
import "./history.css";
const History = () => {
  return (
    <>
      <h1>KOREAN MARTIAL ARTS HISTORY</h1>
      <ReactPlayer url="https://www.youtube.com/watch?v=sgeKIRB2AIc&feature=emb_logo"></ReactPlayer>
      <CardImg
        description={`
      “5000 Years of Korean Martial Art” is a one of a kind history book. No other Korean martial art history book on the market is as complete and in-depth. Citing historical references for support, and featuring many rare pictures and some images that are not available from any other published source. This book attempts to place Korean martial arts in it’s proper historical perspective in relationship to Chinese and Japanese martial arts. Both Chinese and Japanese martial arts have well known and documented histories, so much so that they have completely overshadowed Korean martial art history. I have attempted to compensate for that overshadowing by focusing on the successes of the Korean martial arts throughout history. Barry Harmon has a BA degree in “Psychosomatics and Alternative Healing Studies” from San Francisco State University. He has an acupuncture degree from the San Francisco College of Acupuncture and Oriental Medicine. He is certified nationally through the NCCAOM and license to practice acupuncture in Texas. In addition to his academics, he has been training and studying martial arts since 1965 and Kuk Sool Won since 1971. In 2002 KBS (Korean Broadcasting System) featured Master Harmon and his family in an hour long documentary which was aired throughout South Korea. Master Harmon currently holds an 9th degree black belt in Kuk Sool Won and has been featured in numerous martial arts magazines. In 2005 he was chosen by Tae Kwan Do Times magazine as instructor of the year. He has taught martial arts in many countries around the world including South Korea.”`}
        img={pirate}
        alt={"pirate"}
      />

      <ReactPlayer url="https://www.youtube.com/watch?v=fuf4q_ZFp98"></ReactPlayer>
      <ReactPlayer url="https://www.youtube.com/watch?v=wz6VAluewo0"></ReactPlayer>
      <h3>
        <a
          className="handbook"
          href="https://www.kswofmadisonheights.com/wp-content/uploads/2022/02/WKSA-Student-Handbook.pdf"
          target="_blank"
        >
          CLICK HERE TO VIEW OR DOWNLOAD WKSA OFFICIAL STUDENT HANDBOOK
        </a>
      </h3>
    </>
  );
};
export default History;
