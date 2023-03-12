import PageCreator from "./page-creator/PageCreator";
import Hero from "../components/hero/Hero";

import "./Home";

const Home = () => {
  return <PageCreator id="hero" dataTestID="hero" grandChildren={<Hero />} />;
};

export default Home;
