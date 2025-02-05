import logoImg from "@/assets/logo-header.png";
import logoTypeImg from "@/assets/logo-type.png";

import './Hero.css'

const Hero = () => {
  return (
    <div id='hero'>
      <img src={logoImg} alt="logo" />
      <img src={logoTypeImg} alt="logo" />
    </div>
  );
};

export default Hero;
