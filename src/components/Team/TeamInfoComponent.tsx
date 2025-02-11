import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  nunoInfo,
  alejoInfo,
  garryInfo,
  type TeamInfoType,
} from "./TeamInfoData";

import "./TeamInfoComponent.css";

const TeamInfoComponent = () => {
  const { memberId } = useParams();
  const [info, setInfo] = useState<TeamInfoType>();

  useEffect(() => {
    if (memberId == "nuno") {
      setInfo(nunoInfo);
    } else if (memberId == "alejo") {
      setInfo(alejoInfo);
    } else if (memberId == "garry") {
      setInfo(garryInfo);
    }
  }, [memberId]);

  return (
    <div className="team-info">
      <div className="team-info-img-section">
        <div className="team-info-img-section-img">
          <img src={info?.imgSrc} alt="" />
        </div>
        <div className="team-info-img-section-title">
          <p>{info?.name}</p>
          <p>{info?.title}</p>
        </div>
      </div>
      <div className="team-info-bio">
        {info?.bio.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
      <div className="team-info-why">
        <p>Why do I need Bandwaggon?</p>
        <p>"{info?.whyTitle}"</p>
        <p>{info?.whyText}</p>
      </div>
    </div>
  );
};

export default TeamInfoComponent;
