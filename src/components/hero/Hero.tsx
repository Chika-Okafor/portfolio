import React from "react";
import PageCreator from "../../pages/page-creator/PageCreator";

import HeroText from "./HeroText";
import HeroButton from "./HeroButton";

import "./Hero.scss";

const Hero = (): JSX.Element => {
  const heroChildren: JSX.Element = (
    <section className="hero-section">
      <HeroText />
      <HeroButton />
    </section>
  );

  return <PageCreator id="hero" dataTestID="hero" children={heroChildren} />;
};

export default Hero;
