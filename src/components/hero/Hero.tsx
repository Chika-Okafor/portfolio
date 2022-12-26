//DEPENDENCY IMPORTS
import React from "react";

//COMPONENT IMPORTS
import PageCreator from "../../pages/PageCreator";

//STYLE IMPORTS
import "./Hero.scss";

const Hero = () => {
  const heroChildren = (
    <React.Fragment>
      <div className="hero-text">
        FOR THE <br />
        LOVE OF <br />
        FRONTEND <br />
        DEVELOPMENT
      </div>
      <button data-testid="call-to-action" className="call-to-action">
        start here
      </button>
    </React.Fragment>
  );

  return <PageCreator id="hero" dataTestID="hero" children={heroChildren} />;
};

export default Hero;
