import Content from "@/components/UI/Content";
import Button from "@/components/UI/Button";
import { useParams } from "react-router-dom";
import TeamInfoComponent from "@/components/Team/TeamInfoComponent";

import "./Team.css";
import TeamLink from "@/components/Team/TeamLink";

const cartelImgSrc =
  "https://res.cloudinary.com/dlmutdhbp/image/upload/v1739146562/team-cartel_lnoe2y.png";

const titleImgSrc =
  "https://res.cloudinary.com/dlmutdhbp/image/upload/v1739146562/team-title_kudxu2.png";

const Team = () => {
  const { memberId } = useParams();

  const handleJoin = () => {
    console.log("Join");
  };

  return (
    <Content
      top={
        <div className="team-title">
          <img src={titleImgSrc} alt="" />
        </div>
      }
      left={
        <div className="team-left">
          <div className="team-img">
            <img src={cartelImgSrc} alt="" />
          </div>
        </div>
      }
      right={
        <div className="team-right">
          <div className="team-info">
            {memberId && <TeamInfoComponent />}
            {!memberId && (
              <>
                <p>We are a group of friends, musicians and tech geeks.</p>
                <p>
                  We welcome everyone with shared hopes, dreams and passion for
                  music.
                </p>
                <p>We are just the fire starters.</p>
                <TeamLink
                  name="Nuno Moura Santos"
                  title="Drummer / CEO"
                  link="nuno"
                  imgSrc="https://res.cloudinary.com/dlmutdhbp/image/upload/v1739147533/bw-team-nuno_pkx9b6.png"
                />
                <TeamLink
                  name="Alejandro Forero"
                  title="Keys / CTO"
                  link="alejo"
                  imgSrc="https://res.cloudinary.com/dlmutdhbp/image/upload/v1739147533/bw-team-alejandro_zuq8oz.png"
                />
                <TeamLink
                  name="Garry McLanachan"
                  title="Bass Guitar / CCO"
                  link="garry"
                  imgSrc="https://res.cloudinary.com/dlmutdhbp/image/upload/v1739147533/bw-team-garry_dwji3r.png"
                />
              </>
            )}

            <div className="team-info-button">
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

export default Team;
