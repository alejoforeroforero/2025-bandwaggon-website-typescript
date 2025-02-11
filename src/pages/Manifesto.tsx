import Content from "@/components/UI/Content";
import Button from "@/components/UI/Button";

import "./Manifesto.css";

const Manifesto = () => {
  const cartelImgSrc =
    "https://res.cloudinary.com/dlmutdhbp/image/upload/v1739044358/manifesto-cartel_phbwkf.png";

  const infoLeft = `We, as musicians and innovators, see the need for change.<br>\n
    Creativity is not black or white.<br>\n
    The future of the industry is.`;

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
    <Content
      top={null}
      left={
        <div className="manifesto-left">
          <div className="manifesto-img">
            <img src={cartelImgSrc} alt="" />
          </div>
          <div className="manifesto-left-text">
            {infoLeft.split("<br>").map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </div>
      }
      right={
        <div className="manifesto-right">
          <div className="manifesto-p">
            {info.split("<br>").map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
          <div className="manifesto-right-button">
            <Button
              label="JOIN THE WAITING LIST"
              classTitle="button-t1"
              onClick={handleJoin}
            />
          </div>
        </div>
      }
      isHome={false}
    />
  );
};

export default Manifesto;
