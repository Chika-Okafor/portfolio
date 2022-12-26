import { SkillsList as Skills } from "../../utils/SkillsList";
import SkillItem from "./SkillItem";

import "./SkillsCatalogue.scss";

const SkillsCatalogue = () => {
  return (
    <div className="skills-catalogue-wrapper snap-parent">
      {Skills.map((topic, index) => {
        return (
          <SkillItem
            headerText={topic.headerText}
            bodyText={topic.bodyText}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default SkillsCatalogue;
