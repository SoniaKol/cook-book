import Search from "./Search";
import "../styles/hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <h1 className="hero-title">
        Cook with passion: the best recipes for every day!
      </h1>
      <Search />
    </div>
  );
};

export default Hero;
