//COMPONENT IMPORTS
import SkillsCatalogue from "../components/skills-catalogue/SkillsCatalogue";
import PageCreator from "./PageCreator";

const Skills = () => {
  return (
    <PageCreator
      id="work"
      dataTestID="work"
      grandChildren={<SkillsCatalogue />}
    />
  );
};

export default Skills;
