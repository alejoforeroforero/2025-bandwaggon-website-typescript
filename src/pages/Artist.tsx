import Content from "@/components/UI/Content";
import Button from "@/components/UI/Button";

import "./Artist.css";

const videoSrc =
  "https://res.cloudinary.com/dlmutdhbp/video/upload/v1738949089/bandwaggon-artists-video_udl4zn.mp4";

const cartelImgSrc =
  "https://res.cloudinary.com/dlmutdhbp/image/upload/v1741824679/bw-artists-block_a60khu.svg";

const titleImgSrc =
  "https://res.cloudinary.com/dlmutdhbp/image/upload/v1741824754/bw-artists-title_mzurro.svg";

const Artist = () => {
  const handleJoin = () => {
    console.log("Join");
  };

  return (
    <Content
      top={
        <div className="artist-title">
          <img src={titleImgSrc} alt="" />
        </div>
      }
      left={
        <div className="artist-left">
          <div className="artist-img">
            <img src={cartelImgSrc} alt="" />
          </div>
        </div>
      }
      right={
        <div className="artist-right">
          <div className="artist-info">
            <p>It shouldn't be this hard!</p>
            <p>We are personally invested in helping every talented</p>
            <p>artist wanting to become pro, with the time and the</p>
            <p>tools they need to succeed.</p>
            <video autoPlay loop muted playsInline src={videoSrc}>
              Your browser does not support the video tag.
            </video>
            <div className="artist-info-button">
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

export default Artist;
