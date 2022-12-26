//COMPONENT IMPORTS
import AboutMe from "../components/about-me/AboutMe";
import PageCreator from "./PageCreator";

const About = () => {
  return (
    <PageCreator id="about" dataTestID="about" grandChildren={<AboutMe />} />
  );
};

export default About;
