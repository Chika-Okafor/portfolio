//DEPENDENCY IMPORTS
import React from "react";

//COMPONENT IMPORTS
import PageCreator from "./PageCreator";

const Home = () => {
  const hero = (
    <section className="hero-section">
      <div className="hero-text">
        FOR THE <br />
        LOVE OF <br />
        FRONTEND <br />
        DEVELOPMENT
      </div>
      <button data-testid="call-to-action" className="call-to-action">
        explore my work
      </button>
    </section>
  );

  return <PageCreator id="hero" dataTestID="hero" children={hero} />;
};

export default Home;
