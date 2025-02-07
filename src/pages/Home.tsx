import Hero from "@/components/Home/Hero";
import Cartel from "@/components/UI/Cartel";
import Button from "@/components/UI/Button";
import './Home.css';


const Home = () => {
  const phrases = ["YOUR", "CAREER", "HAS A", "FUTURE"];

  const handleJoin = () => {
    console.log("Join");
  };

  return (
    <main id="home">
      <div className="hero">
        <Hero />
      </div>
      <div className="info-general info-home-general">
        <div className="cartel">
          <Cartel phrases={phrases} classTittle="home" />
        </div>
        <div className="info-section">
          <div>
            <p>Music creation? You're a pro.</p>
            <p>&nbsp;</p>
            <p>Band management? Emails, scheduling,</p>
            <p>countless hours dealing with spreadsheets?</p>
            <p>No thanks!</p>
            <p>&nbsp;</p>
            <p>Talk to your personal band manager they</p>
            <p>will sort it out. Your music career now</p>
            <p>has a place and an admin free future.</p>
          </div>
          <div className="button-section">
            <Button label="JOIN THE WAITING LIST" classTitle="button-t1" onClick={handleJoin} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
