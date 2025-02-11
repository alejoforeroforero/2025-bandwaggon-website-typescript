import Content from "@/components/UI/Content";
import Button from "@/components/UI/Button";

import "./Labels.css";

const videoSrc =
  "https://res.cloudinary.com/dlmutdhbp/video/upload/v1738949089/bandwaggon-labels-video_f5pqmf.mp4";

const cartelImgSrc =
  "https://res.cloudinary.com/dlmutdhbp/image/upload/v1739145997/labels-cartel_bc6uql.png";

const titleImgSrc =
  "https://res.cloudinary.com/dlmutdhbp/image/upload/v1739145996/labels-title_ptb0e1.png";

const Labels = () => {
  const handleJoin = () => {
    console.log("Join");
  };

  return (
    <Content
      top={
        <div className="labels-title">
          <img src={titleImgSrc} alt="" />
        </div>
      }
      left={
        <div className="labels-left">
          <div className="labels-img">
            <img src={cartelImgSrc} alt="" />
          </div>
        </div>
      }
      right={
        <div className="labels-right">
          <div className="labels-info">
            <p>Streamline your artists' management and make room for upcoming talent. 
              <span>Bandwaggon</span> will help you to efficiently manage your work, your team and your 
              artists without disrupting your current processes. No adoption curve needed.
               Keep doing what you're doing, but now faster and with half the sweat.</p>
            <video autoPlay loop muted playsInline src={videoSrc}>
              Your browser does not support the video tag.
            </video>
            <div className="labels-info-button">
              <Button
                label="JOIN THE WAITING LIST"
                classTitle="button-t1"
                onClick={handleJoin}
              />
            </div>
          </div>
        </div>
      }
      isHome={false}
    />
  );
};

export default Labels;
