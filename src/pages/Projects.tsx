//COMPONENT IMPORTS
import ProjectsCatalogue from "../components/projects-catalogue/ProjectsCatalogue";
import PageCreator from "./PageCreator";

const Projects = () => {
  return (
    <PageCreator
      id="portfolio"
      dataTestID="portfolio"
      grandChildren={<ProjectsCatalogue />}
    />
  );
};

export default Projects;
