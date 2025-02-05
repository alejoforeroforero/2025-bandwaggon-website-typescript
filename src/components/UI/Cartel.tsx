import './Cartel.css'

type cartelType = {
  phrases: string[];
  classTittle: string;
};

const Cartel = ({ phrases, classTittle }: cartelType) => {
  return (
    <div id='cartel'>
      {phrases.map((phrase, index) => {
        return <h1 key={index} className={classTittle}>{phrase}</h1>;
      })}
    </div>
  );
};

export default Cartel;
