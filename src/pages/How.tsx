import Content from "@/components/UI/Content";
import Button from "@/components/UI/Button";

import "./How.css";

const videoSrc =
  "https://res.cloudinary.com/dlmutdhbp/video/upload/v1738949089/bandwaggon-how-it-works-video_wzkpx0.mp4";

const cartelImgSrc =
  "https://res.cloudinary.com/dlmutdhbp/image/upload/v1741824880/bw-how-it-works-block_jeaswy.svg";

const titleImgSrc =
  "https://res.cloudinary.com/dlmutdhbp/image/upload/v1741824880/bw-how-it-works-title_uek0wg.svg";

const How = () => {
  const handleJoin = () => {
    console.log("Join");
  };

  return (
    <Content
      top={
        <div className="how-title">
          <img src={titleImgSrc} alt="" />
        </div>
      }
      left={
        <div className="how-left">
          <div className="how-img">
            <img src={cartelImgSrc} alt="" />
          </div>
        </div>
      }
      right={
        <div className="how-right">
          <div className="how-info">
            <p>The music industry is overly complicated.</p>
            <p>We break it down for you:</p>
            <ul>
              <li>
                <span>1</span> - sign an or download the app
              </li>
              <li>
                <span>2</span> - ask for what you need
              </li>
              <li>
                <span>3</span> - done!
              </li>
            </ul>
            <video autoPlay loop muted playsInline src={videoSrc}>
              Your browser does not support the video tag.
            </video>
            <div className="how-info-button">
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

export default How;
