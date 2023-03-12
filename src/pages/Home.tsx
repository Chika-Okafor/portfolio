import PageCreator from "./page-creator/PageCreator";
import Hero from "../components/hero/Hero";

import "./Home";

const Home = () => {
  const hero = (
    <section className="hero-section">
      <div className="hero-text">
        Well, aren't you just the luckiest?
        <br />
        Prepare to be dazzled by my mediocre front-end development skills and
        underwhelming design choices.
      </div>
      <button data-testid="call-to-action" className="call-to-action">
        start here
      </button>
    </section>
  );

  return <PageCreator id="hero" dataTestID="hero" grandChildren={<Hero />} />;
};

export default Home;
