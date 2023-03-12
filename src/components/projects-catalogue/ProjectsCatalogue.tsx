import { ProjectsList as Projects } from "../../api/ProjectsList";
import ProjectItem from "./ProjectItem";

import "./ProjectsCatalogue.scss";

const ProjectsCatalogue = () => {
  return (
    <div className="projects-catalogue-wrapper snap-parent">
      {Projects.map((topic, index) => {
        return (
          <ProjectItem
            headerText={topic.headerText}
            bodyText={topic.bodyText}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default ProjectsCatalogue;
