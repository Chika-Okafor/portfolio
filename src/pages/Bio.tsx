import AboutMe from "../components/about-me/AboutMe";
import PageCreator from "./page-creator/PageCreator";

const Bio = () => {
  return (
    <PageCreator id="about" dataTestID="about" grandChildren={<AboutMe />} />
  );
};

export default Bio;
