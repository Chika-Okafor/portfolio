import "./HeroText.scss";

const HeroText = (): JSX.Element => {
  return (
    <div className="hero-text">
      <span className="hero-text-primary">Well, hello there!</span>
      <span className="hero-text-secondary">Aren't you just the luckiest?</span>
      <span className="hero-text-secondary">
        Prepare to be dazzled
        <br />
        by my mediocre
        <br />
        development skills
        <br />
        and underwhelming
        <br />
        design choices.
      </span>
    </div>
  );
};

export default HeroText;
