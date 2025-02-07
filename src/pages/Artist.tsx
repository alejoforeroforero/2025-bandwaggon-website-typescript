import Cartel from "@/components/UI/Cartel";
import Button from "@/components/UI/Button";

import "./Artist.css";

const videoSrc =
  "https://res.cloudinary.com/dlmutdhbp/video/upload/v1738949089/bandwaggon-artists-video_udl4zn.mp4";

const Artist = () => {
  const phrases = [
    "BANDWAGGON:",
    "FOR MUSICIANS",
    "WHO'D RATHER",
    "WRITE SONGS",
    "THAN EMAILS",
  ];

  const handleJoin = () => {
    console.log("Join");
  };
  return (
    <main id="artist">
      <div className="info-general">
        <div className="cartel">
          <div className="cartel-container">
            <h1 className="header">ARTIST</h1>
            <Cartel phrases={phrases} classTittle="artist" />
          </div>
        </div>
        <div className="info-section-t2">
          <p>It shouldn't be this hard!</p>
          <p>We are personally invested in helping every talented</p>
          <p>artist wanting to become pro, with the time and the</p>
          <p>tools they need to succeed.</p>
          <video autoPlay loop muted src={videoSrc}>
            Your browser does not support the video tag.
          </video>
          <div className="button-section-2">
            <Button
              label="JOIN THE WAITING LIST"
              classTitle="button-t2"
              onClick={handleJoin}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Artist;
