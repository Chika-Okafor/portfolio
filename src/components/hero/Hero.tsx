import "./Hero.scss";

const Hero = () => {
  return (
    <div id="hero">
      <div className="hero-text">
        FOR THE <br />
        LOVE OF <br />
        ALL THINGS <br />
        FRONTEND <br />
        DEVELOPMENT
      </div>
      <button data-testid="call-to-action" className="call-to-action">
        explore my work
      </button>
    </div>
  );
};

export default Hero;
