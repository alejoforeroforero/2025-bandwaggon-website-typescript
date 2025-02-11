import "./Cartel.css";

type cartelType = {
  phrases: string[];
  className: string;
};

const Cartel = ({ phrases, className }: cartelType) => {
  return (
    <div className={className}>
      {phrases.map((phrase, index) => {
        return <h1 key={index}>{phrase}</h1>;
      })}
    </div>
  );
};

export default Cartel;
