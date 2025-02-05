import Cartel from "@/components/UI/Cartel";
import Button from "@/components/UI/Button";

import './Label.css';

const Labels = () => {
  const phrases = ["BANDWAGGON:", "HALF THE WORK,", "DOUBLE THE", "ROSTER"];

  const handleJoin = () => {
    console.log("Join");
  };
  return (
    <main id="label">    
      <div className="info-general">
        <div className="cartel">
          <div className="cartel-container">
            <Cartel phrases={phrases} classTittle="label" />
          </div>
        </div>
        <div className="info-section-t2">
          <p>Streamline your artists' management and make room for</p>
          <p>upcoming talent. <span>Bandwaggon</span> will help you to efficiently</p>
          <p>manage your work, your team and your artist without</p>
          <p>disrupting your current processes. No adoption curve</p>
          <p>needed. Keep doing what you're doing, but now faster and</p>
          <p>with half the sweat.</p>
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

export default Labels;
