import { Link } from "react-router-dom";
import './TeamLink.css'

type TeamLinkProps = {
  name: string;
  title: string;
  imgSrc: string;
  link: string;
};

const TeamLink = ({ name, title, imgSrc, link }: TeamLinkProps) => {
  return (
    <Link to={link} className="team-link">
      <div>
        {imgSrc ? (
          <figure>
            <img src={imgSrc} alt={`${name}'s profile picture`} />
          </figure>
        ) : (
          <div className="placeholder-image">No Image</div>
        )}
      </div>
      <figcaption>
        <p>{name}</p>
        <p>{title}</p>
      </figcaption>
    </Link>
  );
};

export default TeamLink;
