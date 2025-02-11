import Hero from "@/components/Home/Hero";
import Content from "@/components/UI/Content";
import Button from "@/components/UI/Button";
import "./Home.css";

const Home = () => {
  const cartelImgSrc =
    "https://res.cloudinary.com/dlmutdhbp/image/upload/v1739045946/home-cartel_hogyzd.png";

  const info = `Music creation? You're a pro.
  <br>
  <br>
Band management? Emails, scheduling,<br>
countless hours dealing with spreadsheets?<br>
No thanks!<br>
<br>
<br>
Talk to your personal band manager they<br>
will sort it out. Your music career now<br>
has a place and an admin-free future.`;

  const handleJoin = () => {
    console.log("Join");
  };

  return (
    <Content
      top={
        <div className="hero">
          <Hero />
        </div>
      }
      left={
        <div className="home-left">
          <div className="home-img">
            <img src={cartelImgSrc} alt="" />
          </div>
        </div>
      }
      right={
        <div className="home-right">
          <div className="home-p">
            {info.split("<br>").map((line, index) => (
              <div key={index}>
                <p>{line}</p>
                <br />
              </div>
            ))}
          </div>
          <div className="home-right-button">
            <Button
              label="JOIN THE WAITING LIST"
              classTitle="button-t1"
              onClick={handleJoin}
            />
          </div>
        </div>
      }
      isHome={true}
    />
  );
};

export default Home;
