import Cartel from "@/components/UI/Cartel";
import Button from "@/components/UI/Button";

import "./How.css";

const How = () => {
  const phrases = [
    "HOP ON BANDWAGGON:",
    "WE'LL DO THE",
    "ADMIN,",
    "YOU KEEP DOING...",
    "WHATEVER THAT IS!",
  ];

  const handleJoin = () => {
    console.log("Join");
  };
  return (
    <main id="how">
      <h1 className="header">HOW-IT-WORKS</h1>
      <div className="info-general">
        <div className="cartel">
          <div className="cartel-container">
            <Cartel phrases={phrases} classTittle="how" />
          </div>
        </div>
        <div className="info-section-t2">
          <p>The music industry is overly complicated.</p>
          <p>We break it down for you:</p>
          <ul>
            <li><span>1</span> - sign an or download the app</li>
            <li><span>2</span> - ask for what you need</li>
            <li><span>3</span> - done!</li>
          </ul>
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

export default How;
