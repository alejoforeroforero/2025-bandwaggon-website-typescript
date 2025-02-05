import Cartel from "@/components/UI/Cartel";
import Button from "@/components/UI/Button";

import "./Artist.css";

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
      <h1 className="header">ARTIST</h1>
      <div className="info-general">
        <div className="cartel">
          <div className="cartel-container">
            <Cartel phrases={phrases} classTittle="artist" />
          </div>
        </div>
        <div className="info-section-t2">
          <p>It shouldn't be this hard!</p>
          <p>We are personally invested in helping every talented</p>
          <p>artist wanting to become pro, with the time and the</p>
          <p>tools they need to succeed.</p>
          <video src=""></video>
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
