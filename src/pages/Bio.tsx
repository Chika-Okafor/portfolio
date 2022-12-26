//COMPONENT IMPORTS
import AboutMe from "../components/about-me/AboutMe";
import PageCreator from "./PageCreator";

const Bio = () => {
  return (
    <PageCreator id="about" dataTestID="about" grandChildren={<AboutMe />} />
  );
};

export default Bio;
