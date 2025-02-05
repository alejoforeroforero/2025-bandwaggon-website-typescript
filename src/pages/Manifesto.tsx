import Cartel from "@/components/UI/Cartel";
import Button from "@/components/UI/Button";

import "./Manifesto.css";

const Manifesto = () => {
  const phrases = ["MUSICIANS", "BLACK &", "WHITE", "MANIFESTO"];

  const info = `**AI-enhanced creativity over AI-replaced artistry**<br>\n
    We embrace AI as a tool to amplify our creative potential, not as a substitute for human expression.<br>\n
    **Fair compensation over exposure**<br>\n
    We affirm that music is a viable career, deserving of just payment rather than promises of visibility.<br>\n
    **Transparent ecosystems over bureaucratic structures**<br>\n
    We support environments free from unnecessary administration, where information flows freely.<br>\n
    **Community over factions**<br>\n
    We believe that only a strong supportive and nurtered community can fight for their rights.<br>\n
    `;

  const handleJoin = () => {
    console.log("Join");
  };

  return (
    <main id="manifiesto">
      <div className="info-general">
        <div className="cartel">
          <div className="cartel-container">
            <Cartel phrases={phrases} classTittle="manifesto" />
            <div className="cartel-p">
              <p>We, as musicians and innovators, see the need for change.</p>
              <p>Creativity is not black or white.</p>
              <p>The future of the industry is.</p>
            </div>
          </div>
        </div>
        <div className="info-section-t2">
          <div className="manifesto-p">
            {info.split("<br>").map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
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

export default Manifesto;
